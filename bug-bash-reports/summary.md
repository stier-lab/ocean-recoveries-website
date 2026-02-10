# Bug Bash Summary

**Date:** 2026-02-09
**Build status:** Passing (90 pages, 0 errors)

---

## Overview

| Scope | Bugs Fixed | Bugs Noted (not fixed) |
|-------|-----------|----------------------|
| pages-core | 6 | 1 |
| research-module | 0 | 0 |
| publications-news | 4 | 4 |
| layout-shared | 8 | 3 |
| data-integrity | 3 | 2 |
| build-scripts | 2 | 7 |
| **Total** | **23** | **17** |

---

## Fixed Bugs by Category

### Security (1)
- **XSS in news filter tags** — `innerHTML` injection of user search input replaced with safe DOM construction (`createElement`/`textContent`)

### Memory Leaks (10)
- **Nav.astro** — scroll/keydown listener accumulation across view transitions
- **GlobalEffects.astro** — scroll listener, mousemove listener, and `requestAnimationFrame` loop all accumulating on `astro:after-swap`
- **CommandPalette.astro** — keydown/input/click/mousemove listeners stacking on every view transition
- **index.astro, join.astro, join-us.astro, for-funders.astro** — parallax scroll listener leaks (4 pages)

### Data Integrity (3)
- **Double-prefixed DOI URLs** — 2 publications had `https://doi.org/https://doi.org/...` propagating through the entire pipeline (extracted JSON, analyzed JSON, publications_full.json, publications.ts, posts.ts)
- **HTML entity in journal name** — `&amp;` rendered literally in structured data
- **Placeholder Google Scholar ID** — `SCHOLAR_ID` in OrganizationSchema replaced with actual ID

### SEO (1)
- **og:image relative URL** — Social crawlers couldn't resolve `/images/og-default.jpg`; now generates absolute URL

### Accessibility (2)
- **Nav Escape focus** — keyboard focus now returns to menu button when closing mobile menu
- **for-funders hero stats** — invisible with `prefers-reduced-motion` due to missing CSS override

### Functional (3)
- **News results count mismatch** — server-rendered "77" jumped to "74" on JS init
- **News sort order** — changing sort didn't reorder DOM, only toggled visibility
- **CSS `.funders-logos`** — mobile media query targeted non-existent class (should be `.funders-strip`)

### Build Robustness (2)
- **Trailing hyphens in slugs** — `slugify()` truncation at 60 chars could leave trailing `-`
- **String escaping in generate-news.cjs** — several fields had no escaping for `\` and `"` in double-quoted output

### Accessibility (minor) (1)
- **6 decorative SVGs** in publications.astro missing `aria-hidden="true"`

---

## Notable Unfixed Items

### Should fix eventually
- **Scroll listener leaks in news pages** — same pattern as the fixed pages, affects `news/index.astro` and `news/[slug].astro`
- **22 unreferenced images** (~43 MB) deployed to production, including an `.ai` source file
- **31 oversized images** — largest is 21.5 MB (`fish-biodiversity.jpeg`); several pages load 50+ MB of images
- **Unused dependencies** — `leaflet`, `@types/leaflet` (replaced by D3), `pdf-parse` should be in devDependencies

### Low priority / design decisions
- Desktop research dropdown missing `aria-expanded` toggle
- Mobile menu doesn't include research sub-items
- Featured posts excluded from news filtering
- Empty `alt=""` on news article images (debatable — cards have title text)
- Dead `count-up` animation config in Tailwind
- Dead `actionImage` prop in PersonCard
- Book chapters with placeholder journal name

---

## Verification

- `npm run build` — 90 pages built successfully, 0 errors
- All 77 post slugs unique, no trailing hyphens
- All image references resolve to existing files in `public/images/`
- All internal links resolve to valid routes
- DOI URLs properly single-prefixed throughout pipeline

---

## Individual Reports

- [pages-core.md](./pages-core.md)
- [research-module.md](./research-module.md)
- [publications-news.md](./publications-news.md)
- [layout-shared.md](./layout-shared.md)
- [data-integrity.md](./data-integrity.md)
- [build-scripts.md](./build-scripts.md)
