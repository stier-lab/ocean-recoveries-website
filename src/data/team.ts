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
  currentPosition: string;
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
    name: 'Samantha Hamilton',
    image: '/images/sam.jpg',
    years: '2019-2023',
    role: 'PhD Student',
    currentPosition: 'Postdoc at Stanford Hopkins Marine Station',
  },
  {
    name: 'Joseph Peters',
    image: '/images/joe.jpg',
    years: '2020-2024',
    role: 'PhD Student',
    currentPosition: 'Research Scientist at NOAA',
  },
  {
    name: 'Emily Chen',
    image: '/images/Emily.jpg',
    years: '2018-2022',
    role: 'Postdoc',
    currentPosition: 'Assistant Professor at Oregon State',
  },
  {
    name: 'Bartholomew King',
    image: '/images/bart.jpg',
    years: '2021-2023',
    role: 'Lab Manager',
    currentPosition: 'PhD Student at UC Davis',
  },
  {
    name: 'Kai Mitchell',
    image: '/images/kai.jpg',
    years: '2022-2024',
    role: 'Undergraduate',
    currentPosition: 'Masters Student at Scripps',
  },
  {
    name: 'Alexis Rivera',
    image: '/images/alexis.webp',
    years: '2020-2022',
    role: 'Undergraduate',
    currentPosition: 'Research Technician at Monterey Bay Aquarium',
  },
];
