# Wave 3 Cleanup Report

**Date:** 2026-02-09
**Scope:** Remove dead CSS and unused code identified in waves 1-2

## Changes Made

### 1. Dead CSS in `src/pages/for-funders.astro`

**Removed three dead CSS rules:**
- `.hero-outcomes` -- animation rule for a class not present in HTML (HTML uses `.hero-stats` instead)
- `.outcome-chip` -- styled class never used in HTML
- `.outcome-detail` -- styled class never used in HTML (HTML uses `.outcome-card`, `.outcome-number`, `.outcome-label`)

Also removed `.hero-outcomes` from the `prefers-reduced-motion` media query selector list.

### 2. Dead CSS in `src/pages/join.astro` and `src/pages/join-us.astro`

**Removed six dead CSS rules from both files:**
- `.apply-card` -- styled but never used in HTML (HTML uses `.apply-steps`, `.apply-step`)
- `.apply-title` -- styled but never used in HTML
- `.apply-desc` -- styled but never used in HTML
- `.apply-list` -- styled but never used in HTML
- `.apply-list li` -- styled but never used in HTML
- `.apply-list li svg` -- styled but never used in HTML

**Removed `.mentor-card` from the `prefers-reduced-motion` selector** in both files. No HTML element uses this class.

### 3. Dead class `section-header-row` in `src/pages/news/index.astro`

Removed the `class="section-header-row"` attribute from the `<div>` at line 247. No CSS rule defines this class anywhere in the codebase; the class attribute was a no-op.

### 4. Unused `escapeHtml` function in `src/pages/news/index.astro`

**Already removed** -- the function is not present in the current file. It was likely cleaned up in a prior session.

## Verification

- `npm run build` completed with **0 errors, 0 warnings**, 90 pages built successfully.

## Files Modified

| File | Change |
|------|--------|
| `src/pages/for-funders.astro` | Removed `.hero-outcomes`, `.outcome-chip`, `.outcome-detail` CSS rules + reduced-motion reference |
| `src/pages/join.astro` | Removed `.apply-card` family CSS rules + `.mentor-card` from reduced-motion |
| `src/pages/join-us.astro` | Removed `.apply-card` family CSS rules + `.mentor-card` from reduced-motion |
| `src/pages/news/index.astro` | Removed unused `class="section-header-row"` from HTML div |
