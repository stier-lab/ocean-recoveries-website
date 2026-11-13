interface SpeciesStudy {
  src: string;
  alt: string;
  scientificName: string;
  commonName?: string;
}

interface ResearchArtwork extends SpeciesStudy {
  caption: string;
  heading: string;
  detailsTitle: string;
  details: SpeciesStudy[];
  credit: string;
}

export const researchArtwork: Partial<Record<string, ResearchArtwork>> = {
  'coral-reefs': {
    src: '/images/research/pocillopora-coral-associates.jpg',
    alt: 'Colored-pencil illustration of pink cauliflower coral, with two blue-green chromis above it and a small red-spotted crab tucked between the lower-left branches.',
    scientificName: 'Pocillopora',
    commonName: 'Cauliflower coral',
    caption: 'AI-assisted illustration of coral with blue-green chromis and a red-spotted guard crab, two associates documented in Mo\u2018orea. It does not depict a particular colony.',
    heading: 'The life within a living reef',
    detailsTitle: 'Coral associates, up close',
    details: [
      {
        src: '/images/research/harpiliopsis-spinigera-pencil.jpg',
        alt: 'Translucent blue-gray shrimp with orange speckles and fine antennae',
        scientificName: 'Harpiliopsis spinigera',
      },
      {
        src: '/images/research/alpheus-lottini-pencil.jpg',
        alt: 'Red-orange snapping shrimp with one enlarged spotted claw',
        scientificName: 'Alpheus lottini',
        commonName: 'Snapping shrimp',
      },
      {
        src: '/images/research/galathea-pencil.jpg',
        alt: 'Blue-gray squat lobster with pale bands on its legs and claws',
        scientificName: 'Galathea',
        commonName: 'Squat lobster',
      },
    ],
    credit: 'AI-assisted drawings based on CAFI reference photos.',
  },
  'kelp-forests': {
    src: '/images/research/giant-kelp-pencil.jpg',
    alt: 'Colored-pencil drawing of golden-brown giant kelp with small floats at the bases of its blades and a holdfast gripping rock.',
    scientificName: 'Macrocystis pyrifera',
    commonName: 'Giant kelp',
    caption: 'Small floats lift the blades toward the surface, while the holdfast anchors the kelp to rock.',
    heading: 'What keeps a kelp forest standing?',
    detailsTitle: 'Kelp forest animals, up close',
    details: [
      {
        src: '/images/research/california-spiny-lobster-pencil.jpg',
        alt: 'Rust-red spiny lobster with long antennae and a segmented tail',
        scientificName: 'Panulirus interruptus',
        commonName: 'California spiny lobster',
      },
      {
        src: '/images/research/purple-sea-urchin-pencil.jpg',
        alt: 'Rounded sea urchin covered in violet spines',
        scientificName: 'Strongylocentrotus purpuratus',
        commonName: 'Purple sea urchin',
      },
      {
        src: '/images/research/california-sheephead-pencil.jpg',
        alt: 'Adult male sheephead with a black head and tail, salmon-pink body, and white chin',
        scientificName: 'Semicossyphus pulcher',
        commonName: 'California sheephead',
      },
    ],
    credit: 'AI-assisted drawings based on reference photos. Not to scale.',
  },
};
