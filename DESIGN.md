# Ocean Recoveries Lab - Design System & UX Guidelines

> **For Claude Code:** This document defines the visual language, motion principles, and interaction patterns for the Ocean Recoveries website. Follow these guidelines when making UI changes.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Component Patterns](#component-patterns)
6. [Motion & Animation](#motion--animation)
7. [Interaction Patterns](#interaction-patterns)
8. [Accessibility](#accessibility)
9. [Implementation Checklist](#implementation-checklist)

---

## Design Philosophy

### Core Principles

1. **Scientific Credibility** - Clean, professional design that conveys research legitimacy
2. **Ocean-Inspired Calm** - Deep navy palette evokes underwater serenity
3. **Purposeful Motion** - Animation enhances understanding, never distracts
4. **Progressive Disclosure** - Guide users through content hierarchy
5. **Accessibility First** - All interactions work for all users

### Design Motifs

The site uses **two consistent motion motifs** (never more):

| Motif | Usage | CSS Class |
|-------|-------|-----------|
| **Fade + Lift** | Scroll reveals, card hovers, page loads | `.scroll-reveal`, `.card:hover` |
| **Smooth Flow** | Page transitions, parallax backgrounds | View Transitions API, `transform: translateY()` |

### What NOT to Do

- No bouncing or elastic animations (feels unserious)
- No rotating or spinning elements (distracting)
- No rainbow gradients or neon colors (off-brand)
- No more than 2 animations happening simultaneously
- No motion that can't be disabled (`prefers-reduced-motion`)

---

## Color System

### Primary Palette

```css
/* Background layers (dark to light) */
--surface:        #0f172a;  /* Base background */
--surface-card:   #1e293b;  /* Elevated cards */
--navy-deep:      #0b2545;  /* Deepest sections */
--navy-highlight: #1e3a5f;  /* Highlighted areas */

/* Text hierarchy */
--ink:    #f1f5f9;  /* Primary text */
--ink-2:  #e2e8f0;  /* Secondary text */
--muted:  #94a3b8;  /* Tertiary/body text */
--muted-2: #64748b; /* Disabled/subtle text */

/* Accent colors */
--accent:      #38bdf8;  /* Sky blue - primary CTA, links */
--accent-2:    #2dd4bf;  /* Teal - secondary accent, success */
--accent-warm: #ff6f5b;  /* Coral - warm highlights (use sparingly) */

/* Borders */
--line:   #334155;  /* Default borders */
--line-2: #475569;  /* Emphasized borders */
```

### Color Usage Rules

| Element | Color | Notes |
|---------|-------|-------|
| Page background | `surface` | Always `#0f172a` |
| Cards | `surface-card` | Use with `border-line` |
| Primary buttons | `accent` | White text |
| Secondary buttons | `transparent` | `border-line`, `text-ink` |
| Links | `accent` | Underline on hover |
| Body text | `muted` | Never pure white for paragraphs |
| Headings | `ink` | Can use `text-gradient` for hero |
| Badges | `accent/20` bg, `accent` text | Or `accent-2` variant |

### Gradients

```css
/* Hero text gradient */
.text-gradient {
  background: linear-gradient(to right, #38bdf8, #2dd4bf);
  -webkit-background-clip: text;
  color: transparent;
}

/* Card hover glow */
box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);

/* Section divider gradient */
background: linear-gradient(to bottom, transparent, #0f172a);
```

---

## Typography

### Font Stack

```css
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
             'Segoe UI', Roboto, Arial, sans-serif;
```

### Fluid Type Scale

| Token | Size Range | Usage |
|-------|------------|-------|
| `text-fluid-xs` | 12-14px | Captions, metadata |
| `text-fluid-sm` | 14-16px | Small UI text |
| `text-fluid-base` | 16-18px | Body text |
| `text-fluid-lg` | 18-20px | Lead paragraphs |
| `text-fluid-xl` | 20-24px | Section intros |
| `text-fluid-2xl` | 24-32px | H3 headings |
| `text-fluid-3xl` | 30-40px | H2 headings |
| `text-fluid-4xl` | 36-48px | H1 headings |
| `text-fluid-5xl` | 44-60px | Hero headlines |

### Text Styling

```css
/* Headings */
h1, h2 { font-weight: 900; letter-spacing: -0.02em; }
h3, h4 { font-weight: 800; }

/* Eyebrow text */
.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--accent);
}

/* Lead paragraph */
.lead {
  font-size: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  color: var(--muted);
  line-height: 1.7;
}
```

---

## Spacing & Layout

### Spacing Scale

```css
--s-1:  0.5rem;    /* 8px - tight gaps */
--s0:   0.75rem;   /* 12px - small gaps */
--s1:   1.125rem;  /* 18px - medium gaps */
--s2:   1.5rem;    /* 24px - standard gaps */
--s3:   2rem;      /* 32px - section spacing */
--s4:   clamp(3rem, 8vw, 4.5rem);   /* 48-72px - large sections */
--s5:   clamp(4.5rem, 10vw, 6rem);  /* 72-96px - hero spacing */
--edge: clamp(1.125rem, 5vw, 3rem); /* 18-48px - page margins */
```

### Container

```css
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding-left: var(--edge);
  padding-right: var(--edge);
}
```

### Grid Patterns

```css
/* 2-column (study systems, features) */
grid-template-columns: repeat(2, 1fr);
gap: 1.5rem;

/* 3-column (research pillars, cards) */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 2rem;

/* 4-column (stats) */
grid-template-columns: repeat(4, 1fr);
gap: 2rem;
```

---

## Component Patterns

### Cards

```astro
<!-- Standard card -->
<div class="card">
  <h3>Title</h3>
  <p>Description</p>
</div>

<!-- Interactive card -->
<a href="/path" class="card group">
  <div class="img-zoom">
    <img src="..." alt="..." />
  </div>
  <h3 class="group-hover:text-accent">Title</h3>
</a>
```

Card CSS:
```css
.card {
  background: var(--surface-card);
  border: 1px solid var(--line);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.3);
}
```

### Buttons

```astro
<!-- Primary (main CTA) -->
<a href="/join" class="btn btn-primary">Join the Lab</a>

<!-- Secondary (alternative action) -->
<a href="/research" class="btn btn-secondary">Learn More</a>

<!-- Ghost (on dark images) -->
<a href="/about" class="btn btn-ghost">About Us</a>
```

### Badges & Chips

```astro
<!-- Badge (status/category) -->
<span class="badge">Open Access</span>
<span class="badge badge-success">New</span>

<!-- Chip (filter/tag) -->
<button class="chip">Coral Reefs</button>
<button class="chip active">Kelp Forests</button>
```

### Hero Sections

Pattern:
1. Eyebrow badge or institutional tag
2. Large headline (can use gradient text)
3. Supporting paragraph (`.lead`)
4. CTA buttons (primary + secondary)
5. Visual indicator (scroll arrow, stats preview)

```astro
<section class="hero">
  <span class="badge">UC Santa Barbara</span>
  <h1>Understanding <span class="text-gradient">Ocean Recovery</span></h1>
  <p class="lead">Supporting paragraph...</p>
  <div class="flex gap-4">
    <a href="#" class="btn btn-primary">Primary Action</a>
    <a href="#" class="btn btn-secondary">Secondary</a>
  </div>
</section>
```

### Section Dividers

Use `WaveDivider.astro` between major sections:

```astro
import WaveDivider from '@components/shared/WaveDivider.astro';

<section class="bg-surface">...</section>
<WaveDivider />
<section class="bg-navy-deep">...</section>
```

---

## Motion & Animation

### Core Animations

```css
/* Fade up on scroll reveal */
.scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays for lists */
.stagger-1 { transition-delay: 50ms; }
.stagger-2 { transition-delay: 100ms; }
/* ... up to stagger-10 */
```

### View Transitions (Page Navigation)

Already configured in `Layout.astro`:
- Cross-fade between pages (0.2s out, 0.3s in)
- Nav persists without animation
- Scroll position resets appropriately

### Parallax (Use Sparingly)

```css
/* Subtle background parallax */
.parallax-bg {
  transform: translateY(calc(var(--scroll-y, 0) * 0.3));
}
```

Only use for:
- Hero background images
- Decorative elements (bubbles, particles)
- Never for content or text

### Hover States

```css
/* Cards lift */
transform: translateY(-4px);

/* Buttons glow */
box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);

/* Images zoom */
.img-zoom img { transform: scale(1.05); }

/* Links underline */
text-decoration-thickness: 2px;
```

### Animation Timing

| Animation | Duration | Easing |
|-----------|----------|--------|
| Hover states | 200-300ms | `ease` or `ease-out` |
| Scroll reveals | 600ms | `ease-out` |
| Page transitions | 200-300ms | `ease-out` |
| Count-up numbers | 1500ms | `ease-out` |

### Spring Easing (Special)

```css
transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
```

Use for: playful micro-interactions (tooltip appears, chip pops)

---

## Interaction Patterns

### Navigation

- Sticky nav with glass blur effect
- Active page indicated in nav
- Mobile: hamburger menu with slide-in drawer
- Jump links within long pages (e.g., research page pills)

### Search (Future Enhancement)

Consider implementing command palette (`Cmd+K`):
- Quick navigation to any page
- Search publications, news, team members
- Use Pagefind for static search index

### Progressive Loading

1. Critical content loads first (no skeleton screens needed for static site)
2. Images use `loading="lazy"` except above-fold
3. Heavy components (maps, 3D) load on interaction

### Form Interactions

- Clear focus states (`outline-2 outline-offset-2 outline-accent`)
- Inline validation where possible
- Success states use `accent-2` (teal)

---

## Accessibility

### Required Practices

1. **Reduced Motion**
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

2. **Focus Visibility**
   ```css
   :focus-visible {
     outline: 2px solid var(--accent);
     outline-offset: 2px;
   }
   ```

3. **Skip Link**
   ```html
   <a href="#main-content" class="skip-link">Skip to main content</a>
   ```

4. **Color Contrast**
   - `ink` on `surface`: 15.4:1 (AAA)
   - `muted` on `surface`: 5.8:1 (AA)
   - `accent` on `surface`: 5.2:1 (AA)

5. **Touch Targets**
   - Minimum 44x44px for buttons/links
   - Adequate spacing between interactive elements

### ARIA Guidelines

- Use semantic HTML first (`<nav>`, `<main>`, `<section>`)
- Add `aria-label` to icon-only buttons
- Use `aria-current="page"` for active nav items
- Live regions for dynamic content updates

---

## Implementation Checklist

When adding new UI components, verify:

- [ ] Uses colors from the defined palette only
- [ ] Typography follows the fluid scale
- [ ] Spacing uses the spacing tokens
- [ ] Has appropriate hover/focus states
- [ ] Includes `scroll-reveal` class if below fold
- [ ] Works with `prefers-reduced-motion`
- [ ] Touch targets are 44px minimum
- [ ] Images have alt text
- [ ] Links have descriptive text (not "click here")
- [ ] No more than 2 animation types used

---

## Implemented Enhancements

### Command Palette (Cmd+K)

A global search and navigation overlay accessible via:
- Keyboard: `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux)
- Click: Search button in navigation bar

**Features:**
- Quick navigation to all pages
- Search publications by title
- Search news articles
- Search team members
- Keyboard navigation (arrows + Enter)

**Component:** `src/components/shared/CommandPalette.astro`

### Enhanced View Transitions

Page transitions use a subtle slide + fade effect:
- Pages fade out with slight upward motion
- New pages fade in with slight downward motion
- Navigation bar persists without animation
- Respects `prefers-reduced-motion`

**Named transition groups available:**
- `hero-image` - For hero image morphing
- `card-image` - For card to detail transitions
- `page-title` - For title transitions

---

## Future Enhancements (Approved)

The following enhancements are pre-approved for implementation:

### 1. Pagefind Static Search (Priority: High)
- Replace command palette's built-in search with Pagefind
- Full-text search across all content
- Smaller bundle size with external index
- Installation: `npm install @pagefind/default-ui`

### 2. Scroll-Linked Reveals (Priority: Low)
- Consider GSAP ScrollTrigger for pinned narratives
- Only for research methodology sections
- Must respect reduced motion

### 3. Signature Interactive Element (Priority: Low)
- One WebGL/3D element (e.g., globe showing field sites)
- Must be lazy-loaded
- Must have static fallback image
- Consider Rive for stateful diagrams

---

## File References

| Purpose | File |
|---------|------|
| Tailwind config | `tailwind.config.mjs` |
| Global styles | `src/styles/global.css` |
| Layout wrapper | `src/layouts/Layout.astro` |
| Nav component | `src/components/layout/Nav.astro` |
| Wave divider | `src/components/shared/WaveDivider.astro` |

---

*Last updated: December 2024*
