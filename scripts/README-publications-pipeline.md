# Publications → AI News Pipeline

A complete pipeline for managing lab publications and generating AI-written news articles for the Ocean Recoveries Lab website.

## Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     DATA SOURCES                                │
├─────────────────────────────────────────────────────────────────┤
│  publications/pubs_enriched_out.csv    ← Master metadata        │
│  publications/Lab Publications/*.pdf   ← 86 PDF files           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│           STEP 1: PDF EXTRACTION                                │
│           node scripts/extract-pdfs.cjs                         │
├─────────────────────────────────────────────────────────────────┤
│  - Extracts text from all PDFs                                  │
│  - Identifies abstracts, key findings                           │
│  - Matches PDFs to metadata by author/year                      │
│  - Creates: publications/publications_full.json                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│           STEP 2: AI NEWS GENERATION                            │
│           node scripts/generate-ai-news.cjs                     │
├─────────────────────────────────────────────────────────────────┤
│  - Reads publications_full.json                                 │
│  - Builds rich prompts with full context                        │
│  - Calls Claude API to generate articles                        │
│  - Creates: src/data/posts.ts                                   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│           OUTPUT: WEBSITE NEWS                                  │
│           src/data/posts.ts                                     │
├─────────────────────────────────────────────────────────────────┤
│  - AI-written news articles                                     │
│  - Engaging headlines (not paper titles)                        │
│  - "Why This Matters" sections                                  │
│  - Proper citations with DOI links                              │
└─────────────────────────────────────────────────────────────────┘
```

## Quick Start

### 1. Install Dependencies

```bash
npm install pdf-parse
```

### 2. Set Up API Key

```bash
export ANTHROPIC_API_KEY=your-api-key-here
```

### 3. Run the Pipeline

```bash
# Step 1: Extract content from PDFs
node scripts/extract-pdfs.cjs

# Step 2: Generate AI news articles
node scripts/generate-ai-news.cjs
```

## Detailed Usage

### PDF Extraction Script

```bash
# Extract all PDFs (skips already-extracted files)
node scripts/extract-pdfs.cjs
```

**Outputs:**
- `publications/extracted/*.json` - Individual PDF extractions (cached)
- `publications/publications_full.json` - Unified database

### AI News Generation Script

```bash
# Generate articles for all recent publications (2019+)
node scripts/generate-ai-news.cjs

# Generate for a specific publication by ID
node scripts/generate-ai-news.cjs --pub-id 1

# Generate for the 5 most recent publications
node scripts/generate-ai-news.cjs --recent 5

# Preview prompts without calling API
node scripts/generate-ai-news.cjs --dry-run
```

**Outputs:**
- `src/data/posts.ts` - TypeScript file with news articles

## Database Schema

### publications_full.json

```typescript
interface Publication {
  // Core metadata
  id: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  doi: string;

  // Content
  abstract: string;
  plainSummary: string;      // From CSV "plain_summary"
  whyItMatters: string;      // From CSV "why_it_matters"

  // Classification
  themes: string[];          // ['Coral', 'Mutualism', etc.]
  audienceLevel: string;
  policyRelevance: string;
  studyType: string;
  methods: string;
  region: string;
  keywords: string;

  // Links
  pdfUrl: string;            // Google Drive link
  doiUrl: string;

  // Metrics
  citationCount: number;
  openAccess: boolean;

  // PDF extracted content
  pdfContent: {
    filename: string;
    numPages: number;
    abstractExtracted: string;
    keyFindings: string[];
    fullTextPreview: string;  // First ~10k chars
    extractedAt: string;
  } | null;

  // Pipeline status
  newsGenerated: boolean;
  newsGeneratedAt: string | null;
}
```

## Adding New Publications

### Option A: Update CSV and Re-run

1. Add new publication to `publications/pubs_enriched_out.csv`
2. Add PDF to `publications/Lab Publications/`
3. Run both scripts:
   ```bash
   node scripts/extract-pdfs.cjs
   node scripts/generate-ai-news.cjs --recent 1
   ```

### Option B: Manual Addition

1. Add publication metadata directly to `publications/publications_full.json`
2. Run:
   ```bash
   node scripts/generate-ai-news.cjs --pub-id NEW_ID
   ```

## Customizing AI Output

### Modify the System Prompt

Edit `scripts/generate-ai-news.cjs` and update the `systemPrompt` variable in `generateNewsArticle()`:

```javascript
const systemPrompt = `You are a science writer...

STYLE GUIDELINES:
- Write in an engaging, accessible style...
- [Add your customizations here]
`;
```

### Adjust Article Length

Modify `CONFIG.MAX_TOKENS` (default: 2000) for longer/shorter articles.

### Change AI Model

Update `CONFIG.MODEL` to use a different Claude model:
- `claude-sonnet-4-20250514` (default, balanced)
- `claude-opus-4-20250514` (highest quality, slower)
- `claude-3-5-haiku-20241022` (fastest, lower cost)

## Troubleshooting

### "pdf-parse not found"
```bash
npm install pdf-parse
```

### "ANTHROPIC_API_KEY not set"
```bash
export ANTHROPIC_API_KEY=sk-ant-...
```

### "publications_full.json not found"
Run the extraction script first:
```bash
node scripts/extract-pdfs.cjs
```

### PDF not matched to metadata
The matching uses author name + year from the filename. Ensure filenames follow the pattern:
```
AuthorLastName et al. (Journal) YEAR.pdf
```

## File Structure

```
Ocean-recoveries-website/
├── publications/
│   ├── pubs_enriched_out.csv          # Master metadata
│   ├── Lab Publications/               # PDF files
│   │   ├── Stier et al. (Ecology) 2014.pdf
│   │   └── ...
│   ├── extracted/                      # Cached PDF extractions
│   │   ├── Stier et al. (Ecology) 2014.json
│   │   └── ...
│   └── publications_full.json          # Unified database
├── scripts/
│   ├── extract-pdfs.cjs               # PDF extraction
│   ├── generate-ai-news.cjs           # AI article generation
│   ├── convert-pubs.cjs               # CSV → publications.ts
│   ├── generate-news.cjs              # Legacy templated news
│   └── README-publications-pipeline.md # This file
└── src/
    └── data/
        ├── publications.ts             # Website publications
        └── posts.ts                    # News articles
```

## Integration with Existing Scripts

This pipeline **complements** the existing scripts:

| Script | Purpose | Use When |
|--------|---------|----------|
| `convert-pubs.cjs` | CSV → publications.ts | Updating website publications list |
| `generate-news.cjs` | Templated news (no AI) | Quick updates, no API needed |
| `extract-pdfs.cjs` | PDF → JSON extraction | Adding new PDFs |
| `generate-ai-news.cjs` | AI article generation | Creating rich news articles |

## Future Improvements

1. **Automatic scheduling**: Cron job to check for new publications
2. **Draft review**: Generate to a staging file for human review
3. **Image extraction**: Pull figures from PDFs for article images
4. **Social media**: Generate Twitter/LinkedIn posts alongside articles
5. **Newsletter integration**: Auto-populate monthly newsletter content
