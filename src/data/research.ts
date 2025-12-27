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

We work at the Moorea Coral Reef Long Term Ecological Research (MCR LTER) site, studying how coral-associated fishes and invertebrates influence coral health, how disturbance legacies affect recovery trajectories, and how predator-prey interactions structure reef communities. Our work spans from the molecular mechanisms of coral-fish mutualisms to the ecosystem-scale dynamics of reef recovery after bleaching events.`,
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
      description: 'The MCR LTER site provides long-term data on coral reef dynamics, enabling us to study disturbance, recovery, and species interactions across reef habitats. Our research here has tracked reef recovery after major disturbances including cyclones, crown-of-thorns outbreaks, and bleaching events.',
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

We work at the Santa Barbara Coastal Long Term Ecological Research (SBC LTER) site, studying how predator-prey dynamics shape ecosystem structure. Our research focuses on the interactions between spiny lobsters, sea urchins, and kelp, using field experiments, long-term monitoring data, and population models to understand ecosystem dynamics and inform fisheries management. We combine laboratory experiments on predator physiology with 18+ years of field monitoring to understand how kelp forests resist and recover from disturbance.`,
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
        title: 'Detritus prevents urchin barrens',
        summary: 'Kelp detritus provides alternative food that keeps urchins from overgrazing live kelp.',
        detail: 'When herbivore abundance is high, detrital supply can prevent regime shifts from productive kelp forests to denuded urchin barrens (Rennick et al. 2022, Ecology).',
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
      description: 'The SBC LTER site enables long-term research on kelp forest dynamics, tracking how environmental change and species interactions shape these productive ecosystems. With 18+ years of continuous monitoring, we can detect patterns that shorter studies miss.',
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
