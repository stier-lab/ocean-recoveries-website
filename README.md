# Ocean Recoveries Lab Website

Modern, performant website for the Ocean Recoveries Lab at UC Santa Barbara.

**Live Site:** https://www.oceanrecoveries.com/

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Framework:** [Astro](https://astro.build/) with View Transitions
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** Framer Motion + Native CSS/Intersection Observer
- **Hosting:** Netlify

## Project Structure

```
ocean-recoveries-website/
├── docs/                    # Documentation
│   └── PRD.md              # Product Requirements Document
├── assets/                  # Source images (unprocessed)
├── squarespace-code/        # Legacy HTML (reference only)
├── src/                     # Source code (to be created)
│   ├── components/         # Astro/React components
│   ├── content/            # Markdown content
│   │   ├── people/        # Team member bios
│   │   ├── research/      # Research theme pages
│   │   └── blog/          # Blog posts
│   ├── data/              # JSON data files
│   │   └── publications.json
│   ├── layouts/           # Page layouts
│   ├── pages/             # Route pages
│   └── styles/            # Global styles
├── public/                 # Static assets
└── README.md
```

## Documentation

- [Product Requirements Document](docs/PRD.md) - Full specifications, design system, and build plan

## Features

- **Light/Dark Mode** - System preference detection + manual toggle
- **Smooth Animations** - Page transitions, scroll reveals, micro-interactions
- **Accessible** - WCAG AA compliant, keyboard navigation, reduced motion support
- **Fast** - Target Lighthouse 90+ scores
- **Content-Driven** - Markdown files for easy updates

## Pages

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/` | Hero, metrics, research themes, featured papers |
| People | `/people` | Team grid with cards |
| Publications | `/publications` | Filterable, searchable publication database |
| Research | `/research` | Overview of research themes |
| Coral Reefs | `/research/coral-reefs` | Coral research theme |
| Kelp Forests | `/research/kelp-forests` | Kelp research theme |
| Organismal | `/research/organismal-mechanisms` | Organismal research theme |
| News | `/news` | Blog/news posts |
| Join Us | `/join-us` | Opportunities for students/postdocs |

## Development Status

**Current Phase:** Setup & Foundation

See [PRD.md](docs/PRD.md) for detailed build plan and milestones.

## Content Updates

### Adding a Team Member

Create a new markdown file in `src/content/people/`:

```yaml
---
name: "New Person"
role: "phd"
title: "PhD Student"
image: "/images/people/new-person.jpg"
email: "email@ucsb.edu"
tags: ["Research Area 1", "Research Area 2"]
order: 5
status: "current"
---

Bio text here.
```

### Adding a Publication

Add to `src/data/publications.json`:

```json
{
  "title": "Paper Title",
  "authors": "Author A, Author B, Stier AC",
  "year": 2024,
  "journal": "Journal Name",
  "doi": "10.1000/example",
  "theme_tags": ["Coral"],
  "featured": false,
  "open_access": true
}
```

### Adding a Blog Post

Create a new markdown file in `src/content/blog/`:

```yaml
---
title: "Post Title"
date: 2024-12-11
author: "Adrian Stier"
excerpt: "Brief summary"
featuredImage: "/images/blog/image.jpg"
tags: ["Research"]
---

Post content here.
```

## License

Copyright Ocean Recoveries Lab, UC Santa Barbara
