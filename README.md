# Ocean Recoveries Lab Website

Research website for the Ocean Recoveries Lab at UC Santa Barbara.

**Live Site:** https://www.oceanrecoveries.com/

## Quick Start

```bash
npm install      # Install dependencies
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```

## Tech Stack

- **Framework:** [Astro](https://astro.build/) 4.x with View Transitions
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Interactivity:** React 18 (PublicationList component)
- **Animations:** Framer Motion + CSS Intersection Observer
- **Hosting:** Netlify

## Project Structure

```
ocean-recoveries-website/
├── src/
│   ├── components/         # Astro & React components
│   ├── data/              # TypeScript data files (source of truth)
│   │   ├── posts.ts       # News articles (~77 AI-generated)
│   │   ├── publications.ts # 75 publications
│   │   ├── team.ts        # Team members & alumni
│   │   └── research.ts    # Research systems & pillars
│   ├── layouts/           # Page layouts
│   ├── pages/             # File-based routing
│   └── styles/            # Global CSS
├── public/images/         # Optimized web images
├── assets/                # Source images (not deployed)
├── publications/          # PDF pipeline data
├── scripts/               # Build & data scripts
├── tests/                 # Playwright test scripts
└── docs/                  # Documentation
```

## Pages

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/` | Hero, research themes, featured papers |
| People | `/people` | Team grid with cards |
| Publications | `/publications` | Searchable publication database |
| Research | `/research` | Research overview |
| Coral Reefs | `/research/coral-reefs` | Coral research theme |
| Kelp Forests | `/research/kelp-forests` | Kelp research theme |
| News | `/news` | AI-generated publication summaries |
| Join Us | `/join-us` | Opportunities |

## Content Management

### Adding a Team Member

Edit `src/data/team.ts`:

```typescript
{
  name: 'New Person',
  role: 'phd', // pi | postdoc | phd | manager | undergrad
  title: 'PhD Student',
  image: '/images/person.jpg',
  hook: 'Research focus...',
  tags: ['Area 1', 'Area 2'],
  email: 'email@ucsb.edu',
  order: 7,
}
```

### Adding a Publication

1. Add PDF to `publications/Lab Publications/`
2. Update CSV metadata
3. Run extraction: `node scripts/extract-pdfs.cjs`
4. Generate news: `ANTHROPIC_API_KEY=xxx node scripts/generate-ai-news.cjs --recent 1`

### Adding Images

1. Add optimized image to `public/images/`
2. Reference as `/images/filename.jpg`

## News Pipeline

The site uses an AI pipeline to generate accessible news articles from academic publications:

1. **Extract** - `scripts/extract-pdfs.cjs` extracts text from PDFs
2. **Analyze** - `scripts/generate-ai-news.cjs` generates articles via Claude API
3. **Build** - `scripts/generate-news.cjs` compiles into `src/data/posts.ts`

See `scripts/PIPELINE_README.md` for details.

## Development

```bash
npm run dev          # Start dev server
npx astro check      # TypeScript checking
npm run build        # Production build
```

## For AI Assistants

See [CLAUDE.md](./CLAUDE.md) for detailed context on working with this codebase.

## License

Copyright Ocean Recoveries Lab, UC Santa Barbara
