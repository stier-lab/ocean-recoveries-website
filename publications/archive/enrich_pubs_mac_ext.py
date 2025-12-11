#!/usr/bin/env python3
"""
Enrich Adrian's publication CSV with extended metadata + AI fields (Mac-tailored).

KEEPS your original columns (including the exact 'pdf link ' name) and DOES NOT overwrite
existing filled values unless flags are provided.

New fields added/finalized by this version:
  - journal, volume, issue, pages, publisher, abstract
  - keywords (from Crossref subjects and/or OpenAlex concepts; fallback to AI extraction)
  - issn, journal_abbrev
  - citation_count (OpenAlex cited_by_count; respects existing if present)
  - doi_url (https://doi.org/<doi>)
  - citation_apa (formatted from fields; deterministic, no AI)
  - study_type (AI classification: Review / Experiment / Meta-analysis / Modeling / Conceptual / Other)
  - sdg_tags (AI classification: SDG mappings like "SDG 14; SDG 13"; terse)
  - collaborators, lab_project, notes  (left empty unless you fill or pass flags to infer)

Usage (Mac):
  python3 -m venv .venv && source .venv/bin/activate
  pip install -r requirements.txt
  export OPENAI_API_KEY="sk-..."  # or use .env
  python enrich_pubs_mac_ext.py --in enriched_publications.csv --out pubs_enriched_out.csv --limit 80

Optional flags:
  --overwrite_summaries         # Regenerate plain_summary and why_it_matters even if present
  --overwrite_ai_tags           # Regenerate AI fields (study_type, sdg_tags, keywords if missing)
  --infer_collaborators         # Try to infer collaborators from author list (non-lab names)
"""
import os, sys, time, argparse, re
from typing import Optional, Dict, Any, List, Tuple
import pandas as pd
import requests
from tenacity import retry, wait_exponential, stop_after_attempt, retry_if_exception_type
from tqdm import tqdm

# Optional .env
try:
    from dotenv import load_dotenv
    load_dotenv()
except Exception:
    pass

# OpenAI client (optional; only used if key present)
try:
    from openai import OpenAI
    _HAS_OPENAI = True
except Exception:
    _HAS_OPENAI = False

OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

SESSION = requests.Session()
SESSION.headers.update({"User-Agent":"ORL-Pub-Enricher-EXT/1.2 (mailto:adrian@ucsb.edu)"})
TIMEOUT = 30

CROSSREF_WORKS = "https://api.crossref.org/works/"
OPENALEX_BASE  = "https://api.openalex.org/works/"  # works/doi:... or works?search=...

class TransientHTTPError(Exception): pass


def norm(s: object) -> str:
    """Return a trimmed string; gracefully handle None/NaN/float/etc."""
    try:
        if s is None:
            return ""
        # Handle NaN (float('nan') and numpy.nan)
        try:
            import math
            if isinstance(s, float) and math.isnan(s):
                return ""
        except Exception:
            pass
        return str(s).strip()
    except Exception:
        return ""

def strip_tags(text: str) -> str:
    return re.sub(r"<[^>]*>", "", text or "").strip()

@retry(wait=wait_exponential(multiplier=1, min=1, max=30),
       stop=stop_after_attempt(5),
       retry=retry_if_exception_type(TransientHTTPError))
def http_get_json(url: str, params: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
    r = SESSION.get(url, params=params, timeout=TIMEOUT)
    if r.status_code in (429,) or r.status_code >= 500:
        raise TransientHTTPError(f"Transient {r.status_code} for {url}")
    if r.status_code != 200:
        return {}
    try:
        return r.json()
    except Exception:
        return {}

# ----------- External metadata fetchers -----------
def fetch_crossref_by_doi(doi: str) -> Dict[str, Any]:
    if not norm(doi):
        return {}
    url = CROSSREF_WORKS + requests.utils.quote(doi, safe="")
    data = http_get_json(url)
    return data.get("message", {}) if isinstance(data, dict) else {}

def fetch_openalex_by_doi(doi: str) -> Dict[str, Any]:
    if not norm(doi):
        return {}
    url = OPENALEX_BASE + "doi:" + requests.utils.quote(doi, safe="")
    data = http_get_json(url)
    if isinstance(data, dict) and data.get("id"):
        return data
    return {}

def fetch_openalex_by_title(title: str) -> Dict[str, Any]:
    if not norm(title):
        return {}
    url = OPENALEX_BASE.rstrip("/")
    data = http_get_json(url, params={"search": title, "per_page": 1})
    if isinstance(data, dict):
        res = data.get("results", [])
        if res:
            return res[0]
    return {}

# ----------- Field mappers -----------
def crossref_fields(msg: Dict[str, Any]) -> Dict[str, Any]:
    title = ""
    if isinstance(msg.get("title"), list) and msg["title"]:
        title = msg["title"][0]

    journal = ""
    journal_abbrev = ""
    if isinstance(msg.get("container-title"), list) and msg["container-title"]:
        journal = msg["container-title"][0]
    if isinstance(msg.get("short-container-title"), list) and msg["short-container-title"]:
        journal_abbrev = msg["short-container-title"][0]

    authors = []
    for a in msg.get("author", []) or []:
        nm = " ".join([x for x in [a.get("given",""), a.get("family","")] if x])
        if nm:
            authors.append(nm)
    authors_str = "; ".join(authors)

    year = ""
    if msg.get("published-print", {}).get("date-parts"):
        year = msg["published-print"]["date-parts"][0][0]
    elif msg.get("issued", {}).get("date-parts"):
        year = msg["issued"]["date-parts"][0][0]

    issn = ""
    if isinstance(msg.get("ISSN"), list) and msg["ISSN"]:
        issn = msg["ISSN"][0]

    subjects = msg.get("subject", []) or []  # Crossref "subjects" often useful as keywords
    keywords_list = subjects if isinstance(subjects, list) else []

    return {
        "title": title,
        "journal": journal,
        "journal_abbrev": journal_abbrev,
        "volume": msg.get("volume","") or "",
        "issue": msg.get("issue","") or "",
        "pages": msg.get("page","") or "",
        "year": year,
        "publisher": msg.get("publisher","") or "",
        "url": msg.get("URL","") or "",
        "authors": authors_str,
        "abstract": strip_tags(msg.get("abstract","")),
        "doi": msg.get("DOI","") or "",
        "issn": issn,
        "keywords": "; ".join(keywords_list) if keywords_list else ""
    }

def openalex_fields(obj: Dict[str, Any]) -> Dict[str, Any]:
    host = obj.get("host_venue", {}) or {}
    biblio = obj.get("biblio", {}) or {}

    # Abstract reconstruction (inverted index)
    abstract = ""
    inv = obj.get("abstract_inverted_index")
    if isinstance(inv, dict) and inv:
        max_pos = max(p for pos in inv.values() for p in pos)
        arr = [""] * (max_pos + 1)
        for word, pos in inv.items():
            for p in pos:
                arr[p] = word
        abstract = " ".join(arr).strip()

    # Authors
    authors = []
    for a in obj.get("authorships", []) or []:
        nm = (a.get("author", {}) or {}).get("display_name", "")
        if nm: authors.append(nm)

    # Pages string
    pages = ""
    if biblio.get("first_page") or biblio.get("last_page"):
        fp = biblio.get("first_page") or ""
        lp = biblio.get("last_page") or ""
        pages = f"{fp}-{lp}".strip("-")

    # ISSN(s)
    issn = ""
    issn_list = host.get("issn", []) or []
    if isinstance(issn_list, list) and issn_list:
        issn = issn_list[0]

    # Concepts → keywords (top 6 by score)
    keywords = []
    for c in (obj.get("concepts") or [])[:6]:
        name = c.get("display_name")
        if name:
            keywords.append(name)

    # Citation count
    cited_by_count = obj.get("cited_by_count", None)

    return {
        "title": obj.get("title",""),
        "journal": host.get("display_name",""),
        "journal_abbrev": host.get("alternate_titles", [None])[0] if isinstance(host.get("alternate_titles"), list) else "",
        "volume": biblio.get("volume","") or "",
        "issue": biblio.get("issue","") or "",
        "pages": pages,
        "year": obj.get("publication_year","") or "",
        "publisher": host.get("publisher","") or "",
        "url": obj.get("primary_location", {}).get("landing_page_url","") or obj.get("id",""),
        "authors": "; ".join(authors),
        "abstract": abstract,
        "doi": obj.get("doi","") or "",
        "issn": issn,
        "keywords": "; ".join(keywords) if keywords else "",
        "citation_count": cited_by_count if cited_by_count is not None else ""
    }

def get_metadata(doi: str, title: str) -> Dict[str, Any]:
    if norm(doi):
        cr = fetch_crossref_by_doi(doi)
        if cr:
            fields = crossref_fields(cr)
            # Try OpenAlex to fill blanks and citation_count/keywords
            oa = fetch_openalex_by_doi(doi)
            if oa:
                f2 = openalex_fields(oa)
                for k, v in f2.items():
                    if not norm(fields.get(k, "")):
                        fields[k] = v
                # prefer OpenAlex abstract if Crossref missing
                if f2.get("abstract") and not norm(fields.get("abstract","")):
                    fields["abstract"] = f2["abstract"]
            return fields
    if norm(title):
        oa = fetch_openalex_by_title(title)
        if oa:
            return openalex_fields(oa)
    return {}

# ----------- Formatting helpers -----------
def parse_authors(authors_str: str) -> List[Tuple[str,str]]:
    # Authors stored as "Given Family; Given Family; ..."
    out = []
    for part in (authors_str or "").split(";"):
        nm = part.strip()
        if not nm:
            continue
        chunks = nm.split()
        if len(chunks) == 1:
            out.append(("", chunks[0]))
        else:
            given = " ".join(chunks[:-1])
            family = chunks[-1]
            out.append((given, family))
    return out

def format_author_apa(given: str, family: str) -> str:
    if not family:
        return given.strip()
    # Initials for given names
    initials = " ".join([f"{w[0]}." for w in given.split() if w])
    return f"{family}, {initials}".strip()

def format_citation_apa(authors_str: str, year: str, title: str,
                        journal: str, volume: str, issue: str, pages: str, doi_url: str) -> str:
    authors = parse_authors(authors_str)
    if authors:
        if len(authors) <= 20:
            auth_formatted = ", ".join([format_author_apa(g, f) for g, f in authors])
        else:
            # APA: first 19 + ... + last
            first19 = authors[:19]
            last = authors[-1]
            auth_formatted = ", ".join([format_author_apa(g,f) for g,f in first19]) + ", ... " + format_author_apa(last[0], last[1])
    else:
        auth_formatted = ""

    y = f"({year})." if year else "(n.d.)."
    t = f" {title.strip()}." if title else ""
    jv = ""
    if journal:
        jv += f" {journal}"
    if volume:
        jv += f", {volume}"
        if issue:
            jv += f"({issue})"
    if pages:
        jv += f", {pages}"
    if jv:
        jv += "."
    d = f" {doi_url}" if doi_url else ""
    return f"{auth_formatted} {y}{t}{jv}{d}".strip()

# ----------- AI helpers -----------
def ai_classify_study_and_sdg(title: str, abstract: str) -> Tuple[str, str]:
    if not _HAS_OPENAI or not OPENAI_API_KEY:
        return "", ""
    client = OpenAI(api_key=OPENAI_API_KEY)
    system = (
        "You classify research papers USING ONLY the provided title+abstract. "
        "Return two concise tags:\n"
        "1) study_type from {Review, Experiment, Meta-analysis, Modeling, Conceptual, Other}\n"
        "2) sdg_tags as terse codes like 'SDG 14; SDG 13' (if none, return empty)."
    )
    user = f"Title: {title or '[untitled]'}\n\nAbstract:\n{abstract or '[none]'}\n\nReturn just two lines:\nstudy_type: <one>\nsdg_tags: <codes or empty>"
    out = ""
    for attempt in range(5):
        try:
            resp = client.chat.completions.create(
                model=OPENAI_MODEL,
                messages=[{"role":"system","content":system},
                          {"role":"user","content":user}],
                temperature=0.0,
                max_tokens=120
            )
            out = resp.choices[0].message.content.strip()
            break
        except Exception:
            time.sleep(min(2**attempt, 30))
    study_type, sdg_tags = "", ""
    for line in out.splitlines():
        if line.lower().startswith("study_type:"):
            study_type = line.split(":",1)[1].strip()
        elif line.lower().startswith("sdg_tags:"):
            sdg_tags = line.split(":",1)[1].strip()
    return study_type, sdg_tags

def ai_keywords_fallback(title: str, abstract: str) -> str:
    if not _HAS_OPENAI or not OPENAI_API_KEY:
        return ""
    client = OpenAI(api_key=OPENAI_API_KEY)
    system = (
        "Extract 5–8 concise, lowercased keyword phrases from ONLY the given title+abstract. "
        "Return a single semicolon-separated string."
    )
    user = f"Title: {title}\n\nAbstract:\n{abstract}\n\nKeywords:"
    out = ""
    for attempt in range(5):
        try:
            resp = client.chat.completions.create(
                model=OPENAI_MODEL,
                messages=[{"role":"system","content":system},
                          {"role":"user","content":user}],
                temperature=0.2,
                max_tokens=80
            )
            out = resp.choices[0].message.content.strip()
            break
        except Exception:
            time.sleep(min(2**attempt, 30))
    return out

def gen_summaries(title: str, abstract: str, overwrite: bool,
                  existing_plain: str, existing_wim: str) -> Tuple[str, str]:
    """Return (plain_summary, why_it_matters)"""
    plain, wim = existing_plain, existing_wim
    need_plain = overwrite or not norm(existing_plain)
    need_wim   = overwrite or not norm(existing_wim)
    if not (need_plain or need_wim):
        return plain, wim

    if not _HAS_OPENAI or not OPENAI_API_KEY:
        return plain or "", wim or ""

    client = OpenAI(api_key=OPENAI_API_KEY)
    system = (
        "You create plain-language outputs for scientific papers. "
        "Use ONLY the provided title and abstract; no external facts. "
        "1) 2–3 short sentences at ~Grade 7. "
        "2) On a new line, 'Why it matters: <clause>'."
    )
    user = f"Title: {title or '[untitled]'}\n\nAbstract:\n{abstract or '[none]'}\n\nWrite outputs."
    out = ""
    for attempt in range(5):
        try:
            resp = client.chat.completions.create(
                model=OPENAI_MODEL,
                messages=[{"role":"system","content":system},
                          {"role":"user","content":user}],
                temperature=0.2,
                max_tokens=240
            )
            out = resp.choices[0].message.content.strip()
            break
        except Exception:
            time.sleep(min(2**attempt, 30))

    if out:
        parts = [p.strip() for p in out.split("\n") if p.strip()]
        joined = " ".join(parts)
        wim_idx = joined.lower().find("why it matters:")
        if wim_idx != -1:
            plain_text = joined[:wim_idx].strip()
            wim_text   = joined[wim_idx:].strip()
        else:
            plain_text = joined
            wim_text = ""
        if need_plain: plain = plain_text
        if need_wim:   wim = wim_text
    return plain or "", wim or ""

# ----------- Main processing -----------
def main():
    ap = argparse.ArgumentParser(description="Extended enrichment for Adrian's publication CSV.")
    ap.add_argument("--in", dest="inp", required=True, help="Input CSV/XLSX path")
    ap.add_argument("--out", dest="out", required=True, help="Output CSV/XLSX path")
    ap.add_argument("--limit", type=int, default=None, help="Process first N rows")
    ap.add_argument("--overwrite_summaries", action="store_true", help="Regenerate plain_summary & why_it_matters")
    ap.add_argument("--overwrite_ai_tags", action="store_true", help="Regenerate AI tags (study_type, sdg_tags, keywords if empty)")
    ap.add_argument("--infer_collaborators", action="store_true", help="Infer collaborators from author list (non-lab names)")
    args = ap.parse_args()

    # Read
    if args.inp.lower().endswith(".csv"):
        df = pd.read_csv(args.inp)
    else:
        df = pd.read_excel(args.inp)

    # Ensure expected original columns exist (keep exact names)
    expected = [
        "title","authors","year","doi","pdf link ","plain_summary","why_it_matters",
        "theme_tags","audience_level","featured","open_access","data_code_links",
        "policy_relevance","press_links","image_url","alt_text","impact_tags",
        "citation_count","funders","region_system","methods_tags","source_url"
    ]
    for c in expected:
        if c not in df.columns:
            df[c] = ""

    # Add new metadata columns if missing
    new_cols = [
        "journal","journal_abbrev","volume","issue","pages","publisher","abstract",
        "keywords","issn","doi_url","citation_apa","study_type","sdg_tags",
        "collaborators","lab_project","notes"
    ]
    for c in new_cols:
        if c not in df.columns:
            df[c] = ""

    rows = df.index.tolist()
    if args.limit is not None:
        rows = rows[:args.limit]

    for idx in tqdm(rows, desc="Enriching pubs (extended)"):
        row = df.loc[idx]

        # Preserve original DOI and 'pdf link ' values (we won't overwrite if present)
        doi = str(row.get("doi","") or "").strip()
        title = str(row.get("title","") or "").strip()
        abstract_existing = str(row.get("abstract","") or "").strip()

        # Determine if we need external metadata
        need_meta = any([not norm(row.get(c,"")) for c in
                        ["journal","volume","issue","pages","publisher","abstract","source_url","keywords","issn","journal_abbrev","citation_count"]])

        meta = {}
        if need_meta:
            meta = get_metadata(doi, title)

        # Fill fields if empty (do not overwrite filled cells)
        for k in ["journal","journal_abbrev","volume","issue","pages","publisher","abstract",
                  "title","doi","keywords","issn"]:
            if k in meta and not norm(row.get(k,"")):
                df.at[idx, k] = meta[k]

        # citation_count: respect existing numeric value; else fill from meta if available
        if not str(row.get("citation_count","") or "").strip():
            if "citation_count" in meta and meta["citation_count"] != "":
                df.at[idx, "citation_count"] = meta["citation_count"]

        # source_url
        if not norm(row.get("source_url","")) and norm(meta.get("url","")):
            df.at[idx, "source_url"] = meta["url"]

        # DOI URL (deterministic)
        doi_now = str(df.at[idx, "doi"]).strip() if "doi" in df.columns else doi
        if doi_now and not norm(row.get("doi_url","")):
            df.at[idx, "doi_url"] = f"https://doi.org/{doi_now}"

        # Citation APA (deterministic)
        if not norm(row.get("citation_apa","")):
            apa = format_citation_apa(
                authors_str=str(df.at[idx, "authors"]),
                year=str(df.at[idx, "year"]),
                title=str(df.at[idx, "title"]),
                journal=str(df.at[idx, "journal"]),
                volume=str(df.at[idx, "volume"]),
                issue=str(df.at[idx, "issue"]),
                pages=str(df.at[idx, "pages"]),
                doi_url=str(df.at[idx, "doi_url"]),
            )
            df.at[idx, "citation_apa"] = apa

        # AI summaries (optional overwrite)
        plain_existing = str(row.get("plain_summary","") or "").strip()
        wim_existing   = str(row.get("why_it_matters","") or "").strip()
        plain, wim = gen_summaries(
            title=str(df.at[idx, "title"]),
            abstract=str(df.at[idx, "abstract"]),
            overwrite=args.overwrite_summaries,
            existing_plain=plain_existing,
            existing_wim=wim_existing
        )
        if (args.overwrite_summaries or not plain_existing) and plain:
            df.at[idx, "plain_summary"] = plain
        if (args.overwrite_summaries or not wim_existing) and wim:
            df.at[idx, "why_it_matters"] = wim

        # AI study_type + sdg_tags
        if args.overwrite_ai_tags or (not norm(row.get("study_type","")) or not norm(row.get("sdg_tags",""))):
            st, sdg = ai_classify_study_and_sdg(
                title=str(df.at[idx, "title"]),
                abstract=str(df.at[idx, "abstract"]),
            )
            if not norm(row.get("study_type","")) and st:
                df.at[idx, "study_type"] = st
            if not norm(row.get("sdg_tags","")) and sdg:
                df.at[idx, "sdg_tags"] = sdg

        # Keywords fallback via AI if still missing
        if (args.overwrite_ai_tags or not norm(row.get("keywords",""))) and not norm(df.at[idx, "keywords"]):
            kw = ai_keywords_fallback(
                title=str(df.at[idx, "title"]),
                abstract=str(df.at[idx, "abstract"]),
            )
            if kw:
                df.at[idx, "keywords"] = kw

        # Optionally infer collaborators (very light heuristic)
        if args.infer_collaborators and not norm(row.get("collaborators","")):
            # If authors exist and your name detected, list other authors as collaborators
            authors_str = str(df.at[idx, "authors"])
            if authors_str:
                parts = [a.strip() for a in authors_str.split(";") if a.strip()]
                labs = {"Adrian Stier","A. C. Stier","Adrian C. Stier","Stier, A.", "Stier, A. C."}
                others = [p for p in parts if not any(lbl.lower() in p.lower() for lbl in [n.lower() for n in labs])]
                if others:
                    df.at[idx, "collaborators"] = "; ".join(others)

        time.sleep(0.35)  # polite pacing

    # Write out
    if args.out.lower().endswith(".csv"):
        df.to_csv(args.out, index=False)
    else:
        df.to_excel(args.out, index=False)

    print(f"[OK] Wrote → {args.out}")

if __name__ == "__main__":
    main()