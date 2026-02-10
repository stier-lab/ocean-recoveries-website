# Publications & News Bug Bash Report -- Wave 2

**Scope:** `src/pages/publications.astro`, `src/pages/news/index.astro`, `src/pages/news/[slug].astro`, `src/components/publications/PublicationList.tsx`

**Date:** 2026-02-09

---

## Wave 1 Fixes Verified

All four wave 1 fixes were verified as correctly implemented:

1. **XSS fix in news filter tags** -- Confirmed. `updateActiveFilters()` uses safe DOM methods (`createElement`, `textContent`, `appendChild`) for all user-derived content. The only remaining `innerHTML` (line 1228) is a static SVG string with no user input. Fix is complete.

2. **Results count mismatch fix** -- Confirmed. Line 239 uses `{allPosts.length}` where `allPosts = sortedPosts.slice(3)`, correctly matching the number of filterable `.article-card` elements in the grid.

3. **Sort order DOM reordering fix** -- Confirmed. `filterPosts()` calls `articlesGrid.appendChild(card)` for each matching card after sorting (lines 1153-1156), correctly reordering cards in the DOM to reflect the selected sort.

4. **aria-hidden on decorative SVGs in publications.astro** -- Confirmed. All six SVGs in the Open Science section have `aria-hidden="true"` (lines 42, 87, 104, 118, 131, 151, 162).

---

## Bugs Fixed in Wave 2

### 1. Scroll event listener leaks in news/[slug].astro (Memory Leak -- Fixed)

**File:** `src/pages/news/[slug].astro`

**Problem:** `initArticle()` is called on both initial load and `astro:after-swap` (view transitions). Each call adds three `window.addEventListener('scroll', ...)` handlers (`updateProgress`, `toggleBackToTop`, `updateTocHighlight`) without removing the previous ones. During extended single-page navigation sessions, duplicate scroll handlers accumulate, causing gradual performance degradation.

**Fix:** Added three module-level variables (`currentProgressHandler`, `currentBackToTopHandler`, `currentTocHandler`) to store references to the current scroll handlers. At the start of `initArticle()`, any existing handlers are removed via `window.removeEventListener()` before new ones are attached. Each handler reference is stored immediately before calling `addEventListener`.

---

### 2. Document click listener leak in news/index.astro (Memory Leak -- Fixed)

**File:** `src/pages/news/index.astro`

**Problem:** `initNewsPage()` adds a global `document.addEventListener('click', closeDropdowns)` handler (for closing the year dropdown when clicking outside) on each invocation. Since `document` persists across Astro view transitions, this handler accumulates with each navigation to/from the news page. Unlike element-scoped listeners (which are cleaned up when elements are replaced by view transitions), the document-level click handler is never removed.

**Fix:** Added a module-level variable `currentCloseDropdownsHandler` to store the reference. At the start of `initNewsPage()`, the previous handler is removed from `document` via `removeEventListener()`. The new `closeDropdowns` function reference is stored before calling `addEventListener`.

---

## Bugs Not Fixed (Carried Forward from Wave 1)

### 3. Featured/secondary posts excluded from filtering (Design Limitation -- Skip)

**File:** `src/pages/news/index.astro`

The top 3 posts (1 featured + 2 secondary) are rendered outside the filterable grid. They remain visible regardless of active filters. This is a design limitation, not a bug.

### 4. Empty alt="" on news article images (Minor -- Skip)

**File:** `src/pages/news/index.astro` (lines 89, 141, 265)

Article featured images use `alt=""` marking them as decorative. The featured hero image (line 89) could benefit from meaningful alt text but this is minor since the title and excerpt provide text context.

### 5. Undefined CSS class `section-header-row` (Dead Code -- Skip)

**File:** `src/pages/news/index.astro` (line 247)

The class `section-header-row` has no matching CSS rule. The child `.section-label` has its own styling so there is no visual impact. This is cosmetic dead code.

---

## New Issues Found (Not Fixed)

No new functional bugs, security issues, or significant accessibility problems were found in wave 2.

### Items reviewed and verified OK:

- **Author highlight in PublicationList.tsx** (line 447): The `highlightAuthor()` function only wraps regex-matched "Stier AC/A" with `<strong>` tags in developer-controlled publication data. The data source is `src/data/publications.ts`, not user input. Not a security concern.
- **`set:html` in [slug].astro** (lines 299, 312, 314): Renders markdown formatting from `post.content` in `src/data/posts.ts`. This is build-time SSG rendering of developer-controlled data, not runtime user input. No XSS risk.
- **IntersectionObserver in news/index.astro**: New observers are created on each `initNewsPage()` call, but they self-clean via `unobserve()` on intersection and lose targets on DOM swap. Not a significant leak.
- **Element-scoped listeners in news/index.astro**: Listeners on `.pill`, `.dropdown-item`, `searchInput`, `clearSearch`, `oaFilter`, `sortSelect`, `loadBtn`, `clearAllBtn`, `yearBtn` are all attached to DOM elements that get replaced during view transitions. These do not leak.
- **PublicationList.tsx React component**: Uses proper `useEffect` cleanup for both `scroll` and `keydown` listeners (lines 59-61 and 74-76). No leak possible in the React lifecycle.
- **Publications page (publications.astro)**: No client-side JavaScript. Pure SSG. No listener concerns.
- **Dynamic routes**: `getStaticPaths()` in [slug].astro correctly returns all post slugs.
- **Responsive layout and reduced motion**: Both verified in wave 1, still intact.

---

## Summary

| # | Issue | Severity | Status |
|---|-------|----------|--------|
| 1 | Scroll listener leaks in [slug].astro | Memory Leak | Fixed (wave 2) |
| 2 | Document click listener leak in index.astro | Memory Leak | Fixed (wave 2) |
| 3 | Featured posts excluded from filtering | Design Limitation | Skip |
| 4 | Empty alt="" on news images | Minor a11y | Skip |
| 5 | Dead CSS class `section-header-row` | Cosmetic | Skip |

Build verified: `npm run build` completes successfully with no errors after all fixes.
