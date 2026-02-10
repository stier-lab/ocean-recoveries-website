# Bug Bash Plan

## Scope Splits (6 parallel agents)

| Agent | Scope | Files |
|-------|-------|-------|
| **pages-core** | Homepage, values, privacy, accessibility, join pages | `src/pages/index.astro`, `values.astro`, `privacy.astro`, `accessibility.astro`, `join.astro`, `join-us.astro`, `for-funders.astro` |
| **research-module** | Research pages + components (globe, map, slug routes) | `src/pages/research/`, `src/components/research/` |
| **publications-news** | Publications page, news pages, PublicationList React component | `src/pages/publications.astro`, `src/pages/news/`, `src/components/publications/` |
| **layout-shared** | Nav, Footer, Breadcrumbs, CommandPalette, GlobalEffects, ThemeToggle | `src/components/layout/`, `src/components/shared/`, `src/layouts/` |
| **data-integrity** | All data files + SEO components + people page | `src/data/`, `src/components/seo/`, `src/components/people/`, `src/pages/people.astro` |
| **build-scripts** | Build pipeline, generate-news, image refs, static assets | `scripts/`, `public/`, `astro.config.mjs`, `package.json`, `tailwind.config.*` |

## Methodology per agent
1. Read all files in scope
2. Check for: runtime errors, broken refs, accessibility issues, dead code, type errors, logic bugs
3. Fix what can be fixed safely
4. Write report to `bug-bash-reports/<scope>.md`

## Review
- After all agents complete, spawn review agent to cross-check and run full build
