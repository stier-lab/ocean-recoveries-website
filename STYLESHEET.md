# Ocean Recoveries Lab - Complete Stylesheet Reference

> **Purpose:** This document serves as the single source of truth for all UI styling patterns used across the Ocean Recoveries website. Use this as a reference when building new components or modifying existing ones.

---

## Table of Contents

1. [Design Tokens](#design-tokens)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Motion & Animation](#motion--animation)
7. [Responsive Patterns](#responsive-patterns)
8. [Accessibility](#accessibility)
9. [Inconsistencies & Consolidation Notes](#inconsistencies--consolidation-notes)

---

## Design Tokens

All design tokens are defined in `tailwind.config.mjs` and `src/styles/global.css`.

### Quick Reference

```css
/* Import these via Tailwind classes */
--color-accent: #38bdf8;      /* Primary CTA, links */
--color-accent-2: #2dd4bf;    /* Secondary accent, success */
--color-accent-warm: #ff6f5b; /* Coral highlights (sparse use) */
--color-surface: #0f172a;     /* Page background */
--color-surface-card: #1e293b; /* Card/elevated surfaces */
--color-ink: #f1f5f9;         /* Primary text */
--color-muted: #94a3b8;       /* Body text */
--color-line: #334155;        /* Borders */
```

---

## Color System

### Background Colors (Dark Theme)

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Surface | `#0f172a` | `bg-surface` | Primary page background |
| Surface Card | `#1e293b` | `bg-surface-card` | Cards, elevated elements |
| Navy Deep | `#0b2545` | `bg-navy-deep` | Deepest sections (alternate bg) |
| Navy Highlight | `#1e3a5f` | `bg-navy-highlight` | Special highlighted sections |

### Text Colors

| Token | Hex | Tailwind Class | Usage | Contrast on Surface |
|-------|-----|----------------|-------|---------------------|
| Ink | `#f1f5f9` | `text-ink` | Primary headings | 15.4:1 (AAA) |
| Ink 2 | `#e2e8f0` | `text-ink-2` | Secondary headings | 13.8:1 (AAA) |
| Muted | `#94a3b8` | `text-muted` | Body paragraphs | 5.8:1 (AA) |
| Muted 2 | `#64748b` | `text-muted-2` | Disabled/subtle text | 4.1:1 (AA) |

### Accent Colors

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Accent (Sky) | `#38bdf8` | `text-accent`, `bg-accent` | Primary CTA, links, active states |
| Accent 2 (Teal) | `#2dd4bf` | `text-accent-2`, `bg-accent-2` | Secondary accent, success, location badges |
| Accent Warm (Coral) | `#ff6f5b` | `text-accent-warm` | Warm highlights (use sparingly) |

### Border Colors

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Line | `#334155` | `border-line` | Default borders |
| Line 2 | `#475569` | `border-line-2` | Emphasized borders |

### Gradient Patterns

```css
/* Hero text gradient */
.gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, #38bdf8 40%, #2dd4bf 80%, #38bdf8 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 8s ease-in-out infinite;
}

/* Simpler text gradient (Tailwind) */
.text-gradient {
  @apply bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent;
}

/* Card overlay gradient (dark at bottom) */
background: linear-gradient(
  to top,
  rgba(15, 23, 42, 0.98) 0%,
  rgba(15, 23, 42, 0.9) 35%,
  rgba(15, 23, 42, 0.6) 60%,
  rgba(15, 23, 42, 0.3) 100%
);

/* CTA section gradient background */
background: linear-gradient(to br, rgba(56, 189, 248, 0.1), rgba(45, 212, 191, 0.1));

/* Glow effect */
box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
```

---

## Typography

### Font Stack

```css
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
             'Segoe UI', Roboto, Arial, sans-serif;
```

### Fluid Type Scale

| Token | Size Range | Tailwind Class | Usage |
|-------|------------|----------------|-------|
| Fluid XS | 12-14px | `text-fluid-xs` | Captions, metadata, badges |
| Fluid SM | 14-16px | `text-fluid-sm` | Small UI text, chips |
| Fluid Base | 16-18px | `text-fluid-base` | Body text |
| Fluid LG | 18-20px | `text-fluid-lg` | Lead paragraphs |
| Fluid XL | 20-24px | `text-fluid-xl` | Section intros, H4 |
| Fluid 2XL | 24-32px | `text-fluid-2xl` | H3 headings |
| Fluid 3XL | 30-40px | `text-fluid-3xl` | H2 headings |
| Fluid 4XL | 36-48px | `text-fluid-4xl` | H1 headings |
| Fluid 5XL | 44-60px | `text-fluid-5xl` | Hero headlines |

### Clamp Values

```css
text-fluid-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
text-fluid-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
text-fluid-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
text-fluid-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
text-fluid-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
text-fluid-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
text-fluid-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem);
text-fluid-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 3rem);
text-fluid-5xl: clamp(2.75rem, 2rem + 3.75vw, 3.75rem);
```

### Heading Styles

```css
/* H1 - Hero headlines */
h1 {
  @apply text-fluid-5xl font-black tracking-tight text-ink;
  letter-spacing: -0.02em;
}

/* H2 - Section titles */
h2 {
  @apply text-fluid-4xl font-black tracking-tight text-ink;
  letter-spacing: -0.015em;
}

/* H3 - Subsection titles */
h3 {
  @apply text-fluid-2xl font-extrabold text-ink-2;
}

/* H4 - Card titles */
h4 {
  @apply text-fluid-xl font-bold text-ink;
}
```

### Special Text Styles

```css
/* Eyebrow text - above section titles */
.eyebrow {
  @apply uppercase tracking-[0.12em] text-xs font-extrabold text-accent mb-2 block;
}

/* Lead paragraph - intro text */
.lead {
  @apply text-fluid-lg text-muted leading-relaxed;
}

/* Body paragraphs */
p {
  @apply text-muted max-w-prose;
  line-height: 1.6;
}

/* Links */
a {
  @apply text-accent underline-offset-2 decoration-accent/40 transition-colors duration-200;
}
a:hover {
  @apply decoration-2;
}
```

---

## Spacing & Layout

### Spacing Scale

| Token | Value | Tailwind Class | Usage |
|-------|-------|----------------|-------|
| s-1 | 0.5rem (8px) | `gap-s-1`, `p-s-1` | Tight gaps |
| s0 | 0.75rem (12px) | `gap-s0`, `p-s0` | Small gaps |
| s1 | 1.125rem (18px) | `gap-s1`, `p-s1` | Medium gaps |
| s2 | 1.5rem (24px) | `gap-s2`, `p-s2` | Standard gaps |
| s3 | 2rem (32px) | `gap-s3`, `p-s3` | Section spacing |
| s4 | 3rem-4.5rem | `py-s4` | Large sections (fluid) |
| s5 | 4.5rem-6rem | `py-s5` | Hero spacing (fluid) |
| edge | 1.125rem-3rem | `px-edge` | Page margins (fluid) |

### Container

```css
.container {
  @apply max-w-[1100px] mx-auto px-edge;
}
```

### Section Patterns

```css
/* Standard section */
.section {
  @apply py-s4;
}

/* Large section (hero, major blocks) */
.section-lg {
  @apply py-20 md:py-28 pb-28 md:pb-36;
}
```

### Grid Patterns

```css
/* 2-column (study systems, features) */
grid-template-columns: repeat(2, 1fr);
gap: 1.5rem; /* or gap-6 */

/* 3-column (research pillars, cards) */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 2rem; /* or gap-8 */

/* 4-column (stats, organism cards) */
grid-template-columns: repeat(4, 1fr);
gap: 2rem;

/* Responsive person grid */
@apply grid gap-6 sm:grid-cols-2 lg:grid-cols-3;
```

---

## Components

### Buttons

#### Primary Button (Global - `.btn.btn-primary`)

```css
.btn {
  @apply inline-flex items-center justify-center gap-2;
  @apply px-4 py-3 rounded-xl font-bold text-sm leading-none;
  @apply transition-all duration-200 ease-spring;
  @apply min-h-[44px] no-underline;
}

.btn-primary {
  @apply bg-accent text-white;
  @apply shadow-lg hover:shadow-xl hover:-translate-y-0.5;
  @apply hover:bg-accent/90;
}
```

#### Secondary Button (Global - `.btn.btn-secondary`)

```css
.btn-secondary {
  @apply bg-transparent border-2 border-line text-ink;
  @apply hover:border-accent hover:text-accent;
}
```

#### Ghost Button (For dark image overlays)

```css
.btn-ghost {
  @apply bg-white/10 border border-white/20 text-white;
  @apply hover:bg-white/20;
}
```

#### People Page Buttons (Different style - pill shape)

```css
/* People page primary */
.btn-primary {
  @apply inline-flex items-center gap-2 px-5 py-3;
  @apply bg-ink text-surface font-semibold text-sm;
  @apply rounded-full no-underline;
  @apply transition-all duration-200;
  @apply hover:bg-accent hover:scale-105;
}

/* People page secondary */
.btn-secondary {
  @apply inline-flex items-center gap-2 px-5 py-3;
  @apply border border-line text-ink font-semibold text-sm;
  @apply rounded-full no-underline;
  @apply transition-all duration-200;
  @apply hover:border-ink hover:bg-ink/5;
}
```

#### Large Button Modifier

```css
.btn-lg {
  @apply px-7 py-3.5 text-base;
}
```

### Cards

#### Standard Card

```css
.card {
  @apply bg-surface-card border border-line rounded-lg shadow p-6;
  @apply transition-all duration-300 ease-spring;
}

.card:hover {
  @apply -translate-y-1 shadow-lg;
}
```

#### Study System Card (Image + overlay)

```css
.study-card {
  @apply relative rounded-2xl overflow-hidden no-underline block;
  @apply border border-line/50 bg-surface-card;
  @apply transition-all duration-500 ease-out;
  min-height: 380px;
}

.study-card:hover {
  @apply -translate-y-2;
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2), 0 0 40px rgba(56, 189, 248, 0.1);
}

.study-card-image img {
  @apply transition-all duration-700 ease-out;
  transform: scale(1.05);
}

.study-card:hover .study-card-image img {
  transform: scale(1.12);
}
```

#### Pillar Card (Glassmorphism)

```css
.pillar-card {
  @apply p-7 rounded-2xl text-left;
  @apply border border-white/10;
  @apply transition-all duration-300 ease-out;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  backdrop-filter: blur(10px);
}

.pillar-card:hover {
  @apply -translate-y-2;
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3), 0 0 30px rgba(56, 189, 248, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
```

#### News Card

```css
.news-card {
  @apply rounded-2xl overflow-hidden bg-surface-card;
  @apply border border-line/50;
  @apply transition-all duration-300 ease-out;
}

.news-card:hover {
  @apply -translate-y-2 shadow-xl;
  border-color: rgba(56, 189, 248, 0.3);
}

.news-card-image img {
  @apply transition-transform duration-500 ease-out;
}

.news-card:hover .news-card-image img {
  @apply scale-105;
}
```

#### Organism Card (Icon + text)

```css
.organism-card {
  @apply p-6 rounded-2xl text-center;
  @apply bg-surface-card border border-line/50;
  @apply transition-all duration-300 ease-out;
}

.organism-card:hover {
  @apply -translate-y-2;
  border-color: rgba(56, 189, 248, 0.3);
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
}

.organism-icon {
  @apply w-16 h-16 mx-auto mb-4 rounded-2xl;
  @apply flex items-center justify-center;
  @apply bg-accent/10 text-accent;
  @apply transition-all duration-300;
}

.organism-card:hover .organism-icon {
  @apply bg-accent/20 scale-110;
}
```

#### Stat Card

```css
/* On dark sections (navy-deep) */
.stat-card {
  @apply relative bg-white/[0.03] border border-white/10 rounded-2xl;
  @apply p-6 lg:p-7 text-center;
  @apply transition-all duration-300 ease-out;
}

.stat-card:hover {
  @apply bg-white/[0.06] -translate-y-1;
  border-color: rgba(56, 189, 248, 0.3);
}

/* On light sections (surface) */
.stat-card-light {
  @apply relative bg-surface-card border border-line/50 rounded-2xl;
  @apply p-6 lg:p-7 text-center;
  @apply transition-all duration-300 ease-out;
}

.stat-card-light:hover {
  @apply -translate-y-1;
  border-color: rgba(56, 189, 248, 0.3);
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
}

.stat-number, .stat-number-light {
  @apply text-4xl lg:text-5xl font-black text-accent inline;
}

.stat-suffix, .stat-suffix-light {
  @apply text-xl lg:text-2xl font-bold text-accent/70 ml-0.5;
}

.stat-label {
  @apply block text-xs font-semibold text-white/50 uppercase tracking-wider mt-2;
}

.stat-label-light {
  @apply block text-xs font-semibold text-muted uppercase tracking-wider mt-2;
}
```

### Chips & Tags

#### Chip (Filter/Tag)

```css
.chip {
  @apply inline-flex items-center gap-2 px-3 py-2;
  @apply border border-line rounded-xl bg-surface-card;
  @apply font-bold text-sm text-ink;
  @apply transition-all duration-200;
  @apply min-h-[38px] shadow-sm;
}

.chip:hover {
  @apply -translate-y-0.5 shadow-md;
}

.chip.active {
  @apply bg-accent border-accent text-white;
}
```

#### Anchor Chip (Navigation pills)

```css
.anchor-chip {
  @apply px-4 py-2 text-sm font-medium text-muted;
  @apply border border-line rounded-full no-underline;
  @apply transition-all duration-200;
  @apply hover:text-ink hover:border-ink;
}

.anchor-chip-accent {
  @apply text-accent border-accent/30;
  @apply hover:bg-accent/10 hover:border-accent;
}
```

#### Badge

```css
.badge {
  @apply inline-flex items-center px-2.5 py-1 rounded-full;
  @apply text-xs font-bold uppercase tracking-wide;
  @apply bg-accent/20 text-accent;
}

.badge-success {
  @apply bg-accent-2/20 text-accent-2;
}
```

### Navigation

#### Desktop Nav Link

```css
.nav-link {
  @apply relative px-3 py-2 text-sm font-semibold no-underline;
  @apply transition-colors duration-200;
}

.nav-link:not(.text-accent) {
  @apply text-ink/80 hover:text-accent;
}

.nav-underline {
  @apply absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full;
  @apply origin-left scale-x-0 transition-transform duration-300;
}

.nav-link:hover .nav-underline,
.nav-link[aria-current="page"] .nav-underline {
  @apply scale-x-100;
}
```

#### Nav Highlight Button

```css
.nav-link-highlight {
  @apply relative px-4 py-2 text-sm font-semibold no-underline rounded-full;
  @apply transition-all duration-200;
  @apply bg-accent/10 text-accent border border-accent/30;
  @apply hover:bg-accent hover:text-navy-deep;
}
```

#### Mobile Nav Link

```css
.mobile-nav-link {
  @apply py-3 px-4 text-lg font-semibold no-underline rounded-xl;
  @apply transition-all duration-200;
  @apply text-ink hover:bg-line/50;
}

.mobile-nav-link[aria-current="page"] {
  @apply text-accent bg-accent/10;
}
```

### Form Elements

#### Search Button

```css
.nav-search-btn {
  @apply flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium;
  @apply text-ink/70 bg-surface-card/50 border border-line/50;
  @apply transition-all;
}

.nav-search-btn:hover {
  @apply text-accent border-accent/50 bg-accent/5;
}

.nav-kbd {
  @apply bg-surface border border-line/70 text-muted;
  @apply inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-xs font-mono;
}
```

---

## Motion & Animation

### Easing Functions

```css
/* Standard easing */
ease-out: cubic-bezier(0.4, 0, 0.2, 1);

/* Spring easing (playful interactions) */
ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Duration Guidelines

| Animation Type | Duration | Easing |
|----------------|----------|--------|
| Hover states | 200-300ms | `ease` or `ease-out` |
| Scroll reveals | 600ms | `ease-out` |
| Page transitions | 250-350ms | `ease-out` |
| Count-up numbers | 1800ms | `ease-out` |
| Decorative (bubbles, rays) | 12-20s | `ease-in-out` |

### Core Animations

#### Scroll Reveal

```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

#### Stagger Delays

```css
.stagger-1 { transition-delay: 50ms; }
.stagger-2 { transition-delay: 100ms; }
.stagger-3 { transition-delay: 150ms; }
.stagger-4 { transition-delay: 200ms; }
.stagger-5 { transition-delay: 250ms; }
/* ... up to stagger-10 (500ms) */
```

#### Fade Animations

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-16px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

#### Gradient Shift (Text)

```css
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

### View Transitions

```css
::view-transition-old(root) {
  animation: page-fade-out 0.25s ease-out forwards;
}

::view-transition-new(root) {
  animation: page-fade-in 0.35s ease-out forwards;
}

@keyframes page-fade-out {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-8px); }
}

@keyframes page-fade-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Decorative Animations

#### Floating Bubbles

```css
.bubble {
  @apply absolute rounded-full;
  background: radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.3), rgba(45, 212, 191, 0.1));
  animation: float-up linear infinite;
}

@keyframes float-up {
  0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
  10% { opacity: 0.6; }
  90% { opacity: 0.6; }
  100% { transform: translateY(-100px) scale(1); opacity: 0; }
}
```

#### Blob Morphing

```css
.blob {
  @apply absolute rounded-full;
  filter: blur(80px);
  animation: blob-morph 20s ease-in-out infinite;
}

@keyframes blob-morph {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
  25% { transform: translate(30px, -50px) scale(1.1) rotate(90deg); }
  50% { transform: translate(-20px, 20px) scale(0.95) rotate(180deg); }
  75% { transform: translate(20px, 40px) scale(1.05) rotate(270deg); }
}
```

#### Light Rays

```css
.light-ray {
  @apply absolute;
  top: -20%;
  width: 120px;
  height: 140%;
  background: linear-gradient(180deg, rgba(56, 189, 248, 0.15) 0%, transparent 100%);
  filter: blur(30px);
  animation: light-ray-shimmer 12s ease-in-out infinite;
}

@keyframes light-ray-shimmer {
  0%, 100% { opacity: 0; }
  15%, 85% { opacity: 0.5; }
  50% { opacity: 0.7; }
}
```

### Icon Animations

```css
@keyframes icon-bounce {
  0%, 100% { transform: scale(1.1) translateY(0); }
  50% { transform: scale(1.15) translateY(-3px); }
}

@keyframes icon-wiggle {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-8deg); }
  75% { transform: rotate(8deg); }
  100% { transform: rotate(0deg); }
}
```

---

## Responsive Patterns

### Breakpoints

```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (desktops) */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2XL screens */
```

### Common Responsive Patterns

```css
/* Typography scaling */
.hero-title {
  @apply text-5xl md:text-6xl lg:text-7xl;
}

/* Grid responsiveness */
.role-grid {
  @apply grid gap-6 sm:grid-cols-2 lg:grid-cols-3;
}

/* Spacing responsiveness */
.section-lg {
  @apply py-20 md:py-28 pb-28 md:pb-36;
}

/* Hero padding */
.hero {
  @apply pt-28 md:pt-36 pb-16 md:pb-20;
}

/* Show/hide elements */
.desktop-only { @apply hidden md:flex; }
.mobile-only { @apply md:hidden; }

/* Flex direction changes */
.hero-actions {
  @apply flex flex-col sm:flex-row gap-4;
}
```

---

## Accessibility

### Focus States

```css
:focus-visible {
  @apply outline-2 outline-offset-2 outline-accent;
}

/* Button focus */
.btn:focus-visible {
  @apply ring-2 ring-accent ring-offset-2 ring-offset-surface;
}
```

### Skip Link

```css
.skip-link {
  @apply absolute left-[-9999px] top-auto w-px h-px overflow-hidden;
}

.skip-link:focus {
  @apply fixed left-4 top-4 px-3 py-2 bg-accent text-white rounded-lg z-[1000] w-auto h-auto;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .scroll-reveal,
  .card,
  .btn,
  .chip,
  .img-zoom img,
  * {
    transition: none !important;
    animation: none !important;
  }

  .scroll-reveal {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

### Touch Targets

All interactive elements must have a minimum touch target of 44x44px:

```css
.btn {
  @apply min-h-[44px];
}

.chip {
  @apply min-h-[38px]; /* May need adjustment */
}
```

### Color Contrast

| Combination | Ratio | Status |
|-------------|-------|--------|
| Ink on Surface | 15.4:1 | AAA |
| Muted on Surface | 5.8:1 | AA |
| Accent on Surface | 5.2:1 | AA |
| Muted-2 on Surface | 4.1:1 | AA (borderline) |

---

## Inconsistencies & Consolidation Notes

### Button Style Variations

**Issue:** The People page uses different button styles than the global `.btn` classes.

| Location | Primary Style | Secondary Style |
|----------|---------------|-----------------|
| Global (index, research) | Sky blue bg, white text, rounded-xl | Transparent, border-2, rounded-xl |
| People page | Ink bg, surface text, rounded-full | Border-1, rounded-full |
| Join section | Accent bg, white text, rounded-full | - |

**Recommendation:** Consolidate to global `.btn` pattern. If pill-shaped buttons are needed, add a `.btn-pill` modifier:

```css
.btn-pill {
  @apply rounded-full;
}
```

### Card Border Opacity

**Issue:** Inconsistent border opacity across cards.

| Component | Border |
|-----------|--------|
| Most cards | `border-line/50` |
| Pillar cards | `border-white/10` |
| Some sections | `border-line/30` |

**Recommendation:** Standardize to `border-line/50` for cards on surface, `border-white/10` for cards on navy-deep.

### Hover Shadow Variations

**Issue:** Multiple shadow patterns for hover states.

| Component | Hover Shadow |
|-----------|--------------|
| Standard card | `shadow-lg` |
| Study card | Complex multi-layer + glow |
| Pillar card | Multi-layer + inset |

**Recommendation:** Create standardized shadow utilities:

```css
.shadow-hover { @apply shadow-lg; }
.shadow-hover-glow { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2), 0 0 40px rgba(56, 189, 248, 0.1); }
```

### Transform Values

**Issue:** Different lift heights on hover.

| Component | Hover Transform |
|-----------|-----------------|
| Standard card | `-translate-y-1` |
| Study/news cards | `-translate-y-2` |
| Buttons | `-translate-y-0.5` |

**Recommendation:** This is intentional - larger cards lift more. Document as:
- Buttons: `-translate-y-0.5`
- Small cards: `-translate-y-1`
- Large cards: `-translate-y-2`

### Hero Button Sizes

**Issue:** Hero buttons use `.btn-lg` but this isn't consistently applied.

**Recommendation:** Ensure all hero CTAs use `.btn.btn-primary.btn-lg`.

---

## File References

| Purpose | File |
|---------|------|
| Tailwind config | `tailwind.config.mjs` |
| Global styles | `src/styles/global.css` |
| Layout wrapper | `src/layouts/Layout.astro` |
| Nav component | `src/components/layout/Nav.astro` |
| Wave divider | `src/components/shared/WaveDivider.astro` |
| Design philosophy | `DESIGN.md` |

---

## Implementation Checklist

When building new components, verify:

- [ ] Uses colors from the defined palette only
- [ ] Typography follows the fluid scale
- [ ] Spacing uses spacing tokens
- [ ] Has appropriate hover/focus states
- [ ] Includes `scroll-reveal` class if below fold
- [ ] Works with `prefers-reduced-motion`
- [ ] Touch targets are 44px minimum
- [ ] Images have alt text
- [ ] Links have descriptive text
- [ ] Uses consistent border opacity patterns
- [ ] Uses standardized button styles
- [ ] Follows established shadow patterns

---

*Last updated: December 2024*
