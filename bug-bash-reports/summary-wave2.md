# Bug Bash Wave 2 Summary

**Date:** 2026-02-09
**Build status:** Passing (90 pages, 0 errors)

---

## Overview

| Scope | Bugs Fixed | Wave 1 Verified |
|-------|-----------|----------------|
| pages-core-v2 | 2 | 6/6 confirmed |
| research-module-v2 | 1 | 0/0 (none to verify) |
| publications-news-v2 | 2 | 4/4 confirmed |
| layout-shared-v2 | 2 | 8/8 confirmed |
| data-integrity-v2 | 0 | 3/3 confirmed |
| build-perf-v2 | 3 | 2/2 confirmed |
| **Total** | **10** | **23/23 confirmed** |

---

## Wave 2 Fixes

### Memory Leaks (3)
- **news/[slug].astro** — 3 scroll handlers (`updateProgress`, `toggleBackToTop`, `updateTocHighlight`) accumulating on view transitions. Added cleanup pattern.
- **news/index.astro** — document-level `closeDropdowns` click handler accumulating. Added cleanup pattern.
- **values.astro** — IntersectionObserver not disconnected on re-init. Added `currentObserver` cleanup.

### Race Conditions (1)
- **ResearchGlobe.tsx** — async fetch + dynamic import had no cancellation on effect cleanup. Added `AbortController` + `cancelled` flag.

### Interaction Bugs (2)
- **CommandPalette.astro** — closing palette while mobile menu open restored body scroll prematurely. Added menu state check.
- **GlobalEffects.astro** — duplicate `mouseenter`/`mouseleave` listeners on interactive elements after view transitions. Added `data-cursor-init` guard.

### Accessibility (1)
- **for-funders.astro** — `.cost-card` and `.funder-card` hover transitions not disabled for `prefers-reduced-motion`. Added to reduced-motion selector.

### Dependencies & Config (3)
- **package.json** — removed unused `leaflet` + `@types/leaflet`, moved `pdf-parse` to devDependencies
- **tailwind.config.mjs** — removed dead `count-up` animation referencing nonexistent keyframes

---

## Cumulative Totals (Wave 1 + Wave 2)

| Category | Wave 1 | Wave 2 | Total |
|----------|--------|--------|-------|
| Security (XSS) | 1 | 0 | 1 |
| Memory leaks | 10 | 3 | 13 |
| Race conditions | 0 | 1 | 1 |
| Data integrity | 3 | 0 | 3 |
| SEO | 1 | 0 | 1 |
| Accessibility | 3 | 1 | 4 |
| Functional | 3 | 0 | 3 |
| Build robustness | 2 | 0 | 2 |
| Interaction bugs | 0 | 2 | 2 |
| Dependencies/config | 0 | 3 | 3 |
| Performance | 1 | 0 | 1 |
| **Total** | **23** | **10** | **33** |

---

## Notable Informational Findings (Wave 2)

- 2 recent 2025 publications in posts.ts not yet added to publications.ts (data gap, needs PI input)
- 3 unused components: PersonCard.astro, ScholarlyArticleSchema.astro, PersonSchema.astro
- 22 unreferenced images (~43 MB) still deployed (from wave 1)
- 31 oversized images (up to 21.5 MB each) still need optimization (from wave 1)

---

## Reports

### Wave 1
- [pages-core.md](./pages-core.md)
- [research-module.md](./research-module.md)
- [publications-news.md](./publications-news.md)
- [layout-shared.md](./layout-shared.md)
- [data-integrity.md](./data-integrity.md)
- [build-scripts.md](./build-scripts.md)
- [summary.md](./summary.md)

### Wave 2
- [pages-core-v2.md](./pages-core-v2.md)
- [research-module-v2.md](./research-module-v2.md)
- [publications-news-v2.md](./publications-news-v2.md)
- [layout-shared-v2.md](./layout-shared-v2.md)
- [data-integrity-v2.md](./data-integrity-v2.md)
- [build-perf-v2.md](./build-perf-v2.md)
