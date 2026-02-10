# Data Integrity & SEO Bug Bash Report -- Wave 2

**Scope:** `src/data/posts.ts`, `src/data/publications.ts`, `src/data/team.ts`, `src/data/research.ts`, `src/components/seo/*`, `src/components/people/PersonCard.astro`, `src/pages/people.astro`

**Date:** 2026-02-09

---

## Wave 1 Fix Verification

### 1. DOI Fix (VERIFIED)

All 75 publications in `publications.ts` have bare DOI identifiers -- none contain the `https://doi.org/` prefix. Confirmed with a search for `doi: "https://` which returned zero matches.

All 77 `doiUrl` values in `posts.ts` are properly single-prefixed (`https://doi.org/...`). No double-prefixed URLs (`https://doi.org/https://doi.org/...`) remain anywhere in either file. Markdown links in post content (e.g., `[Read the full paper](https://doi.org/...)`) are all well-formed.

The `ScholarlyArticleSchema.astro` component constructs DOI URLs via `` `https://doi.org/${doi}` `` at lines 63-64 and 89. With bare DOI identifiers, this now produces correct URLs.

### 2. HTML Entity Fix (VERIFIED)

No `&amp;` or other HTML entities found anywhere in `src/data/`. Publication ID 38 correctly reads `"Nature Ecology & Evolution"`.

### 3. Google Scholar ID Fix (VERIFIED)

`OrganizationSchema.astro` line 74 now contains the correct Scholar URL: `"https://scholar.google.com/citations?user=bxbOvMgAAAAJ"`. No placeholder `SCHOLAR_ID` references remain anywhere in `src/`.

---

## New Issues Found

### 1. Two publications in posts.ts have no matching entry in publications.ts (Data Gap)

**Files:** `src/data/posts.ts`, `src/data/publications.ts`

Two news posts reference DOIs that do not exist in the publications list:

- **DOI `10.1111/ele.70262`** -- Stier & Osenberg (2025), "Widespread Heterogeneity in Density-Dependent Mortality of Nearshore Fishes," *Ecology Letters*. (posts.ts slug: `fish-populations-don-t-follow-simple-rules-and-that-changes`)
- **DOI `10.1371/journal.pclm.0000624`** -- Samhouri et al. (2025), "Course corrections responding to climate impacts produce divergent effects on population biomass and harvest in fisheries," *PLOS Climate*. (posts.ts slug: `climate-change-forces-an-impossible-choice-for-fisheries-sav`)

These appear to be recent 2025 publications that were added to the news pipeline but not yet entered into `publications.ts`. This means:
- These publications do not appear on the `/publications` page.
- The publication count in any metadata referencing the publications array (75) is understated.
- If a user reads the news article and then searches for the paper on the publications page, they will not find it.

**Severity:** Moderate -- data completeness issue, not a code bug. The website functions correctly; these publications are simply missing from one data source.

**Not fixing** because adding publications requires additional metadata (themes, featured status, citationCount, etc.) that should be determined by the PI, not inferred by an auditor.

### 2. PersonCard.astro is dead code (Informational)

**File:** `src/components/people/PersonCard.astro`

This component is not imported or used anywhere in the codebase. The `people.astro` page renders its own inline card markup rather than using this component. The component also has an unused `actionImage` prop in its interface (noted in wave 1).

**Severity:** None -- dead code with no runtime impact.

### 3. ScholarlyArticleSchema.astro and PersonSchema.astro are unused (Informational)

**Files:** `src/components/seo/ScholarlyArticleSchema.astro`, `src/components/seo/PersonSchema.astro`

Both components are exported from `src/components/seo/index.ts` but are never imported or rendered by any page. The publications page only uses `BreadcrumbSchema`, and the people page also only uses `BreadcrumbSchema`. These components are correctly implemented and ready for use, but currently have no effect on the site's structured data output.

**Severity:** None -- available for future use but not active.

---

## Verified OK

### publications.ts (75 publications)
- All 75 IDs are unique, sequential strings ('1' through '75')
- All DOI values are bare identifiers (not full URLs)
- No HTML entities in any field
- All required fields present: `id`, `title`, `authors`, `year`, `journal`, `doi`, `themes`
- Year range: 2009-2025, all valid integers
- Two book chapters (IDs 23, 48) retain `"Scientific Journal"` as journal name (known data quality issue from wave 1, not a code bug)
- Two publications (IDs 2, 3) have `abstract: undefined` explicitly set -- functionally harmless and handled correctly by ScholarlyArticleSchema's conditional spread

### posts.ts (77 posts)
- All 77 `doiUrl` values properly single-prefixed
- All 77 `featuredImage` paths verified to exist in `public/images/`
- All markdown content links well-formed (no double-prefixed DOIs)
- All `date` fields are valid ISO format (YYYY-MM-DD)
- All slugs are unique

### team.ts (6 current + 9 alumni)
- All 6 current team member images verified to exist: `adrian.png`, `raine.jpg`, `adnan.jpg`, `molly.jpg`, `hayden.jpg`, `jaden.jpg`
- All 9 alumni images verified to exist: `jada.jpg`, `alexis.webp`, `Emily.jpg`, `sam.jpg`, `joe.jpg`, `kai.jpg`, `kingeman.jpg`, `bart.jpg`, `megsie.webp`
- All email addresses are `@ucsb.edu` format
- All `role` values are valid enum members
- `order` values 1-6, sequential, no duplicates

### research.ts (2 systems + 3 pillars)
- All 24 image paths (hero, gallery, field site) verified to exist in `public/images/`
- Study system slugs unique
- Research pillar data complete

### SEO Components (6 files + index.ts)
- **OrganizationSchema.astro**: Valid JSON-LD. Correct Scholar ID. Correct `@id` reference. Conditional member rendering works correctly. Used in global layout.
- **WebsiteSchema.astro**: Valid JSON-LD. SearchAction URL template points to `/publications?search=`. Used in global layout.
- **ArticleSchema.astro**: Valid JSON-LD. Handles missing `dateModified` by falling back to `datePublished`. Handles missing `image` by falling back to `og-default.jpg`. Default `authorName` set to "Ocean Recoveries Lab". Used in `news/[slug].astro`.
- **BreadcrumbSchema.astro**: Valid JSON-LD. Position indexing starts at 1 (correct per Schema.org spec). Automatically prepends Home item. URL normalization handles both relative and absolute URLs. Used in multiple pages.
- **ScholarlyArticleSchema.astro**: Valid JSON-LD structure. DOI URL construction correct (now that DOIs are bare). Exported but not yet used in any page.
- **PersonSchema.astro**: Valid JSON-LD structure. Image URL normalization handles leading slash. Exported but not yet used in any page.
- **index.ts**: Clean barrel export of all 6 components.

### PersonCard.astro
- Component code is correct (role labels, colors, image fallback, accessibility attributes all present)
- Not used in any page (dead code)

### people.astro
- Imports and sorts team data correctly
- Renders all 6 current team members in role-styled cards
- Renders all 9 alumni with image fallback for missing photos
- Links to `/values` and `/join` which both exist as pages
- Reduced motion media query present for accessibility
- Role badge colors correctly mapped for all 5 role types
- `BreadcrumbSchema` properly configured

### Build
- `npm run build` completes successfully: 0 errors, 0 warnings
- All 90 pages generated successfully
- Build time: ~23s

---

## Summary

Wave 1 fixes (double-prefixed DOIs, HTML entity, placeholder Scholar ID) are all confirmed resolved. No new bugs requiring code fixes were found in this wave. The main finding is a data completeness gap: two recent 2025 publications exist in the news pipeline but have not yet been added to `publications.ts`. Three components (`PersonCard.astro`, `ScholarlyArticleSchema.astro`, `PersonSchema.astro`) are implemented but unused -- these are opportunities for future enhancement rather than bugs.
