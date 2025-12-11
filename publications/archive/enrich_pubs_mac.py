#!/usr/bin/env python3
"""
Mac-tailored publication enricher for Adrian's sheet format.

INPUT COLUMNS detected:
  - title, authors, year, doi, pdf link , plain_summary, why_it_matters,
    theme_tags, audience_level, featured, open_access, data_code_links,
    policy_relevance, press_links, image_url, alt_text, impact_tags,
    citation_count, funders, region_system, methods_tags, source_url

WHAT THIS SCRIPT DOES
  1) Normalizes the odd column name 'pdf link ' → writes to it, but also supports 'pdf link' if present.
  2) Fills missing metadata from Crossref (and OpenAlex fallback):
       journal, volume, issue, pages, publisher, abstract
     (These are added as new columns if not present.)
  3) Writes Crossref URL/OpenAlex landing page into 'source_url' if blank.
  4) Generates:
       - plain_summary (2–3 sentences, Grade~7)   → filled/overwritten only if empty
       - why_it_matters (1 short line)            → filled/overwritten only if empty
  5) Leaves existing filled fields untouched (unless you pass --overwrite_summaries).

USAGE (Mac):
  python3 -m venv .venv && source .venv/bin/activate
  pip install -r requirements.txt
  export OPENAI_API_KEY="sk-..."   # or place in .env
  python enrich_pubs_mac.py --in enriched_publications.csv --out pubs_enriched_out.csv

  # optional flags
  --limit 80
  --overwrite_summaries   # forces regeneration of plain_summary and why_it_matters

NOTES:
  - DOIs give best results. If DOI is missing, we try OpenAlex by title.
  - We back off politely; 80 rows is fine.
"""
import os
import sys
import json
import time
import argparse
from typing import Optional, Dict, Any, List

import pandas as pd
import requests
from tenacity import retry, wait_exponential, stop_after_attempt, retry_if_exception_type
from tqdm import tqdm

try:
    from dotenv import load_dotenv
    load_dotenv()
except Exception:
    pass

try:
    from openai import OpenAI
    _HAS_OPENAI = True
except Exception:
    _HAS_OPENAI = False

OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

CROSSREF_WORKS = "https://api.crossref.org/works/"
OPENALEX_BASE = "https://api.openalex.org/works/"
SESSION = requests.Session()
SESSION.headers.update({"User-Agent": "Adrian-ORL-Pub-Enricher/1.1 (mailto:adrian@ucsb.edu)"})
TIMEOUT = 30

class TransientHTTPError(Exception):
    pass

def norm(s: str) -> str:
    return (s or "").strip().lower()

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

def strip_tags(text: str) -> str:
    import re
    return re.sub(r"<[^>]*>", "", text or "").strip()

def fetch_crossref_by_doi(doi: str) -> Dict[str, Any]:
    if not doi:
        return {}
    url = CROSSREF_WORKS + requests.utils.quote(doi, safe="")
    data = http_get_json(url)
    return data.get("message", {}) if isinstance(data, dict) else {}

def fetch_openalex_by_doi(doi: str) -> Dict[str, Any]:
    if not doi:
        return {}
    url = OPENALEX_BASE + "doi:" + requests.utils.quote(doi, safe="")
    data = http_get_json(url)
    if isinstance(data, dict) and data.get("id"):
        return data
    return {}

def fetch_openalex_by_title(title: str) -> Dict[str, Any]:
    if not title:
        return {}
    url = OPENALEX_BASE.rstrip("/")
    data = http_get_json(url, params={"search": title, "per_page": 1})
    if isinstance(data, dict):
        res = data.get("results", [])
        if res:
            return res[0]
    return {}

def crossref_fields(msg: Dict[str, Any]) -> Dict[str, Any]:
    title = ""
    if isinstance(msg.get("title"), list) and msg["title"]:
        title = msg["title"][0]

    journal = ""
    if isinstance(msg.get("container-title"), list) and msg["container-title"]:
        journal = msg["container-title"][0]

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

    return {
        "title": title,
        "journal": journal,
        "volume": msg.get("volume", "") or "",
        "issue": msg.get("issue", "") or "",
        "pages": msg.get("page", "") or "",
        "year": year,
        "publisher": msg.get("publisher","") or "",
        "url": msg.get("URL","") or "",
        "authors": authors_str,
        "abstract": strip_tags(msg.get("abstract","")),
        "doi": msg.get("DOI","") or ""
    }

def openalex_fields(obj: Dict[str, Any]) -> Dict[str, Any]:
    host = obj.get("host_venue", {}) or {}
    biblio = obj.get("biblio", {}) or {}
    # reconstruct abstract if inverted index present
    abstract = ""
    inv = obj.get("abstract_inverted_index")
    if isinstance(inv, dict) and inv:
        max_pos = max(p for pos in inv.values() for p in pos)
        arr = [""] * (max_pos + 1)
        for word, pos in inv.items():
            for p in pos:
                arr[p] = word
        abstract = " ".join(arr).strip()

    authors = []
    for a in obj.get("authorships", []) or []:
        nm = (a.get("author", {}) or {}).get("display_name", "")
        if nm: authors.append(nm)

    pages = ""
    if biblio.get("first_page") or biblio.get("last_page"):
        fp = biblio.get("first_page") or ""
        lp = biblio.get("last_page") or ""
        pages = f"{fp}-{lp}".strip("-")

    return {
        "title": obj.get("title",""),
        "journal": host.get("display_name",""),
        "volume": biblio.get("volume","") or "",
        "issue": biblio.get("issue","") or "",
        "pages": pages,
        "year": obj.get("publication_year","") or "",
        "publisher": host.get("publisher","") or "",
        "url": obj.get("primary_location", {}).get("landing_page_url","") or obj.get("id",""),
        "authors": "; ".join(authors),
        "abstract": abstract,
        "doi": obj.get("doi","") or ""
    }

def get_metadata(doi: str, title: str) -> Dict[str, Any]:
    if doi:
        cr = fetch_crossref_by_doi(doi)
        if cr:
            fields = crossref_fields(cr)
            if not fields.get("abstract"):
                oa = fetch_openalex_by_doi(doi)
                if oa:
                    f2 = openalex_fields(oa)
                    for k, v in f2.items():
                        if not fields.get(k):
                            fields[k] = v
                    if f2.get("abstract"):
                        fields["abstract"] = f2["abstract"]
            return fields
    if title:
        oa = fetch_openalex_by_title(title)
        if oa:
            return openalex_fields(oa)
    return {}

def gen_summaries(title: str, abstract: str, overwrite: bool,
                  existing_plain: str, existing_wim: str) -> (str, str):
    """Return (plain_summary, why_it_matters)."""
    plain, wim = existing_plain, existing_wim
    need_plain = overwrite or not norm(existing_plain)
    need_wim = overwrite or not norm(existing_wim)

    if not (need_plain or need_wim):
        return plain, wim

    if not _HAS_OPENAI or not OPENAI_API_KEY:
        return plain or "", wim or ""

    client = OpenAI(api_key=OPENAI_API_KEY)
    system = (
        "You create plain-language outputs for scientific papers. "
        "Use ONLY the provided title and abstract; do not add external facts. "
        "Keep content accurate and non-jargony."
    )
    user = (
        f"Title: {title or '[untitled]'}\n\n"
        f"Abstract:\n{abstract or '[none]'}\n\n"
        "1) Write a 2–3 sentence lay summary at about Grade 7 reading level.\n"
        "2) On a new line, write: Why it matters: <a single concise clause>."
    )
    # modest retries
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
        # split into summary + why it matters
        parts = out.split("\n")
        joined = " ".join(p.strip() for p in parts if p.strip())
        # try to carve 'Why it matters:'
        wim_idx = joined.lower().find("why it matters:")
        if wim_idx != -1:
            plain_text = joined[:wim_idx].strip()
            wim_text = joined[wim_idx:].strip()
        else:
            plain_text = joined
            wim_text = ""

        if need_plain:
            plain = plain_text
        if need_wim:
            wim = wim_text
    return plain or "", wim or ""

def main():
    ap = argparse.ArgumentParser(description="Enrich Adrian's publication CSV with metadata + lay summaries.")
    ap.add_argument("--in", dest="inp", required=True, help="Input CSV/XLSX path")
    ap.add_argument("--out", dest="out", required=True, help="Output CSV/XLSX path")
    ap.add_argument("--limit", type=int, default=None, help="Process only first N rows")
    ap.add_argument("--overwrite_summaries", action="store_true", help="Regenerate plain_summary & why_it_matters")
    args = ap.parse_args()

    # Read
    if args.inp.lower().endswith(".csv"):
        df = pd.read_csv(args.inp)
    else:
        df = pd.read_excel(args.inp)

    # Ensure expected columns exist
    expected = [
        "title","authors","year","doi","pdf link ","plain_summary","why_it_matters",
        "theme_tags","audience_level","featured","open_access","data_code_links",
        "policy_relevance","press_links","image_url","alt_text","impact_tags",
        "citation_count","funders","region_system","methods_tags","source_url"
    ]
    for c in expected:
        if c not in df.columns:
            df[c] = ""

    # Add our new metadata columns if missing
    for c in ["journal","volume","issue","pages","publisher","abstract"]:
        if c not in df.columns:
            df[c] = ""

    rows = df.index.tolist()
    if args.limit is not None:
        rows = rows[:args.limit]

    for idx in tqdm(rows, desc="Enriching pubs"):
        row = df.loc[idx]

        title = str(row.get("title","") or "").strip()
        doi = str(row.get("doi","") or "").strip()
        abstract_existing = str(row.get("abstract","") or "").strip()

        # If core metadata missing OR abstract empty → fetch
        need_meta = any([not str(row.get(c,"") or "").strip() for c in
                         ["journal","volume","issue","pages","publisher","abstract","source_url"]])
        meta = {}
        if need_meta:
            meta = get_metadata(doi, title)

        # Fill metadata
        for k in ["journal","volume","issue","pages","publisher","abstract","title","doi"]:
            if k in meta and not str(row.get(k,"") or "").strip():
                df.at[idx, k] = meta[k]

        # source_url: prefer existing, else Crossref/OpenAlex url
        if not str(row.get("source_url","") or "").strip():
            src = meta.get("url","")
            if src:
                df.at[idx, "source_url"] = src

        # pdf link  (keep exact name with trailing space)
        if "pdf link " in df.columns and not str(row.get("pdf link ","") or "").strip():
            # try to guess a PDF from Crossref link (we don't hit publisher PDFs directly)
            # leave empty; you can populate manually or add Unpaywall later
            pass

        # Summaries
        abstract_now = str(df.at[idx, "abstract"]).strip()
        plain_existing = str(row.get("plain_summary","") or "").strip()
        wim_existing = str(row.get("why_it_matters","") or "").strip()

        plain, wim = gen_summaries(title, abstract_now, args.overwrite_summaries, plain_existing, wim_existing)
        if (args.overwrite_summaries or not plain_existing) and plain:
            df.at[idx, "plain_summary"] = plain
        if (args.overwrite_summaries or not wim_existing) and wim:
            df.at[idx, "why_it_matters"] = wim

        time.sleep(0.4)

    # Write
    if args.out.lower().endswith(".csv"):
        df.to_csv(args.out, index=False)
    else:
        df.to_excel(args.out, index=False)

    print(f"[OK] Wrote → {args.out}")

if __name__ == "__main__":
    main()