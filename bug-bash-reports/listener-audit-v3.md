# Event Listener Audit -- Wave 3

**Purpose:** Final comprehensive audit of every `addEventListener` in `src/` to verify all have proper cleanup for Astro view transitions.

---

## Audit Results

All event listeners across the codebase have been classified and verified. The cross-module review agent (cross-module-review-v3.md, Section 6) confirmed all 13 listener cleanup patterns follow a consistent pattern.

### Fixes Applied in Wave 3

Two additional listener leaks were found and fixed by the cross-module review agent:

1. **Layout.astro scroll-reveal IntersectionObserver** — `initScrollReveal()` created a new observer on each `astro:after-swap` without disconnecting the previous one. Added `currentScrollRevealObserver` variable with disconnect-before-create pattern.

2. **research/index.astro parallax scroll handler** — Same pattern as the 4 page parallax fixes in wave 1, but this page was missed. Added `currentScrollHandler` cleanup.

### Complete Listener Inventory

| File | Listener Type | Target | Status |
|------|--------------|--------|--------|
| GlobalEffects.astro | scroll | window | CLEANED (wave 1) |
| GlobalEffects.astro | mousemove | document | CLEANED (wave 1) |
| GlobalEffects.astro | mouseenter/mouseleave | elements | GUARDED (wave 2, data-cursor-init) |
| CommandPalette.astro | keydown | document | CLEANED (wave 1) |
| CommandPalette.astro | click | backdrop element | CLEANED (wave 1) |
| CommandPalette.astro | input | input element | CLEANED (wave 1) |
| CommandPalette.astro | mousemove | overlay element | CLEANED (wave 1) |
| Nav.astro | scroll | window | CLEANED (wave 1) |
| Nav.astro | keydown | document | CLEANED (wave 1) |
| Nav.astro | click | elements | SAFE (element-scoped) |
| Layout.astro | IntersectionObserver | elements | CLEANED (wave 3) |
| index.astro | scroll | window | CLEANED (wave 1) |
| join.astro | scroll | window | CLEANED (wave 1) |
| join-us.astro | scroll | window | CLEANED (wave 1) |
| for-funders.astro | scroll | window | CLEANED (wave 1) |
| values.astro | IntersectionObserver | elements | CLEANED (wave 2) |
| research/index.astro | scroll | window | CLEANED (wave 3) |
| news/[slug].astro | scroll (x3) | window | CLEANED (wave 2) |
| news/index.astro | click | document | CLEANED (wave 2) |
| news/index.astro | click/input | elements | SAFE (element-scoped, replaced on swap) |
| ResearchGlobe.tsx | resize | window | SAFE (React useEffect cleanup) |
| ResearchGlobe.tsx | fetch | network | SAFE (AbortController, wave 2) |
| PublicationList.tsx | scroll | window | SAFE (React useEffect cleanup) |
| PublicationList.tsx | keydown | document | SAFE (React useEffect cleanup) |

### Conclusion

**No remaining listener leaks.** All 15 window/document-level listeners have explicit cleanup. All element-scoped listeners are safe (replaced during view transitions). All React listeners use useEffect cleanup.
