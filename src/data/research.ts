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
    tagline: 'Coral regeneration, the communities within coral colonies, and decisions that guide reef restoration.',
    heroImage: '/images/cauliflower-coral-damselfish-reef.jpeg',
    description: `We study how corals repair injury, how the animals living among their branches affect their hosts, and how restoration teams can compare their options. Field experiments in Mo\u2018orea connect coral biology with community ecology. Collaborations in the Dominican Republic and Florida extend that work to restoration decisions under uncertainty.`,
    questions: [
      'How do coral-associated fishes and invertebrates benefit coral health and resilience?',
      'What role do guard crabs play in protecting corals from predators and competitors?',
      'How do disturbance legacies (like dead coral skeletons) affect reef recovery?',
      'How do predators structure coral reef fish communities?',
      'Can fish-derived nutrients help corals resist or recover from bleaching?',
      'Why do remote reefs show similar vulnerability to climate change as reefs near human populations?',
    ],
    findings: [
      {
        title: 'Fish provide services to corals',
        summary: 'Coral-associated fishes can provide nutrients, oxygenation, cleaning, and defense.',
        detail: 'Our synthesis describes several ways fishes affect their coral hosts, including nutrient provision, oxygenation, sediment removal, and defense. The services depend on the fishes and interactions involved (Stier et al. 2025, Coral Reefs).',
      },
      {
        title: 'Guard crabs defend corals',
        summary: 'Coral-dwelling crabs can defend their hosts against coral consumers.',
        detail: 'Our studies examine how guard crabs defend branching corals against enemies including crown-of-thorns starfish and vermetid snails. The outcome depends on which species interact (McKeon et al. 2012, Oecologia; Stier et al. 2010, Coral Reefs).',
      },
      {
        title: 'Disturbance leaves structural legacies',
        summary: 'Models show how standing dead skeletons can change coral recovery.',
        detail: 'Mathematical models examine how structure-retaining disturbances can favor algal competitors and change reef recovery. These are modeled mechanisms, not an inevitable outcome after coral mortality (Kopecky et al. 2023, Ecology).',
      },
      {
        title: 'Fish nutrients can backfire during bleaching',
        summary: 'The same fish waste that boosts coral growth may increase bleaching vulnerability.',
        detail: 'Dynamic energy budget modeling shows fish-derived nitrogen can enhance coral growth under normal conditions, but may exacerbate bleaching response under thermal stress (Detmer et al. 2022, Journal of Theoretical Biology).',
      },
      {
        title: 'Remoteness offers no climate refuge',
        summary: 'Isolated reefs are not more resilient to climate change than those near human populations.',
        detail: 'Analysis across global reef sites found no relationship between human influence and coral resistance to disturbance, challenging the assumption that remote reefs are natural refugia (Baumann et al. 2022, Global Change Biology).',
      },
      {
        title: '3D imaging reveals hidden coral dynamics',
        summary: 'Photogrammetry provides more accurate measurements of coral growth and biodiversity.',
        detail: 'Traditional measurements miss or reverse growth patterns that 3D photogrammetry captures, improving our ability to predict which corals support the most diverse communities (Curtis et al. 2023, Coral Reefs).',
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
      {
        src: '/images/coral-guard-crab-red-spotted-macro.jpeg',
        alt: 'Red-spotted coral guard crab in macro detail',
        caption: 'Guard crabs have evolved specialized claws for defending their coral homes',
      },
      {
        src: '/images/butterflyfish-eating-coral.jpeg',
        alt: 'Butterflyfish feeding on coral polyps',
        caption: 'Corallivorous fish like butterflyfish are natural predators that guard crabs defend against',
      },
      {
        src: '/images/bleach-coral.jpeg',
        alt: 'Bleached coral showing white skeleton',
        caption: 'Climate-driven bleaching events are increasingly threatening coral reefs worldwide',
      },
      {
        src: '/images/hawkfish-on-coral.jpeg',
        alt: 'Hawkfish perched on branching coral',
        caption: 'Hawkfish are territorial residents of branching corals that compete with beneficial damselfish',
      },
      {
        src: '/images/blue-green-chromis-coral-school.JPG',
        alt: 'School of blue-green chromis above coral',
        caption: 'Schooling planktivorous fish transport nutrients from the water column to coral colonies',
      },
      {
        src: '/images/lionfish-soft-coral.jpeg',
        alt: 'Invasive lionfish near soft coral',
        caption: 'Invasive lionfish impact native reef fish populations across the Caribbean',
      },
    ],
    fieldSite: {
      name: 'Moorea Coral Reef LTER',
      location: 'Moorea, French Polynesia',
      description: 'A volcanic island 17 km northwest of Tahiti, with a well-characterized reef system that provides the perfect setting for experimental ecology. Twenty years of continuous monitoring give us the context to interpret our experiments within real ecosystem dynamics.',
      image: '/images/moorea-mountain-tropical-island-view.jpeg',
      url: 'https://mcr.lternet.edu/',
    },
  },
  {
    slug: 'kelp-forests',
    title: 'Kelp Forests',
    tagline: 'How kelp forests persist, support reef communities, and respond to protection, fishing, and disturbance.',
    heroImage: '/images/giant-kelp-sunlight-underwater.jpeg',
    description: `We combine long-term surveys, field experiments, and models to study California kelp forests. Our current work asks how forests persist through disturbance, how changing habitat affects reef communities, and when food webs, marine protection, and fisheries influence kelp recovery. The Santa Barbara Coastal LTER provides the long-term context for these questions.`,
    questions: [
      'What keeps urchin populations in check and prevents kelp forest collapse?',
      'How do marine protected areas benefit both conservation and fisheries?',
      'Why do some kelp forests recover quickly while others become urchin barrens?',
      'How does warming affect the predators that control urchin outbreaks?',
    ],
    findings: [
      {
        title: 'MPAs boost fishery catches',
        summary: 'Lobster spillover from marine reserves enhances catches at reserve borders.',
        detail: 'Spiny lobster populations build up within marine protected areas and spillover benefits the adjacent commercial fishery in southern California (Lenihan et al. 2021, Scientific Reports).',
      },
      {
        title: 'Drift kelp can limit grazing',
        summary: 'Detached kelp supplies food that can reduce grazing on attached kelp.',
        detail: 'Feeding experiments and long-term observations link the balance between drift kelp supply and estimated urchin grazing capacity to kelp forest persistence and loss (Rennick et al. 2022, Ecology).',
      },
      {
        title: 'Warming limits predator control',
        summary: 'Lobsters can compensate for higher metabolic costs—but only up to a thermal limit.',
        detail: 'At moderate temperatures, lobsters eat more to offset higher metabolism. But at 26°C, mortality spikes to 33%, suggesting warming may weaken top-down urchin control (Csik et al. 2023, Frontiers in Marine Science).',
      },
      {
        title: 'Body size predicts interaction strength',
        summary: 'General size-scaling relationships predict how strongly lobsters and urchins interact.',
        detail: 'Variation in predator and prey body size drives spatial and temporal patterns in lobster-urchin interactions across kelp forest ecosystems (DiFiore & Stier 2023, Journal of Animal Ecology).',
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
      {
        src: '/images/california-sheephead-kelp-forest.jpeg',
        alt: 'California sheephead swimming through kelp forest',
        caption: 'Sheephead are important predators of urchins that help maintain kelp forest health',
      },
      {
        src: '/images/kelp-forest-fish-school-underwater.jpeg',
        alt: 'School of fish swimming through kelp forest',
        caption: 'Kelp forests support diverse fish communities that rely on the habitat structure provided by giant kelp',
      },
      {
        src: '/images/lobster-in-underwater-trap-cage.jpeg',
        alt: 'Spiny lobster in underwater trap',
        caption: 'Commercial lobster fishing is supported by spillover from marine protected areas',
      },
      {
        src: '/images/ocean-wave-kelp-breaking.jpeg',
        alt: 'Ocean wave breaking over kelp canopy',
        caption: 'Winter storms can remove large amounts of kelp biomass, triggering community-wide changes',
      },
      {
        src: '/images/kelp_canopy.jpg',
        alt: 'Giant kelp canopy from below',
        caption: 'The kelp canopy provides habitat for hundreds of species from the seafloor to the surface',
      },
      {
        src: '/images/rock-crab-kelp-tidepool.jpg',
        alt: 'Rock crab in kelp tidepool',
        caption: 'Crabs and other invertebrates thrive in the productive kelp forest ecosystem',
      },
    ],
    fieldSite: {
      name: 'Santa Barbara Coastal LTER',
      location: 'Santa Barbara Channel, California',
      description: 'A 100 km stretch of coast from Pt. Conception to Ventura, with giant kelp beds, rocky reefs, and established marine protected areas. Two decades of baseline data let us separate natural cycles from long-term trends.',
      image: '/images/kelp-hero.jpeg',
      url: 'https://sbclter.msi.ucsb.edu/',
    },
  },
];

// Research Pillars - How we approach research (methodological framework)
export const researchPillars: ResearchPillar[] = [
  {
    title: 'Ecosystem Dynamics',
    description: 'Standing dead coral skeletons trap reefs in degraded states. Kelp detritus prevents urchin barrens. We study how structure and food webs drive recovery—or collapse.',
    topics: [
      'Dead coral promotes algal regime shifts',
      'Detrital subsidies control herbivore outbreaks',
      'Guard crabs defend corals from crown-of-thorns',
    ],
  },
  {
    title: 'Applied Conservation',
    description: 'Lobster spillover from CA MPAs boosts adjacent fishery catches. We test whether protected areas deliver promised benefits—and help managers set action triggers.',
    topics: [
      'MPA spillover quantified in Santa Barbara',
      'Size-based lobster-urchin interaction models',
      'Fisheries co-management in French Polynesia',
    ],
  },
  {
    title: 'Quantitative Ecology',
    description: 'Body-size scaling predicts predator-prey interaction strength across species. We build models that forecast ecosystem change from measurable traits.',
    topics: [
      'Size-scaling laws for interaction strength',
      'Bayesian models for long-term monitoring',
      '3D reef photogrammetry at Moorea LTER',
    ],
  },
];

// Combined for backward compatibility with existing pages
export const researchThemes: StudySystem[] = [...studySystems];

// Legacy export alias
export type ResearchTheme = StudySystem;
