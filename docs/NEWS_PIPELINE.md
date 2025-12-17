# News Article Pipeline

This document explains how to generate and manage news articles for the Ocean Recoveries website from scientific publications.

## Overview

The pipeline converts scientific publications (PDFs) into engaging news-style articles suitable for a general audience. It uses a two-step AI process:

1. **Initial Analysis**: Claude AI reads the paper and generates a summary, key findings, and essay
2. **Expert Review**: A domain expert AI fact-checks every claim against the original paper, catching fabrications

## Directory Structure

```
publications/
├── analyzed/           # AI-generated analysis JSON files (75 files)
│   ├── 1-analysis.json
│   ├── 2-analysis.json
│   └── ...
└── pdfs/               # Source PDF files (if available)

scripts/
├── analyze-publication.cjs    # Main AI analysis script
├── build-posts-from-analysis.cjs  # Converts JSONs to posts.ts
├── extract-pdfs.cjs           # PDF text extraction
└── PIPELINE_PRD.md            # Detailed pipeline documentation

src/data/
└── posts.ts            # Generated TypeScript file with all posts
```

## Quick Start

### Prerequisites

- Node.js 18+
- Anthropic API key with Claude access

### Analyzing a New Publication

1. Add the publication PDF to `publications/pdfs/`

2. Run the analysis:
   ```bash
   ANTHROPIC_API_KEY=your-key node scripts/analyze-publication.cjs --id <publication_id>
   ```

3. Rebuild posts.ts:
   ```bash
   node scripts/build-posts-from-analysis.cjs
   ```

4. Rebuild the website:
   ```bash
   npm run build
   ```

### Command Options

```bash
# Standard analysis with expert review (RECOMMENDED)
ANTHROPIC_API_KEY=your-key node scripts/analyze-publication.cjs --id 1

# Skip expert review (faster, but may contain fabrications)
ANTHROPIC_API_KEY=your-key node scripts/analyze-publication.cjs --id 1 --skip-review

# Dry run (preview prompts without API calls)
ANTHROPIC_API_KEY=your-key node scripts/analyze-publication.cjs --id 1 --dry-run
```

## Output Format

Each analysis file (`publications/analyzed/{id}-analysis.json`) contains:

```json
{
  "publicationId": "1",
  "title": "News-style headline",
  "originalTitle": "Academic paper title",
  "authors": "Author names",
  "year": 2024,
  "journal": "Journal Name",
  "doi": "10.xxxx/xxxxx",
  "doiUrl": "https://doi.org/...",
  "openAccess": true,
  "expertReviewed": true,
  "accuracyScore": 7,
  "issuesFound": 3,
  "analysis": {
    "summary": "Brief accessible summary",
    "keyQuestion": "Main research question",
    "approach": "Methods used",
    "keyFindings": ["Finding 1", "Finding 2"],
    "stickyFact": "Memorable statistic or fact",
    "whyItMatters": "Broader significance",
    "essay": "Full narrative essay (3-5 paragraphs)"
  },
  "reviewDetails": {
    "expertType": "Coral reef ecologist",
    "issues": [
      {
        "type": "fabrication",
        "original": "Invented text",
        "corrected": "Fact-checked text",
        "reason": "Why this was wrong"
      }
    ]
  }
}
```

## Why Two-Step Expert Review?

AI language models tend to "hallucinate" plausible-sounding details:
- Made-up percentages and statistics
- Behavioral observations not in the paper
- Mechanisms beyond what the study shows
- "Common knowledge" not from the source

The expert review compares the article against the original paper text sentence-by-sentence, catching these errors before publication.

**Typical accuracy scores:**
- Without review: 3-5/10 (many fabrications)
- With review: 7-9/10 (verified facts)

## Expert Types

The system automatically selects an appropriate expert based on paper themes:

| Paper Theme | Expert Type |
|-------------|-------------|
| Coral, reef | Coral reef ecologist |
| Kelp, temperate | Kelp forest ecologist |
| Predation | Predator-prey specialist |
| Climate | Climate scientist |
| Conservation | Conservation biologist |
| Symbiosis, mutualism | Mutualism expert |
| Methods, statistics | Quantitative ecologist |

## Website Integration

### BlogPost Interface

The `posts.ts` file exports posts with this structure:

```typescript
interface BlogPost {
  slug: string;           // URL-safe identifier
  title: string;          // News headline
  originalTitle?: string; // Academic title
  date: string;           // Publication date
  author: string;         // Author name
  excerpt: string;        // Short summary
  featuredImage: string;  // Image path
  tags: string[];         // Categories
  content: string;        // Full markdown essay
  doi?: string;           // DOI number
  doiUrl?: string;        // DOI link
  openAccess?: boolean;   // Is it freely available?
}
```

### Displaying Posts

Posts are rendered at:
- **List view**: `/news/` - Shows all posts with filtering
- **Detail view**: `/news/[slug]` - Full article with DOI badge and Open Access indicator

## Batch Processing

To re-analyze all publications:

```bash
# Process all 75 publications (takes ~30 minutes with API rate limits)
for i in $(seq 1 75); do
  echo "Processing publication $i..."
  ANTHROPIC_API_KEY=your-key node scripts/analyze-publication.cjs --id $i
  sleep 2  # Rate limit buffer
done

# Rebuild posts
node scripts/build-posts-from-analysis.cjs
```

## Troubleshooting

### "Species is not an array" error
The AI sometimes returns species as a string instead of array. The script handles this automatically.

### Empty or incomplete analysis
Check that:
1. The publication ID exists in the source data
2. The PDF text was extracted correctly
3. Your API key has sufficient credits

### TypeScript errors after updating posts.ts
Clear the Astro cache:
```bash
rm -rf .astro dist node_modules/.cache
npm run build
```

## Cost Estimates

Each publication analysis uses approximately:
- Initial analysis: ~4,000 tokens ($0.06)
- Expert review: ~6,000 tokens ($0.09)
- **Total per publication: ~$0.15**

Full pipeline for 75 publications: ~$11-15

## Future Improvements

- [ ] Auto-extract new publications from Google Scholar
- [ ] Add image generation for featured images
- [ ] Support for preprint servers (bioRxiv, etc.)
- [ ] Webhook for automatic rebuild on new analysis
