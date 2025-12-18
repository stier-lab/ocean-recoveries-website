import fs from 'fs';
import path from 'path';

const analyzedDir = './publications/analyzed';
const postsFile = './src/data/posts.ts';

// Read all analysis JSON files
const files = fs.readdirSync(analyzedDir).filter(f => f.endsWith('-analysis.json'));

// Theme to image mapping
const themeImages = {
  'coral': '/images/coral-reef-panorama-anthias-fish.jpeg',
  'fish': '/images/chromis-acropora.jpeg',
  'kelp': '/images/kelp-hero.jpeg',
  'predator': '/images/scuba-divers-shark-deep-blue.JPG',
  'lobster': '/images/spiny-lobsters-group-reef-hideout.jpeg',
  'crab': '/images/coral-guard-crab-red-spotted-macro.jpeg',
  'mutualism': '/images/trapezia-coral-crab-hiding.jpg',
  'symbiosis': '/images/trapezia-coral-crab-red-spotted.jpg',
  'marine': '/images/green-sea-turtle-swimming-blue.JPG',
  'climate': '/images/deadcoral.jpeg',
  'recovery': '/images/Leopard-1-2.jpg',
  'carnivore': '/images/Leopard-1-2.jpg',
  'management': '/images/fishing-harbor-marina-mountains.JPG',
  'herbivore': '/images/parrotfish.jpeg',
  'urchin': '/images/tropical-island-aerial-view-lagoon-reef.jpeg',
  'model': '/images/lorenz-attractor-abstract-art.jpeg',
  'herring': '/images/pacific-herring-net.jpeg',
  'whale': '/images/whale-eating-herring.jpeg',
  'urban': '/images/seattle-urban-coastline.jpeg',
  'north sea': '/images/norht-sea-fishing.jpeg',
  'default': '/images/tropical-island-aerial-view-lagoon-reef.jpeg'
};

function getImageForPost(analysis) {
  const themes = analysis.analysis?.themes || [];
  const title = analysis.title?.toLowerCase() || '';
  const summary = analysis.analysis?.summary?.toLowerCase() || '';
  const content = title + ' ' + summary + ' ' + themes.join(' ').toLowerCase();

  // Check for specific keywords
  if (content.includes('guard crab') || content.includes('trapezia')) return themeImages['crab'];
  if (content.includes('kelp')) return themeImages['kelp'];
  if (content.includes('lobster')) return themeImages['lobster'];
  if (content.includes('herbivore') || content.includes('grazing')) return themeImages['herbivore'];
  if (content.includes('carnivore') || content.includes('predator recovery')) return themeImages['carnivore'];
  if (content.includes('mutualism')) return themeImages['mutualism'];
  if (content.includes('symbiosis')) return themeImages['symbiosis'];
  if (content.includes('herring')) return themeImages['herring'];
  if (content.includes('urban')) return themeImages['urban'];
  if (content.includes('north sea')) return themeImages['north sea'];
  if (content.includes('model') || content.includes('simulation')) return themeImages['model'];
  if (content.includes('management') || content.includes('fishery') || content.includes('fisheries')) return themeImages['management'];
  if (content.includes('climate') || content.includes('bleaching')) return themeImages['climate'];
  if (content.includes('coral')) return themeImages['coral'];
  if (content.includes('fish')) return themeImages['fish'];
  if (content.includes('predator')) return themeImages['predator'];

  return themeImages['default'];
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .substring(0, 60);
}

function getTagsForPost(analysis) {
  const tags = ['Publication'];
  const themes = analysis.analysis?.themes || [];
  const title = analysis.title?.toLowerCase() || '';

  // Add year tag
  if (analysis.year) tags.push(String(analysis.year));

  // Map themes to tags
  const themeTagMap = {
    'coral': 'Coral',
    'kelp': 'Kelp',
    'mutualism': 'Mutualism',
    'symbiosis': 'Symbiosis',
    'climate': 'Climate',
    'management': 'Management',
    'model': 'Models',
    'conservation': 'Conservation',
    'predator': 'Predator-Prey',
    'recovery': 'Recovery'
  };

  for (const theme of themes) {
    const themeLower = theme.toLowerCase();
    for (const [key, tag] of Object.entries(themeTagMap)) {
      if (themeLower.includes(key) && !tags.includes(tag)) {
        tags.push(tag);
        break;
      }
    }
  }

  // Check title for coral
  if (title.includes('coral') && !tags.includes('Coral')) tags.push('Coral');
  if (title.includes('kelp') && !tags.includes('Kelp')) tags.push('Kelp');

  return tags;
}

function escapeForTemplate(str) {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
}

function formatAuthorsForDisplay(authors) {
  if (!authors) return 'Ocean Recoveries Lab';
  // Take first author's last name
  const firstAuthor = authors.split(';')[0].trim();
  const lastName = firstAuthor.split(',')[0].trim();
  const authorCount = authors.split(';').length;
  if (authorCount > 1) {
    return `${lastName} et al.`;
  }
  return lastName;
}

const posts = [];

for (const file of files) {
  const filePath = path.join(analyzedDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Skip if no essay content
  if (!data.analysis?.essay) {
    console.log(`Skipping ${file} - no essay content`);
    continue;
  }

  const slug = slugify(data.analysis.newsHeadline || data.title);
  const image = getImageForPost(data);
  const tags = getTagsForPost(data);
  const author = formatAuthorsForDisplay(data.authors);

  // Format the date from the year
  const date = `${data.year}-01-15`; // Default to mid-January of publication year

  // Build the content
  let content = data.analysis.essay;

  // Add citation at the end
  content += `\n\n## Citation\n\n${data.authors} (${data.year}). ${data.title}. *${data.journal}*.`;

  // Add DOI link
  if (data.doiUrl) {
    content += `\n\n[Read the full paper](${data.doiUrl})`;
  }

  // Add open access note
  if (data.openAccess) {
    content += '\n\n*This paper is Open Access.*';
  }

  const post = {
    slug,
    title: data.analysis.newsHeadline || data.title,
    date,
    author,
    excerpt: data.analysis.summary || '',
    featuredImage: image,
    tags,
    content: escapeForTemplate(content),
    doiUrl: data.doiUrl || '',
    openAccess: data.openAccess || false
  };

  posts.push(post);
}

// Sort posts by date descending (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Generate the TypeScript content
let tsContent = `export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  featuredImage: string;
  tags: string[];
  content: string;
  doiUrl?: string;
  openAccess?: boolean;
}

export const posts: BlogPost[] = [
`;

for (const post of posts) {
  tsContent += `  {
    slug: "${post.slug}",
    title: "${post.title.replace(/"/g, '\\"')}",
    date: "${post.date}",
    author: "${post.author}",
    excerpt: "${post.excerpt.replace(/"/g, '\\"').replace(/\n/g, ' ')}",
    featuredImage: "${post.featuredImage}",
    tags: ${JSON.stringify(post.tags)},
    doiUrl: "${post.doiUrl}",
    openAccess: ${post.openAccess},
    content: \`${post.content}\`,
  },
`;
}

tsContent += `];
`;

fs.writeFileSync(postsFile, tsContent);
console.log(`Generated ${posts.length} posts to ${postsFile}`);
