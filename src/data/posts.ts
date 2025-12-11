export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  featuredImage: string;
  tags: string[];
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'moorea-field-season-2024',
    title: 'Wrapping Up Our 2024 Moorea Field Season',
    date: '2024-11-15',
    author: 'Adrian Stier',
    excerpt: 'After six weeks of intensive fieldwork on the reefs of Moorea, our team returns with new insights on coral recovery dynamics.',
    featuredImage: '/images/moorea-mountain-tropical-island-view.jpeg',
    tags: ['Fieldwork', 'Coral', 'Moorea'],
    content: `Our team just wrapped up another successful field season in Moorea, French Polynesia. Over six weeks, we conducted experiments examining how coral-dwelling organisms influence coral recovery after bleaching events.

## Highlights

This year's work focused on three main questions:

1. **How do mutualist communities reassemble after disturbance?** We tracked the colonization of transplanted corals by fish and invertebrates over time.

2. **Does mutualist presence affect coral growth rates?** Using caging experiments, we manipulated access to coral-dwelling organisms and measured coral growth.

3. **What drives variation in coral thermal tolerance?** We collected samples for genomic analysis to understand why some corals bleach while their neighbors don't.

## Team Effort

This work wouldn't be possible without our incredible team. Graduate students Adnan and Sam spent countless hours underwater, while our collaborators at CRIOBE provided essential logistical support.

## What's Next

We're now back in Santa Barbara analyzing samples and crunching data. Expect publications from this work in the coming year. Stay tuned!`,
  },
  {
    slug: 'new-nsf-grant-restoration',
    title: 'New NSF Grant to Study Coral Restoration Strategies',
    date: '2024-09-20',
    author: 'Adrian Stier',
    excerpt: 'We received a $1.2M NSF grant to develop and test novel coral restoration approaches that leverage natural recovery processes.',
    featuredImage: '/images/coral-bleaching-timelapse-study.jpeg',
    tags: ['Funding', 'Restoration', 'Coral'],
    content: `We're excited to announce that we've received a major grant from the National Science Foundation to advance coral reef restoration science.

## The Project

Over the next four years, we'll be developing and testing restoration approaches that work with natural recovery processes rather than against them. The key insight driving this work is that coral reefs have recovered from disturbances for millions of years—we want to understand and enhance those natural mechanisms.

## Our Approach

The project has three main components:

1. **Strategy Evaluation Tool**: We're building a modeling framework that lets restoration practitioners evaluate different strategies before implementation.

2. **Field Experiments**: We'll test specific interventions (mutualist introduction, substrate preparation, timing of outplanting) in Moorea.

3. **Scaling Analysis**: We'll examine how local restoration actions scale up to affect reef-wide recovery.

## Collaborators

This is a collaborative project with researchers at Stanford, University of Hawaii, and local partners in French Polynesia. We're also working closely with The Nature Conservancy and NOAA to ensure our findings translate to practice.

## Opportunities

This grant will support two new graduate students and a postdoc. If you're interested in joining the team, check out our [Join Us](/join-us) page.`,
  },
  {
    slug: 'kelp-forest-recovery-paper',
    title: 'New Paper: Lobster Predation Drives Kelp Forest Recovery',
    date: '2024-07-12',
    author: 'Raine Detmer',
    excerpt: 'Our new paper in Ecology Letters shows how spiny lobster predation on urchins facilitates kelp forest recovery after marine heatwaves.',
    featuredImage: '/images/lobster.jpeg',
    tags: ['Publication', 'Kelp', 'Predator-prey'],
    content: `We're thrilled to share our new paper in Ecology Letters examining the role of predation in kelp forest recovery.

## Key Findings

Using a combination of field experiments and population models, we found that:

- **Lobsters significantly reduce urchin densities** in kelp forests, preventing the overgrazing that leads to barren formation
- **Marine protected areas recover faster** after disturbance due to higher predator densities
- **Alternative stable states exist**: once urchin barrens form, they can persist even when conditions favor kelp

## Why It Matters

These findings have important implications for kelp forest management along the California coast. They suggest that protecting lobster populations—through spatial closures or fishing regulations—can enhance ecosystem resilience.

## The Paper

Detmer R, Stier AC, et al. (2024) Predation-mediated recovery of kelp forest ecosystems. *Ecology Letters*. [DOI link coming soon]

## Media Coverage

This work was featured in [UCSB Current](https://www.news.ucsb.edu) and [The Santa Barbara Independent](https://www.independent.com).`,
  },
  {
    slug: 'undergraduate-research-symposium',
    title: 'Lab Undergrads Shine at Research Symposium',
    date: '2024-05-08',
    author: 'Molly Brzezinski',
    excerpt: 'Three of our undergraduate researchers presented their work at the UCSB Undergraduate Research Symposium, with Hayden winning Best Poster in Marine Sciences.',
    featuredImage: '/images/research-team-group-photo-beach.jpeg',
    tags: ['Lab News', 'Undergraduates', 'Awards'],
    content: `Last week, three of our undergraduate researchers presented their independent projects at the annual UCSB Undergraduate Research Symposium. We're incredibly proud of their work!

## The Presentations

**Hayden Vega** presented "Algal Functional Traits and Coral Regeneration" and won Best Poster in Marine Sciences! Hayden's work examines how different algae species affect coral tissue regrowth.

**Jaden Orli** presented "Optimizing the California Spiny Lobster Fishery with Marine Protected Areas." Jaden used bioeconomic models to evaluate alternative management strategies.

**Kai Mitchell** (now alumni) presented "Bioacoustic Monitoring of Reef Health." Kai developed machine learning approaches to classify reef sounds and assess ecosystem condition.

## Why Undergraduate Research Matters

We're committed to providing meaningful research experiences for undergraduates. These projects aren't just busy work—they're real contributions to our understanding of ocean ecosystems.

If you're a UCSB undergraduate interested in research, check out our [Join Us](/join-us) page!`,
  },
];
