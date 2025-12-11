export interface TeamMember {
  name: string;
  role: 'pi' | 'postdoc' | 'phd' | 'manager' | 'undergrad';
  title: string;
  image: string;
  actionImage?: string;
  hook: string;
  tags: string[];
  email?: string;
  website?: string;
  orcid?: string;
  github?: string;
  order: number;
}

export interface AlumniMember {
  name: string;
  image?: string;
  years: string;
  role: string;
  currentPosition?: string;
  focus?: string;
  linkedin?: string;
}

export const currentTeam: TeamMember[] = [
  {
    name: 'Adrian Stier',
    role: 'pi',
    title: 'Principal Investigator',
    image: '/images/adrian.png',
    hook: 'Focus: recovery & resilience of ocean ecosystems; linking assembly rules to restoration.',
    tags: ['Coral resilience', 'Predator-prey', 'Restoration'],
    email: 'adrian.stier@ucsb.edu',
    orcid: '0000-0002-4704-4145',
    github: 'stier-lab',
    order: 1,
  },
  {
    name: 'Raine Detmer',
    role: 'postdoc',
    title: 'Postdoctoral Researcher',
    image: '/images/raine.jpg',
    hook: 'Theoretician modeling kelp and coral reef ecosystems; building a restoration strategy evaluation tool to guide effective coral recovery.',
    tags: ['Theory', 'Kelp', 'Coral reefs', 'Restoration modeling'],
    email: 'raine@ucsb.edu',
    order: 2,
  },
  {
    name: 'Adnan Alalawi',
    role: 'phd',
    title: 'PhD Student',
    image: '/images/man-scuba-diver-on-boat.jpg',
    hook: 'Designs artificial reefs and uses soundscapes to accelerate recovery on degraded reefs.',
    tags: ['Restoration', 'Bioacoustics', 'Artificial reefs'],
    email: 'adnan@ucsb.edu',
    order: 3,
  },
  {
    name: 'Molly Brzezinski',
    role: 'manager',
    title: 'Lab Manager',
    image: '/images/molly.jpg',
    hook: 'Marine molecular biologist integrating genomic and field approaches to understand coral wound healing and resilience under climate stress.',
    tags: ['Molecular ecology', 'Coral resilience', 'Wound healing', 'Genomics'],
    email: 'molly@ucsb.edu',
    order: 4,
  },
  {
    name: 'Hayden Vega',
    role: 'undergrad',
    title: 'Undergraduate Researcher',
    image: '/images/hayden.jpg',
    hook: 'Works on algal functional traits and coral regeneration experiments; creating bio-art with the Coal Oil Point Reserve.',
    tags: ['Algae traits', 'Coral regeneration', 'Bio art'],
    order: 5,
  },
  {
    name: 'Jaden Orli',
    role: 'undergrad',
    title: 'Undergraduate Researcher',
    image: '/images/jaden.jpg',
    hook: 'Exploring alternative fisheries strategies that integrate marine protected areas to optimize the California spiny lobster fishery.',
    tags: ['Fisheries modeling', 'MPAs', 'Lobster fishery'],
    order: 6,
  },
];

export const alumni: AlumniMember[] = [
  {
    name: 'Jada Alexander',
    image: '/images/jada.jpg',
    years: '2021-2023',
    role: 'Undergraduate Researcher',
    focus: 'Studied Trapezia-coral mutualism combining field surveys and lab work',
    linkedin: 'https://linkedin.com/in/jadaaalexander/',
  },
  {
    name: 'Alexis Sitt Park',
    image: '/images/alexis.webp',
    years: '2022-2023',
    role: 'Undergraduate Researcher',
    focus: 'Contributed to field and lab projects',
    linkedin: 'https://linkedin.com/in/alexissittpark/',
  },
  {
    name: 'Emily Donham',
    image: '/images/Emily.jpg',
    years: '2024-2025',
    role: 'Postdoc',
    focus: 'Kelp eco-physiology & global change biology; integrated sensors, diver surveys, and lab experiments',
  },
  {
    name: 'Samantha Csik',
    image: '/images/sam.jpg',
    years: '2020',
    role: 'MS Student',
    focus: 'Thesis on temperature effects on lobster physiology & feeding',
    currentPosition: 'Data Analyst at NCEAS',
  },
  {
    name: 'Joseph Curtis',
    image: '/images/joe.jpg',
    years: '2019-2022',
    role: 'Lab Manager',
    focus: 'Led coral, lobster & kelp work in Moorea and Santa Barbara',
    currentPosition: 'PhD student in New Zealand',
  },
  {
    name: 'Dr. Kai Kopecky',
    image: '/images/kai.jpg',
    years: '2024',
    role: 'PhD',
    focus: 'Worked on coral reef resilience',
    currentPosition: 'Postdoc at CU Boulder',
  },
  {
    name: 'Dr. Kurt Ingeman',
    image: '/images/kingeman.jpg',
    years: '2018-2020',
    role: 'Postdoc',
    focus: 'Synthesized moving targets in recoveries',
    currentPosition: 'Analyst at SOEST, UH Mānoa',
  },
  {
    name: 'Dr. Bart Difiore',
    image: '/images/bart.jpg',
    years: '2023',
    role: 'PhD',
    focus: 'Studied fishing impacts on kelp forest ecology',
    currentPosition: 'Postdoc at Gulf of Maine Research Institute',
  },
  {
    name: 'Dr. Megsie Siple',
    image: '/images/megsie.webp',
    years: '2019-2020',
    role: 'Postdoc',
    focus: 'Linked ecosystem monitoring to EBM',
    currentPosition: 'Fisheries scientist at NOAA AFSC (Seattle)',
  },
];
