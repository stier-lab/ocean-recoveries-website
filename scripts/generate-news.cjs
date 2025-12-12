/**
 * Generate News Posts from Publications
 *
 * This script reads publications.ts and generates news blog posts
 * from publications that have abstracts.
 *
 * USAGE:
 *   node scripts/generate-news.cjs
 */

const fs = require('fs');
const path = require('path');

// Read publications.ts and extract the data
const pubsContent = fs.readFileSync('src/data/publications.ts', 'utf8');

// Extract the publications array using regex
const pubsMatch = pubsContent.match(/export const publications: Publication\[\] = \[([\s\S]*?)\];/);
if (!pubsMatch) {
  console.error('Could not find publications array');
  process.exit(1);
}

// Parse publications manually (since it's TypeScript, we can't require it directly)
const pubsText = pubsMatch[1];

// Extract individual publication objects
const pubs = [];
const pubRegex = /\{\s*id:\s*'(\d+)',[\s\S]*?citationCount:\s*(\d+),?\s*\}/g;
let match;

// Helper to extract field value
const extractField = (text, field) => {
  const regex = new RegExp(`${field}:\\s*("([^"]*)"|(true|false)|undefined|\\d+|\\[([^\\]]*)\\])`);
  const match = text.match(regex);
  if (!match) return undefined;
  if (match[2] !== undefined) return match[2]; // string
  if (match[3] !== undefined) return match[3] === 'true'; // boolean
  if (match[4] !== undefined) {
    // array
    return match[4].split(',').map(s => s.trim().replace(/"/g, ''));
  }
  return match[1];
};

// Parse each publication block more carefully
const pubBlocks = pubsText.split(/\},\s*\{/);
pubBlocks.forEach((block, i) => {
  // Clean up the block
  if (i === 0) block = block.replace(/^\s*\{/, '');
  if (i === pubBlocks.length - 1) block = block.replace(/\}\s*$/, '');

  // Extract fields using more robust regex
  const getStringField = (name) => {
    const match = block.match(new RegExp(`${name}:\\s*"([^"]*)"`, 's'));
    if (match) return match[1];
    // Try escaped string
    const match2 = block.match(new RegExp(`${name}:\\s*\`([^\`]*)\``, 's'));
    if (match2) return match2[1];
    return undefined;
  };

  const getJsonStringField = (name) => {
    const match = block.match(new RegExp(`${name}:\\s*(JSON\\.stringify\\([^)]+\\)|"[^"]*")`));
    if (match) {
      try {
        return JSON.parse(match[1].replace(/^JSON\.stringify\(|\)$/g, ''));
      } catch {
        return match[1].replace(/^"|"$/g, '');
      }
    }
    return undefined;
  };

  const getNumberField = (name) => {
    const match = block.match(new RegExp(`${name}:\\s*(\\d+)`));
    return match ? parseInt(match[1]) : 0;
  };

  const getBoolField = (name) => {
    const match = block.match(new RegExp(`${name}:\\s*(true|false)`));
    return match ? match[1] === 'true' : false;
  };

  const getArrayField = (name) => {
    const match = block.match(new RegExp(`${name}:\\s*\\[([^\\]]*)\\]`));
    if (match) {
      return match[1].split(',').map(s => s.trim().replace(/"/g, '')).filter(s => s);
    }
    return [];
  };

  const id = getNumberField('id') || (i + 1);
  const title = getStringField('title');
  const authors = getStringField('authors');
  const year = getNumberField('year');
  const journal = getStringField('journal');
  const doi = getStringField('doi');
  const abstract = getStringField('abstract');
  const themes = getArrayField('themes');
  const featured = getBoolField('featured');
  const openAccess = getBoolField('openAccess');
  const citationCount = getNumberField('citationCount');

  if (title && year) {
    pubs.push({
      id,
      title,
      authors,
      year,
      journal,
      doi,
      abstract,
      themes,
      featured,
      openAccess,
      citationCount
    });
  }
});

console.log(`Found ${pubs.length} publications`);

// Theme images mapping
const themeImages = {
  'Coral': [
    '/images/chromis-acropora.jpeg',
    '/images/coral-reef-panorama-anthias-fish.jpeg',
    '/images/damselfish-pair-acropora-coral.jpeg',
    '/images/coral-guard-crab-red-spotted-macro.jpeg',
    '/images/trapezia-coral-crab-red-spotted.jpg'
  ],
  'Kelp': [
    '/images/giant-kelp-sunlight-underwater.jpeg',
    '/images/kelp-forest-fish-school-underwater.jpeg',
    '/images/kelp-hero.jpeg',
    '/images/ocean-wave-kelp-breaking.jpeg'
  ],
  'Management': [
    '/images/fishing-harbor-marina-mountains.JPG',
    '/images/lobster.jpeg',
    '/images/spiny-lobsters-group-reef-hideout.jpeg'
  ],
  'Mutualism': [
    '/images/trapezia-coral-crab-hiding.jpg',
    '/images/coral-guard-crab-red-spotted-macro.jpeg',
    '/images/damselfish-single-coral-closeup.jpeg'
  ],
  'Models': [
    '/images/lorenz-attractor-abstract-art.jpeg'
  ],
  'Research': [
    '/images/tropical-island-aerial-view-lagoon-reef.jpeg',
    '/images/scuba-divers-shark-deep-blue.JPG',
    '/images/barracuda-school-underwater-blue.jpg',
    '/images/green-sea-turtle-swimming-blue.JPG'
  ]
};

// Default images for variety
const defaultImages = [
  '/images/coral-reef-panorama-anthias-fish.jpeg',
  '/images/giant-kelp-sunlight-underwater.jpeg',
  '/images/tropical-island-split-view-coral-reef-shark.jpeg',
  '/images/blue-green-chromis-coral-school.JPG',
  '/images/blacktip-reef-sharks-split-view-island.jpeg'
];

// Specific image overrides for certain publications (by title substring match)
const titleImageOverrides = {
  'Material legacies can degrade resilience': '/images/deadcoral.jpeg',
  'temperature-dependent predation': '/images/sheephead.jpeg',
  'Effects of corallivory': '/images/butterflyfish-eating-coral.jpeg',
  'Ecosystem context and historical contingency in apex predator': '/images/Leopard-1-2.jpg',
  'Perception and Conflict in Conservation': '/images/conflict-image.jpg',
  'metamorphosis in axolotls': '/images/axolotl.jpeg',
  'invasive mesopredator': '/images/lionfish.jpeg',
  'lionfish': '/images/lionfish.jpeg',
  'seagrass metacommunity': '/images/seagrass.jpeg',
  'Grazing halos': '/images/halo-grazing.png',
  'Irreversibility of regime shifts in the North Sea': '/images/norht-sea-fishing.jpeg',
  'How much city is too much city': '/images/seattle-urban-coastline.jpeg',
  'herbivore grazing behavior': '/images/parrotfish.jpeg',
  'Integrating Expert Perceptions into Food Web': '/images/pacific-herring-net.jpeg',
  'trade-offs to inform ecosystem-based fisheries': '/images/whale-eating-herring.jpeg',
  'Coral guard crabs': '/images/trapezia-coral-crab-red-spotted.jpg',
};

// Get image for a publication based on title overrides, then themes
const getImage = (title, themes, index) => {
  // Check for title-specific overrides first
  for (const [titleMatch, image] of Object.entries(titleImageOverrides)) {
    if (title.toLowerCase().includes(titleMatch.toLowerCase())) {
      return image;
    }
  }

  // Fall back to theme-based images
  for (const theme of themes) {
    if (themeImages[theme] && themeImages[theme].length > 0) {
      return themeImages[theme][index % themeImages[theme].length];
    }
  }
  return defaultImages[index % defaultImages.length];
};

// Create slug from title
const slugify = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 60)
    .replace(/-$/, '');
};

// Generate a month and day for the publication
const getPublicationDate = (year, index) => {
  // Spread publications throughout the year
  const month = (index % 12) + 1;
  const day = ((index * 7) % 28) + 1;
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

// Create excerpt from abstract or title
const createExcerpt = (pub) => {
  if (pub.abstract && pub.abstract.length > 50) {
    // Clean up abstract and truncate
    let excerpt = pub.abstract.substring(0, 200);
    // End at last complete sentence or word
    const lastPeriod = excerpt.lastIndexOf('.');
    if (lastPeriod > 100) {
      excerpt = excerpt.substring(0, lastPeriod + 1);
    } else {
      const lastSpace = excerpt.lastIndexOf(' ');
      if (lastSpace > 150) {
        excerpt = excerpt.substring(0, lastSpace) + '...';
      } else {
        excerpt += '...';
      }
    }
    return excerpt;
  }
  return `New research from the Ocean Recoveries Lab published in ${pub.journal}.`;
};

// Get first author last name
const getFirstAuthor = (authors) => {
  if (!authors) return 'Ocean Recoveries Lab';
  const firstName = authors.split(',')[0];
  const lastName = firstName.split(' ').pop();
  return lastName;
};

// Create blog content from publication
const createBlogContent = (pub) => {
  const firstAuthor = getFirstAuthor(pub.authors);
  const doiLink = pub.doi ? (pub.doi.startsWith('http') ? pub.doi : `https://doi.org/${pub.doi}`) : null;

  let content = `Our lab has published new research in *${pub.journal}*.\n\n`;

  if (pub.abstract && pub.abstract.length > 50) {
    content += `## Summary\n\n${pub.abstract}\n\n`;
  }

  content += `## Citation\n\n`;
  content += `${pub.authors} (${pub.year}). ${pub.title}. *${pub.journal}*.`;

  if (doiLink) {
    content += `\n\n[Read the full paper](${doiLink})`;
  }

  if (pub.openAccess) {
    content += `\n\n*This paper is Open Access.*`;
  }

  return content;
};

// Get tags from themes
const getTags = (pub) => {
  const tags = ['Publication'];

  // Add theme-based tags
  pub.themes.forEach(theme => {
    if (theme !== 'Research') {
      tags.push(theme);
    }
  });

  // Add featured tag if applicable
  if (pub.featured) {
    tags.push('Featured');
  }

  // Add year tag
  tags.push(String(pub.year));

  return [...new Set(tags)].slice(0, 4);
};

// Filter to publications with abstracts, or featured/highly cited, or recent (2024+)
const newsWorthy = pubs.filter(p =>
  (p.abstract && p.abstract.length > 50) ||
  p.featured ||
  p.citationCount > 30 ||
  p.year >= 2024  // Include all recent publications
);

console.log(`Found ${newsWorthy.length} publications suitable for news posts`);

// Generate posts
const posts = newsWorthy.map((pub, index) => {
  const slug = slugify(pub.title);
  const date = getPublicationDate(pub.year, index);
  const image = getImage(pub.title, pub.themes, index);
  const tags = getTags(pub);
  const excerpt = createExcerpt(pub);
  const content = createBlogContent(pub);
  const firstAuthor = getFirstAuthor(pub.authors);

  return {
    slug,
    title: pub.title,
    date,
    author: firstAuthor === 'Stier' ? 'Adrian Stier' : `${firstAuthor} et al.`,
    excerpt,
    featuredImage: image,
    tags,
    content
  };
});

// Sort by date (newest first) - uses YYYY-MM-DD format so string comparison works
posts.sort((a, b) => b.date.localeCompare(a.date));

// Generate TypeScript output
let output = `export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  featuredImage: string;
  tags: string[];
  content: string;
}

export const posts: BlogPost[] = [
`;

posts.forEach((post, i) => {
  output += `  {
    slug: ${JSON.stringify(post.slug)},
    title: ${JSON.stringify(post.title)},
    date: ${JSON.stringify(post.date)},
    author: ${JSON.stringify(post.author)},
    excerpt: ${JSON.stringify(post.excerpt)},
    featuredImage: ${JSON.stringify(post.featuredImage)},
    tags: ${JSON.stringify(post.tags)},
    content: \`${post.content.replace(/`/g, '\\`')}\`,
  },
`;
});

output += `];
`;

// Write output
fs.writeFileSync('src/data/posts.ts', output);
console.log(`Written ${posts.length} news posts to src/data/posts.ts`);
