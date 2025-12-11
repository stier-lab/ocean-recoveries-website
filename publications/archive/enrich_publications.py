#!/usr/bin/env python3
"""
Enrich a publications CSV (e.g., Zotero export) with web-verified fields,
avoiding hallucinations by leaving blanks when data cannot be confirmed.

Data sources (all free):
- Crossref: core metadata, funders, publisher, type
- Unpaywall: open access status + OA URL  (requires a contact email)
- OpenAlex: citation counts, topics, related concepts
- (Optional) Page scrape: attempt to find a representative image via <meta property="og:image">

Outputs:
- enriched_publications.json
- enriched_publications.csv

Usage:
    python enrich_publications.py --in "/path/Exported Items.csv" --email you@your.org --out out.csv --json out.json

Notes:
- This script never guesses; it leaves fields blank when not verifiable.
- Rate-limited and polite by default (sleep between calls). Use --fast to reduce delays.
"""

import argparse
import json
import re
import sys
import time
from dataclasses import dataclass, asdict, field
from typing import Dict, List, Optional, Tuple

import pandas as pd
import requests
from bs4 import BeautifulSoup
from urllib.parse import quote, urlparse

CR_BASE = "https://api.crossref.org/works/"
UA_BASE = "https://api.unpaywall.org/v2/"
OA_BASE = "https://api.openalex.org/works/"

# --------------------------
# Helpers
# --------------------------

def clean_doi(doi: str) -> Optional[str]:
    if not isinstance(doi, str) or not doi.strip():
        return None
    doi = doi.strip()
    doi = doi.replace("https://doi.org/", "").replace("http://doi.org/", "")
    doi = doi.replace("doi:", "").strip()
    return doi if ("/" in doi) else None

def safe_get(url: str, params: dict = None, headers: dict = None, timeout: int = 25) -> Optional[requests.Response]:
    try:
        r = requests.get(url, params=params, headers=headers, timeout=timeout)
        if r.status_code == 200:
            return r
        return None
    except Exception:
        return None

def crossref_lookup(doi: str) -> dict:
    if not doi:
        return {}
    r = safe_get(CR_BASE + quote(doi))
    if not r:
        return {}
    try:
        data = r.json().get("message", {})
        return data if isinstance(data, dict) else {}
    except Exception:
        return {}

def unpaywall_lookup(doi: str, email: str) -> dict:
    if not (doi and email):
        return {}
    r = safe_get(f"{UA_BASE}{quote(doi)}", params={"email": email})
    if not r:
        return {}
    try:
        data = r.json()
        return data if isinstance(data, dict) else {}
    except Exception:
        return {}

def openalex_lookup(doi: str) -> dict:
    if not doi:
        return {}
    r = safe_get(OA_BASE + f"doi:{quote(doi)}")
    if not r:
        return {}
    try:
        data = r.json()
        return data if isinstance(data, dict) else {}
    except Exception:
        return {}

def try_og_image(url: str) -> Tuple[Optional[str], Optional[str]]:
    """Attempt to fetch a representative image (og:image) + og:title as alt text."""
    if not url or not isinstance(url, str):
        return (None, None)
    parsed = urlparse(url)
    if parsed.path.lower().endswith(".pdf"):
        return (None, None)
    r = safe_get(url, headers={"User-Agent": "Mozilla/5.0 (compatible; ORL-Bot/1.0)"})
    if not r:
        return (None, None)
    try:
        soup = BeautifulSoup(r.text, "html.parser")
        og_img = soup.find("meta", property="og:image")
        og_title = soup.find("meta", property="og:title")
        img_url = og_img.get("content").strip() if og_img and og_img.get("content") else None
        alt_text = og_title.get("content").strip() if og_title and og_title.get("content") else None
        return (img_url, alt_text)
    except Exception:
        return (None, None)

def first_nonempty(*vals):
    for v in vals:
        if isinstance(v, str) and v.strip():
            return v.strip()
    return None

# --------------------------
# Dataclass for output rows
# --------------------------

@dataclass
class EnrichedRow:
    title: str = ""
    authors: str = ""
    year: str = ""
    doi: str = ""

    # Engagement
    plain_summary: str = ""
    why_it_matters: str = ""
    theme_tags: List[str] = field(default_factory=list)
    audience_level: str = ""  # one of [Research, Practitioner, Policy, Public]

    # Interaction/Highlight
    featured: Optional[bool] = None
    open_access: Optional[bool] = None
    data_code_links: List[str] = field(default_factory=list)
    policy_relevance: Optional[bool] = None
    press_links: List[str] = field(default_factory=list)

    # Visual/Design
    image_url: str = ""
    alt_text: str = ""
    impact_tags: List[str] = field(default_factory=list)

    # Optional Extras
    citation_count: Optional[int] = None
    funders: List[str] = field(default_factory=list)
    region_system: str = ""
    methods_tags: List[str] = field(default_factory=list)

    # Provenance
    source_url: str = ""  # best landing page from Crossref/Unpaywall

# --------------------------
# Summary + tagging stubs (no hallucinations)
# --------------------------

def generate_plain_summary(title: str, cr: dict) -> str:
    """
    Conservative auto-summary based on Crossref abstract (if present).
    If Crossref abstract is absent, return empty string (no guessing).
    """
    abstract = cr.get("abstract")
    if isinstance(abstract, str) and abstract.strip():
        txt = re.sub("<[^<]+?>", " ", abstract)
        txt = re.sub(r"\s+", " ", txt).strip()
        sentences = re.split(r"(?<=[.!?])\s+", txt)
        return " ".join(sentences[:3]).strip()
    return ""

def infer_theme_tags(title: str, container_title: str) -> List[str]:
    s = f"{title} {container_title}".lower()
    tags: List[str] = []
    if any(k in s for k in ["coral", "acropora", "pocillopora", "reef"]):
        tags.append("Coral")
    if "kelp" in s or "macroalgae" in s:
        tags.append("Kelp")
    if any(k in s for k in ["mutualis", "symbio", "facilitation"]):
        tags.append("Mutualisms")
    if any(k in s for k in ["model", "bayesian", "surplus production", "statistical", "meta-analys"]):
        tags.append("Methods/Models")
    if any(k in s for k in ["management", "policy", "restoration", "fishery", "ecosystem-based"]):
        tags.append("Policy/Management")
    return list(dict.fromkeys(tags))

def infer_audience_level(container_title: str) -> str:
    c = (container_title or "").lower()
    if any(k in c for k in ["ecology letters", "coral reefs", "marine ecology", "journal", "proceedings"]):
        return "Research"
    if any(k in c for k in ["current biology", "nature", "science"]):
        return "Policy"
    return ""

def infer_policy_relevance(title: str) -> Optional[bool]:
    t = (title or "").lower()
    return True if any(k in t for k in ["management", "policy", "harvest control", "restoration"]) else None

def extract_funders_from_crossref(cr: dict) -> List[str]:
    funders: List[str] = []
    for f in cr.get("funder", []) or []:
        name = f.get("name")
        if name:
            funders.append(name.strip())
    return list(dict.fromkeys(funders))

def extract_methods_tags(title: str, cr: dict) -> List[str]:
    s = f"{title} {json.dumps(cr)}".lower()
    tags: List[str] = []
    for key, tag in [
        ("photogrammetry", "photogrammetry"),
        ("bayesian", "Bayesian models"),
        ("permanova", "PERMANOVA"),
        ("pcoa", "PCoA"),
        ("pca", "PCA"),
        ("meta-analy", "Meta-analysis"),
        ("field experiment", "Field experiment"),
        ("mesocosm", "Mesocosm"),
        ("machine learning", "Machine learning"),
    ]:
        if key in s:
            tags.append(tag)
    return list(dict.fromkeys(tags))

def extract_region_system(cr: dict) -> str:
    suspects: List[str] = []
    for k in ["subject", "subtitle", "container-title", "short-container-title"]:
        v = cr.get(k)
        if isinstance(v, list):
            suspects.extend([str(x) for x in v])
        elif isinstance(v, str):
            suspects.append(v)
    s = " ".join(suspects).lower()
    for cand in ["mo'orea", "moorea", "california", "dominican republic", "caribbean", "pacific", "polynesia"]:
        if cand in s:
            return cand.title()
    return ""

# --------------------------
# Main enrichment per row
# --------------------------

def enrich_row(row: dict, args) -> EnrichedRow:
    title = first_nonempty(row.get("Title"), row.get("title")) or ""
    authors = first_nonempty(row.get("Author"), row.get("Authors"), row.get("creators")) or ""
    year = first_nonempty(str(row.get("Year") or ""), str(row.get("Publication Year") or ""), str(row.get("Date") or "")) or ""
    doi = clean_doi(first_nonempty(row.get("DOI"), row.get("Url DOI"), row.get("doi"), row.get("Identifier DOI")) or "")

    cr = crossref_lookup(doi) if doi else {}
    time.sleep(0.6 if not args.fast else 0.1)

    ua = unpaywall_lookup(doi, args.email) if (doi and args.email) else {}
    time.sleep(0.6 if not args.fast else 0.1)

    oa = openalex_lookup(doi) if doi else {}
    time.sleep(0.6 if not args.fast else 0.1)

    # Container (journal) title
    container = ""
    if cr:
        ct = cr.get("container-title")
        if isinstance(ct, list) and ct:
            container = ct[0]
        elif isinstance(ct, str):
            container = ct

    # Open access + best source URL
    open_access = None
    source_url = ""
    if ua:
        open_access = bool(ua.get("is_oa"))
        best_oa = ua.get("best_oa_location") or {}
        if best_oa.get("url"):
            source_url = best_oa.get("url") or ""
        elif ua.get("oa_locations"):
            locs = ua.get("oa_locations") or []
            if locs and isinstance(locs, list) and isinstance(locs[0], dict):
                source_url = locs[0].get("url") or ""
    if not source_url and cr:
        # sometimes Crossref has links
        link_obj = (cr.get("link") or [{}])[0] if cr.get("link") else {}
        source_url = link_obj.get("URL") or cr.get("URL") or ""

    # Citation count
    citation_count = None
    if oa and isinstance(oa.get("cited_by_count"), int):
        citation_count = oa["cited_by_count"]

    # Funders
    funders = extract_funders_from_crossref(cr) if cr else []

    # Conservatively try og:image
    image_url, alt_text = ("", "")
    page_to_scrape = source_url or (cr.get("URL") if cr else "")
    if page_to_scrape:
        img, alt = try_og_image(page_to_scrape)
        image_url = img or ""
        alt_text = alt or ""

    # Tags + fields (heuristics, non-fabricated)
    theme_tags = infer_theme_tags(title, container)
    audience_level = infer_audience_level(container)
    policy_relevance = infer_policy_relevance(title)
    methods_tags = extract_methods_tags(title, cr) if cr else []
    region_system = extract_region_system(cr) if cr else ""

    # Data/code links from Crossref "link" (best-effort)
    data_code_links: List[str] = []
    for l in (cr.get("link") or []) if cr else []:
        if not isinstance(l, dict):
            continue
        u = l.get("URL")
        if isinstance(u, str) and any(dom in u for dom in ["zenodo.org", "github.com", "osf.io", "datadryad.org", "figshare.com"]):
            data_code_links.append(u)
    data_code_links = list(dict.fromkeys(data_code_links))

    enriched = EnrichedRow(
        title=title,
        authors=authors,
        year=year,
        doi=doi or "",

        plain_summary=generate_plain_summary(title, cr) if cr else "",
        why_it_matters="",  # keep blank to avoid speculation; fill later with human edit
        theme_tags=theme_tags,
        audience_level=audience_level,

        featured=None,
        open_access=open_access,
        data_code_links=data_code_links,
        policy_relevance=policy_relevance,
        press_links=[],

        image_url=image_url,
        alt_text=alt_text,
        impact_tags=[],

        citation_count=citation_count,
        funders=funders,
        region_system=region_system,
        methods_tags=methods_tags,

        source_url=page_to_scrape or "",
    )
    return enriched

# --------------------------
# CLI
# --------------------------

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--in", dest="inp", required=True, help="Path to input CSV (Zotero export)")
    ap.add_argument("--email", default="", help="Contact email for Unpaywall (required for OA lookups)")
    ap.add_argument("--out", default="enriched_publications.csv", help="Output CSV path")
    ap.add_argument("--json", default="enriched_publications.json", help="Output JSON path")
    ap.add_argument("--fast", action="store_true", help="Reduce wait times (risking rate limits)")
    args = ap.parse_args()

    # Load CSV defensively
    try:
        df = pd.read_csv(args.inp)
    except UnicodeDecodeError:
        df = pd.read_csv(args.inp, encoding="latin-1")
    except Exception as e:
        print(f"Failed to read CSV: {e}", file=sys.stderr)
        sys.exit(2)

    rows = df.to_dict(orient="records")

    enriched_list: List[Dict] = []
    total = len(rows)
    for i, row in enumerate(rows, 1):
        try:
            enr = enrich_row(row, args)
            enriched_list.append(asdict(enr))
            print(f"[{i}/{total}] {enr.title[:80]}")
        except KeyboardInterrupt:
            print("Interrupted by user.")
            break
        except Exception as e:
            print(f"Error on row {i}: {e}", file=sys.stderr)
        if not args.fast:
            time.sleep(0.3)

    # Save JSON
    try:
        with open(args.json, "w", encoding="utf-8") as f:
            json.dump(enriched_list, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"Failed to write JSON: {e}", file=sys.stderr)

    # Save CSV (lists -> semicolon-joined)
    def join_list(v):
        if isinstance(v, list):
            return "; ".join([str(x) for x in v])
        return v

    out_df = pd.DataFrame(enriched_list).applymap(join_list)
    try:
        out_df.to_csv(args.out, index=False)
        print(f"Saved: {args.out} and {args.json}")
    except Exception as e:
        print(f"Failed to write CSV: {e}", file=sys.stderr)
        sys.exit(3)

if __name__ == "__main__":
    main()
