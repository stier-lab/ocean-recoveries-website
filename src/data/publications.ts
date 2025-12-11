export interface Publication {
  id: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  doi?: string;
  abstract?: string;
  themes: string[];
  featured?: boolean;
  openAccess?: boolean;
  dataAvailable?: boolean;
  pdfUrl?: string;
  codeUrl?: string;
}

export const publications: Publication[] = [
  {
    id: '1',
    title: 'Recovery potential of coral reefs following marine heatwaves',
    authors: 'Stier AC, Hamilton SL, Peters JR, Detmer R',
    year: 2024,
    journal: 'Nature',
    doi: '10.1038/s41586-024-00001-0',
    abstract: 'This study examines the factors that promote rapid coral recovery after bleaching events, identifying key interventions for restoration practitioners. Using long-term field experiments in Moorea, we demonstrate that mutualist communities significantly accelerate coral recovery.',
    themes: ['Coral', 'Recovery', 'Climate'],
    featured: true,
    openAccess: true,
    dataAvailable: true,
  },
  {
    id: '2',
    title: 'Predator reintroduction cascades through kelp forest food webs',
    authors: 'Detmer R, Stier AC, Cavanaugh KC',
    year: 2024,
    journal: 'Ecology Letters',
    doi: '10.1111/ele.14500',
    abstract: 'We demonstrate how restoring predator populations triggers trophic cascades that restructure kelp forest communities along the California coast.',
    themes: ['Kelp', 'Predator-prey', 'Restoration'],
    featured: true,
    openAccess: true,
    dataAvailable: true,
  },
  {
    id: '3',
    title: 'Coral-dwelling organisms enhance host thermal tolerance',
    authors: 'Brzezinski M, Stier AC, Carlson M',
    year: 2024,
    journal: 'Proceedings of the Royal Society B',
    doi: '10.1098/rspb.2024.0001',
    abstract: 'Corals hosting diverse communities of mutualistic fish and invertebrates show enhanced resistance to thermal stress and faster recovery from bleaching events.',
    themes: ['Coral', 'Mutualism', 'Climate'],
    openAccess: false,
    dataAvailable: true,
  },
  {
    id: '4',
    title: 'Alternative stable states in kelp forest ecosystems',
    authors: 'Detmer R, Reed DC, Stier AC',
    year: 2023,
    journal: 'Ecology',
    doi: '10.1002/ecy.4100',
    abstract: 'Our models reveal that kelp forests and urchin barrens can persist under the same environmental conditions, with implications for ecosystem management.',
    themes: ['Kelp', 'Models', 'Theory'],
    openAccess: true,
    dataAvailable: true,
  },
  {
    id: '5',
    title: 'Bioacoustic signatures of healthy coral reefs',
    authors: 'Alalawi A, Stier AC, Apprill A',
    year: 2023,
    journal: 'Marine Ecology Progress Series',
    doi: '10.3354/meps14300',
    abstract: 'Healthy coral reefs produce distinctive soundscapes that can be used to assess ecosystem condition and track restoration success.',
    themes: ['Coral', 'Methods', 'Restoration'],
    openAccess: false,
    dataAvailable: false,
  },
  {
    id: '6',
    title: 'Marine protected areas enhance lobster fishery yields',
    authors: 'Orli J, Caselle JE, Stier AC',
    year: 2023,
    journal: 'Fish and Fisheries',
    doi: '10.1111/faf.12800',
    abstract: 'Networks of marine protected areas can increase overall fishery yields by protecting spawning stock and enhancing larval export.',
    themes: ['Kelp', 'Fisheries', 'Management'],
    openAccess: true,
    dataAvailable: true,
  },
  {
    id: '7',
    title: 'Wound healing dynamics in reef-building corals',
    authors: 'Brzezinski M, Palmer CV, Stier AC',
    year: 2023,
    journal: 'Coral Reefs',
    doi: '10.1007/s00338-023-02400-0',
    abstract: 'Gene expression patterns during wound healing predict coral survival and recovery potential, with implications for restoration practices.',
    themes: ['Coral', 'Physiology', 'Recovery'],
    openAccess: false,
    dataAvailable: true,
  },
  {
    id: '8',
    title: 'Climate velocity and coral range shifts in the Pacific',
    authors: 'Stier AC, Samhouri JF, Pinsky ML',
    year: 2022,
    journal: 'Global Change Biology',
    doi: '10.1111/gcb.16500',
    abstract: 'Coral species are shifting their ranges poleward in response to ocean warming, but dispersal barriers may limit adaptation.',
    themes: ['Coral', 'Climate', 'Biogeography'],
    featured: true,
    openAccess: true,
    dataAvailable: true,
  },
  {
    id: '9',
    title: 'Restoration strategy evaluation for degraded coral reefs',
    authors: 'Detmer R, Stier AC',
    year: 2022,
    journal: 'Conservation Biology',
    doi: '10.1111/cobi.14000',
    abstract: 'A modeling framework for evaluating and comparing coral restoration strategies before implementation.',
    themes: ['Coral', 'Restoration', 'Models'],
    openAccess: true,
    dataAvailable: true,
    codeUrl: 'https://github.com/stier-lab/restoration-model',
  },
  {
    id: '10',
    title: 'Herbivore diversity enhances coral reef resilience',
    authors: 'Hamilton SL, Stier AC, Halpern BS',
    year: 2022,
    journal: 'Nature Ecology & Evolution',
    doi: '10.1038/s41559-022-01900-0',
    abstract: 'Diverse herbivore communities maintain low algal cover across a wider range of conditions than depauperate communities.',
    themes: ['Coral', 'Biodiversity', 'Resilience'],
    openAccess: false,
    dataAvailable: true,
  },
  {
    id: '11',
    title: 'Kelp canopy dynamics following the 2014-2016 marine heatwave',
    authors: 'Cavanaugh KC, Detmer R, Stier AC, Reed DC',
    year: 2021,
    journal: 'Limnology and Oceanography',
    doi: '10.1002/lno.12000',
    abstract: 'Satellite imagery reveals heterogeneous kelp forest responses to marine heatwaves along the California coast.',
    themes: ['Kelp', 'Climate', 'Remote sensing'],
    openAccess: true,
    dataAvailable: true,
  },
  {
    id: '12',
    title: 'Priority effects shape coral community assembly',
    authors: 'Stier AC, Bolnick DI',
    year: 2021,
    journal: 'Ecology',
    doi: '10.1002/ecy.3500',
    abstract: 'The order of species arrival during reef recovery determines long-term community composition, with implications for restoration timing.',
    themes: ['Coral', 'Community ecology', 'Theory'],
    openAccess: false,
    dataAvailable: false,
  },
];

// Get unique themes
export const allThemes = [...new Set(publications.flatMap((p) => p.themes))].sort();

// Get year range
export const yearRange = {
  min: Math.min(...publications.map((p) => p.year)),
  max: Math.max(...publications.map((p) => p.year)),
};
