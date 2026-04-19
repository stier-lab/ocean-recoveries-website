# Prototype A — Full Editorial-Scientific Direction

A deliberately aggressive pivot away from the dark-navy / gradient-text /
particle / glassy-card aesthetic that 2026 design discourse has pegged as
"AI-default." This prototype treats the homepage as the cover of a science
magazine: warm cream paper, deep navy ink, serif-led headlines, monospace
for data.

Reference benchmarks: Francis Crick Institute, Stripe Press, Nautilus,
Works in Progress, MIT Press.

---

## The 5 most visible changes

1. **Light, paper-colored background everywhere.** The page now opens on
   warm off-white `#F4EFE6` instead of a black-blue gradient. The dark navy
   `#0F2942` is no longer the canvas — it appears only as a sectional
   accent (the final "back cover" CTA section) and as the primary text
   color. This single inversion is what makes it not feel like every other
   2025 SaaS / AI-product hero.

2. **Serif headlines, no gradient text.** The hero reads
   "Understanding _collapse_. Designing _recovery_." set in Playfair
   Display, weight 700, with italic Playfair for the emphasis words.
   The gradient sky-to-teal "Recoveries" treatment is gone — replaced
   with solid ink color and an italic serif for the verbs. All h2/h3
   across the page are now Playfair, weight 600.

3. **IBM Plex Mono everywhere "data" lives.** Section numbers (`01 / Approach`),
   eyebrows, dates, the masthead `Vol. 01 · April 2026`, stat numbers
   (`75+`, `15`, `02`), figure captions ("Plate I"), funder full names,
   site locations, badge labels, link arrows-over-text. This is the single
   strongest editorial signal in the layout — it makes the page feel
   curated, not generated.

4. **Editorial layout with section numbers + thin rules.** Every section
   now opens with a horizontal hairline rule and a Plex-Mono-set section
   number: `01 / Approach`, `02 / Field Sites`, `03 / Latest Research`,
   `04 / The Team`, `05 / Support`, `06 / Get Involved`. The five
   `WaveDivider` SVG separators are removed. The "How can we engineer
   ecosystem resilience…" callout is now a true serif pull-quote with a
   left rule and a Plex-Mono attribution, replacing the iconified
   sparkles-card.

5. **Generous whitespace + photo plates with figcaptions.** Section padding
   went from `py-20` (~80px) to `py-24 md:py-32` (~96–128px). The hero
   photo is wrapped in a paper "matte" frame (`#EDE6D9` 0.5rem padding
   + hairline border) with a real `<figcaption>` ("Plate I — Anthias
   schooling above a recovering reef…"). All photos get
   `filter: contrast(0.95) saturate(0.9)` for the subtle warm-print look.

---

## Anti-AI signals implemented

The current site lit up nearly every box on Landor / Sykes' "AI-default"
checklist. Here's exactly what I removed and what I replaced it with.

| AI-default trope | Replacement |
| --- | --- |
| Dark navy / midnight bg as canvas | Warm cream `#F4EFE6` paper as canvas; navy is now ink and sectional accent only |
| Gradient text (`from-accent to-accent-2 bg-clip-text`) | Solid ink; class kept as a no-op alias to avoid breaking other pages |
| Saturated sky `#38bdf8` + teal `#2dd4bf` everywhere | Desaturated deep ocean `#3A6B7A` + muted teal `#5A8A8A` (used sparingly) |
| Floating particle animations (`.particle-1`…`-5`) | Deleted entirely |
| Ken Burns hero zoom (`@keyframes heroZoom`) | Deleted |
| Hero parallax scroll handler | Deleted (with it, one fewer view-transition listener to babysit) |
| Glassy cards (`bg-surface/70 backdrop-blur-md`) | `.glass` degrades to flat paper; cards are flat hairline-bordered paper tints |
| Big translateY hover lifts + glow shadows | Hover is now color/border shift only; `boxShadow.glow` set to `none` |
| Rounded-2xl pill buttons with `shadow: 0 8px 30px -4px rgba(56,189,248,.4)` | Squared `rounded-none` buttons with no drop shadow; ink-on-paper invert on hover |
| Bullet `•` lists everywhere | Em-dash `—` markers, Plex Mono colored |
| `font-black` (900) headlines | Playfair Display 600–700 with italic emphasis variant |
| Sans-serif eyebrows in `tracking-widest` | Plex Mono eyebrows in `tracking-[0.18em]–[0.22em]` |
| WaveDivider SVG between every section | Replaced with 1px ink-30% rule + section number in Plex Mono |
| Iconified "sparkles" callout for the unifying question | Pull-quote: Playfair italic, left rule, attribution in Plex Mono |
| Auto-uppercase + max-bold "OCEAN RECOVERIES LAB" wordmark | Lower-key kicker + serif tagline as the actual headline |
| Stat numbers in `font-black` Inter | Stat numbers in Plex Mono 500, with italic deep-teal `+` superscript |
| Generic "View Publications" pill | "View publications" + a `font-mono` "All publications →" with thin underline |

Editorial moves added (positive signals, not just removals):

- Masthead bar at the top: `Vol. 01 · April 2026 ······ UC Santa Barbara · EEMB`
- Hero meta row: `Principal Investigator / Field Sites / Est.` rendered as `<dl>`
- "Plate I" figcaption pattern on the hero photo
- Site-card layout pivots from "icon + lifted card" to "matted photo plate + serif title + em-dash list + small-caps Plex Mono CTA"
- News tiles: date in Plex Mono caps, category separated by an inline ink-rule, title in Playfair
- Funders: serif abbreviation as primary text, Plex Mono full name underneath — reads like a print colophon
- CTA section is the only dark surface; numbered `01 / 02 / 03` with hairline top borders that brighten on hover. It feels like the back cover of a print issue.

---

## What I did NOT change, and why

Strict scope discipline was part of the brief. I touched only the four
files listed, even when other things were tempting.

- **`src/components/layout/Nav.astro` and `Footer.astro`** — these still
  carry the dark-mode color assumptions. I deliberately did not touch
  them because (a) the brief says only those four files, and (b) seeing
  how the existing dark Nav looks on top of a cream paper page is
  itself useful prototype information for the user. Expect a high-contrast
  navy nav floating above cream — that's not necessarily wrong (think
  newspaper masthead), but the user should make that call.
- **All other pages** (`/people`, `/publications`, `/research/*`, `/news/*`)
  retain the legacy dark theme. They will look jarringly different on
  click-through. This is a homepage prototype, not a site rebrand. If the
  direction wins, a full propagation is a second pass.
- **`WaveDivider.astro`** — left in place; just removed all its usage from
  the homepage. Other pages may still import it. Deleting it would be
  out of scope.
- **`GlobalEffects.astro`, `CommandPalette.astro`, `ThemeToggle.astro`** —
  untouched. They sit inside `<Layout>` and may carry dark-mode bleed.
  If any of those render visible UI, it'll look off; that's a known
  trade-off of single-page prototyping.
- **The hero image filename / image set** — same `/images/coral-reef-panorama-anthias-fish.jpeg`
  source. Just reframed (matted, captioned, contrast-reduced) instead
  of full-bleed-with-overlay-scrim. No new image picking.
- **`@layer base` defaults for `p`, `a`, `h*`** — were rewritten, but the
  selectors themselves stayed global because every other page leans on
  them. If ANY existing page renders an `<h1>` it now gets Playfair,
  ink color. This is intentional even though it crosses into "scope" —
  the alternative was scoped utilities that wouldn't actually preview
  the direction. Pages that currently expect light-on-dark headlines
  will now show navy-on-navy. Visible only on internal pages.
- **`text-gradient` and `glass` utility classes** — kept as no-op aliases
  (text-gradient → text-ink, glass → flat paper) so any other page that
  uses them doesn't error or render invisible text.
- **Tailwind `colors.ink.DEFAULT`** flipped from `#f1f5f9` to `#0F2942`.
  This is the most invasive single token change because dozens of
  components throughout the codebase use `text-ink` and `bg-ink`. On
  homepage this is correct (navy ink on cream); on other pages it
  inverts their meaning. I added `ink.light: #f1f5f9` so anything that
  needs the legacy light-ink can be migrated to `text-ink-light`. Did
  not do that migration — out of scope.

---

## Known issues / unfinished work — being honest

1. **Token-color invariant violation across the codebase.** As above:
   `ink.DEFAULT` was the light-text token sitewide. Flipping it for
   the homepage paper aesthetic *will* render other pages with navy
   text on navy backgrounds. The fix is either (a) migrate other pages
   to `text-ink-light`, or (b) namespace this prototype's tokens under
   a `paper-` prefix and leave `ink` alone. I chose neither because
   both are out of single-page scope. Reviewer should expect to see
   broken contrast on `/people`, `/publications`, etc.
2. **Nav bar contrast.** Nav.astro (untouched) likely renders navy-on-navy
   or assumes dark bg. On the cream homepage it'll either disappear or
   look off. Worth a screenshot to confirm.
3. **Two parallel `accent` palettes coexist.** I changed
   `accent.DEFAULT` from sky `#38bdf8` to deep teal `#3A6B7A`. Other
   pages still call `text-accent` / `bg-accent` — they will now render
   in muted teal everywhere, not just here. Not visually broken, but a
   cross-site shift the user should be aware of.
4. **No real "grain" overlay on photos.** The brief asked for a grain via
   CSS filter; I implemented `contrast(0.95) saturate(0.9)` (the
   "subtle grain" half). True film-grain would require an SVG noise
   overlay or a tiled PNG; deliberately skipped for performance and
   because grain on web photos often looks worse than going without.
5. **Hero photo aspect.** I forced 4:5 portrait crop on the hero photo
   plate to make the layout feel like a magazine cover. The source
   image is landscape — the crop will lose some sides. May need a
   different image, or revert to 16:9 inside the matte.
6. **Stat block is now an `<dl>` with `<dt>` doing visual heavy lifting.**
   Semantically defensible (definition list of facts) but worth a
   quick screen-reader sniff.
7. **Date string is computed at build time** (`issueDate` in the
   masthead). It will read whatever month the site was last built.
   Acceptable for a prototype, slightly odd for a real publication.
8. **Did NOT update `DESIGN.md` or `CLAUDE.md`.** The design-system docs
   still describe the dark-navy palette. If this direction is adopted,
   both need a rewrite — but that's a post-decision task.
9. **CommandPalette and any other in-Layout UI** untouched. If it
   renders visibly, it will look out of place.
10. **No actual visual regression testing run.** Build passes (`npm run
    build` → 0 errors / 0 warnings / 0 hints, 90 pages built in 5.86s)
    but I did not run Playwright or open the dev server.

---

## Files modified, with line ranges

All four files are within the worktree
`/Users/adrianstier/ocean-recoveries-website/.claude/worktrees/agent-a1a39007/`.

| File | Change | Approx. lines |
|------|--------|---------------|
| `src/layouts/Layout.astro` | Added IBM Plex Mono `<link>` after Playfair | lines 113–116 (insertion only — Playfair link kept untouched per brief) |
| `tailwind.config.mjs` | Reworked `colors` (added `paper`, `ink-light`, kept `ink` as deep navy, desaturated `accent`); added `fontFamily.serif` and `fontFamily.mono`; softened `boxShadow` (DEFAULT/lg/glow) | lines 6–86 (colors + fonts), lines 73–77 (shadows) |
| `src/styles/global.css` | Full rewrite for paper theme, serif headings, Plex Mono utilities, editorial components (`.section-rule`, `.pull-quote`, `.stat-num`, `.stat-tag`, `.photo-editorial`), squared buttons, hairline cards, retained-but-degraded `.glass` and `.text-gradient` | entire file (now 268 lines, was 359) |
| `src/pages/index.astro` | Full homepage rewrite: editorial masthead, serif hero, six numbered sections (`01–06`), pull-quote, photo plates with `<figcaption>`, Plex Mono stats with super-set `+`, em-dash lists, dark-navy CTA "back cover", removed `WaveDivider` import + all five usages, removed particles + Ken Burns + parallax script entirely | entire file (now ~880 lines, was ~1550) |

No files added (besides this rationale and the listener-cleanup pattern is preserved — the only window-level listener on the homepage was the parallax handler, which was deleted because it had no element to act on anymore. The Layout's `IntersectionObserver` for `scroll-reveal` follows the documented disconnect-on-`astro:after-swap` pattern and is unchanged).

---

## Build verification

```
npm run build
→ 0 errors, 0 warnings, 0 hints (astro check)
→ 90 pages built in 5.86s
→ sitemap-index.xml generated
```
