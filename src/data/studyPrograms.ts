export interface StudyProgram {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
  visual: 'healing' | 'coral' | 'restoration' | 'habitats' | 'kelp' | 'food-web';
  location: string;
  link: { href: string; label: string };
}

export const studyPrograms: Record<string, StudyProgram[]> = {
  'coral-reefs': [
    {
      id: 'coral-regeneration',
      label: 'Keck coral regeneration',
      title: 'How do corals rebuild after injury?',
      paragraphs: [
        'A wound can close before a coral has rebuilt the structure it lost. We study both processes, asking how warming, genetic variation, and the type of injury shape recovery in Porites and Acropora.',
        'Field studies and experiments in Mo\u2018orea connect photographs of healing with coral condition and biological responses near and away from a wound. With Rachael Bay at UC Davis, we are investigating the genetic and molecular basis of these responses. The work is supported by the W. M. Keck Foundation.',
      ],
      visual: 'healing',
      location: 'Mo\u2018orea, French Polynesia',
      link: { href: '/research#coral-healing', label: 'See the healing sequences' },
    },
    {
      id: 'coral-associated-fauna',
      label: 'Coral-associated fishes and invertebrates \u00b7 CAFI',
      title: 'The communities living within corals',
      paragraphs: [
        'A branching coral is also a home. Fishes, crabs, shrimps, and other residents live among its branches, where shelter and interactions with neighbors shape their communities.',
        'Our CAFI work asks how colony size, branching architecture, and host species influence which animals live there, and how those communities affect the coral itself. Surveys and field experiments in Mo\u2018orea let us examine both sides of that relationship. We study habitat amount and community reassembly without assuming that more residents always mean a healthier coral.',
      ],
      visual: 'coral',
      location: 'Mo\u2018orea, French Polynesia',
      link: { href: '/news/how-coral-associated-fish-help-corals-grow-and-recover', label: 'Read our published synthesis' },
    },
    {
      id: 'restoration-strategy-evaluation',
      label: 'Restoration Strategy Evaluation \u00b7 RSE',
      title: 'Testing restoration choices before committing resources',
      paragraphs: [
        'Restoration teams make choices about where to invest, when to move corals onto reefs, and what sizes to outplant. We use demographic evidence and simulations to compare those choices under uncertain survival, growth, and disturbance.',
        'With FUNDEMAR in the Dominican Republic, we work on Acropora palmata restoration. A separate collaboration with Mote in Florida focuses on Orbicella. Alongside Jameal Samhouri, Darcy Bradley, and Raine Detmer, we are developing ways to connect restoration objectives, monitoring, and decisions. Simulated outcomes guide questions and comparisons, not guarantees of success.',
      ],
      visual: 'restoration',
      location: 'Dominican Republic \u00b7 Florida',
      link: { href: '#where-we-work', label: 'Explore our research locations' },
    },
  ],
  'kelp-forests': [
    {
      id: 'kelp-persistence',
      label: 'Persistence and recovery',
      title: 'Why do some kelp forests persist?',
      paragraphs: [
        'A reef with kelp today may have a very different history from a neighboring forest. We study how kelp patches disappear, return, and persist across Southern California, and whether that history helps explain the communities living beneath them.',
        'Long-term canopy records and seafloor surveys let us compare present-day kelp with its recent past. Complementary projects examine regional patch dynamics and local benthic communities. We are asking when a snapshot of kelp biomass misses ecological differences associated with years of persistence or recent loss.',
      ],
      visual: 'habitats',
      location: 'Southern California \u00b7 Santa Barbara Channel',
      link: { href: '/news/storm-disturbance-can-reshape-kelp-forest-communities', label: 'Read a related published study' },
    },
    {
      id: 'kelp-habitat',
      label: 'Habitat and biodiversity',
      title: 'A forest is more than its canopy',
      paragraphs: [
        'Giant kelp, understory algae, and attached invertebrates create different kinds of habitat on the same reef. We ask how fishes and seafloor communities respond as those habitat layers change.',
        'Using Santa Barbara Coastal LTER surveys and kelp-removal experiments, we examine relationships among habitat structure, fish abundance, and community composition. Related work tests how giant kelp competes with or facilitates organisms below the canopy. These studies distinguish observed habitat associations from experimental evidence, rather than treating every fish response as a direct effect of giant kelp.',
      ],
      visual: 'kelp',
      location: 'Santa Barbara Channel, California',
      link: { href: '#publications', label: 'Explore published kelp research' },
    },
    {
      id: 'kelp-food-webs',
      label: 'Food webs, protection, and fisheries',
      title: 'When does protection help a kelp forest?',
      paragraphs: [
        'Predators, grazers, fishing, and warming interact on California reefs. We study when those interactions help kelp persist, and when a simple predator\u2013urchin\u2013kelp explanation leaves out important parts of the food web.',
        'Current work examines protected and fished reefs, changes following sea-star wasting disease and marine warming, and lobster populations and fisheries. Long-term surveys, feeding experiments, and population models address different parts of these questions. We do not assume that protection prevents kelp loss, or that the effects of disease and warming can always be separated.',
      ],
      visual: 'food-web',
      location: 'California coast \u00b7 Santa Barbara Channel',
      link: { href: '/news/lobster-catches-rose-near-california-marine-reserves-after-a', label: 'Read our published spillover study' },
    },
  ],
};
