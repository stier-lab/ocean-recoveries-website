# Ocean Recoveries Lab Website - Claude Code Guide

This document provides context for Claude Code to work effectively on this codebase.

## Project Overview

**Site:** https://www.oceanrecoveries.com/
**Purpose:** Research website for the Ocean Recoveries Lab at UC Santa Barbara
**Focus Areas:** Coral reef resilience, kelp forest ecosystems, marine conservation

## Tech Stack

- **Framework:** Astro 4.x with View Transitions
- **Styling:** Tailwind CSS
- **Interactivity:** React 18 (for PublicationList component)
- **Animations:** Framer Motion + CSS/Intersection Observer
- **Language:** TypeScript (strict mode)
- **Hosting:** Netlify

## Directory Structure

```
ocean-recoveries-website/
├── src/
│   ├── components/          # Astro and React components
│   │   ├── layout/         # Nav.astro, Footer.astro, Breadcrumbs.astro
│   │   ├── publications/   # PublicationList.tsx (React)
│   │   ├── people/         # PersonCard.astro
│   │   └── shared/         # ThemeToggle.astro
│   ├── data/               # TypeScript data files (source of truth)
│   │   ├── posts.ts        # AI-generated news articles (~77 posts)
│   │   ├── publications.ts # 75 publications with metadata
│   │   ├── team.ts         # Current team + alumni
│   │   └── research.ts     # Study systems + research pillars
│   ├── layouts/            # Layout.astro (main layout)
│   ├── pages/              # File-based routing
│   │   ├── index.astro     # Homepage
│   │   ├── people.astro
│   │   ├── publications.astro
│   │   ├── news/           # [slug].astro for dynamic routes
│   │   └── research/       # [slug].astro for dynamic routes
│   ├── styles/             # global.css with Tailwind
│   └── utils/              # publicationImages.ts
├── public/images/          # Optimized images for web (~134 files)
├── assets/                 # Source images (raw files, not deployed)
├── publications/           # Publication pipeline data
│   ├── Lab Publications/   # 86 PDF files
│   ├── analyzed/           # AI analysis JSON files
│   ├── extracted/          # PDF text extractions
│   └── publications_full.json
├── scripts/                # Build and data pipeline scripts
├── data/                   # Image databases (JSON)
└── docs/                   # Documentation
```

## Key Files to Know

### Data Files (src/data/)

| File | Purpose | Records |
|------|---------|---------|
| `posts.ts` | News/blog articles (AI-generated) | ~77 posts |
| `publications.ts` | Publication metadata | 75 publications |
| `team.ts` | Team members and alumni | 6 current + 9 alumni |
| `research.ts` | Research systems and pillars | 2 systems, 3 pillars |

### Critical Scripts (scripts/)

| Script | Purpose | Usage |
|--------|---------|-------|
| `generate-news.cjs` | Build hook - reads analyzed/ and updates posts.ts | `npm run prebuild` |
| `extract-pdfs.cjs` | Extract text from PDFs | One-time setup |
| `generate-ai-news.cjs` | Generate news with Claude API | Requires ANTHROPIC_API_KEY |

## Common Tasks

### Adding a New Publication

1. Add PDF to `publications/Lab Publications/`
2. Update `publications/pubs_enriched_out.csv`
3. Run `node scripts/extract-pdfs.cjs`
4. Run `ANTHROPIC_API_KEY=xxx node scripts/generate-ai-news.cjs --recent 1`
5. Verify in `src/data/posts.ts`

### Adding a Team Member

Edit `src/data/team.ts`:
```typescript
{
  name: 'New Person',
  role: 'phd', // pi | postdoc | phd | manager | undergrad
  title: 'PhD Student',
  image: '/images/new-person.jpg',
  hook: 'Research focus description...',
  tags: ['Research Area 1', 'Research Area 2'],
  email: 'email@ucsb.edu',
  order: 7,
}
```

### Adding an Image

1. Add optimized image to `public/images/`
2. Reference as `/images/filename.jpg` in code
3. Keep original in `assets/` if needed for future editing

## Development Commands

```bash
npm run dev        # Start dev server (localhost:4321)
npm run build      # Type check + build for production
npm run preview    # Preview production build
```

## TypeScript Aliases

Configured in `tsconfig.json`:
- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@data/*` → `src/data/*`
- `@utils/*` → `src/utils/*`

## Design System

**IMPORTANT: See [DESIGN.md](./DESIGN.md) for the complete design system documentation.**

The design doc covers:
- Color palette and usage rules
- Typography scale and hierarchy
- Spacing tokens and layout patterns
- Component patterns (cards, buttons, badges)
- Motion and animation guidelines
- Accessibility requirements
- Implementation checklists

### Quick Reference (Colors)

- **Ink:** `#f1f5f9` (light text)
- **Accent Sky:** `#38bdf8`
- **Accent Teal:** `#2dd4bf`
- **Surface:** `#0f172a` (dark navy bg)
- **Surface Elevated:** `#1e293b` (card bg)

### Typography

Font: Inter (Google Fonts)
Uses fluid typography with `clamp()` for responsive sizing.

## Important Patterns

### Image References

All images are referenced from `/images/` (maps to `public/images/`):
```astro
<img src="/images/coral-reef.jpeg" alt="..." />
```

### Dynamic Routes

News and research pages use Astro's `[slug].astro` pattern:
- `/news/[slug]` → Individual news posts
- `/research/[slug]` → Research themes (coral-reefs, kelp-forests)

### Publications Filtering

The `PublicationList.tsx` React component provides:
- Theme filtering (Coral, Kelp, Management, etc.)
- Full-text search
- Year sorting
- Open access filter
- Pagination (20 per page)

## What NOT to Touch

- `squaresapce-code/` - Legacy HTML reference only
- `node_modules/` - Dependencies
- `dist/` - Build output
- `.astro/` - Astro cache

## Debugging

### Build Errors

1. Check TypeScript errors: `npx astro check`
2. Common issues:
   - Missing image files referenced in data
   - Type mismatches in data files
   - Import path errors

### Image Issues

- Use `scripts/check-missing-images.cjs` to find broken references
- Images must exist in `public/images/` to work

## Notes for Future Sessions

1. **Data is in TypeScript files, not JSON** - The source of truth is in `src/data/*.ts`
2. **News is auto-generated** - Don't manually edit `posts.ts` content; regenerate from analyzed/
3. **75 publications, ~77 posts** - Some publications have multiple news posts
4. **Images need optimization** - Raw images go in `assets/`, optimized versions in `public/images/`
