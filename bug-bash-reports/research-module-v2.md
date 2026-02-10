# Research Module Bug Bash Report -- Wave 2

**Scope:** `src/pages/research/index.astro`, `src/pages/research/[slug].astro`, `src/components/research/ResearchGlobe.tsx`, `src/components/research/StudySitesMap.tsx`, `src/data/research.ts`

**Date:** 2026-02-09

---

## Wave 1 Verification

Wave 1 found no bugs. Wave 2 confirmed wave 1 findings and went deeper.

---

## Bugs Found & Fixed

### 1. ResearchGlobe.tsx -- Missing cleanup for async fetch and dynamic import (Race Condition / Memory Leak)

**File:** `src/components/research/ResearchGlobe.tsx`

**Problem:** The `useEffect` depending on `dimensions` had no cleanup function. When the component re-renders with new dimensions (e.g., window resize), the previous `loadWorldData()` async operation continues running. If it completes after the new effect starts, it could write to stale DOM references. Additionally, the `fetch` call had no `AbortController` to cancel in-flight network requests.

**Fix:** Added a `cancelled` flag and `AbortController`. The fetch uses `signal: abortController.signal`, and all post-fetch operations check `cancelled` before proceeding. The cleanup function sets `cancelled = true` and aborts the controller.

---

### 2. GlobalEffects.astro -- Duplicate cursor interactivity listeners on interactive elements

**File:** `src/components/shared/GlobalEffects.astro`

**Problem:** `addInteractivity()` attaches `mouseenter`/`mouseleave` listeners to interactive elements (buttons, links, etc.) on every call. Since these are anonymous functions on DOM elements (not window/document), they cannot be de-duplicated by `removeEventListener`. After view transitions, elements that persist get duplicate listeners.

**Fix:** Added a `data-cursor-init` attribute check to skip elements that already have listeners attached.

---

## Verified OK

- ResearchGlobe resize listener cleanup was already correct (wave 1 finding confirmed)
- StudySitesMap has no side effects that need cleanup (pure React state)
- Both page files' IntersectionObservers self-clean via `unobserve`
- All image references and links verified
