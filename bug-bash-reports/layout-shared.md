# Layout & Shared Bug Bash Report

## Bugs Found & Fixed

### 1. Nav.astro - Event listener accumulation across view transitions (memory leak)

**File:** `src/components/layout/Nav.astro`
**Severity:** Medium
**Description:** The `initNav()` function registers event listeners on `window` (scroll), `document` (keydown), and DOM elements (click) every time it runs. Since Nav uses `transition:persist`, the DOM element persists between page navigations, but `initNav` re-runs on each `astro:after-swap` event. This stacks duplicate listeners -- after 5 page navigations, the scroll handler fires 5 times per scroll event, and pressing Escape triggers 5 closeMobileMenu calls.
**Fix:** Added a `navCleanup` variable that stores a cleanup function. Each call to `initNav()` first invokes the previous cleanup to remove old listeners before registering new ones. All event listeners are now stored as named references so they can be properly removed.

### 2. Nav.astro - Escape key does not return focus to the mobile menu button

**File:** `src/components/layout/Nav.astro`
**Severity:** Low (accessibility)
**Description:** When the mobile menu is closed via the Escape key, focus is not returned to the menu toggle button. Keyboard users lose their focus position. WCAG 2.1 SC 2.4.3 (Focus Order) recommends returning focus to the triggering element when closing a modal-like overlay.
**Fix:** Added `mobileMenuButton.focus()` after `closeMobileMenu()` in the Escape key handler.

### 3. GlobalEffects.astro - Scroll event listener accumulation (memory leak)

**File:** `src/components/shared/GlobalEffects.astro`
**Severity:** Medium
**Description:** `initScrollProgress()` adds a new `scroll` event listener on every call via `astro:after-swap`, but never removes previous listeners. After N page navigations, N scroll handlers fire on every scroll event, degrading performance.
**Fix:** Added a `scrollCleanup` variable to track and remove the previous scroll listener before adding a new one.

### 4. GlobalEffects.astro - Custom cursor mousemove listener accumulation (memory leak)

**File:** `src/components/shared/GlobalEffects.astro`
**Severity:** Medium
**Description:** `initCustomCursor()` adds a new `mousemove` listener on `document` each time it runs via `astro:after-swap`, without removing the old one. Each mousemove event then triggers multiple handler invocations.
**Fix:** Added a `cursorCleanup` variable that removes the previous `mousemove` listener and also cancels the previous `requestAnimationFrame` loop before starting fresh.

### 5. GlobalEffects.astro - requestAnimationFrame loop never cancelled (memory leak)

**File:** `src/components/shared/GlobalEffects.astro`
**Severity:** Medium
**Description:** The `animateCursor()` function starts a new `requestAnimationFrame` loop each time `initCustomCursor()` runs, but the old loop is never cancelled via `cancelAnimationFrame()`. After N view transitions, N concurrent rAF loops are running, each updating cursor position unnecessarily.
**Fix:** Store the rAF ID in `animFrameId` and call `cancelAnimationFrame(animFrameId)` during cleanup.

### 6. CommandPalette.astro - Keydown listener accumulation across view transitions (memory leak)

**File:** `src/components/shared/CommandPalette.astro`
**Severity:** Medium-High
**Description:** `initCommandPalette()` registers a new anonymous `keydown` listener on `document` each time it runs via `astro:after-swap`. Since anonymous functions cannot be removed, after N navigations, pressing Cmd+K triggers N open/close cycles, and pressing Escape triggers N close calls. This is the most impactful listener leak because keyboard events fire frequently and the handler logic is non-trivial.
**Fix:** Extracted the keydown handler, input handler, backdrop click handler, and mousemove handler into named functions. Added a `cmdCleanup` variable that removes all listeners before re-adding them on re-initialization.

### 7. Layout.astro - og:image and twitter:image use relative URL

**File:** `src/layouts/Layout.astro`
**Severity:** Medium (SEO)
**Description:** The `og:image` and `twitter:image` meta tags use the `image` prop directly, which defaults to `/images/og-default.jpg` (a relative path). The Open Graph Protocol specification requires `og:image` to be an absolute URL (https://...). Social media crawlers (Facebook, Twitter, LinkedIn, Slack) will fail to display the preview image when sharing links because they cannot resolve relative paths.
**Fix:** Added an `absoluteImage` variable that converts relative image paths to absolute URLs using `new URL(image, Astro.site || Astro.url.origin).href`. Updated both `og:image` and `twitter:image` meta tags to use `absoluteImage`.

### 8. global.css - Duplicate font loading (performance)

**File:** `src/styles/global.css`
**Severity:** Low (performance)
**Description:** The Inter font was loaded twice: once via a `@font-face` declaration in `global.css` pointing to a single woff2 file (Latin subset only), and again via the Google Fonts `<link>` tag in `Layout.astro` which serves the full font with all subsets and proper unicode-range splitting. The duplicate `@font-face` causes the browser to potentially fetch the same font resource twice.
**Fix:** Removed the redundant `@font-face` declaration from `global.css`. The Google Fonts link in `Layout.astro` already handles font loading with `display=swap` and proper subset management.


## Bugs Found (Not Fixed)

### 1. Nav.astro - Desktop research dropdown not keyboard-accessible for Enter/Space activation

**File:** `src/components/layout/Nav.astro`
**Severity:** Low (accessibility)
**Description:** The desktop research dropdown relies on CSS `:hover` and `:focus-within` to show/hide the dropdown. While `:focus-within` provides basic keyboard support (tabbing into the dropdown works), there is no explicit keyboard handling for opening the dropdown with Enter or Space, and `aria-expanded` is not toggled on the dropdown trigger. The `aria-haspopup="true"` attribute is present but `aria-expanded` is missing. This is a minor WCAG 2.1 SC 4.1.2 conformance gap, though the CSS `:focus-within` approach provides workable keyboard access.

### 2. CommandPalette.astro - Mousemove data-index mismatch between quick actions and search results

**File:** `src/components/shared/CommandPalette.astro`
**Severity:** Low
**Description:** Both quick action items and dynamically rendered search result items use `data-index` starting at 0. The mousemove handler reads `data-index` and sets `activeIndex` to that value. However, `updateActiveItems()` re-queries the visible items each time, so the actual items array is rebuilt. If a user moves the mouse after the visible context switches (e.g., results appear), the `data-index` on stale DOM elements could briefly be out of sync with `currentItems`. In practice this is unlikely to cause a visible issue because `updateActiveItems` reconciles state, but the logic is fragile.

### 3. Nav.astro - Mobile menu missing research sub-items

**File:** `src/components/layout/Nav.astro`
**Severity:** Low (UX, not a bug)
**Description:** The mobile menu renders a flat list of top-level nav links but does not include the research sub-items (Coral Reefs, Kelp Forests) that are available in the desktop dropdown. Mobile users must navigate to `/research` first and then find links to sub-pages. This is a UX gap rather than a bug, but worth noting.


## Verified OK

- **Footer.astro:** All quick links (`/research`, `/people`, `/publications`, `/join`, `/values`, `/for-funders`) map to existing pages. Social links (Instagram, Google Scholar, ORCID, GitHub) use valid external URLs with proper `target="_blank"` and `rel="noopener noreferrer"`. Email link is correct (`astier@ucsb.edu`). Bottom bar links (`/privacy`, `/accessibility`) map to existing pages. Footer navigation has proper `aria-label`. Social icons have `aria-label` attributes. Build year is dynamic via `new Date().getFullYear()`.

- **Breadcrumbs.astro:** Proper `aria-label="Breadcrumb"` on nav element. Uses `aria-current="page"` on the last breadcrumb item. Home icon has `sr-only` text. Separator SVGs are decorative. Light theme variant is properly defined. No broken logic found.

- **ThemeToggle.astro:** Component exists but is not used anywhere in the current layout (the site uses a fixed navy/dark theme). Icons have proper `aria-hidden="true"`. Button has `aria-label`. The toggle logic is straightforward. No bugs, just unused.

- **Layout.astro:** Proper `lang="en"` on html element. Correct `charset`, `viewport`, and `canonical` meta tags. Skip link is present with correct `#main-content` target and proper CSS for focus visibility. View transitions are loaded. Structured data (JSON-LD) is conditionally rendered. Font preconnect hints are present. Script loading order is correct (GlobalEffects first, then Nav, then main content slot, then Footer, then CommandPalette).

- **Scroll reveal observer (Layout.astro):** Uses IntersectionObserver correctly with `unobserve` after visibility trigger. Properly re-initializes on `astro:after-swap`. No memory leak since observed elements are unobserved after becoming visible.

- **CSS global.css:** Skip link styles work correctly (positioned off-screen, visible on focus). Focus-visible styles use accent color with proper outline-offset. Reduced motion preferences are respected throughout. View transition animations properly disabled under `prefers-reduced-motion`.

- **Z-index stacking:** Scroll progress bar (9999) > Custom cursor (99999) > Command palette (100) > Nav header (50). The cursor z-index being above the scroll progress is intentional. Command palette at z-100 is above the nav at z-50.
