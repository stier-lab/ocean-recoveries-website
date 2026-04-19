# Claude Design Briefs — oceanrecoveries.com

Four paste-ready briefs for https://claude.ai/design. Each one is a self-contained project: prompt + files to attach + acceptance criteria + how to translate output back to this Astro repo.

**Workflow for every brief:**

1. Open claude.ai/design → new project.
2. Attach the files listed under **Inputs**.
3. Paste the **Prompt** verbatim.
4. Iterate visually. When a variant passes the **Acceptance** checklist, export the **Handoff bundle** and drop it in a new branch here.
5. Translate to Astro using the **Port notes** (Claude Design emits React+Tailwind by default; we need `.astro` + our existing component seams).

**Stack constraints every brief must respect** (paste once at top of each Claude Design project if it loses context):

- Astro 4 + Tailwind + React islands only for interactivity. No Next.js, no RSC patterns.
- Dark navy palette: `--surface #0f172a`, `--surface-card #1e293b`, `--ink #f1f5f9`, `--accent #38bdf8`, `--accent-2 #2dd4bf`. See `DESIGN.md`.
- Inter (body) + Playfair Display italic for emphasis words only.
- Two motion motifs: fade+lift, smooth flow. Respect `prefers-reduced-motion`.
- Max content width 1100px. Fluid type via `clamp()`.
- Accessibility: WCAG AA contrast, 44×44 touch targets, visible `:focus-visible`.

---

## Brief 1 — Homepage refresh from the UX review

### Goal

Turn `bug-bash-reports/homepage-ux-review.md` (30 catalogued issues across layout, content, and polish) into 2–3 homepage variants we can compare side-by-side before coding. The win condition is a unified card/transition system + a narrative arc that earns the hero.

### Inputs (attach to the Claude Design project)

- `DESIGN.md`
- `bug-bash-reports/homepage-ux-review.md` — the full review
- `src/pages/index.astro`
- `src/components/shared/WaveDivider.astro`
- `src/layouts/Layout.astro`
- `src/styles/global.css`
- `tailwind.config.mjs`
- `src/data/research.ts`, `src/data/team.ts`, `src/data/posts.ts` (for real content in prototypes)
- Screenshots of the current live homepage at 1440px, 768px, 375px (take from https://www.oceanrecoveries.com/)

### Prompt

```
You are redesigning the homepage for the Ocean Recoveries Lab (oceanrecoveries.com),
a UC Santa Barbara marine-ecology research lab studying coral reef and kelp forest
recovery. The attached DESIGN.md defines the visual system — palette, type, motion,
spacing tokens. Do not deviate from it.

Read the attached homepage-ux-review.md carefully. It enumerates 30 issues across
three categories: visual hierarchy (1.1–1.10), content/messaging (2.1–2.13), and
polish (5.1–5.14). Your job is to produce 2–3 homepage variants that together
resolve the HIGH-IMPACT issues below without introducing new ones.

Must fix in every variant:
- 1.1 Unify section transitions (choose one: WaveDivider everywhere, OR a single
  gradient fade everywhere, OR clean flush sections). No more mixing.
- 1.4 + 5.7 Unify card families. Define exactly TWO card tiers (e.g.
  surface-card-solid and surface-card-glass) and assign each section to one tier.
  Ecosystem accents (coral orange, kelp green) are only allowed as
  bar/badge/bullet color inside a shared shell.
- 1.3 Pick one alignment for all section intros (left OR center) and hold it.
- 2.1 + 2.2 Plain-language hero that passes the 5-second test for a non-scientist.
  Propose 3 headline/subhead options that say what the lab does, not just what it
  evokes.
- 2.6 Insert a stakes/problem moment between hero and approach. One visceral
  sentence + one stat. Rough text: "Half the world's coral reefs lost in 30 years.
  Kelp forests off California are disappearing. We study what keeps them from
  coming back."
- 2.12 Replace or augment the academic stats (75 pubs, 15 yrs, 2 LTER sites) with
  one concrete real-world impact stat.
- 5.9 Approach cards are not clickable — remove the false-affordance lift OR make
  them link somewhere.

Prefer to fix (nice-to-have):
- 1.8 Smooth the hero → approach visual drop-off.
- 2.5 Break the "How We / Where We / Who We" headline monotony.
- 2.8 Early audience signals (student / manager / funder) before the bottom CTA.
- 5.1 One hover lift value across all card tiers.

Deliverables:
1. 2–3 full-page variants at 1440px, 768px, 375px.
2. A one-page rationale comparing the variants against the HIGH-IMPACT list.
3. An exported component spec for the unified card tier(s), the stakes section,
   the new hero, and the transition system.
4. A handoff bundle targeted at Astro + Tailwind (not Next.js). Call out any
   interactive bits that need React islands.

Do not generate:
- A new color palette (use mine).
- New icon sets (use lucide or keep existing).
- Anything requiring a backend.
```

### Acceptance checklist

- [ ] Same card shell in all 4 card contexts (approach, sites, news, CTA).
- [ ] One transition primitive used between every major section.
- [ ] Hero headline understandable in <5 seconds by someone who doesn't know what ecology is.
- [ ] Stakes section present with one stat.
- [ ] No non-clickable cards with click affordances.
- [ ] Mobile variant keeps team photos visible within one scroll of the section header (fixes 1.10).
- [ ] `prefers-reduced-motion` variant shown.

### Port notes

- Claude Design emits React+Tailwind. For each new/changed section, the Astro equivalent is a `.astro` file under `src/components/` (server-rendered) — drop `className` → `class`, remove React wrappers. Only keep `.tsx` islands if there's real client state.
- If the variant introduces new tokens (e.g. `surface-card-glass`), add them to `tailwind.config.mjs` and document in `DESIGN.md` before using.
- The Playfair Display `@import` is currently render-blocking (issue 5.2). Any new hero must move Playfair to `<link>` in `Layout.astro`.
- Respect the view-transition listener cleanup pattern in `CLAUDE.md`.

---

## Brief 2 — Net-new pages that don't exist yet

### Goal

Prototype 3 pages the site lacks today. Low risk because there's no production code to regress.

**Pages:**

A. **Research overview (`/research`)** — today the hero CTA "Explore Our Research" jumps straight to `/research/coral-reefs`, arbitrarily skipping kelp. UX review 2.9 flags this. We need a real research index.

B. **Prospective grad student landing (`/join`)** — audience-specific page addressing UX review 2.8 (no early audience segmentation). Currently the only student-facing signal is a `mailto:` in the bottom CTA.

C. **Impact / annual report (`/impact`)** — addresses UX review 2.12. Shows concrete outcomes (policy influence, manager tools shipped, alumni trajectories) rather than publication counts. Funder-facing.

### Inputs

- `DESIGN.md`
- `src/data/research.ts` (systems + pillars for page A)
- `src/data/team.ts` (alumni placements for page B + C)
- `src/data/publications.ts` (recent impact work for page C)
- `src/pages/research/[slug].astro` (pattern reference)
- `src/pages/index.astro` (nav/footer wiring)
- `src/components/layout/Nav.astro`, `src/components/layout/Footer.astro`
- A one-paragraph audience brief for each page (see below, paste into prompt)

### Prompt

```
Design three new pages for oceanrecoveries.com. The visual system is locked —
match DESIGN.md exactly (palette, type, motion, spacing, card tiers). Use the
same Nav and Footer as the current site.

Page A: /research — Research Overview
Audience: prospective students, collaborators, science journalists.
Goal: in one scroll, let a visitor understand we study two systems (coral reefs,
kelp forests) unified by one question ("what keeps damaged ecosystems from
recovering?"), pick the system they care about, and see 3 active projects per
system. Feed from src/data/research.ts.
Must include: unifying question at top, two ecosystem panels (coral/kelp) with
the existing orange/green accent convention, cross-cutting research pillars
below, a "latest from the lab" row.

Page B: /join — Prospective Students
Audience: undergrads and grads considering applying. Ages 20–28.
Goal: answer "should I apply?" in 30 seconds. Warmer tone than the main site
without breaking the dark-navy brand.
Must include: a plain-English "what you'll do here" section (fieldwork in Moorea
and SB Channel, quantitative training, manager-facing outputs), expected
timeline (undergrad / MS / PhD differentiated), 3 alumni placements from
team.ts, application logistics, a single primary CTA ("Email Adrian").
Do NOT include: publication lists, jargon.

Page C: /impact — Impact / Annual Report
Audience: funders, program officers, donors.
Goal: prove the research changes outcomes, not just the literature.
Must include: one hero stat (real-world, not academic — e.g. MPA designs
influenced), 3 case studies (policy influence, manager tool shipped, species
recovery informed), a fiscal-year funding summary (placeholder numbers),
acknowledgements of NSF / other funders using the existing funder strip
pattern, a donate/partner CTA.

All three pages:
- Reuse the unified card tier from Brief 1 if that work is landed; otherwise use
  the existing surface-card + border-line pattern.
- Full responsive at 1440 / 768 / 375.
- Each page opens with the same eyebrow → headline → lead pattern as the current
  homepage sections.
- Emit an Astro-compatible handoff bundle (no Next.js, no RSC).
```

### Acceptance checklist (all three pages)

- [ ] Uses only palette tokens from `DESIGN.md`.
- [ ] Nav and Footer identical to current site.
- [ ] One primary CTA per page, above the fold.
- [ ] Mobile variant shown and checked for single-column stacking order.
- [ ] No jargon in hero or first section (apply the UX review 2.2 standard).
- [ ] For page A, the orange/green ecosystem accents are used inside unified shells, not as separate card families.

### Port notes

- Each becomes `src/pages/<slug>.astro`. Page A replaces the arbitrary `/research/coral-reefs` redirect in the hero CTA.
- Add page entries to `Nav.astro`.
- For page C, the hero stat should be a hardcoded component until you have a real data source — no fake API calls.
- If Claude Design produces charts, use Recharts via a React island (`.tsx` under `src/components/`), not a heavy charting library.

---

## Brief 3 — Branded deliverables that match the site

### Goal

Three non-web artifacts in the site's visual language: (i) a lab recruitment one-pager, (ii) a conference poster template, (iii) a funder update template. These replace generic uses of `~/templates/pptx/stier_lab_default.pptx` for outputs that should feel like extensions of the website.

### Inputs

- `DESIGN.md`
- `public/images/` hero photos (coral reef, kelp forest, field team)
- `src/data/team.ts`, `src/data/publications.ts`, `src/data/research.ts`
- Logo assets from `public/` (pull whatever is there — UCSB + lab mark if it exists)
- Reference: your existing `~/templates/pptx/stier_lab_default.pptx` (attach as baseline to iterate against)

### Prompt

```
Create three print/slide deliverables that share the visual language of
oceanrecoveries.com. The website uses a dark navy palette, Inter body + Playfair
Display italic for emphasis, and a cool blue→teal gradient as signature. See
DESIGN.md for exact tokens.

Deliverable 1: Lab Recruitment One-Pager (US Letter, 8.5×11 portrait, PDF)
Audience: prospective grad students at recruiting events.
Front: hero photo + "Ocean Recoveries Lab" + tagline + 3 reasons to join (from
the differentiators on the homepage team section) + application timeline + QR
to /join (use a placeholder QR).
Back: current team photo grid (6 people from team.ts), 3 recent publications
with plain-language hooks, contact.

Deliverable 2: Conference Poster Template (48×36 landscape, editable in
Figma/Canva or PPTX)
Not a finished poster — a TEMPLATE with labeled regions: title bar, author/
affiliation strip, 3-column content area with figure placeholders, a
"takeaways" sidebar in accent color, QR + contact footer. Must preserve the
site's Playfair Display emphasis convention for the poster title.

Deliverable 3: Funder Update One-Pager (US Letter, 8.5×11 portrait, PDF)
Audience: program officers receiving a quarterly update.
Single page: eyebrow "Q_ Research Update" + headline + 3 bullet outcomes +
one chart region (placeholder) + one photo + funding acknowledgements in the
site's funder-strip style.

Shared constraints:
- Dark navy background OR white background with dark navy accents — give me
  both options for each deliverable.
- Use the exact color tokens from DESIGN.md. No drop shadows outside what the
  site uses.
- Export: PDF for 1 and 3, editable PPTX for 2.
- If the site's Playfair italic works on print, keep it. If not, propose a print
  fallback and explain why.
```

### Acceptance checklist

- [ ] All three artifacts use only palette tokens from `DESIGN.md`.
- [ ] Light and dark variants delivered for each.
- [ ] Playfair italic used only for emphasis words, never for body.
- [ ] One-pagers stay on one page at 100% scale (no overflow).
- [ ] Poster template has labeled regions, not locked content.
- [ ] Placeholder chart uses the site's accent ramp (`accent` → `accent-2`), not a default chart library palette.

### Port notes

- These are artifacts, not code. Store exports in a new `/brand/` folder at repo root (add to `.gitignore` if they're large), or in Google Drive.
- For the PPTX template, save the master to `~/templates/pptx/` as `ocean_recoveries_poster.pptx` so the `pptx` skill can use it.
- The one-pagers go out as PDFs — don't bother making them editable templates unless you'll reuse the layout.

---

## Brief 4 — Design-system codification (living style guide)

### Goal

Generate a single-page HTML artifact that is a **live, interactive style guide** for the Ocean Recoveries design system. This is what you send to a new collaborator, or link from `DESIGN.md` as "see it in action." It's also a visual regression canary — if a token changes, this page shows it.

### Inputs

- `DESIGN.md` (the full doc)
- `tailwind.config.mjs`
- `src/styles/global.css`
- `src/pages/index.astro` (as a source of existing component instances)
- `src/components/layout/Nav.astro`, `Footer.astro`
- `src/components/shared/WaveDivider.astro`

### Prompt

```
Build a single-page living style guide for the Ocean Recoveries design system.
Output: a self-contained HTML file (tailwind via CDN is fine) that renders every
token and component the site uses today.

Sections (in this order):
1. Introduction — one-paragraph philosophy lifted from DESIGN.md.
2. Color tokens — swatches for every variable in DESIGN.md §Color System,
   grouped as background layers / text hierarchy / accents / borders. Each
   swatch shows: hex, CSS var name, and contrast ratio against --surface and
   --surface-card.
3. Typography — render every item in the fluid type scale at its actual clamp()
   output. Show Playfair italic emphasis samples side by side with Inter body.
4. Spacing — visual stack of the --s-1 through --s5 tokens as colored bars at
   actual size.
5. Components — live render of:
   - .card (surface-card solid)
   - Translucent glass card variant (if you adopt it from Brief 1)
   - .btn primary, secondary, ghost
   - .badge (default + success) and .chip (default + active)
   - Hero section pattern
   - WaveDivider (embed the SVG)
   - Eyebrow + headline + lead pattern
6. Motion — side-by-side demos of fade+lift, scroll-reveal, hover lift,
   arrow-slide CTA. Include a "reduced motion" toggle that disables them.
7. Accessibility — contrast matrix, focus-state demo, touch-target size demo.
8. Do-not list — visual examples of what NOT to do (rainbow gradients, bouncy
   animations, >2 concurrent motions).

Requirements:
- Single HTML file, self-contained (inline CSS or Tailwind CDN).
- Works offline.
- Print stylesheet: collapse to a 4-page PDF-friendly layout.
- Every component shows both the rendered version AND the HTML/Astro snippet
  underneath in a <pre> block.
- At the top, a sticky ToC with the 8 sections.
```

### Acceptance checklist

- [ ] Every token in `DESIGN.md` appears on the page.
- [ ] Contrast ratios match the "Color Contrast" section of `DESIGN.md` (15.4:1, 5.8:1, 5.2:1).
- [ ] No colors, fonts, or tokens on the page that aren't in `DESIGN.md`.
- [ ] "Reduced motion" toggle actually disables animations.
- [ ] Prints cleanly to 4 pages.
- [ ] HTML snippets under each component are copy-pasteable as-is.

### Port notes

- Store at `public/style-guide.html` (or `public/design/index.html`) so it's accessible at `oceanrecoveries.com/style-guide.html` but not indexed.
- Add `noindex` meta tag.
- If you adopt the unified card tiers from Brief 1, this is the place they're documented — update `DESIGN.md` to link here.
- This artifact is the one place it's ok to deviate from "server components by default" (Brief 4 rule) because it's a static demo, not part of the site IA.

---

## Suggested execution order

1. **Brief 4 first** (lowest risk, no production impact, sharpens the system for every downstream brief).
2. **Brief 1** (highest leverage on the live site, consumes the unified tiers from Brief 4).
3. **Brief 2 — Page A** (/research) immediately after Brief 1 ships, because it closes the hero CTA loop (UX review 2.9).
4. **Brief 3** (branded deliverables) in parallel with Brief 2 — different output medium, no blocking dependency.
5. **Brief 2 — Pages B and C** last. They benefit from the tier + narrative patterns settled in 1 and 2A.

## What Claude Design won't do for you

- It won't write Astro. Every output needs the `.tsx → .astro` translation pass.
- It won't know about our view-transition listener leak rule. Any JS it emits needs the cleanup pattern from `CLAUDE.md` before it ships.
- It won't run `npm run build`. Verify locally before committing.
- It's in research preview — save exports often, don't rely on it for a finished deliverable you can't regenerate.
