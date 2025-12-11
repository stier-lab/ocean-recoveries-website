# Publication Enrichment (No-Hallucination Workflow)

This script augments a Zotero-exported CSV with verified fields from Crossref, Unpaywall, and OpenAlex. 
It **never guesses**: if a field is not verifiable, it is left blank.

## Install
```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install pandas requests beautifulsoup4
```

## Run
```bash
python enrich_publications.py --in "/path/to/Exported Items.csv" --email you@your.org
```

Outputs:
- `enriched_publications.csv` — website-friendly CSV
- `enriched_publications.json` — structured JSON (arrays preserved)

### Tips
- Provide a real email for Unpaywall to respect their ToS and improve reliability.
- Use `--fast` cautiously; default pacing is polite to APIs.
- The script keeps **summaries conservative**, using Crossref abstracts only. 
  You can later ask ChatGPT to turn `plain_summary` into polished, lay summaries for featured items.
