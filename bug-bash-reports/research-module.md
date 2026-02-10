# Research Module Bug Bash Report

**Scope:** `src/pages/research/index.astro`, `src/pages/research/[slug].astro`, `src/components/research/ResearchGlobe.tsx`, `src/components/research/StudySitesMap.tsx`, `src/data/research.ts`

**Date:** 2026-02-09

---

## Bugs Found & Fixed

None. No actionable bugs were found that required fixing.

---

## Bugs Found (Not Fixed)

None.

---

## Verified OK

### Image References (26 images checked)
All image paths referenced in `src/data/research.ts`, `src/pages/research/index.astro`, and `src/components/research/StudySitesMap.tsx` were verified to exist in `public/images/`. This includes:
- Hero images: `blacktip-reef-sharks-split-view-island.jpeg`, `cauliflower-coral-damselfish-reef.jpeg`, `giant-kelp-sunlight-underwater.jpeg`
- Gallery images (coral-reefs): 10 images including `trapezia-coral-crab-hiding.jpg`, `blue-green-chromis-coral-school.JPG`, etc.
- Gallery images (kelp-forests): 10 images including `spiny-lobsters-group-reef-hideout.jpeg`, `urchin-barron.jpg`, etc.
- Field site images: `moorea-mountain-tropical-island-view.jpeg`, `kelp-hero.jpeg`
- Collaboration section: `research-team-boats-turquoise-lagoon.webp`

### Internal Links
All internal links verified to resolve to existing pages:
- `/research/coral-reefs` -> covered by `getStaticPaths()` in `[slug].astro`
- `/research/kelp-forests` -> covered by `getStaticPaths()` in `[slug].astro`
- `/research` -> `src/pages/research/index.astro`
- `/publications` -> `src/pages/publications.astro`
- `/news` -> `src/pages/news/index.astro`
- `/news/[slug]` -> `src/pages/news/[slug].astro`
- `/join` -> `src/pages/join.astro`
- `mailto:astier@ucsb.edu` -> valid mailto link

### TypeScript / Build
- `npm run build` completes successfully with no errors
- All imports resolve correctly: `Layout`, `Breadcrumbs`, `BreadcrumbSchema`, `WaveDivider`, `ResearchGlobe`, `StudySitesMap`
- Data types from `src/data/research.ts` are correctly consumed: `StudySystem`, `ResearchPillar`, `studySystems`, `researchPillars`, `researchThemes`
- `enrichPublicationsWithImages` utility function types align with `Publication` and `BlogPost` interfaces
- All `stagger-${n}` CSS classes used (1-6) are defined in `global.css` (supports up to 10)

### Dynamic Routes (`[slug].astro`)
- `getStaticPaths()` correctly iterates `researchThemes` (alias for `studySystems`) and generates paths for both slugs: `coral-reefs` and `kelp-forests`
- Props are correctly passed via `Astro.props`
- `themeToPublicationMap` and `themeToNewsKeywords` cover both slugs

### React Components

**ResearchGlobe.tsx:**
- D3 imports correct (`d3` for selection, `d3-geo` for projection/path/graticule)
- `topojson-client` dynamically imported (in `package.json` as dependency)
- `@types/geojson` available as transitive dependency
- Responsive sizing `useEffect` has proper cleanup (removes resize listener)
- Map initialization `useEffect` correctly depends on `dimensions`
- SVG viewBox dynamically set from state dimensions
- Projection center `[-112, 12]` correctly frames all three field sites (Moorea, Santa Barbara, Dominican Republic)
- Marker rendering uses proper SVG group transforms
- D3 click/hover handlers correctly update React state and SVG attributes
- `key` props present on all mapped elements in JSX

**StudySitesMap.tsx:**
- `useState` correctly initialized with `studySites[0]`
- Animation state (`isAnimating`) properly managed with `setTimeout`
- `key` props present on all mapped elements
- All inline styles use valid CSS properties
- Image references use same paths as `research.ts` hero images (verified above)

### CSS
- All custom CSS classes used in templates are defined in corresponding `<style>` blocks
- `scroll-reveal` class handled by `Layout.astro` IntersectionObserver
- `container` class defined in `global.css`
- WaveDivider `fillColor` prop values (`surface`, `navy-deep`) match component's supported values
- Reduced motion media queries present in both page files, disabling animations appropriately
- Tailwind utility classes (`@apply`) used correctly throughout

### Accessibility
- Decorative images use `alt=""` (hero backgrounds, card images with adjacent text)
- Gallery images have descriptive `alt` text from data
- `aria-label` on navigation elements (`jump-nav`, `sticky-nav`, `pipeline-mobile`)
- Finding cards are `<button>` elements with `aria-expanded` and `aria-label`
- `aria-hidden="true"` on decorative elements (particles, scroll indicators, background orbs)
- `aria-current` correctly managed on sticky nav links
- Keyboard accessibility: finding card flip works via click, Enter, and Space (buttons handle Enter/Space natively; explicit keydown handler is redundant but harmless)

### Data Binding (`src/data/research.ts`)
- `studySystems` array contains 2 entries with all required fields populated
- `researchPillars` array contains 3 entries with all required fields
- `researchThemes` export correctly aliases `studySystems`
- `ResearchTheme` type correctly aliases `StudySystem`
- Optional fields (`gallery`, `fieldSite`) properly guarded with conditional rendering in templates
- All gallery entries have `src`, `alt`, and `caption` fields
- Both field sites have `name`, `location`, `description`, `image`, and `url`
