# Homepage UX Review

## 1. Visual Hierarchy & Layout

**Reviewer focus:** Visual flow, section transitions, spacing rhythm, card consistency, whitespace balance, and headline patterns across the full homepage (`src/pages/index.astro`).

---

### 1.1 Inconsistent Section Transition Mechanisms

**Problem:** The homepage uses three different transition strategies between sections and applies them inconsistently. The hero (line 99) and field-sites (line 282) and team (line 440) sections end with an animated `WaveDivider`. The approach section (line 175) and news section (line 337) end with a static `.section-fade-dark` gradient. The funders section (lines 1308-1309) uses top/bottom 1px borders with no organic transition at all. This creates a jarring stop-start pattern: smooth wave, then abrupt gradient, then smooth wave, then abrupt gradient, then hard border, then nothing.

**Impact:** High. The inconsistency breaks the rhythmic flow that the waves are trying to establish. A visitor scrolling down experiences repeated whiplash between organic and mechanical transitions.

**Fix:** Choose one transition strategy and use it consistently. The WaveDivider is the strongest brand element. Use it between all major sections (approach-to-field-sites, news-to-team) and reserve `.section-fade-dark` only as a fallback for sections that share the same background color and need no visible break. For the funders strip, remove the hard `border-top` / `border-bottom` on `.funders-section` (line 1308-1309) and let it sit flush against surrounding surface backgrounds.

---

### 1.2 Uneven Vertical Padding Rhythm Between Sections

**Problem:** Section vertical padding is inconsistent:
- Approach: `py-20 md:py-28` (line 755)
- Field sites: `py-20 md:py-28 pb-32 md:pb-40` (line 851) -- extra bottom padding for wave
- News: `py-20 md:py-28` (line 1018)
- Team: `py-20 md:py-28 pb-32 md:pb-40` (line 1147) -- extra bottom padding for wave
- Funders: `py-12 md:py-16` (line 1306) -- noticeably smaller
- Final CTA: `py-20 md:py-28` (line 1363)

The funders section has roughly half the vertical padding of every other section. The field-sites and team sections have asymmetric top/bottom padding to accommodate the wave divider, which means the content sits higher in those sections than it appears in approach/news/CTA sections.

**Impact:** Medium. The uneven rhythm makes the funders section feel squeezed and rushed, while the wave-padded sections feel bottom-heavy. The eye does not settle into a predictable cadence.

**Fix:** Standardize all major content sections to the same base padding (e.g., `py-20 md:py-28`). For wave-hosting sections, add the extra bottom padding only to the wave area wrapper rather than inflating the section padding itself. Consider increasing the funders section to at least `py-16 md:py-20` so it does not feel like an afterthought.

---

### 1.3 Approach Section Intro Is Left-Aligned While CTA Section Intro Is Centered

**Problem:** The eyebrow + headline + thesis pattern appears in every section, but alignment is inconsistent:
- Approach (lines 106-116): left-aligned, `max-w-3xl`
- Field sites (lines 185-192): left-aligned, `max-w-3xl`
- News (lines 288-301): left-aligned, flex row with inline CTA button
- Team (lines 349-411): left-aligned within a 2-column grid
- Final CTA (lines 481-486): **center-aligned**, `text-center`

The CTA section is the only one that centers its intro block. This is not inherently wrong, but it breaks the established left-aligned scanning pattern the user has been following for 4+ sections.

**Impact:** Medium. Users build an expectation of where headlines and eyebrows appear. The sudden centeredness of the CTA section feels like a different page rather than the natural conclusion of the current one.

**Fix:** Either center-align all section intros for a magazine-editorial feel, or keep them all left-aligned for a more intentional editorial scanning rhythm. If the CTA section needs visual distinction as a "closer," achieve it through background treatment or spacing rather than alignment shift. Remove `text-center` from `.cta-intro` (line 1367) if choosing consistency.

---

### 1.4 Card Design Divergence Across Sections

**Problem:** The site has four distinct card families that share almost no visual DNA:
1. **Approach cards** (line 788-816): transparent dark glass (`rgba(30,41,59,0.4)`), 1px white border at 6% opacity, icon + title + description, no image.
2. **Field site cards** (line 888-1003): transparent glass (`rgba(255,255,255,0.03)`), 1px white border at 10% opacity, image header + rich content block + accent color stripe. Uses orange/green system-specific accent colors.
3. **News tiles** (line 1059-1137): solid `bg-surface-card` with `border-line/50`, image header + meta + title + excerpt + CTA link.
4. **CTA tiles** (line 1387-1424): solid `bg-surface-card` with `border-line/50`, icon centered + title + description + pill CTA. Text-centered layout.

The approach cards use a notably different background treatment (translucent over section bg) vs. news/CTA tiles (solid `surface-card`). The border opacity varies from 3% to 50%. Hover effects differ: approach lifts 4px with 40px shadow, field sites lift 8px with 60px shadow, news lifts 4px with 32px shadow, and CTA lifts 6px with 50px shadow.

**Impact:** Medium. Users subconsciously expect interactive cards to behave the same way. Different lift distances and shadow depths make some cards feel heavier or more important than they should, and the varying glass-vs-solid backgrounds make the page feel like it was assembled from different template kits.

**Fix:** Normalize card hover behavior to a single set of values: pick one lift height (e.g., `-4px`), one shadow depth (e.g., `0 20px 40px -12px rgba(0,0,0,0.3)`), and one transition curve. Harmonize background treatment: either all cards use `bg-surface-card` with `border-line/50`, or all cards use the translucent glass approach. The field site cards can retain their orange/green accents for semantic distinction, but the shell should match the others.

---

### 1.5 The Approach "Question Callout" Creates an Unexpected Visual Speed Bump

**Problem:** After the 3-column approach card grid, a centered callout box appears (lines 161-171, styled at lines 818-839). It uses a different visual language from every other element on the page: a single teal-tinted background, icon + text side-by-side, centered with `max-w-2xl mx-auto`. It sits below the cards but above the `.section-fade-dark` gradient divider.

This element has no counterpart in any other section. It interrupts the expected flow of eyebrow-headline-cards-transition and adds an extra beat before leaving the section.

**Impact:** Low-Medium. It is a nice editorial moment, but it reads as an orphaned element. The user expects to scroll to the next section after the cards but instead encounters an isolated callout that demands re-focusing.

**Fix:** Either integrate the question into the intro block above the cards (as a tagline or subtitle below `.approach-thesis`), or give it a stronger visual separation so it reads as its own mini-section. Alternatively, move it below the section divider as a "bridge" quote between approach and field sites.

---

### 1.6 The Funders Section Has No Eyebrow/Headline Pattern

**Problem:** Every other section on the page follows the eyebrow + headline + thesis pattern:
- "Our Approach" / "How We Work"
- "Field Sites" / "Where We Work"
- "Recent Work" / "Latest Research"
- "The Team" / "Who We Are"
- "Get Involved" / "Work With Us"

The funders section (lines 444-476) uses only a plain label: "Research supported by" (line 447). It has no `<h2>`, no Playfair Display italic emphasis word, and no thesis paragraph. This makes it feel like a footer element that accidentally ended up in the main content flow.

**Impact:** Low. The funders strip is intentionally understated as a credibility signal, but its complete absence from the headline pattern makes the scanning rhythm stumble. A reader skimming headline-to-headline will skip from "Who We Are" straight to "Work With Us" and may not register the funders at all.

**Fix:** If the section should remain understated, keep it as-is but tighten the vertical space so it reads as a divider rather than a section. If it should carry more weight, add a section headline following the pattern: eyebrow "Partners & Funders", headline "Supported *By*" with the italic emphasis. This brings it into the family without over-promoting it.

---

### 1.7 Headline Typography Pattern Uses Identical Cadence for Every Section

**Problem:** All five major section headlines use the same grammatical structure: "[Verb/Preposition] We [Playfair italic noun]":
- "How We *Work*"
- "Where We *Work*"
- "Latest *Research*"
- "Who We *Are*"
- "Work With *Us*"

The first two are nearly identical ("How We Work" / "Where We Work"), which may cause the visitor to feel they are seeing the same section twice when scrolling quickly. The Playfair italic emphasis on the last word of every headline becomes predictable after the second instance, reducing its ability to create visual interest.

**Impact:** Low. The consistency is not wrong -- it creates a cohesive voice. But the repetition of "We Work" / "We Work" specifically is a scanning hazard.

**Fix:** Vary one of the two "Work" headlines. For example, change "How We Work" to "Our *Approach*" or change "Where We Work" to "In the *Field*". Keep the Playfair italic pattern but ensure no two consecutive sections share the same emphasized word.

---

### 1.8 Hero Section Visual Weight Dominates Excessively

**Problem:** The hero section occupies `min-h-[100svh]` (line 561) -- a full viewport. After the hero, every section occupies roughly 60-80% of the viewport depending on content. The transition from a full-bleed immersive photo to the comparatively text-dense approach section is the biggest visual gear-shift on the page.

The hero also stacks 5 overlay layers (image, overlay gradient, text scrim, grain texture, animated particles) plus the wave divider. This is substantially more complex than any other section. Combined with the slow Ken Burns zoom animation (25 seconds, line 571) and the floating particles, the hero demands extended attention while the rest of the page is relatively static.

**Impact:** Medium. The hero sets an expectation of immersive richness that the rest of the page does not match. The approach section feels flat by comparison. A user who lingers on the hero may feel the rest of the page is less polished.

**Fix:** The hero height and immersiveness are fine for a lab landing page -- keep `min-h-[100svh]`. But bridge the transition: ensure the approach section opens with stronger visual presence. Consider adding a subtle background texture or pattern to the approach section, or increase the size of the approach cards' icons to add visual mass. The goal is not to make every section as rich as the hero, but to smooth the drop-off curve.

---

### 1.9 News Section Header Has Misaligned CTA Button on Desktop

**Problem:** The news header (lines 288-301) uses a flex row with `sm:items-end sm:justify-between`. The left side contains the eyebrow + headline stack. The right side has an "All publications" outline button that is only visible on `sm:` and above (`hidden sm:inline-flex`). Because the headline and eyebrow are flush-left and the button is flush-right with `items-end`, the button baseline-aligns to the bottom of the headline block.

However, the button is for "All publications" while the section is titled "Latest Research" -- a subtle terminology mismatch. More importantly, on medium viewports where both appear, the button can float far to the right with a large gap between, making the association between the header and the button unclear.

**Impact:** Low. The layout works on most screens, but on wide tablets (768-1024px range), the gap between the headline and the button makes them feel disconnected.

**Fix:** On the terminology: change the button text to "All research" or change the section title to "Latest Publications" for consistency. On the layout: add `max-w-4xl` or similar constraint to the `.news-header` flex container so the headline and button stay closer together on wider viewports. Alternatively, move the button below the tiles as a centered call-to-action similar to the mobile variant.

---

### 1.10 Team Section Two-Column Layout Creates Lopsided Weight on Mobile

**Problem:** The team section uses `lg:grid-cols-2` (line 1160), which collapses to a single column below `lg` (1024px). On mobile, the left column (text content with stats, differentiators, and button) renders first, followed by the team preview grid. The text-heavy left column can be 400+ pixels tall before the user sees any team member photos.

The stats bar (lines 359-374) and differentiators list (lines 377-402) are content-rich but visually repetitive (three stats + three check-mark items). This creates a wall of text before the visual payoff of the team photos.

**Impact:** Medium on mobile. Desktop layout is balanced. On mobile the section is extremely long and text-heavy before reaching the visual elements.

**Fix:** On mobile, consider reordering the grid so the team photo grid appears first (`order-first lg:order-last` on `.team-preview`). Alternatively, condense the stats and differentiators on mobile: show stats inline as a compact row and collapse the differentiators behind a disclosure or remove them on small screens.

---

### Summary Table

| # | Issue | Impact | Section | Lines |
|---|-------|--------|---------|-------|
| 1.1 | Inconsistent section transition mechanisms (wave vs gradient vs border) | High | All | 99, 175, 282, 337, 440, 1308 |
| 1.2 | Uneven vertical padding rhythm between sections | Medium | All | 755, 851, 1018, 1147, 1306, 1363 |
| 1.3 | Mixed left/center alignment on section intros | Medium | Approach, CTA | 106, 1367 |
| 1.4 | Card design divergence across sections | Medium | All card sections | 788, 888, 1059, 1387 |
| 1.5 | Orphaned "question callout" in approach section | Low-Medium | Approach | 161-171, 818-839 |
| 1.6 | Funders section missing eyebrow/headline pattern | Low | Funders | 444-476 |
| 1.7 | "How We Work" / "Where We Work" headline collision | Low | Approach, Field Sites | 109-110, 187-189 |
| 1.8 | Hero visual weight drop-off to approach section | Medium | Hero, Approach | 560-561, 754-755 |
| 1.9 | News header CTA button disconnected on mid viewports | Low | News | 288-301 |
| 1.10 | Team section text-heavy on mobile before photos | Medium | Team | 1147-1460 |

---

## 2. Content & Messaging

**Reviewer focus:** Messaging clarity, jargon, headline effectiveness, narrative arc, audience-specific value propositions, CTA labeling, and whether a non-specialist visitor can understand the lab's mission within 5 seconds.

---

### 2.1 Five-Second Comprehension Test Fails for Non-Scientists

**Problem**: The hero section stacks four layers of text (eyebrow, lab name, tagline, description paragraph) before a visitor can parse what this lab actually does. The tagline "Understanding *collapse*. Designing *recovery*." is evocative but abstract -- it could describe a lab studying financial systems, civil engineering, or mental health. The word "ocean" does not appear until the lab name itself, and even there it reads as a brand name rather than a subject descriptor. A non-scientist visitor likely needs to read all the way down to the description paragraph ("We identify the ecological bottlenecks that trap coral reefs and kelp forests in degraded states...") before they understand this is a marine ecology lab -- and that paragraph itself contains jargon that slows comprehension further.

**Suggestion**: Fold the subject matter into the tagline so it does double duty (evocative AND informative). For example:
- "Understanding why reefs and kelp forests collapse. Designing how they recover."
- Or integrate a one-line plain-language descriptor between the lab name and the tagline: "Marine ecology research at UC Santa Barbara" as a subtitle, so the tagline can stay poetic.

Consider moving the eyebrow line ("UC Santa Barbara / Ecology, Evolution & Marine Biology") to directly underneath or beside the lab name rather than above it, so the first thing a visitor reads is the lab name followed immediately by institutional context, rather than a department name floating above everything.

**Impact**: High

---

### 2.2 Jargon in the Hero Description

**Problem**: The hero description reads: "We identify the ecological bottlenecks that trap coral reefs and kelp forests in degraded states -- and turn that science into decision tools for restoration." This sentence contains three pieces of specialist language that create friction for general audiences:
- "ecological bottlenecks" -- unclear to non-ecologists; could mean population bottlenecks, resource bottlenecks, or process bottlenecks
- "degraded states" -- academic framing; a general reader would say "damaged" or "unhealthy"
- "decision tools" -- vague; what kind of tools? for whom?

**Suggestion**: Rewrite for clarity while preserving the lab's identity: "We study what keeps damaged coral reefs and kelp forests from bouncing back -- and build tools that help managers restore them." This says the same thing in words any visitor can parse on first read.

**Impact**: High

---

### 2.3 Jargon in the "How We Work" Method Cards

**Problem**: The Evidence Synthesis card reads: "Systematic review and meta-analysis to compare recovery drivers across ecosystems and estimate robust effect sizes." Every phrase here is academic shorthand:
- "Systematic review and meta-analysis" -- meaningless to anyone outside research
- "recovery drivers" -- jargon
- "robust effect sizes" -- purely statistical language

The Predictive Modeling card uses "thresholds and decision-support tools for managers," which is better but still opaque about what those tools actually look like or do in practice.

**Suggestion**: Rewrite the Evidence Synthesis card: "We combine findings from hundreds of studies worldwide to identify which factors matter most for ecosystem recovery -- and how much they matter." For the Predictive Modeling card: "We build computer models that turn field data into practical guidelines -- like how many predators a reef needs to stay healthy."

**Impact**: Medium

---

### 2.4 Jargon in Field Site Research Lists

**Problem**: The coral reef "Key mechanisms" list includes "Priority effects in community reassembly." This is a technical ecology term that even graduate students in adjacent fields may not immediately recognize. The kelp forest list includes "MPA spillover and fishery interactions" (assumes the reader knows "MPA" stands for Marine Protected Area) and "Thermal limits on predator effectiveness" (somewhat opaque).

**Suggestion**:
- "Priority effects in community reassembly" --> "How the order species return shapes the reef's future"
- "MPA spillover and fishery interactions" --> "How marine reserves boost surrounding fisheries"
- "Thermal limits on predator effectiveness" --> "How warming waters weaken natural predators"

These rewrites preserve the scientific substance while making the content scannable for prospective students, donors, and journalists.

**Impact**: Medium

---

### 2.5 Repetitive "X We Y" Headline Pattern

**Problem**: Every section headline follows the identical "X We Y" formula:
1. "How We *Work*"
2. "Where We *Work*"
3. "Latest *Research*" (breaks the pattern slightly)
4. "Who We *Are*"
5. "Work With *Us*"

This creates a monotonous rhythm when scrolling. The repeated "We" framing also makes every headline self-referential rather than visitor-oriented. The reader is being told about the lab rather than drawn into a story or invited to care. The first two headlines ("How We Work" / "Where We Work") are particularly close to identical and risk blurring together when skimming.

**Suggestion**: Vary the structure and make at least some headlines outward-facing:
- "How We Work" --> "From Reef to Result" or "Three Ways We Find Answers" (more descriptive)
- "Where We Work" --> "Two Oceans, One Question" (ties to the unifying question and creates intrigue)
- "Latest Research" --> "What We're Finding" or "Recent Discoveries" (more active)
- "Who We Are" --> "The Team Behind the Science" (more inviting)
- "Work With Us" --> "Join the Work" or simply "Get Involved" (matches the existing eyebrow label, which is actually better than the headline)

**Impact**: Medium

---

### 2.6 Page Reads as a Section List, Not a Story

**Problem**: The homepage follows a template order (Hero --> Approach --> Sites --> News --> Team --> Funders --> CTA) but there is no narrative thread connecting sections. Why should the visitor care? What is at stake? The "One question drives everything" callout hints at a narrative backbone but appears at the tail end of the Approach section rather than driving the page structure. There is no "problem statement" moment that establishes urgency before explaining the lab's methodology.

**Suggestion**: Restructure the implicit narrative arc:
1. **Hero**: The ocean is in trouble (collapse). We are doing something about it (recovery). [This mostly works already.]
2. **Stakes/Problem** (currently missing): A brief, visceral statement of why this matters. Something like "Half the world's coral reefs have been lost in the last 30 years. Kelp forests along the California coast are disappearing." One sentence with a stat gives the visitor emotional stakes before the approach is explained.
3. **Approach**: Here is how we tackle it.
4. **Sites**: Here is where we do it.
5. **Evidence/News**: Here is what we have found.
6. **Team**: Here is who is doing it.
7. **CTA**: Here is how you can be part of it.

The missing piece is step 2. The page jumps from "here's who we are" directly to "here's our methodology" without establishing why the problem is urgent. A single stat-driven callout between the hero and the Approach section would dramatically improve emotional engagement for all audiences.

**Impact**: High

---

### 2.7 "One question drives everything" Callout Does Not Earn Its Prominence

**Problem**: This callout is visually prominent (centered, bordered, sparkle icon) and uses strong language ("One question drives everything"), but it appears *after* the three method cards, buried at the bottom of the Approach section. By the time a visitor scrolls to it, they have already processed the methodology. The question itself -- "How can we engineer ecosystem resilience in a rapidly changing world?" -- is also fairly generic. It could apply to hundreds of ecology labs. The word "engineer" is interesting and distinctive but is never unpacked or connected to anything specific.

**Suggestion**: Either promote this to the very top of the Approach section (before the method cards) so it frames the methodology, or remove the "One question" framing and integrate the question more naturally. If it stays, make the question more specific to this lab's unique angle: "What keeps a damaged reef from coming back -- and what can we do to remove those barriers?" This ties directly to the "bottleneck" concept that is central to the lab's identity. Alternatively, if "engineer" is a deliberately provocative word choice, lean into it: "Can we *engineer* ecosystem recovery the way we engineer bridges and buildings?"

**Impact**: Medium

---

### 2.8 No Audience-Specific Value Propositions Until the Very Bottom

**Problem**: The page has three distinct audiences -- prospective students, potential collaborators/managers, and funders -- but the entire main body of the page is audience-agnostic. The CTA section at the bottom correctly segments into three tiles ("Train With Us," "Collaborate," "Support Research"), but by that point each audience has had to wade through an entire page that was not specifically relevant to their needs. There is no earlier signal on the page that says "if you're a student, here's why this lab matters to you."

**Suggestion**: The three CTA tiles at the bottom are a good start, but consider adding lightweight audience signals earlier:
- In the Team section, the differentiator "Outputs for managers, not just papers" is excellent -- but it is the only moment on the page that speaks to practitioners. Add a similar signal for students: "Hands-on field training from day one" or similar.
- In the hero actions, "Explore Our Research" and "View Publications" serve the same audience (researchers/academics). Consider replacing one with a student-facing CTA like "Join the Lab" or a practitioner-facing CTA like "Tools for Managers."
- In the field site cards, the "Key mechanisms" lists speak to academics. A parenthetical or footnote framing the *impact* ("Why it matters: rebuilding reefs faster") would broaden the appeal.

**Impact**: Medium

---

### 2.9 CTAs Are Ambiguous About Their Destinations

**Problem**: Several calls to action do not clearly communicate what the visitor will see when they click:
- "Explore Our Research" (hero primary button) links to `/research/coral-reefs` -- only one of two research areas. A visitor expecting a research overview is dropped into a coral-specific page. Why coral and not kelp? This is an arbitrary default that may alienate kelp-focused visitors.
- "View Publications" links to `/publications` -- clear and appropriate.
- "Learn more" on the "Support Research" tile links to `/for-funders` -- "Learn more" is generic and does not signal that this is a philanthropy page.
- "Get in touch" on the Collaborate tile opens a `mailto:` link. The tile description mentions "restoration tools, MPA evaluation data, or research partnerships," which sets an expectation of a resources page, not a bare email composition window.

**Suggestion**:
- Change "Explore Our Research" to link to a `/research` overview page if one exists, or to an anchor that shows both field sites on the current page. If it must go to one system, label it "Explore Coral Reef Research" so the destination is explicit.
- Change "Learn more" to "Support Our Work" or "Partner With Us" to match the funder framing.
- For the Collaborate tile, consider linking to a page with downloadable resources, data, or tools with a contact CTA embedded, rather than a bare `mailto:`. At minimum, change the CTA to "Email Dr. Stier" so the action is explicit.
- Add `title` attributes to the `mailto:` link so screen readers and tooltip users know they are opening an email client.

**Impact**: Medium

---

### 2.10 Meta Description Contains Jargon and May Be Truncated in Search Results

**Problem**: The page `<meta>` description reads: "Research lab at UC Santa Barbara identifying ecological bottlenecks and thresholds that trap coral reefs and kelp forests in degraded states -- and turning that science into decision tools for restoration." This is what appears in Google search result snippets. It has the same jargon issues as the hero description ("ecological bottlenecks," "thresholds," "degraded states," "decision tools") and at approximately 197 characters it is likely to be truncated in search results (Google typically displays 155-160 characters).

**Suggestion**: Rewrite to approximately 150 characters, plain language, front-loaded with keywords: "Ocean Recoveries Lab at UC Santa Barbara studies how coral reefs and kelp forests recover from damage -- and how to help them bounce back faster."

**Impact**: Medium

---

### 2.11 "LTER" Badges Are Opaque to Non-Specialists

**Problem**: The badges "MCR LTER" and "SBC LTER" appear on the field site cards, and the bottom line reads "Backed by decades of NSF Long Term Ecological Research data at both sites." The badges themselves are never expanded on the cards. A non-specialist visitor sees "MCR LTER" and "SBC LTER" as opaque acronyms. Even in the footer line, "LTER" is only spelled out indirectly in running text rather than on the badges themselves.

**Suggestion**: Add `title` tooltips to each badge expanding the acronym (e.g., "Moorea Coral Reef Long Term Ecological Research"). Alternatively, replace the badge text with something any visitor can parse: "NSF Research Site" or "Long-term Study Site" with the full name available on hover.

**Impact**: Low

---

### 2.12 Missing Real-World Impact Statement -- Stats Are Academic, Not Tangible

**Problem**: The Team section lists three stats (75+ publications, 15 years field research, 2 LTER sites). These are credibility markers for academics but do not communicate real-world impact to funders or the general public. A funder wants to know "what has this research *changed*?" The `ai-summary.md` file mentions that "California's ocean reserves have increased lobster catches by 400% in adjacent waters" -- this is a compelling, tangible impact statement that appears nowhere on the homepage.

**Suggestion**: Add one or two concrete impact stats alongside or replacing the academic stats. For example: "Our research contributed to marine reserve designs that increased lobster catches 400% in surrounding waters." This bridges the gap between "we publish papers" and "our work changes the real world." Another approach: replace "75+ publications" with "Research used by California resource managers to design marine reserves" -- this communicates the same credibility but in an outcomes-oriented frame.

**Impact**: High

---

### 2.13 News Section Labeling Is Inconsistent and Lacks Framing

**Problem**: The "Latest Research" section shows three news tiles but provides no framing for what kind of content these are. The news posts are AI-generated plain-language summaries of publications, but they are presented as though they are news articles or blog posts. The eyebrow says "Recent Work" but the headline says "Latest Research" -- these have slightly different connotations ("work" implies ongoing activity; "research" implies findings). A visitor clicking through may be confused about the format.

**Suggestion**: Align the eyebrow and headline ("Research Highlights" / "Research Highlights" or "Recent Discoveries" / "Recent Discoveries"). Add a single-line description under the headline: "Plain-language summaries of our latest findings" to set expectations for what the visitor will find when they click through.

**Impact**: Low

---

### Content & Messaging Summary Table

| Issue | Section | Impact |
|-------|---------|--------|
| 2.1 Five-second comprehension fails for non-scientists | Hero | High |
| 2.2 Jargon in hero description | Hero | High |
| 2.3 Jargon in method cards (especially Evidence Synthesis) | How We Work | Medium |
| 2.4 Jargon in field site mechanism lists | Where We Work | Medium |
| 2.5 Repetitive "X We Y" headline pattern | All sections | Medium |
| 2.6 No narrative arc; missing stakes/problem section | Page structure | High |
| 2.7 Unifying question callout is buried and generic | How We Work | Medium |
| 2.8 No early audience segmentation signals | Page structure | Medium |
| 2.9 Ambiguous CTA destinations | Hero, CTA section | Medium |
| 2.10 Meta description has jargon and may truncate | SEO / head | Medium |
| 2.11 LTER acronym unexpanded on badges | Where We Work | Low |
| 2.12 No real-world impact statement; stats are academic-only | Team section | High |
| 2.13 News section eyebrow/headline mismatch, no content framing | Latest Research | Low |

---

## 5. Polish & Delight

**Reviewer focus:** Consistency of hover effects, typography/font loading, animation value-for-weight, color harmony, surface/border token usage, micro-interaction uniformity, performance, and dead CSS.

**Files reviewed:**
- `/Users/adrianstier/ocean-recoveries-website/src/pages/index.astro` (full homepage)
- `/Users/adrianstier/ocean-recoveries-website/DESIGN.md` (design system)
- `/Users/adrianstier/ocean-recoveries-website/src/layouts/Layout.astro` (font loading, scroll-reveal)
- `/Users/adrianstier/ocean-recoveries-website/src/styles/global.css` (global utilities, reduced-motion)
- `/Users/adrianstier/ocean-recoveries-website/tailwind.config.mjs` (design tokens)
- `/Users/adrianstier/ocean-recoveries-website/src/components/shared/WaveDivider.astro` (wave animations)

---

### 5.1 Hover Effect Inconsistency Across Card Types

**Problem:** Five different `translateY` lift values are used across card-like elements on the homepage:

| Card Type | `translateY` | Shadow on Hover | Duration | Easing |
|-----------|-------------|-----------------|----------|--------|
| Approach cards | `-4px` | `0 20px 40px -12px rgba(0,0,0,0.3)` | 400ms | `cubic-bezier(0.4,0,0.2,1)` |
| Field site cards | `-8px` | `0 30px 60px -12px rgba(0,0,0,0.5)` | 500ms | `cubic-bezier(0.4,0,0.2,1)` |
| News tiles | `-4px` | `0 16px 32px -8px rgba(0,0,0,0.25)` | 400ms | `cubic-bezier(0.4,0,0.2,1)` |
| Team preview cards | `-4px` | _(none)_ | 300ms | `ease` |
| CTA tiles | `-6px` | `0 20px 50px -10px rgba(56,189,248,0.2)` | 300ms | _(default)_ |
| Funder items | `-2px` | _(none)_ | 300ms | _(default)_ |
| Hero primary btn | `-2px` | glow increase | 300ms | _(default)_ |

DESIGN.md specifies a standard card hover lift of `-4px` and hover duration of 200-300ms. But approach cards and news tiles use 400ms, site cards use 500ms with `-8px`, CTA tiles use `-6px` with a blue-tinted shadow, and team preview cards have no shadow at all. Three different easing functions are mixed on one page.

**Fix:** Normalize all card-type hovers to one lift value (recommend `-4px` per DESIGN.md) and one shadow tier. Use a single transition duration (300ms) and easing (`cubic-bezier(0.4,0,0.2,1)` or `ease`). If site cards intentionally lift more because they are premium "hero cards," document that as a deliberate tier in DESIGN.md. Add a hover shadow to team preview cards for parity.

**Priority:** P2 -- visual inconsistency is noticeable when scrolling through sections quickly and hovering across different card types.

---

### 5.2 Playfair Display `@import` Is Render-Blocking (Performance)

**Problem:** Playfair Display is imported via `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@...')` inside a `<style>` block in `index.astro` (line 555). CSS `@import` inside `<style>` is **render-blocking**: the browser must fetch and parse the external Google Fonts stylesheet before it can finish parsing the component's style block and paint any content using those rules. Meanwhile, the body font Inter is correctly loaded via a `<link>` tag with `rel="preconnect"` in `Layout.astro` `<head>` (lines 103-108).

Consequences:
1. **FOIT/FOUT risk:** On first visit with a slow connection, the emphasis words ("Recoveries", "Work", "Research", "Are", "Us") display in fallback Georgia/serif before Playfair arrives, then reflow.
2. **Render delay:** The entire homepage `<style>` block is blocked until the external CSS is fetched, which delays first paint of all homepage-specific styles -- not just the font.
3. **Page-specific scope:** Playfair is only loaded on the homepage. If another page uses it, a redundant `@import` would be needed.
4. **No preconnect:** Inter gets `rel="preconnect"` to `fonts.googleapis.com` and `fonts.gstatic.com` in `<head>`, but the Playfair import inside `<style>` cannot benefit from those preconnects until the style block is parsed, creating a waterfall.

**Fix:** Move the Playfair Display load to the `<head>` in `Layout.astro` alongside Inter, using a `<link>` tag instead of `@import`:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&display=swap" rel="stylesheet" />
```
Remove the `@import` from `index.astro`'s `<style>` block. Optionally add `<link rel="preload">` for the most-used weight (600 italic) to eliminate FOUT for the hero.

**Priority:** P1 -- render-blocking external CSS import in a component `<style>` block is a real performance and visual quality issue on first load. This is the single most impactful fix in this review.

---

### 5.3 Playfair Display Italic Inconsistency in Hero Tagline

**Problem:** Playfair Display is applied to "emphasis" words consistently across section headlines: `.approach-headline-emphasis`, `.sites-headline-emphasis`, `.news-headline-emphasis`, `.team-headline-emphasis`, `.cta-headline-emphasis` all get `font-family: 'Playfair Display'` + `@apply font-semibold italic`. The hero title `.title-serif` also uses Playfair with `@apply font-semibold italic`.

However, the hero tagline `<em>` elements (line 70-71: "collapse" and "recovery") are styled with `@apply text-accent not-italic font-semibold` (line 686). The `<em>` tag defaults to `font-style: italic`, but `not-italic` resets it to `font-style: normal`. So the Playfair italic variant is loaded but the tagline emphasis words render in **upright** Playfair, while every section headline renders in **italic** Playfair. This is an inconsistency within the same font family usage.

**Fix:** If Playfair should always be italic for emphasis words, remove `not-italic` from `.hero-tagline em`. If the upright variant in the tagline is an intentional design choice (larger text reads better upright), document it as an exception in DESIGN.md.

**Priority:** P3 -- subtle typographic inconsistency, but it affects the most-viewed element (hero tagline).

---

### 5.4 Particle Animations: Near-Zero Visual Payoff for GPU Cost

**Problem:** Five `<div class="particle">` elements (lines 41-46) float in the hero with a 20-second infinite `float-particle` animation. Each particle is a 3-5px circle colored `rgba(56, 189, 248, 0.3)`. They are positioned exclusively on the right half of the viewport (`left: 55%-80%`).

The hero's `.hero-text-scrim` gradient (lines 591-599) makes the left half 85-92% opaque and fades to transparent on the right. This means the particles are visible only in the area where the busy coral reef photo shows through. At peak opacity (0.6 at the 25% animation keyframe), a 4-5px sky-blue dot against a multicolored reef photo is nearly imperceptible. On mobile, the scrim switches to a vertical gradient, but the particles are still tiny against the photo.

These five elements each run continuous CSS animations with translate/scale/opacity keyframes, forcing GPU compositing on every frame for 20 seconds per cycle, indefinitely.

**Fix:** Either (a) remove the particles entirely (they add DOM and GPU compositing for near-zero visual payoff), or (b) increase size to 8-12px, boost opacity to 0.4-0.7, and move some to the left/center where they would be visible against the dark scrim, or (c) replace with CSS pseudo-elements on `.hero-media` using radial gradients to reduce DOM nodes.

**Priority:** P3 -- not harmful to functionality, but dead weight animation.

---

### 5.5 Parallax JS Conflicts with CSS `heroZoom` Animation

**Problem:** The hero image has two competing transform sources:
1. A CSS `@keyframes heroZoom` animation (line 574) that animates `transform` from `scale(1.02)` to `scale(1)` over 25 seconds.
2. A JavaScript parallax handler (lines 1528-1533) that sets `heroImage.style.transform = \`scale(1) translateY(${rate}px)\`` on scroll.

As soon as the user scrolls, the inline `style.transform` set by JS **overrides** the CSS animation's transform, because inline styles have higher specificity. This causes:
- The `heroZoom` animation plays for however long it takes the user to scroll (typically 1-3 seconds).
- On first scroll, the image snaps from ~`scale(1.018...)` (wherever the 25s animation was at that moment) to `scale(1)`, creating a visible "jump."
- After scrolling, the CSS animation is permanently overridden and never resumes.

**Fix:** Remove the `heroZoom` CSS animation entirely. The 2% scale change over 25 seconds is barely perceptible even without the conflict. If a Ken Burns effect is desired, implement it in the same JS handler that manages parallax, so both transforms are coordinated in a single `style.transform` assignment.

**Priority:** P2 -- the snap on early scroll is noticeable and feels like a rendering bug.

---

### 5.6 Coral Orange and Kelp Green Accent Colors Not in Design System

**Problem:** The field site cards introduce two ecosystem-specific accent colors that are **not defined** in the design system palette (DESIGN.md or `tailwind.config.mjs`):
- Coral: `#fb923c` (Tailwind's orange-400) -- used for badges, bullet points, CTA text, hover title color, accent bar
- Kelp: `#4ade80` (Tailwind's green-400) -- used for the same treatments

The design system defines three accent colors: `--accent: #38bdf8` (sky blue), `--accent-2: #2dd4bf` (teal), `--accent-warm: #ff6f5b` (coral-red). The homepage's coral orange `#fb923c` is a different hue/saturation than the palette's warm accent `#ff6f5b`. The kelp green `#4ade80` sits between the palette's teal `#2dd4bf` and a pure green.

Visually, when all three accent families appear on screen (blue section eyebrows + orange coral card + green kelp card), the result approaches a Christmas/tropical three-color scheme that is busier than the design system's intended cool blue-teal palette.

**Fix:** Either (a) adopt `#fb923c` and `#4ade80` as official ecosystem accent tokens in `tailwind.config.mjs` and DESIGN.md (e.g., `accent-coral` and `accent-kelp`), or (b) remap the field site cards to use existing palette colors (`--accent-warm` for coral, `--accent-2` for kelp). If keeping the current colors, consider reducing saturation slightly to harmonize with the primary blue.

**Priority:** P2 -- the off-palette colors are functionally fine but undocumented, and the three-color combination creates visual noise in the field sites section.

---

### 5.7 Card Background and Border Opacity Values Vary Without System

**Problem:** Card-like surfaces use a variety of background and border opacity values with no apparent pattern:

| Element | Background | Border |
|---------|-----------|--------|
| Approach cards | `rgba(30,41,59, 0.4)` | `rgba(255,255,255, 0.06)` |
| Approach cards (hover) | `rgba(30,41,59, 0.6)` | `rgba(56,189,248, 0.2)` |
| Approach question box | `rgba(56,189,248, 0.04)` | `rgba(56,189,248, 0.1)` |
| Field site cards | `rgba(255,255,255, 0.03)` | `rgba(255,255,255, 0.1)` |
| Field site cards (hover) | `rgba(255,255,255, 0.06)` | ecosystem color at `0.3` |
| News tiles | `bg-surface-card` (solid `#1e293b`) | `border-line/50` |
| Team preview cards | `rgba(255,255,255, 0.03)` | `rgba(255,255,255, 0.08)` |
| CTA tiles | `bg-surface-card` (solid) | `border-line/50` |
| Funders section | gradient bg | `rgba(255,255,255, 0.03)` top/bottom |

Some use `rgba(white, low-opacity)`, others use `rgba(surface-card-color, opacity)`, and others use the solid Tailwind `bg-surface-card` utility. This means visually identical-looking "cards" are rendered with subtly different transparency, which creates inconsistent behavior when the underlying section background varies.

**Fix:** Define two card surface tiers in the design system: (1) `surface-card-solid` = `bg-surface-card` + `border-line`, and (2) `surface-card-glass` = `rgba(255,255,255, 0.05)` + `rgba(255,255,255, 0.08)` border. Map each section's cards to one tier consistently. On `bg-surface` sections use solid cards; on gradient/image sections use glass cards.

**Priority:** P2 -- creates a cumulative "handmade" feeling rather than a systematic design.

---

### 5.8 Two Different Arrow-Slide Hover Mechanisms for CTAs

**Problem:** CTA-like elements use two different hover animations to simulate an arrow "sliding right":

| Element | Mechanism | What Moves |
|---------|-----------|-----------|
| Hero primary button (`.btn-hero-primary`) | `transform: translateX(3px)` on `.btn-icon` SVG | Only the arrow icon moves |
| "Meet the Full Team" (`.btn-editorial-primary`) | `transform: translateX(3px)` on `.btn-icon` SVG | Only the arrow icon moves |
| Site CTAs (`.site-cta`) | `gap-2` -> `gap-3` | Both text and arrow shift apart |
| News tile CTAs (`.news-tile-cta`) | `gap-2` -> `gap-3` | Both text and arrow shift apart |
| "All publications" (`.btn-outline-editorial-dark`) | `gap-2` -> `gap-3` | Both text and arrow shift apart |
| CTA tile pills (`.tile-cta`) | `gap-2` -> `gap-3` | Both text and arrow shift apart |

The `translateX` approach moves only the arrow while text stays put. The `gap` approach moves both elements apart symmetrically. The visual difference is subtle but perceptible: the `translateX` arrow slides independently, while the `gap` transition creates a "breathing" feel.

**Fix:** Standardize on one approach. The `gap` transition is simpler, more robust (no SVG class targeting needed), and more widely used on this page (4 out of 6 instances). Convert the two `translateX` instances to `gap` transitions for consistency.

**Priority:** P3 -- minor interaction inconsistency noticed only when comparing CTAs side-by-side.

---

### 5.9 Approach Cards Have Hover Lift But Are Not Clickable (False Affordance)

**Problem:** The three approach cards (`.approach-card`, lines 120-157) are `<div>` elements -- not links. However, they have rich hover effects: `translateY(-4px)`, shadow increase, border color change to blue. These hover effects are identical in nature to the field site cards, news tiles, and CTA tiles -- all of which **are** clickable `<a>` tags.

A user encountering these hover effects will instinctively try to click the card. When nothing happens, it creates a moment of confusion. This is a textbook false affordance.

**Fix:** Either (a) remove the `translateY` and shadow hover effects from approach cards and keep only a subtle background/border highlight to indicate attention without implying interactivity, or (b) wrap each card in an `<a>` link to a relevant page (e.g., a methodology page, or an anchor within the research page). If they must hover visually but not link, add `cursor: default` and reduce the lift to `-2px` to distinguish them from truly clickable cards.

**Priority:** P2 -- false affordance is a well-documented UX anti-pattern.

---

### 5.10 Scroll-Reveal Stagger Increments Too Tight to Be Perceptible

**Problem:** The stagger delays defined in `global.css` use 50ms increments (`stagger-1: 50ms`, `stagger-2: 100ms`, `stagger-3: 150ms`, etc.). On a 600ms base animation duration, the total spread across a typical 3-item group is only 100ms (50ms to 150ms). Research on motion perception indicates a minimum 80-120ms offset is needed for humans to perceive sequential motion.

Additionally, in the hero, both `.hero-eyebrow` and `.hero-title-block` share `stagger-1` (lines 53, 60), meaning they animate at exactly the same time despite being visually distinct elements.

The stagger effect is coded and consuming transition-delay processing but is essentially invisible to users.

**Fix:** Widen stagger increments to 100-120ms per step (e.g., `stagger-1: 100ms`, `stagger-2: 200ms`, `stagger-3: 300ms`). For the hero specifically, assign distinct stagger values to each element: eyebrow `stagger-1`, title `stagger-2`, tagline `stagger-3`, description `stagger-4`, CTA `stagger-5`. This creates a clear top-to-bottom reading-order cascade.

**Priority:** P2 -- the stagger effect is present in code but essentially invisible to users, so the animation budget is wasted.

---

### 5.11 Hardcoded `#0b1929` Color Not in Design Tokens

**Problem:** The `.section-fade-dark` gradient (line 845) fades to `#0b1929`. The `.field-sites-gradient` (line 860) and `.team-gradient` (line 1156) also use `#0b1929`. This color is not defined anywhere in `tailwind.config.mjs` or DESIGN.md. The closest palette color is `navy-deep: #0b2545`.

If the palette colors change in a future design update, these hardcoded hex values will be orphaned, creating visible color seams between sections.

**Fix:** Add `#0b1929` to `tailwind.config.mjs` as a named color (e.g., `'navy-fade': '#0b1929'`), or replace its usage with the existing `navy-deep` hex. Ensure all section gradients reference Tailwind config tokens, not raw hex literals in CSS.

**Priority:** P3 -- works visually today but is fragile and not in the design system.

---

### 5.12 Dead CSS Class: `btn-editorial-light`

**Problem:** The "Meet the Full Team" button (line 404) uses classes `btn-editorial-primary btn-editorial-light`. The `btn-editorial-primary` class is defined in the `<style>` block (line 1226). However, `btn-editorial-light` has **no corresponding CSS rule** anywhere in `index.astro`, `global.css`, or the Tailwind config. A search for `btn-editorial-light` across the codebase returns zero CSS definitions. It appears to be a remnant from a previous design iteration that offered light/dark button variants.

**Fix:** Remove `btn-editorial-light` from the `<a>` element's class list on line 404.

**Priority:** P3 -- no visual effect, just dead markup that could confuse future developers.

---

### 5.13 Redundant `prefers-reduced-motion` Block in Homepage Styles

**Problem:** The homepage `<style>` block contains its own `@media (prefers-reduced-motion: reduce)` section (lines 1477-1509) that sets `transition: none` on `.approach-card`, `.site-card`, `.news-tile`, `.team-preview-card`, `.cta-tile`, and several image elements.

However, `global.css` already contains a blanket reduced-motion rule (lines 227-242):
```css
@media (prefers-reduced-motion: reduce) {
  .scroll-reveal, .card, .btn, .chip, .img-zoom img, * {
    transition: none !important;
    animation: none !important;
  }
}
```

The wildcard `*` selector with `!important` already disables all transitions and animations for every element. The homepage-specific rules are therefore completely redundant -- they can never have an effect because the global `*` rule already covers them.

**Fix:** Remove the entire `@media (prefers-reduced-motion: reduce)` block from the homepage `<style>` (lines 1477-1509). The global rule handles everything.

**Priority:** P3 -- no functional issue, but ~30 lines of dead CSS that adds maintenance burden.

---

### 5.14 Secondary Hero Button Missing Hover Lift

**Problem:** The primary hero button (`.btn-hero-primary`, line 706) lifts `-2px` on hover with an enhanced glow shadow. The secondary hero button (`.btn-hero-secondary`, lines 719-728) only changes border opacity and adds a subtle background tint on hover -- it does not lift.

When two buttons sit side-by-side (line 81-89) and the user hovers across them, one physically rises and the other stays flat. This asymmetry draws attention to the mechanical inconsistency rather than the intended hierarchy.

**Fix:** Add `transform: translateY(-1px)` to `.btn-hero-secondary:hover` -- a smaller lift than the primary button to maintain hierarchy but enough to feel responsive. Alternatively, if the flat hover is intentional as a hierarchy signal (primary = more emphatic), document this in DESIGN.md under button hover tiers.

**Priority:** P3 -- minor, but noticeable when the user's cursor crosses between the two adjacent buttons.

---

### Summary Table

| # | Issue | Priority | Category |
|---|-------|----------|----------|
| 5.2 | Playfair Display `@import` is render-blocking in `<style>` | **P1** | Performance / Font loading |
| 5.1 | Five different `translateY` lift values across card types | P2 | Consistency |
| 5.5 | Parallax JS overrides CSS `heroZoom`, causing snap on scroll | P2 | Animation conflict |
| 5.6 | Coral/kelp accent colors (`#fb923c`, `#4ade80`) not in design system | P2 | Color harmony |
| 5.7 | Card background/border opacity values vary without system | P2 | Surface consistency |
| 5.9 | Approach cards have hover lift but are not clickable | P2 | False affordance |
| 5.10 | 50ms stagger increments are below perception threshold | P2 | Animation calibration |
| 5.3 | Playfair italic vs. upright inconsistency in hero tagline | P3 | Typography |
| 5.4 | Particle animations nearly invisible, wasted GPU compositing | P3 | Performance / Animation |
| 5.8 | Two different arrow-slide hover mechanisms (translateX vs. gap) | P3 | Micro-interaction |
| 5.11 | `#0b1929` hardcoded color not in Tailwind config tokens | P3 | Design tokens |
| 5.12 | `btn-editorial-light` class has no CSS definition (dead class) | P3 | Dead code |
| 5.13 | Redundant `prefers-reduced-motion` block (global rule already covers) | P3 | Dead CSS |
| 5.14 | Secondary hero button missing hover lift vs. primary | P3 | Micro-interaction |
