# Layout & Shared Bug Bash Report -- Wave 2

**Scope:** `src/components/layout/Nav.astro`, `src/components/layout/Footer.astro`, `src/components/layout/Breadcrumbs.astro`, `src/components/shared/CommandPalette.astro`, `src/components/shared/GlobalEffects.astro`, `src/components/shared/ThemeToggle.astro`, `src/layouts/Layout.astro`, `src/styles/global.css`

**Date:** 2026-02-09

---

## Wave 1 Verification

All 8 wave 1 fixes verified correct:
1. Nav.astro `navCleanup` pattern -- properly removes all listeners
2. GlobalEffects.astro `scrollCleanup` -- handles first-run null case
3. GlobalEffects.astro `cursorCleanup` -- removes mousemove + cancels rAF
4. CommandPalette.astro `cmdCleanup` -- removes all 4 listener types + clears debounce
5. Nav.astro focus return on Escape -- confirmed `mobileMenuButton.focus()` called
6. Layout.astro og:image absolute URL -- confirmed using `new URL()` construction
7. global.css duplicate font-face removed -- confirmed single Google Fonts source

---

## Bugs Found & Fixed

### 1. CommandPalette.astro -- Body scroll not restored when mobile menu is open

**File:** `src/components/shared/CommandPalette.astro`

**Problem:** When the command palette closes, it resets `document.body.style.overflow = ''`. But if the mobile menu is also open (which also sets `overflow: hidden`), closing the palette restores scrolling while the menu is still visible, allowing the page to scroll behind the menu overlay.

**Fix:** Added a check: only restore body overflow if the mobile menu is not currently open (check `#mobile-menu.open`).

### 2. GlobalEffects.astro -- Duplicate cursor interactivity listeners (see research-module-v2.md)

Same fix as noted in research-module-v2.md -- added `data-cursor-init` guard.

---

## Verified OK

- All listener cleanup patterns handle edge cases correctly
- No regressions from wave 1 fixes
- Footer, Breadcrumbs, ThemeToggle unchanged and clean
