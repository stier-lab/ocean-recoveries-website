export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

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
  gallery?: GalleryImage[];
  fieldSite?: {
    name: string;
    location: string;
    description: string;
    image: string;
    url?: string;
  };
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
    tagline: 'Field experiments and models reveal how biotic interactions, disturbance legacies, and species associations shape coral resilience.',
    heroImage: '/images/cauliflower-coral-damselfish-reef.jpeg',
    description: `Coral reefs are among the most biodiverse ecosystems on Earth, yet they face unprecedented threats from climate change, ocean acidification, and local stressors. Our research combines long-term field experiments in French Polynesia with mathematical models to understand what drives coral reef resilience and recovery.

We work at the Moorea Coral Reef Long Term Ecological Research (MCR LTER) site, studying how coral-associated fishes and invertebrates influence coral health, how disturbance legacies affect recovery trajectories, and how predator-prey interactions structure reef communities.`,
    questions: [
      'How do coral-associated fishes and invertebrates benefit coral health and resilience?',
      'What role do guard crabs play in protecting corals from predators and competitors?',
      'How do disturbance legacies (like dead coral skeletons) affect reef recovery?',
      'How do predators structure coral reef fish communities?',
    ],
    findings: [
      {
        title: 'Fish provide services to corals',
        summary: 'Coral-dwelling fishes offer multiple benefits including nutrient provision and predator defense.',
        detail: 'Our synthesis reveals that coral-associated fishes enhance coral health through oxygenation, nutrient subsidies, sediment removal, and protection from predators and parasites (Stier et al. 2025, Coral Reefs).',
      },
      {
        title: 'Guard crabs defend corals',
        summary: 'Mutualist crustaceans provide synergistic defense against coral enemies.',
        detail: 'Multiple species of guard crabs work together to protect branching corals from predators like crown-of-thorns starfish and competitors like vermetid snails (McKeon et al. 2012, Oecologia; Stier et al. 2010, Coral Reefs).',
      },
      {
        title: 'Dead coral structures can trap reefs',
        summary: 'Standing dead coral skeletons left after disturbance can promote regime shifts.',
        detail: 'Our mathematical models show that structure-retaining disturbances can push reefs toward tipping points by providing substrate for algal competitors (Kopecky et al. 2023, Ecology).',
      },
    ],
    gallery: [
      {
        src: '/images/trapezia-coral-crab-hiding.jpg',
        alt: 'Trapezia guard crab hiding within branching coral',
        caption: 'Guard crabs like Trapezia defend their coral hosts from predators and competitors',
      },
      {
        src: '/images/damselfish-pair-acropora-coral.jpeg',
        alt: 'Pair of damselfish among Acropora coral branches',
        caption: 'Coral-dwelling damselfish provide nutrient subsidies to their host corals',
      },
      {
        src: '/images/crown-of-thorns.jpeg',
        alt: 'Crown-of-thorns starfish on coral reef',
        caption: 'Crown-of-thorns starfish are major coral predators that guard crabs help defend against',
      },
      {
        src: '/images/deadcoral.jpeg',
        alt: 'Dead coral skeleton covered in algae',
        caption: 'Standing dead coral structures can promote regime shifts to algae-dominated states',
      },
    ],
    fieldSite: {
      name: 'Moorea Coral Reef LTER',
      location: 'Moorea, French Polynesia',
      description: 'The MCR LTER site provides long-term data on coral reef dynamics, enabling us to study disturbance, recovery, and species interactions across reef habitats.',
      image: '/images/moorea-mountain-tropical-island-view.jpeg',
      url: 'https://mcr.lternet.edu/',
    },
  },
  {
    slug: 'kelp-forests',
    title: 'Kelp Forests',
    tagline: 'Understanding predator-prey dynamics, foundation species stability, and fisheries benefits along the California coast.',
    heroImage: '/images/giant-kelp-sunlight-underwater.jpeg',
    description: `Giant kelp forests along the California coast are highly productive ecosystems that support diverse marine life and valuable fisheries. These underwater forests face threats from warming oceans, marine heatwaves, and shifts in species interactions.

We work at the Santa Barbara Coastal Long Term Ecological Research (SBC LTER) site, studying how predator-prey dynamics shape ecosystem structure. Our research focuses on the interactions between spiny lobsters, sea urchins, and kelp, using field experiments, long-term monitoring data, and population models to understand ecosystem dynamics and inform fisheries management.`,
    questions: [
      'How does lobster body size affect their interactions with urchin prey?',
      'What mechanisms prevent urchins from overgrazing kelp forests?',
      'How do marine protected areas benefit adjacent fisheries through spillover?',
      'How do foundation species like giant kelp promote community stability?',
    ],
    findings: [
      {
        title: 'Detritus prevents urchin outbreaks',
        summary: 'Kelp detritus provides alternative food that keeps urchins from overgrazing live kelp.',
        detail: 'When herbivore abundance is high, detrital supply can prevent regime shifts from productive kelp forests to denuded urchin barrens (Rennick et al. 2022, Ecology).',
      },
      {
        title: 'MPAs benefit lobster fisheries',
        summary: 'Spillover from marine reserves enhances catches at reserve borders.',
        detail: 'Evidence shows that spiny lobster populations build up within marine protected areas and spillover benefits the adjacent fishery in southern California (Lenihan et al. 2021, Scientific Reports).',
      },
      {
        title: 'Body size drives interaction strength',
        summary: 'Lobster-urchin interactions depend strongly on predator and prey size.',
        detail: 'General size-scaling relationships can predict how strongly lobsters and urchins interact, with variation in body size driving spatial and temporal patterns (DiFiore & Stier 2023, Journal of Animal Ecology).',
      },
    ],
    gallery: [
      {
        src: '/images/spiny-lobsters-group-reef-hideout.jpeg',
        alt: 'Group of spiny lobsters in a rocky reef hideout',
        caption: 'Spiny lobsters are key predators whose body size determines their interaction strength with urchin prey',
      },
      {
        src: '/images/purple-urchin.jpeg',
        alt: 'Purple sea urchin on rocky substrate',
        caption: 'Purple urchins can overgraze kelp forests when not controlled by predators or detrital food supply',
      },
      {
        src: '/images/urchin-barron.jpg',
        alt: 'Urchin barren with denuded rocky reef',
        caption: 'Urchin barrens represent an alternative stable state when kelp forests collapse',
      },
      {
        src: '/images/garibaldi-fish-orange-kelp-forest.jpeg',
        alt: 'Bright orange Garibaldi fish in kelp forest',
        caption: 'Garibaldi and other kelp forest fishes depend on the habitat provided by giant kelp',
      },
    ],
    fieldSite: {
      name: 'Santa Barbara Coastal LTER',
      location: 'Santa Barbara Channel, California',
      description: 'The SBC LTER site enables long-term research on kelp forest dynamics, tracking how environmental change and species interactions shape these productive ecosystems.',
      image: '/images/kelp-hero.jpeg',
      url: 'https://sbclter.msi.ucsb.edu/',
    },
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
