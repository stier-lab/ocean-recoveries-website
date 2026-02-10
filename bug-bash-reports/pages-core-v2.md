# Pages Core Bug Bash Report -- Wave 2

Scope: `src/pages/index.astro`, `src/pages/values.astro`, `src/pages/privacy.astro`, `src/pages/accessibility.astro`, `src/pages/join.astro`, `src/pages/join-us.astro`, `src/pages/for-funders.astro`

## Wave 1 Fix Verification

All six wave 1 fixes verified correct and complete:

1. **CSS `.funders-logos` -> `.funders-strip` in index.astro** -- Confirmed. Line 586 now reads `.funders-strip { @apply gap-6; }` inside the mobile media query, matching the HTML class on line 481. Fix is correct.

2. **Scroll listener cleanup in index.astro** -- Confirmed. Lines 1637-1667 use the `currentScrollHandler` pattern: the previous handler is removed before attaching a new one in `initParallax()`, and the handler reference is stored for cleanup. Pattern is correct.

3. **Scroll listener cleanup in join.astro** -- Confirmed. Lines 1470-1506. Same correct pattern as index.astro.

4. **Scroll listener cleanup in join-us.astro** -- Confirmed. Lines 1762-1792. Same correct pattern as index.astro.

5. **Scroll listener cleanup in for-funders.astro** -- Confirmed. Lines 976-1009. Same correct pattern as index.astro.

6. **`.hero-stats` added to reduced-motion in for-funders.astro** -- Confirmed. Line 957 includes `.hero-stats` in the `prefers-reduced-motion: reduce` selector, alongside `.hero-badge`, `.hero-title`, `.hero-description`, etc. Fix is correct.

## Bugs Found & Fixed

### Bug 1: IntersectionObserver leak in values.astro

**File:** `src/pages/values.astro`, lines 499-529

**Problem:** The `initActiveNav()` function creates a new `IntersectionObserver` on every call, including re-initialization via `astro:after-swap`. However, the previous observer is never disconnected. During view transitions, stale observers accumulate, continuing to fire callbacks against detached DOM nodes. This is the same class of resource leak as the scroll listener bugs fixed in wave 1.

**Fix:** Added a `currentObserver` variable to track the active `IntersectionObserver`. At the start of each `initActiveNav()` call, the previous observer is disconnected before creating a new one.

-- FIXED

### Bug 2: Missing `cost-card` and `funder-card` from reduced-motion selector in for-funders.astro

**File:** `src/pages/for-funders.astro`, lines 965-970

**Problem:** The `.cost-card` and `.funder-card` elements both have CSS hover transitions (`:hover { -translate-y-1; transition-all duration-300; }`) but were not included in the `prefers-reduced-motion: reduce` media query. Users who prefer reduced motion would still see translate/transition effects on these cards. Other similar cards in the file (`.tier-card`, `.capability-card`, `.partner-item`) were already covered.

**Fix:** Added `.cost-card` and `.funder-card` to the existing reduced-motion `transition: none` rule block.

-- FIXED

## Bugs Found (Not Fixed -- Dead CSS)

The following are dead CSS rules (styles defined but never used in HTML). These are not runtime bugs and cause no user-visible issues, but they slightly increase CSS payload. Listed for completeness; no fix applied.

- **for-funders.astro:** `.hero-outcomes` (lines 603-606), `.outcome-chip` (lines 623-627), `.outcome-detail` (lines 738-740) -- CSS rules exist but no HTML element uses these classes. Likely leftover from a removed hero layout.

- **join.astro and join-us.astro:** `.apply-card` (line 1099/1412), `.apply-title` (line 1103/1416), `.apply-desc` (line 1107/1420), `.apply-list` (line 1111/1424), `.apply-list li` (line 1115/1428), `.apply-list li svg` (line 1119/1432) -- CSS rules exist but the HTML uses `.apply-step` / `.apply-step-number` / `.apply-step-content` instead. The `.apply-card` etc. classes are never referenced in HTML.

- **join.astro and join-us.astro:** `.mentor-card` referenced in reduced-motion selector (line 1449/1727) but never used in HTML. This means the reduced-motion rule targets a non-existent element, which is harmless but wasteful.

## Verified OK

### Wave 1 Patterns
- All four scroll listener cleanup patterns confirmed correct (store reference, remove before re-add, null check)
- CSS `.funders-strip` fix confirmed matching HTML
- `.hero-stats` reduced-motion fix confirmed present and correct

### Image References
- All images across all 7 pages verified present in `public/images/`
- No new broken image references since wave 1

### Internal Links
- All internal links verified valid (same as wave 1, no changes to links)

### JavaScript / Script Tags
- **index.astro:** Parallax script with cleanup -- correct
- **values.astro:** IntersectionObserver now has cleanup -- correct (fixed in this wave)
- **join.astro:** Parallax script with cleanup -- correct
- **join-us.astro:** Parallax + quiz scripts with cleanup -- correct. Quiz DOM references all null-checked before use. Quiz event listeners are attached to specific DOM elements (not window), so they are automatically cleaned up when the DOM is replaced during view transitions.
- **for-funders.astro:** Parallax script with cleanup -- correct
- **privacy.astro:** No scripts -- correct
- **accessibility.astro:** No scripts -- correct

### Accessibility
- All `prefers-reduced-motion: reduce` selectors reviewed. All elements with `opacity: 0` initial state + animation are covered by reduced-motion rules that set `opacity: 1`.
- `privacy.astro` and `accessibility.astro`: `.page-title` uses `animation: fadeUp` but does NOT set `opacity: 0` as an initial CSS property (the animation handles it with `from { opacity: 0 }`), and the reduced-motion rule disables the animation. Since there is no initial `opacity: 0` on the element itself, the title remains visible. No bug.
- All images have alt text
- All decorative elements have `aria-hidden="true"`
- Breadcrumbs have `aria-label="Breadcrumb"` and `aria-current="page"`
- Quiz buttons in join-us.astro have visible focus indicators (`:focus { ring-2 ring-accent }`)

### Heading Hierarchy
- All 7 pages maintain correct h1 > h2 > h3 > h4 hierarchy (unchanged from wave 1)

### Build
- `npm run build` completes with 0 TypeScript errors across all scoped files
- Pre-existing build error in `research.astro.mjs` (outside scope) does not affect our pages
