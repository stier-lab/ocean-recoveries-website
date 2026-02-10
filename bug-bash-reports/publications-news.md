# Publications & News Bug Bash Report

**Scope:** `src/pages/publications.astro`, `src/pages/news/index.astro`, `src/pages/news/[slug].astro`, `src/components/publications/PublicationList.tsx`

**Date:** 2026-02-09

---

## Bugs Found & Fixed

### 1. XSS vulnerability in news filter tags (Critical)

**File:** `src/pages/news/index.astro` (lines ~1202-1211)

**Problem:** The `updateActiveFilters()` function injected user search input directly into `innerHTML` without sanitization. A user typing `<img src=x onerror=alert(1)>` into the search field would have that rendered as HTML when the active filter tag was displayed.

**Fix:** Replaced `innerHTML` template literal construction with safe DOM methods (`document.createElement`, `textContent`, `appendChild`). User input is now set via `textContent` which auto-escapes HTML entities.

---

### 2. Results count mismatch on news index page (Functional)

**File:** `src/pages/news/index.astro` (line 239)

**Problem:** The server-rendered results count showed `sortedPosts.length` (all posts, e.g., 77), but the JavaScript filter system only operates on `.article-card` elements in the "All Articles" grid, which excludes the 3 featured/secondary posts (`sortedPosts.slice(3)`, e.g., 74). On page load, the count would visibly jump from 77 to 74 when JavaScript initialized.

**Fix:** Changed the initial count from `{sortedPosts.length}` to `{allPosts.length}` so it matches the number of filterable cards in the grid.

---

### 3. Sort order not reflected visually in news grid (Functional)

**File:** `src/pages/news/index.astro` (inside `filterPosts()`)

**Problem:** When the user changed the sort order (e.g., "Newest" to "Oldest"), the `sortPosts()` function sorted the `matchingCards` array in memory, but the cards were only shown/hidden via `classList.toggle('hidden')` without being reordered in the DOM. Cards appeared in their original server-rendered order regardless of the selected sort.

**Fix:** Added `articlesGrid.appendChild(card)` for each matching card after sorting. Moving an existing DOM node via `appendChild` re-inserts it at the end, effectively reordering the grid to match the sort.

---

### 4. Missing `aria-hidden="true"` on decorative SVG icons in publications page (Accessibility)

**File:** `src/pages/publications.astro` (lines 86, 104, 117, 130, 150, 161)

**Problem:** Six decorative SVG icons in the Open Science section (eyebrow icon, three stat card icons, GitHub icon, Google Scholar icon) were missing `aria-hidden="true"`, causing screen readers to announce them as meaningless graphic elements.

**Fix:** Added `aria-hidden="true"` to all six SVGs.

---

## Bugs Found (Not Fixed)

### 5. Scroll event listeners leak on Astro view transitions (Memory Leak)

**Files:** `src/pages/news/index.astro`, `src/pages/news/[slug].astro`

**Problem:** Both `initNewsPage()` and `initArticle()` are called on `astro:after-swap` (view transitions) but add new `scroll` event listeners without removing previous ones. Each navigation adds duplicate handlers. In `[slug].astro`, this means `updateProgress`, `toggleBackToTop`, and `updateTocHighlight` accumulate. In `index.astro`, the global `click` listener for `closeDropdowns` also accumulates.

**Impact:** Gradual performance degradation during extended single-page navigation sessions. Each additional scroll handler runs on every scroll event.

**Suggested fix:** Store references to event handlers and call `removeEventListener` at the beginning of each `init` function, or use `AbortController` signal pattern.

---

### 6. Featured/secondary posts excluded from filtering on news index (Design Limitation)

**File:** `src/pages/news/index.astro`

**Problem:** The top 3 posts (featured main + 2 secondary) are rendered outside the filterable grid. When a user searches or filters by tag/year, these 3 posts remain visible regardless of whether they match the filter criteria. This can be confusing if the user filters for "Kelp" and the featured post is about coral.

**Impact:** Minor UX inconsistency.

---

### 7. Empty `alt=""` on news article images (Accessibility)

**File:** `src/pages/news/index.astro` (lines 89, 141, 265)

**Problem:** All `<img>` tags for article featured images use `alt=""` (empty alt text), marking them as decorative. However, these images are inside links to articles and represent meaningful content (the article's visual). Screen reader users navigating the featured section would get no image context. The images in the article grid cards (line 265) are less critical since the card contains the title and excerpt, but the featured image (line 89) is a large hero element that should convey content.

**Impact:** Screen reader users miss visual context for article imagery.

**Note:** In `PublicationList.tsx` (line 374), the `alt=""` on publication images is acceptable since each publication card has clear title, author, and journal text that fully describes the content.

---

### 8. Undefined CSS class `section-header-row` (Cosmetic)

**File:** `src/pages/news/index.astro` (line 247)

**Problem:** The class `section-header-row` is applied to a div but has no matching CSS rule anywhere in the scoped styles or global stylesheets.

**Impact:** No visual impact since the child `.section-label` has its own styling. The unused class is just dead code.

---

## Verified OK

- **Image references:** All 77 `featuredImage` paths in `src/data/posts.ts` correspond to actual files in `public/images/`. No broken image references found.
- **Publication data binding:** `enrichPublicationsWithImages()` in `src/utils/publicationImages.ts` correctly maps publications to news posts via DOI matching. The `Publication` interface fields (`id`, `title`, `authors`, `year`, `journal`, `doi`, `abstract`, `themes`, `featured`, `openAccess`, `dataAvailable`, `pdfUrl`, `codeUrl`, `citationCount`) are all properly accessed in `PublicationList.tsx` with optional chaining where needed.
- **Dynamic routes:** `news/[slug].astro` correctly uses `getStaticPaths()` returning all post slugs. No risk of undefined access on `post` since Astro guarantees the prop exists for static paths.
- **PublicationList.tsx state management:** `useDebounce` hook works correctly. `useMemo` dependencies are properly listed. `filteredPubs` depends on `[publications, selectedThemes, debouncedSearch, sortBy, openAccessOnly]` which is complete. `visiblePubs` depends on `[filteredPubs, visibleCount]` which is complete.
- **PublicationList.tsx filtering logic:** Theme filter uses `some()` for OR logic across selected themes. Open access filter, search, and sort all chain correctly. Pagination with `visibleCount` and `ITEMS_PER_PAGE` works properly.
- **PublicationList.tsx keyboard navigation:** "/" shortcut focuses search, Escape blurs it, all buttons have focus styles and `aria-pressed`/`aria-expanded`/`aria-label` attributes.
- **Responsive layout:** Publications page uses `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))` with mobile fallback to single column. News page grid uses responsive Tailwind classes (`sm:grid-cols-2 lg:grid-cols-3`). Featured grid uses `lg:grid-cols-5` split. All verified reasonable.
- **Reduced motion:** Both pages include `@media (prefers-reduced-motion: reduce)` rules that disable animations and transforms.
- **News [slug] page:** Reading progress bar, back-to-top button, copy citation, copy link, TOC scroll spy, and share buttons all have proper null checks and graceful degradation.
- **`allThemes` export:** Correctly derived from publications data as `[...new Set(publications.flatMap(p => p.themes))].sort()`.
