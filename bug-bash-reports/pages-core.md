# Pages Core Bug Bash Report

Scope: `src/pages/index.astro`, `src/pages/values.astro`, `src/pages/privacy.astro`, `src/pages/accessibility.astro`, `src/pages/join.astro`, `src/pages/join-us.astro`, `src/pages/for-funders.astro`

## Bugs Found & Fixed

- [index.astro:1586] CSS rule `.funders-logos` in mobile media query targets a non-existent class. The HTML uses `.funders-strip` (line 481), so the mobile gap override never applied. Changed to `.funders-strip`. -- FIXED

- [index.astro:1635-1667] Scroll listener leak: `initParallax()` adds a new `window.addEventListener('scroll', ...)` on every `astro:after-swap` call without removing the previous listener. During view transitions, stale listeners accumulate on detached DOM nodes. Added cleanup logic to remove the previous handler before attaching a new one. -- FIXED

- [join.astro:1468-1498] Same scroll listener leak as index.astro. Added cleanup logic. -- FIXED

- [join-us.astro:1760-1933] Same scroll listener leak as index.astro. Added cleanup logic. -- FIXED

- [for-funders.astro:973-1000] Same scroll listener leak as index.astro. Added cleanup logic. -- FIXED

- [for-funders.astro:952-970] Accessibility bug: `.hero-stats` has `opacity: 0` (line 632) with a `fadeUp` animation to reveal it, but the `prefers-reduced-motion: reduce` media query did not include `.hero-stats`. Users with reduced motion preferences would see invisible hero stats (paper count, PhDs, LTER sites). Added `.hero-stats` to the reduced-motion selector. -- FIXED

## Bugs Found (Not Fixed)

- [news/index.astro:1042] TypeScript error: `escapeHtml` is declared but never read. This file is outside the scope of this bug bash (it lives in `src/pages/news/`), but it causes `astro check` to fail for the entire project.

## Verified OK

### Image References
- All 16 unique image paths across all 7 pages verified to exist in `public/images/`:
  - `coral-reef-panorama-anthias-fish.jpeg`, `cauliflower-coral-damselfish-reef.jpeg`, `giant-kelp-sunlight-underwater.jpeg` (index.astro)
  - `research-team-boats-turquoise-lagoon.webp`, `ucsb-campus.jpeg`, `research-team-group-photo-beach.jpeg`, `researcher-on-boat-ocean-fieldwork.jpg`, `kelp-forest-fish-school-underwater.jpeg`, `chromis-acropora.jpeg`, `tropical-island-aerial-view-lagoon-reef.jpeg` (values.astro)
  - `aerial-view-island-lagoon-barrier-reef.jpeg`, `man-scuba-diver-on-boat.jpg`, `kelp-hero.jpeg`, `moorea-mountain-tropical-island-view.jpeg`, `ucsb-campus.jpeg` (join.astro, join-us.astro)
  - `blacktip-reef-sharks-split-view-island.jpeg` (for-funders.astro)

### Internal Links
- All internal links verified against valid routes:
  - `index.astro`: `#approach`, `/publications`, `/research/coral-reefs`, `/research/kelp-forests`, `/news/{slug}`, `/people`, `/join`, `/for-funders`
  - `values.astro`: `/people`, `/join`, anchor links to `#{value.id}`
  - `privacy.astro`: `/` (Home breadcrumb)
  - `accessibility.astro`: `/` (Home breadcrumb)
  - `join.astro`: `#opportunities`, `#approach`, `/publications`, `/values`
  - `join-us.astro`: `#opportunities`, `#approach`, `/publications`
  - `for-funders.astro`: `#impact`, `/publications`, `/research/kelp-forests`, `/research/coral-reefs`

### JavaScript / Script Tags
- All `<script>` tags verified for null checks on DOM queries (all use early return patterns)
- Parallax scripts properly check `prefers-reduced-motion` before adding listeners
- `values.astro` IntersectionObserver properly initialized and re-initialized on `astro:after-swap`
- `join-us.astro` quiz logic: all DOM element references are null-checked before use

### Accessibility
- All `<img>` tags have `alt` attributes with descriptive text
- Decorative elements use `aria-hidden="true"` (particles, blobs, bubbles)
- Navigation landmarks have `aria-label` attributes (breadcrumbs, value nav)
- Breadcrumbs use `aria-current="page"` on current page items
- SVG icons used decoratively are properly hidden or labeled
- All pages include `prefers-reduced-motion: reduce` media queries
- `loading="lazy"` used appropriately (not on above-the-fold hero images)

### Heading Hierarchy
- `index.astro`: h1 > h2 sections > h3 cards > h4 sub-headings -- correct
- `values.astro`: h1 > h2 per value > closing h2 -- correct
- `privacy.astro`: h1 > h2 sections -- correct
- `accessibility.astro`: h1 > h2 sections -- correct
- `join.astro`: h1 > h2 sections > h3 cards/roles > h4 details -- correct
- `join-us.astro`: h1 > h2 sections > h3 cards/roles > h4 details -- correct
- `for-funders.astro`: h1 > h2 sections > h3 cards > h4 details -- correct

### SEO
- All pages pass `title` and `description` to Layout component
- `values.astro` includes structured data (JSON-LD schema)
- `for-funders.astro` includes `image` prop for social cards
- Layout component provides default OG image, keywords, and canonical URL

### CSS / Tailwind
- All custom Tailwind classes verified against `tailwind.config.mjs`: `bg-surface`, `bg-surface-card`, `text-ink`, `text-muted`, `text-accent`, `text-accent-2`, `text-accent-warm`, `bg-navy-deep`, `bg-navy-highlight`, `border-line`, spacing tokens (`py-s4`, `py-s5`, `mb-s3`)
- Responsive media queries reviewed -- all use standard breakpoints
- No conflicting or orphaned CSS (except the `.funders-logos` bug, now fixed)

### Build Verification
- `astro build` completes successfully (90 pages built)
- No TypeScript errors in any files within scope
