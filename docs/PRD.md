# Ocean Recoveries Lab Website - Product Requirements Document

**Version:** 1.0
**Last Updated:** December 11, 2024
**Status:** Active Development

---

## Executive Summary

Build a modern, performant static website for the Ocean Recoveries Lab (oceanrecoveries.com), an academic research group at UC Santa Barbara. The site will replace the current Squarespace-based site with a custom Astro-powered solution that offers superior performance, accessibility, and developer experience.

**Current site:** https://www.oceanrecoveries.com/

---

## Goals & Success Metrics

### Primary Goals
1. Create a fast, accessible, professionally designed academic website
2. Enable smooth content updates via markdown files (single maintainer)
3. Deliver modern frontend interactions and animations
4. Achieve excellent performance scores (Lighthouse 90+)
5. Support both light and dark modes

### Target Audience
- Funders and grant agencies
- Academic collaborators
- Prospective students (undergraduate, graduate, postdoc)
- Scientific community
- General public interested in ocean conservation

### Success Metrics
- Lighthouse Performance: 90+
- First Contentful Paint: <1.5s
- Total Blocking Time: <200ms
- Core Web Vitals: All green
- WCAG AA accessibility compliance

---

## Tech Stack

| Category | Technology | Notes |
|----------|------------|-------|
| Framework | Astro (latest stable) | View Transitions API enabled |
| Styling | Tailwind CSS | + custom CSS for animations |
| Animations | Framer Motion (React islands) | For stateful interactive components |
| Scroll Animations | Intersection Observer + CSS | Native, lightweight |
| Complex Sequences | GSAP (optional) | Only if absolutely needed |
| Hosting | Netlify | Auto-deploy from GitHub |
| Content | Markdown + JSON | People in Markdown, publications in JSON |
| CMS | None | Single maintainer workflow |

---

## Site Structure

```
/
├── index.astro                    # Homepage
├── research/
│   ├── index.astro               # Research overview
│   ├── coral-reefs.astro         # Theme page
│   ├── kelp-forests.astro        # Theme page
│   └── organismal-mechanisms.astro # Theme page
├── people/
│   └── index.astro               # Team grid
├── publications/
│   └── index.astro               # Filterable publication list
├── news/
│   └── index.astro               # Blog/news listing
│   └── [slug].astro              # Individual blog posts
├── join-us/
│   └── index.astro               # Opportunities page
└── featured-papers/               # (Optional, may integrate into publications)
```

---

## Page Specifications

### 1. Homepage (`/`)

**Sections (in order):**

1. **Hero**
   - Full-width background image with subtle parallax (0.4 speed)
   - Gradient overlay for text readability
   - Animated text reveal: "Ocean Recoveries Lab"
   - Tagline: "Recovering ocean ecosystems"
   - Brief mission statement (2-3 sentences)
   - Scroll indicator (animated bounce)
   - Height: 100vh desktop, 80vh mobile

2. **Who We Are**
   - Scroll-reveal animation
   - Short lab description
   - "Meet the Team" CTA button

3. **Impact Metrics**
   - 4-stat grid: publications, funding, datasets, partners
   - Count-up animation on scroll
   - Dynamic publication count from JSON
   - Staggered reveal (100ms per item)

4. **Research Themes**
   - 3 cards linking to theme pages
   - Image + title + description
   - Staggered grid reveal
   - Hover: image zoom, card lift

5. **Featured Papers**
   - 3-4 highlighted publications (`featured: true`)
   - Title, summary, badges (Open Access, Data/Code)
   - Card hover effects

6. **Footer**
   - Department/university affiliation
   - Contact info
   - Social links (Google Scholar, ORCID, GitHub)

### 2. Navigation

**Desktop:**
- Fixed top, transparent over hero
- Glassmorphism on scroll (blur + semi-transparent)
- Logo left, links right
- Sliding active state indicator
- Dark mode toggle

**Mobile:**
- Hamburger menu (animated icon)
- Full-screen overlay with backdrop blur
- Staggered menu item animation

### 3. People Page (`/people`)

- Hero with team photo
- Grid layout with staggered reveal (50ms)
- Person cards: photo, name, role, title, tags
- Hover: card lift, photo zoom, social links appear
- Sections: PI, Postdocs, Graduate Students, Undergraduates, Alumni
- Collapsible alumni section with search

**Current Team Members (from existing content):**
- Adrian Stier (PI)
- Raine Detmer (Postdoc)
- Adnan Alalawi (PhD Student)
- Molly Brzezinski (Lab Manager)
- Hayden Vega (Undergraduate)
- Jaden Orli (Undergraduate)
- Alumni section

### 4. Publications Page (`/publications`)

**Most complex page - premium app feel**

**Filter Bar (sticky):**
- Theme filter (pill/chip buttons)
- Year range (slider or dropdown)
- Open Access toggle
- Search input (debounced 300ms)
- Active filters as removable chips
- Clear all button

**Sort Options:**
- Year (newest/oldest)
- Citations (most/least)

**Publication Cards:**
- Compact default: title, authors, year, journal, badges
- Expandable: full abstract, all authors, data/code links
- Smooth expand/collapse animation
- PI name (Stier) always bold

**Filtering Behavior:**
- Real-time updates
- Animated transitions (fade, reorder)
- FLIP animations for smooth reflow
- Skeleton loaders during search

**Implementation:** React island with Framer Motion

### 5. Research Theme Pages (`/research/[theme]`)

**Three themes:**
1. **Coral Reefs** - Field experiments, resilience, restoration
2. **Kelp Forests** - California coast, predator-prey, lobster/urchin
3. **Organismal Mechanisms** - Physiology, symbiosis, stress responses

**Each page includes:**
- Hero with parallax
- Theme introduction
- Key research questions/projects
- Related publications (filtered by theme_tag)
- Image gallery (optional lightbox)

### 6. News/Blog Page (`/news`)

- Card grid of posts
- Category/tag filtering
- Date, title, excerpt, featured image
- Pagination or infinite scroll
- Individual post pages with rich markdown support

### 7. Join Us Page (`/join-us`)

- Welcoming hero
- Opportunity sections (undergrad, grad, postdoc)
- Accordion for different positions
- Application requirements checklist
- Contact CTA

---

## Design System

### Color Palette

**Light Mode:**
| Token | Value | Usage |
|-------|-------|-------|
| `--ink` | #0b2545 | Primary headings |
| `--ink-2` | #173451 | Secondary headings |
| `--muted` | #566579 | Body text |
| `--muted-2` | #6e7d8a | Labels, metadata |
| `--accent` | #117db2 | Links, buttons, accent |
| `--accent-2` | #11c5b3 | Secondary accent (teal) |
| `--accent-warm` | #ff6f5b | Warm accent (coral) |
| `--bg` | #ffffff | Background |
| `--card` | #ffffff | Card backgrounds |
| `--line` | #e6edf6 | Borders, dividers |
| `--line-2` | #dbe7f3 | Secondary borders |

**Dark Mode:**
| Token | Value | Usage |
|-------|-------|-------|
| `--ink` | #f1f5f9 | Primary headings |
| `--ink-2` | #e2e8f0 | Secondary headings |
| `--muted` | #94a3b8 | Body text |
| `--muted-2` | #64748b | Labels, metadata |
| `--accent` | #38bdf8 | Links, buttons |
| `--accent-2` | #2dd4bf | Secondary accent |
| `--bg` | #0f172a | Background |
| `--card` | #1e293b | Card backgrounds |
| `--line` | #334155 | Borders |

### Typography

- **Font:** Inter (400, 500, 600, 700, 800, 900)
- **Headings:** Extra bold (800-900), tight tracking
- **Body:** Regular (400-500), 1.6 line height
- **Scale:** Fluid typography using clamp()

### Spacing Scale

```
--s-1: 8px
--s0: 12px
--s1: 18px
--s2: 24px
--s3: 32px
--s4: clamp(48px, 8vw, 72px)
--s5: clamp(72px, 10vw, 96px)
```

### Border Radius

```
--r: 16px      # Standard
--r-lg: 22px   # Large cards
```

### Shadows

```
--shadow: 0 6px 16px rgba(17,34,68,.08)
--shadow-lg: 0 18px 42px rgba(17,34,68,.14)
```

---

## Animation Specifications

### Scroll Reveal (Default)
```css
/* Base state */
opacity: 0;
transform: translateY(20px);

/* Revealed */
opacity: 1;
transform: translateY(0);
transition: opacity 0.6s ease-out, transform 0.6s ease-out;
```

### Stagger Timing
- Grid items: 50ms delay between each
- List items: 30ms delay between each
- Max stagger: 500ms

### Hover Effects
```css
/* Card hover */
transform: translateY(-4px);
box-shadow: 0 12px 24px rgba(0,0,0,0.1);
transition: transform 0.2s ease, box-shadow 0.2s ease;

/* Image hover */
transform: scale(1.05);
transition: transform 0.4s ease;
```

### Page Transitions (Astro View Transitions)
```css
::view-transition-old(root) {
  animation: fade-out 0.2s ease-out;
}
::view-transition-new(root) {
  animation: fade-in 0.3s ease-out;
}
```

### Reduced Motion
- All animations disabled for `prefers-reduced-motion`
- GPU-accelerated only (transform, opacity)

---

## Content Data Structures

### People (`/src/content/people/*.md`)

```yaml
---
name: "Adrian Stier"
role: "pi"  # pi | postdoc | phd | manager | undergrad | alumni
title: "Associate Professor"
image: "/images/people/adrian.png"
actionImage: "/images/people/adrian-field.jpg"  # Optional hover image
email: "adrian.stier@ucsb.edu"
website: "https://scholar.google.com/..."
orcid: "0000-0002-4704-4145"
github: "stier-lab"
tags: ["Coral resilience", "Predator-prey", "Restoration"]
order: 1
status: "current"  # current | alumni
alumniYear: null  # For alumni only
alumniNow: null   # Current position for alumni
---

Bio text goes here with markdown formatting.
```

### Publications (`/src/data/publications.json`)

```json
{
  "title": "Paper title",
  "authors": "Stier AC, Smith J, Jones K",
  "year": 2024,
  "journal": "Nature",
  "doi": "10.1000/example",
  "plain_summary": "Lay summary of the paper",
  "theme_tags": ["Coral", "Methods/Models"],
  "featured": true,
  "open_access": true,
  "citation_count": 45,
  "data_code_links": ["https://github.com/...", "https://zenodo.org/..."],
  "pdf_url": "https://...",
  "source_url": "https://..."
}
```

### Research Themes (`/src/content/research/*.md`)

```yaml
---
title: "Coral Reefs"
tagline: "Field experiments and models reveal how disturbance shapes coral resilience."
heroImage: "/images/research/coral-hero.jpg"
order: 1
---

Extended description with markdown.
```

### Blog Posts (`/src/content/blog/*.md`)

```yaml
---
title: "Post Title"
date: 2024-12-11
author: "Adrian Stier"
excerpt: "Brief summary for cards"
featuredImage: "/images/blog/post-image.jpg"
tags: ["Research", "Coral", "Fieldwork"]
draft: false
---

Post content in markdown.
```

---

## Component Architecture

```
/src/components/
├── layout/
│   ├── Layout.astro          # Base layout
│   ├── Nav.astro             # Responsive navigation
│   └── Footer.astro
├── home/
│   ├── Hero.astro            # Parallax hero
│   ├── StatCard.astro        # Count-up animation
│   └── FeaturedPaper.astro
├── people/
│   ├── PersonCard.astro
│   └── AlumniSection.astro
├── publications/
│   ├── PublicationFilters.tsx  # React island
│   ├── PublicationList.tsx     # React island
│   └── PublicationCard.tsx
├── research/
│   └── ResearchCard.astro
├── blog/
│   └── BlogCard.astro
├── shared/
│   ├── Badge.astro
│   ├── Button.astro
│   ├── SEO.astro
│   ├── ScrollReveal.astro
│   ├── AnimatedGrid.astro
│   ├── ImageHover.astro
│   └── ThemeToggle.astro     # Dark mode toggle
└── icons/
    └── [icon components]
```

---

## Build Order / Milestones

### Phase 1: Foundation
1. Project scaffolding (Astro + Tailwind + Framer Motion)
2. Folder structure and config files
3. Enable View Transitions
4. Global styles + CSS custom properties
5. Animation utility classes
6. Dark mode implementation

### Phase 2: Core Layout
7. Layout component with nav + footer
8. Glassmorphism navigation
9. Mobile menu with animations
10. Theme toggle component

### Phase 3: Homepage
11. Hero with parallax + text reveal
12. Stats section with count-up
13. Research theme cards
14. Featured papers section

### Phase 4: Content Pages
15. People page with card grid
16. Research overview + theme pages
17. Join Us page

### Phase 5: Publications (Complex)
18. Static publication list rendering
19. Filter UI with animations
20. Filter logic + animated transitions
21. Search with debounce
22. Card expand/collapse
23. Performance optimization

### Phase 6: Blog
24. Blog listing page
25. Individual post template
26. Category/tag filtering

### Phase 7: Polish
27. Animation audit
28. Reduced motion testing
29. Performance optimization
30. Responsive testing
31. Accessibility audit
32. SEO optimization

---

## Quality Checklist

### Performance
- [ ] Lighthouse 90+ all metrics
- [ ] FCP < 1.5s
- [ ] TBT < 200ms
- [ ] All images lazy loaded
- [ ] Proper aspect-ratio placeholders

### Animations
- [ ] Page transitions seamless
- [ ] Scroll animations trigger correctly
- [ ] Filter animations smooth (60fps)
- [ ] All hover states have transitions
- [ ] Reduced motion respected

### Accessibility
- [ ] WCAG AA compliant
- [ ] Semantic HTML
- [ ] Proper heading hierarchy
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Focus states visible

### Mobile
- [ ] All pages responsive
- [ ] Touch targets 44px+
- [ ] Mobile menu polished
- [ ] No horizontal scroll

### Dark Mode
- [ ] All pages styled for dark
- [ ] Toggle persists (localStorage)
- [ ] Respects system preference
- [ ] Smooth color transitions

---

## Deployment

### Netlify Configuration

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Environment Variables
- `PUBLIC_SITE_URL` - Production URL
- `PUBLIC_GA_ID` - Google Analytics (optional)

---

## Assets Inventory

### Existing Images (in `/assets/`)
- Team photos: adrian.png, raine.jpg, molly.jpg, hayden.jpg, jaden.jpg, etc.
- Research imagery: coral, kelp, underwater scenes
- Hero backgrounds: tropical reefs, kelp forests, coastlines
- Action shots: fieldwork, diving, boats

### Needed
- Optimized/resized versions of existing images
- WebP conversions
- Placeholder images for loading states
- Favicon and social share images

---

## Open Questions / Decisions

1. **Publications data source:** Manual JSON vs. automated from Google Scholar/ORCID?
2. **Blog frequency:** How often will posts be added?
3. **Analytics:** Google Analytics vs. Plausible vs. none?
4. **Contact form:** Email links only or actual form submission?
5. **Image optimization:** Build-time processing vs. CDN?

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2024-12-11 | 1.0 | Initial PRD created |
