export interface ResearchTheme {
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

export const researchThemes: ResearchTheme[] = [
  {
    slug: 'coral-reefs',
    title: 'Coral Reefs',
    tagline: 'Field experiments and models reveal how disturbance, biotic interactions, and restoration actions shape coral resilience and regeneration.',
    heroImage: '/images/coral-reef-panorama-anthias-fish.jpeg',
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
  {
    slug: 'organismal-mechanisms',
    title: 'Organismal Mechanisms',
    tagline: 'Investigating the physiological and molecular mechanisms underlying stress responses and recovery.',
    heroImage: '/images/trapezia-coral-crab-red-spotted.jpg',
    description: `Understanding how marine organisms respond to stress at the molecular and physiological level is essential for predicting ecosystem responses to climate change. Our mechanistic research bridges the gap between genes and ecosystems.

We use a combination of genomic approaches, physiological measurements, and field experiments to understand how organisms cope with environmental stressors. This work informs predictions about which species and populations are most likely to persist under future conditions.`,
    questions: [
      'What molecular pathways govern coral stress responses and wound healing?',
      'How do symbiotic relationships affect host stress tolerance?',
      'Can we identify genetic markers of stress resilience?',
      'How do developmental conditions affect adult performance?',
    ],
    findings: [
      {
        title: 'Wound healing genes predict recovery',
        summary: 'Gene expression patterns can forecast coral survival after injury.',
        detail: 'Corals showing rapid upregulation of immune and tissue repair genes within 24 hours of injury have 3x higher survival rates.',
      },
      {
        title: 'Symbiont identity matters',
        summary: 'Different symbiont types confer varying stress tolerance.',
        detail: 'Corals hosting heat-tolerant Durusdinium symbionts show 50% less bleaching during thermal stress compared to those with Cladocopium.',
      },
      {
        title: 'Early life history effects persist',
        summary: 'Conditions during development shape adult performance.',
        detail: 'Fish exposed to elevated CO2 during larval development show altered behavior and reduced survival as adults, even when returned to normal conditions.',
      },
    ],
  },
];
