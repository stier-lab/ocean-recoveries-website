# Data Integrity & SEO Bug Bash Report

**Scope:** `src/data/posts.ts`, `src/data/publications.ts`, `src/data/team.ts`, `src/data/research.ts`, `src/components/seo/*`, `src/components/people/PersonCard.astro`, `src/pages/people.astro`

**Date:** 2026-02-09

---

## Bugs Found & Fixed

### 1. Double-prefixed DOI URLs in publications pipeline (Critical)

**Files affected:**
- `src/data/publications.ts` (lines 355, 730)
- `publications/analyzed/18-analysis.json` (lines 7-8)
- `publications/analyzed/46-analysis.json` (lines 7-8)
- `publications/publications_full.json` (lines 873, 885, 1806, 1820)
- `publications/extracted/Holt et al. (SAR Book) 2021.json` (line 19)
- `publications/extracted/Palmer et al. (Mutualisms) 2015.json` (line 21)
- `src/data/posts.ts` (regenerated automatically from analyzed JSON)

**Description:** Two publications (ID 23 / Holt et al. 2021, ID 48 / Palmer et al. 2015) had their `doi` field stored as a full URL (`https://doi.org/10.1017/...`) instead of just the identifier (`10.1017/...`). This caused two cascading problems:

1. In `publications.ts`, the `ScholarlyArticleSchema.astro` component constructs DOI links as `https://doi.org/${doi}`, producing broken double-prefixed URLs like `https://doi.org/https://doi.org/10.1017/9781108569422.017`.

2. In the news generation pipeline, `scripts/generate-news.cjs` reads `publications_full.json` where `doiUrl` was already double-prefixed (`https://doi.org/https://doi.org/...`). This propagated into `posts.ts` as broken `doiUrl` values and broken markdown links in article content (`[Read the full paper](https://doi.org/https://doi.org/...)`).

**Root cause:** The original CSV/enrichment step stored these two book chapter DOIs as full URLs. When `extract-pdfs.cjs` constructs `doiUrl` via `pub.doi_url || (pub.doi ? 'https://doi.org/' + pub.doi : '')`, the prefix was applied to an already-prefixed value.

**Fix:** Corrected the `doi` field to bare identifiers and `doiUrl` to single-prefixed URLs across all pipeline source files (extracted JSON, analyzed JSON, publications_full.json, publications.ts). Regenerated `posts.ts` via `node scripts/generate-news.cjs` to propagate the fix.

- `publications.ts` ID 23: `"https://doi.org/10.1017/9781108569422.017"` -> `"10.1017/9781108569422.017"`
- `publications.ts` ID 48: `"https://doi.org/10.1093/acprof:oso/9780199675654.003.0009"` -> `"10.1093/acprof:oso/9780199675654.003.0009"`
- All corresponding pipeline files updated to match.

### 2. HTML entity in journal name (Minor)

**File:** `src/data/publications.ts` (ID 38)

**Description:** The journal name for publication ID 38 contained an HTML entity: `"Nature Ecology &amp; Evolution"` instead of `"Nature Ecology & Evolution"`. This would render literally as `&amp;` in any context that doesn't HTML-decode the string (e.g., JSON-LD structured data, plain text rendering).

**Fix:** Changed `"Nature Ecology &amp; Evolution"` to `"Nature Ecology & Evolution"`.

### 3. Placeholder Google Scholar ID in OrganizationSchema (Moderate)

**File:** `src/components/seo/OrganizationSchema.astro` (line 74)

**Description:** The `sameAs` array contained a placeholder URL: `"https://scholar.google.com/citations?user=SCHOLAR_ID"`. This is invalid structured data that could confuse search engines and AI systems parsing the JSON-LD.

**Fix:** Replaced with the actual Google Scholar profile URL: `"https://scholar.google.com/citations?user=bxbOvMgAAAAJ"` (found by cross-referencing other files in the codebase that already use this ID).

---

## Bugs Found (Not Fixed)

### 1. Dead code: `actionImage` prop in PersonCard.astro

**File:** `src/components/people/PersonCard.astro`

The `Props` interface declares an `actionImage?: string` property, but it is never destructured from `Astro.props` or used anywhere in the component template. This is dead code. Not fixing because it has zero runtime impact and the property may be planned for future use.

### 2. Book chapters listed with "Scientific Journal" as journal name

**File:** `src/data/publications.ts` (IDs 23 and 48)

Publications 23 (Holt et al. 2021) and 48 (Palmer et al. 2015) are book chapters, not journal articles. Their `journal` field is set to `"Scientific Journal"` which is a generic placeholder. The actual sources are a chapter in *The Species-Area Relationship* (Cambridge University Press) and a chapter in *Mutualism* (Oxford University Press), respectively. Not fixing because this is a data quality/enrichment issue rather than a code bug, and the correct book/publisher metadata would require manual research to populate accurately.

---

## Verified OK

### posts.ts (77 posts)
- All 77 post slugs are unique -- no duplicates
- All `featuredImage` paths verified to exist in `public/images/`
- All `date` fields are valid ISO date format (YYYY-MM-DD)
- All `doiUrl` fields are properly single-prefixed (after fix)
- All markdown content links are well-formed (after fix)

### publications.ts (75 publications)
- All 75 publication IDs are unique and sequential (1-75)
- All required fields present: `id`, `title`, `authors`, `year`, `journal`, `doi`, `themes`
- All DOI values are bare identifiers (not full URLs) (after fix)
- No HTML entities in any field (after fix)
- Year values range from 2008-2025, all valid integers

### team.ts (6 current + 9 alumni)
- All 6 current team member image paths verified to exist in `public/images/`:
  - `/images/adrian.png`, `/images/raine.jpg`, `/images/adnan.jpg`, `/images/molly.jpg`, `/images/hayden.jpg`, `/images/jaden.jpg`
- All alumni images (where provided) verified to exist
- All email addresses are valid `@ucsb.edu` format
- All `role` values are valid enum members: `pi`, `postdoc`, `phd`, `manager`, `undergrad`
- `order` values are sequential (1-6) with no gaps or duplicates

### research.ts (2 systems + 3 pillars)
- All hero images, gallery images, and field site images verified to exist in `public/images/`
- Study system slugs (`coral-reefs`, `kelp-forests`) are unique
- Research pillar `id` values are unique
- All internal page links (`/publications`, `/news`, etc.) resolve to existing routes

### SEO Components (6 files)
- **OrganizationSchema.astro**: Valid JSON-LD with correct `@type: ResearchOrganization`, proper `sameAs` link (after fix), correct contact info
- **ScholarlyArticleSchema.astro**: Properly constructs `https://doi.org/${doi}` -- works correctly now that DOIs are bare identifiers
- **BreadcrumbSchema.astro**: Valid `BreadcrumbList` JSON-LD, properly generates breadcrumb items from props
- **PersonSchema.astro**: Valid `Person` JSON-LD with correct affiliation reference
- **ArticleSchema.astro**: Valid `Article` JSON-LD with proper author and publisher references
- **WebsiteSchema.astro**: Valid `WebSite` JSON-LD with `SearchAction` potentialAction
- **index.ts**: Clean barrel exports for all 6 schema components

### People Page
- **PersonCard.astro**: Card rendering logic correct, image fallback to initials works, flip card interaction intact, responsive layout verified, accessibility attributes present (`aria-label`, `role`)
- **people.astro**: Responsive grid layout renders all 6 current team members, alumni section renders all 9 alumni, "Join Us" CTA section links to `/join`, reduced motion media query present for accessibility, role badge colors correctly mapped for all 5 role types

### Build
- `npm run build` completes successfully: 0 errors, 0 warnings, 0 hints
- All 90 pages generated successfully
- Prebuild script (`generate-news.cjs`) runs cleanly, generating 77 news posts
