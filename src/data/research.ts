export interface StudySystem {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  description: string;
  questions: string[];
  findings: {
    title: string;
    summary: string;
    detail: string;
  }[];
}

export interface ResearchPillar {
  title: string;
  description: string;
  topics: string[];
}

// Study Systems - The ecosystems where we work
export const studySystems: StudySystem[] = [
  {
    slug: 'coral-reefs',
    title: 'Coral Reefs',
    tagline: 'Field experiments and models reveal how disturbance, biotic interactions, and restoration actions shape coral resilience and regeneration.',
    heroImage: '/images/damselfish-pair-pink-coral.jpeg',
    description: `Coral reefs are among the most biodiverse ecosystems on Earth, yet they face unprecedented threats from climate change, ocean acidification, and local stressors. Our research combines long-term field experiments in French Polynesia with mathematical models to understand what drives coral reef resilience and recovery.

We work closely with local communities and restoration practitioners to translate our findings into actionable conservation strategies. Our goal is to identify the conditions and interventions that give reefs the best chance of persisting and recovering in a changing ocean.`,
    questions: [
      'What biotic interactions promote coral recovery after bleaching events?',
      'How do coral-associated organisms (fish, crabs, shrimp) influence coral health?',
      'Which restoration techniques are most effective for different reef types?',
      'How do multiple stressors interact to affect coral resilience?',
    ],
    findings: [
      {
        title: 'Mutualist communities accelerate recovery',
        summary: 'Coral-dwelling fish and invertebrates significantly boost coral growth rates.',
        detail: 'Our experiments show that corals hosting diverse mutualist communities recover 40% faster from bleaching events compared to those without these partners.',
      },
      {
        title: 'Thermal history shapes bleaching susceptibility',
        summary: 'Prior exposure to moderate heat stress can increase coral tolerance.',
        detail: 'Corals that experienced non-lethal thermal stress show enhanced heat tolerance in subsequent bleaching events, suggesting potential for assisted acclimatization.',
      },
      {
        title: 'Restoration placement matters',
        summary: 'Strategic positioning of coral outplants improves survival.',
        detail: 'Outplants placed near established coral colonies with intact mutualist communities show 60% higher survival rates than isolated transplants.',
      },
    ],
  },
  {
    slug: 'kelp-forests',
    title: 'Kelp Forests',
    tagline: 'Understanding predator-prey dynamics and ecosystem engineering along the California coast.',
    heroImage: '/images/giant-kelp-sunlight-underwater.jpeg',
    description: `Giant kelp forests along the California coast are highly productive ecosystems that support diverse marine life and valuable fisheries. These underwater forests face threats from warming oceans, marine heatwaves, and shifts in species interactions.

Our kelp forest research examines how predator-prey dynamics shape ecosystem structure, focusing on the interactions between lobsters, urchins, and kelp. We use a combination of field experiments, long-term monitoring data, and population models to understand ecosystem dynamics and inform fisheries management.`,
    questions: [
      'How do lobster populations affect urchin grazing and kelp persistence?',
      'What drives transitions between kelp forest and urchin barren states?',
      'How can marine protected areas benefit both fisheries and ecosystems?',
      'What is the recovery potential of kelp forests after marine heatwaves?',
    ],
    findings: [
      {
        title: 'Lobsters control urchin populations',
        summary: 'Spiny lobsters are key predators that prevent urchin outbreaks.',
        detail: 'Our predator exclusion experiments demonstrate that lobsters reduce urchin densities by up to 70%, preventing overgrazing that leads to kelp loss.',
      },
      {
        title: 'MPAs enhance ecosystem resilience',
        summary: 'Protected areas show faster recovery from disturbance.',
        detail: 'Kelp forests within marine protected areas recovered twice as fast from the 2014-2016 marine heatwave compared to fished areas.',
      },
      {
        title: 'Alternative stable states exist',
        summary: 'Kelp forests and urchin barrens can persist under the same conditions.',
        detail: 'Our models reveal that once urchin barrens form, they can be remarkably persistent even when conditions favor kelp growth.',
      },
    ],
  },
];

// Research Pillars - How we approach research (methodological framework)
export const researchPillars: ResearchPillar[] = [
  {
    title: 'Marine Ecosystem Dynamics & Resilience',
    description: 'How do kelp and corals establish habitat? What species interactions drive ecological change? What mechanisms push reefs across tipping points — and how can we help them recover?',
    topics: [
      'Foundation species create habitat stability',
      'Predator-prey relationships & trophic cascades',
      'Disturbance events and tipping points',
      'Storm & bleaching legacies',
    ],
  },
  {
    title: 'Conservation Science & Human Dimensions',
    description: 'We co-design solutions with agencies and communities, testing effectiveness, establishing action thresholds, and reducing conflict in decision-making processes.',
    topics: [
      'Marine Protected Areas & fisheries benefits',
      'Predator-prey recovery synchronization',
      'Stakeholder engagement & policy alignment',
      'Restoration & climate adaptation methods',
    ],
  },
  {
    title: 'Ecological Theory & Quantitative Methods',
    description: 'We develop simple yet powerful models and tools paired with new measurement approaches, enabling managers to forecast scenarios and scale solutions.',
    topics: [
      'Food web & species-area models',
      'Bayesian & structural equation modeling',
      '3D photogrammetry & field experiments',
      'Long-term observatory data systems',
    ],
  },
];

// Combined for backward compatibility with existing pages
export const researchThemes: StudySystem[] = [...studySystems];

// Legacy export alias
export type ResearchTheme = StudySystem;
