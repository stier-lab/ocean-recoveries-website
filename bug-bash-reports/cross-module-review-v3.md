# Cross-Module Review -- Wave 3

**Date:** 2026-02-09
**Purpose:** Verify that parallel edits from waves 1 and 2 (33 bugs fixed by 6 agents) did not introduce cross-scope conflicts, duplicate code, or regressions.

---

## 1. Wave 2 Report Summary

All 6 wave 2 reports read in full:

| Report | Wave 1 Fixes Verified | Wave 2 Fixes | Key Findings |
|--------|-----------------------|--------------|--------------|
| build-perf-v2 | 2 (slugify, escDQ) | 3 (leaflet removal, pdf-parse move, dead animation) | Dependency cleanup + Tailwind config trim |
| pages-core-v2 | 6 (CSS fix, 4 scroll cleanups, reduced-motion) | 2 (IO leak in values.astro, cost-card/funder-card reduced-motion) | Dead CSS noted but not fixed |
| publications-news-v2 | 4 (XSS, results count, sort reorder, aria-hidden) | 2 (scroll leaks in [slug].astro, document click leak in news/index) | Featured post exclusion noted as design limitation |
| data-integrity-v2 | 3 (DOI, HTML entity, Scholar ID) | 0 | 2 missing publications noted (data gap, not code bug) |
| research-module-v2 | 0 (wave 1 found none) | 2 (ResearchGlobe fetch abort, cursor interactivity guard) | Race condition + duplicate listener fixes |
| layout-shared-v2 | 7 (all 7 wave 1 fixes) | 2 (body scroll restore, cursor interactivity guard) | Confirmed same GlobalEffects fix as research-module |

**Total: 22 wave 1 fixes verified, 11 wave 2 fixes applied.**

---

## 2. Multi-Agent File Conflict Analysis

### 2.1 GlobalEffects.astro (edited by layout-shared + research-module agents)

**Wave 1 (layout-shared):** Added `scrollCleanup` and `cursorCleanup` variables for listener removal; added `cancelAnimationFrame` for rAF loop cleanup; added `__cursorObserver.disconnect()` in cleanup.

**Wave 2 (research-module + layout-shared):** Added `data-cursor-init` attribute guard to `addInteractivity()` to prevent duplicate mouseenter/mouseleave on persistent DOM elements. Also added `data-magnetic-init` guard for magnetic buttons.

**Verdict: NO CONFLICT.** These fixes are complementary:
- Wave 1 cleanup handles global resources (mousemove listener, rAF loop, MutationObserver)
- Wave 2 guard handles per-element listener deduplication
- The `data-cursor-init` guard appears exactly once (lines 175-176)
- The `data-magnetic-init` guard appears exactly once (lines 206-207)
- No duplicate code, no conflicting logic
- Both the `__cursorObserver` and `__magneticObserver` globals are properly disconnected before re-creation (lines 185, 234)

### 2.2 CommandPalette.astro (edited by layout-shared agents in both waves)

**Wave 1:** Extracted anonymous listeners into named references; added `cmdCleanup` variable that removes keydown, backdrop click, input, and mousemove handlers + clears debounce timer.

**Wave 2:** Added mobile menu check in `close()` -- only restores `document.body.style.overflow` if `#mobile-menu` is not also open.

**Verdict: NO CONFLICT.** The wave 2 change is a 3-line addition inside the `close()` function (lines 357-361). It does not touch any of the listener cleanup logic from wave 1. The cleanup function at lines 560-566 remains intact and correct.

### 2.3 for-funders.astro (edited by pages-core agents in both waves)

**Wave 1:** Added scroll handler cleanup pattern for parallax; added `.hero-stats` to `prefers-reduced-motion` selector.

**Wave 2:** Added `.cost-card` and `.funder-card` to the same `prefers-reduced-motion` selector.

**Verdict: NO CONFLICT.** Wave 1 added `.hero-stats` to the animation/opacity block (line 957). Wave 2 added `.cost-card` and `.funder-card` to the transition block (lines 967-968). These are different CSS rule blocks within the same `@media` query -- one for `animation: none; opacity: 1;` and one for `transition: none;`. The combined reduced-motion section (lines 952-973) is coherent and complete.

### 2.4 package.json (edited by build-perf agent)

**Wave 2:** Removed `leaflet` (^1.9.4) and `@types/leaflet` (^1.9.21) from dependencies; moved `pdf-parse` (^1.1.1) from dependencies to devDependencies.

**Verdict: MINOR ISSUE RESOLVED.** The packages were removed from `package.json` but `node_modules` was not synced. Running `npm ls` showed both leaflet packages as "extraneous." Running `npm install` during this review removed the 2 stale packages. The dependency tree is now clean with no extraneous or missing entries. The build passes identically before and after this cleanup.

---

## 3. Build Verification

```
$ npm run build

> node scripts/generate-news.cjs
Generated 77 news posts

> astro check && astro build
Result (44 files): 0 errors, 0 warnings, 0 hints
90 page(s) built in 3.86s
Complete!
```

Build passes cleanly. The only warning is the known Vite mixed-import notice for `team.ts` (OrganizationSchema dynamically imports what other files statically import), which is a pre-existing cosmetic warning with no functional impact.

---

## 4. Dependency Tree Verification

```
$ npm ls
ocean-recoveries-website@1.0.0
+-- @astrojs/check@0.9.6
+-- @astrojs/react@3.6.3
+-- @astrojs/sitemap@3.6.0
+-- @astrojs/tailwind@5.1.5
+-- @playwright/test@1.57.0
+-- @types/d3@7.4.3
+-- @types/react-dom@18.3.7
+-- @types/react@18.3.27
+-- @types/topojson-client@3.1.5
+-- astro@4.16.19
+-- d3-geo@3.1.1
+-- d3@7.9.0
+-- framer-motion@11.18.2
+-- pdf-parse@1.1.1
+-- react-dom@18.3.1
+-- react@18.3.1
+-- tailwindcss@3.4.19
+-- topojson-client@3.1.0
+-- typescript@5.9.3
```

No extraneous packages. No missing packages. No peer dependency warnings at top level. `pdf-parse` correctly appears in devDependencies. `leaflet` and `@types/leaflet` are gone.

---

## 5. TODO/FIXME/HACK/XXX Audit

**Source code (src/):**
- `src/data/team.ts:99` -- `// TODO: Add Jada's current position when available`
- `src/data/team.ts:115` -- `// TODO: Add Emily's current position when available`

These are pre-existing data TODOs in alumni records, not unfinished bug bash work. Both refer to alumni whose current positions are unknown. No action required.

**Scripts:** None found.

**Publications extracted text (JSON):** Several matches in `publications/extracted/*.json` for words like "TODO" appearing in extracted academic paper text (e.g., discussion of "FIXME" statistical methods). These are content from PDFs, not developer comments. No action required.

**No TODO/FIXME/HACK/XXX markers were introduced by any bug bash agent.**

---

## 6. Cross-Pattern Consistency Check

All 13 event listener cleanup fixes across the codebase follow the same pattern:

```typescript
let currentHandler: (() => void) | null = null;

const init = () => {
  if (currentHandler) {
    window.removeEventListener('event', currentHandler);
    currentHandler = null;
  }
  // ... setup ...
  currentHandler = handler;
  window.addEventListener('event', handler, { passive: true });
};

init();
document.addEventListener('astro:after-swap', init);
```

Verified this pattern is consistently applied in:
- `GlobalEffects.astro` (scrollCleanup, cursorCleanup)
- `CommandPalette.astro` (cmdCleanup with 4 listeners)
- `Nav.astro` (navCleanup)
- `index.astro` (currentScrollHandler)
- `join.astro` (currentScrollHandler)
- `join-us.astro` (currentScrollHandler)
- `for-funders.astro` (currentScrollHandler)
- `values.astro` (currentObserver -- IntersectionObserver variant)
- `news/[slug].astro` (3 separate scroll handlers)
- `news/index.astro` (document click handler)

No inconsistencies found.

---

## 7. Conclusion

**No cross-scope conflicts or regressions detected.** All parallel edits across waves 1 and 2 are coherent and complementary. The combined changes in shared files (GlobalEffects.astro, CommandPalette.astro, for-funders.astro, package.json) are logically consistent with no overlapping or contradictory modifications.

The only action taken during this review was running `npm install` to sync `node_modules` with the updated `package.json` (removing stale leaflet packages). This is a cleanup step, not a code fix.

| Check | Result |
|-------|--------|
| Multi-agent file conflicts | None |
| Build (astro check + astro build) | Pass (0 errors, 90 pages) |
| Dependency tree | Clean (no extraneous/missing) |
| TODO/FIXME/HACK/XXX | 2 pre-existing data TODOs (not from bug bash) |
| Cross-pattern consistency | All 13 listener cleanups follow same pattern |
| Regressions | None detected |
