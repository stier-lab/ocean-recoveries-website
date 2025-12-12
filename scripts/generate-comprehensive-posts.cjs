/**
 * Generate Comprehensive News Posts
 *
 * Creates detailed news articles from publication data without requiring AI API.
 * Uses abstracts, key findings, and metadata to build rich content.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  FULL_DB_PATH: path.join(__dirname, '../publications/publications_full.json'),
  POSTS_OUTPUT: path.join(__dirname, '../src/data/posts.ts'),
};

// Theme images mapping
const themeImages = {
  'Coral': [
    '/images/chromis-acropora.jpeg',
    '/images/coral-reef-panorama-anthias-fish.jpeg',
    '/images/damselfish-pair-acropora-coral.jpeg',
    '/images/coral-guard-crab-red-spotted-macro.jpeg',
    '/images/tropical-island-aerial-view-lagoon-reef.jpeg'
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
    '/images/trapezia-coral-crab-red-spotted.jpg'
  ],
  'Models': ['/images/lorenz-attractor-abstract-art.jpeg'],
  'Predation': [
    '/images/barracuda-school-underwater-blue.jpg',
    '/images/scuba-divers-shark-deep-blue.JPG',
    '/images/blacktip-reef-shark-swimming.jpg'
  ],
  'Conservation': [
    '/images/green-sea-turtle-swimming-blue.JPG',
    '/images/tropical-island-aerial-view-lagoon-reef.jpeg'
  ],
  'Research': [
    '/images/tropical-island-aerial-view-lagoon-reef.jpeg',
    '/images/scuba-divers-shark-deep-blue.JPG',
    '/images/research-team-boats-turquoise-lagoon.webp'
  ]
};

const defaultImages = [
  '/images/coral-reef-panorama-anthias-fish.jpeg',
  '/images/giant-kelp-sunlight-underwater.jpeg',
  '/images/tropical-island-split-view-coral-reef-shark.jpeg',
  '/images/tropical-island-aerial-view-lagoon-reef.jpeg'
];

function getImage(pub, index) {
  for (const theme of (pub.themes || [])) {
    const images = themeImages[theme];
    if (images && images.length > 0) {
      return images[index % images.length];
    }
  }
  return defaultImages[index % defaultImages.length];
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 60)
    .replace(/-$/, '');
}

function getFirstAuthor(authors) {
  if (!authors) return 'Ocean Recoveries Lab';
  const firstName = authors.split(',')[0];
  return firstName.split(' ').pop();
}

function getTags(pub) {
  const tags = ['Publication'];
  (pub.themes || []).forEach(theme => {
    if (theme && theme !== 'Research') {
      tags.push(theme);
    }
  });
  tags.push(String(pub.year));
  return [...new Set(tags)].slice(0, 4);
}

function getDate(year, index) {
  const month = (index % 12) + 1;
  const day = ((index * 7) % 28) + 1;
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

/**
 * Clean text for display
 */
function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/^Abstract\s*/i, '')
    .replace(/\s+/g, ' ')
    .replace(/\n+/g, '\n\n')
    .trim();
}

/**
 * Generate comprehensive, multi-paragraph content for a publication
 */
function generateContent(pub) {
  const parts = [];

  // Get abstract from various sources
  let abstract = pub.abstract || pub.plainSummary || '';
  const pdfAbstract = pub.pdfContent?.abstractExtracted || '';

  // Use the longer abstract
  if (pdfAbstract.length > abstract.length) {
    abstract = pdfAbstract;
  }
  abstract = cleanText(abstract);

  // Get key findings from PDF extraction
  const keyFindings = pub.pdfContent?.keyFindings || [];

  // Get full text preview for additional context
  const fullTextPreview = pub.pdfContent?.fullTextPreview || '';

  // ===== BUILD COMPREHENSIVE ARTICLE =====

  // Opening summary paragraph
  if (abstract && abstract.length > 100) {
    parts.push(`## Summary\n\n${abstract}`);
  } else if (pub.title) {
    // Create a basic summary if no abstract
    parts.push(`## Summary\n\nResearchers from the Ocean Recoveries Lab have published new findings in *${pub.journal}*. This study, "${pub.title}", contributes to our understanding of marine ecosystem dynamics and conservation.`);
  }

  // Key Findings section (if available)
  if (keyFindings.length > 0) {
    parts.push('\n\n## Key Findings\n');
    const uniqueFindings = [...new Set(keyFindings)].slice(0, 5);
    uniqueFindings.forEach(finding => {
      // Clean up the finding text
      let cleanFinding = finding.trim();
      // Capitalize first letter if needed
      if (cleanFinding.charAt(0) === cleanFinding.charAt(0).toLowerCase()) {
        cleanFinding = cleanFinding.charAt(0).toUpperCase() + cleanFinding.slice(1);
      }
      parts.push(`- ${cleanFinding}`);
    });
  }

  // Research Context paragraph (from methods, region, keywords)
  const contextParts = [];
  if (pub.methods) {
    contextParts.push(`This research employed ${pub.methods.toLowerCase()} methods`);
  }
  if (pub.region) {
    contextParts.push(`conducted in ${pub.region}`);
  }
  if (pub.studyType) {
    contextParts.push(`as a ${pub.studyType.toLowerCase()} study`);
  }

  if (contextParts.length > 0) {
    parts.push(`\n\n## Research Approach\n\n${contextParts.join(', ')}.`);
  }

  // Why This Matters section
  if (pub.whyItMatters) {
    parts.push(`\n\n## Why This Matters\n\n${cleanText(pub.whyItMatters)}`);
  } else if (pub.policyRelevance) {
    parts.push(`\n\n## Why This Matters\n\n${cleanText(pub.policyRelevance)}`);
  } else {
    // Generate a generic "why it matters" based on themes
    const themes = pub.themes || [];
    let whyMatters = '';

    if (themes.includes('Coral')) {
      whyMatters = 'Coral reefs support roughly 25% of all marine species despite covering less than 1% of the ocean floor. Understanding the complex relationships that maintain reef health is essential for protecting these invaluable ecosystems as they face mounting pressures from climate change, ocean acidification, and human activities.';
    } else if (themes.includes('Kelp')) {
      whyMatters = 'Kelp forests are among the most productive ecosystems on Earth, providing critical habitat for countless marine species along temperate coastlines. This research helps us understand how these underwater forests function and how we can better protect them.';
    } else if (themes.includes('Predation')) {
      whyMatters = 'Predator-prey relationships are fundamental to ecosystem function. Understanding how these interactions shape marine communities helps managers make better decisions about fisheries and conservation.';
    } else if (themes.includes('Management')) {
      whyMatters = 'Effective marine management requires understanding how ecosystems respond to human activities and environmental change. This research provides insights that can inform science-based conservation policies.';
    } else if (themes.includes('Mutualism')) {
      whyMatters = 'Mutualisms—cooperative relationships between species—are crucial for ecosystem stability. Understanding these partnerships helps us appreciate the interconnected nature of marine life and the cascading effects when these relationships are disrupted.';
    } else {
      whyMatters = 'This research advances our understanding of marine ecosystem dynamics, providing valuable insights for conservation and management of ocean resources.';
    }

    parts.push(`\n\n## Why This Matters\n\n${whyMatters}`);
  }

  // Impact note (if highly cited)
  if (pub.citationCount > 20) {
    parts.push(`\n\nThis paper has been cited ${pub.citationCount} times, reflecting its significant impact on the field.`);
  }

  // Citation section
  parts.push(`\n\n## Citation\n\n${pub.authors} (${pub.year}). ${pub.title}. *${pub.journal}*.`);

  const doiUrl = pub.doiUrl || (pub.doi ? `https://doi.org/${pub.doi}` : '');
  if (doiUrl) {
    parts.push(`\n\n[Read the full paper](${doiUrl})`);
  }

  if (pub.openAccess) {
    parts.push('\n\n*This paper is Open Access.*');
  }

  return parts.join('');
}

/**
 * Generate excerpt from abstract or summary
 */
function generateExcerpt(pub) {
  let text = pub.plainSummary || pub.abstract || pub.pdfContent?.abstractExtracted || '';
  text = cleanText(text);

  if (text.length > 200) {
    // Find a good break point
    const shortened = text.substring(0, 200);
    const lastSpace = shortened.lastIndexOf(' ');
    return shortened.substring(0, lastSpace) + '...';
  } else if (text.length > 50) {
    return text;
  }

  return `New research from the Ocean Recoveries Lab published in ${pub.journal}.`;
}

// Main function
async function main() {
  console.log('\n╔══════════════════════════════════════════╗');
  console.log('║   Comprehensive News Post Generator      ║');
  console.log('╚══════════════════════════════════════════╝\n');

  // Load publications
  console.log('📄 Loading publications database...');
  const publications = JSON.parse(fs.readFileSync(CONFIG.FULL_DB_PATH, 'utf8'));
  console.log(`   Found ${publications.length} publications\n`);

  // Generate posts
  console.log('📝 Generating comprehensive news articles...\n');

  const posts = publications.map((pub, i) => {
    const author = getFirstAuthor(pub.authors);
    const content = generateContent(pub);

    // Progress
    process.stdout.write(`\r   Processing ${i + 1}/${publications.length}: ${pub.title.substring(0, 40)}...`);

    return {
      slug: slugify(pub.title),
      title: pub.title,
      date: getDate(pub.year, i),
      author: author === 'Stier' ? 'Adrian Stier' : `${author} et al.`,
      excerpt: generateExcerpt(pub),
      featuredImage: getImage(pub, i),
      tags: getTags(pub),
      content: content
    };
  }).sort((a, b) => b.date.localeCompare(a.date));

  console.log('\n');

  // Generate TypeScript output
  let output = `/**
 * Auto-generated news posts from publications
 * Generated: ${new Date().toISOString()}
 * Total posts: ${posts.length}
 *
 * This file is generated by scripts/generate-comprehensive-posts.cjs
 */

export interface BlogPost {
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

  posts.forEach((post) => {
    output += `  {
    slug: ${JSON.stringify(post.slug)},
    title: ${JSON.stringify(post.title)},
    date: ${JSON.stringify(post.date)},
    author: ${JSON.stringify(post.author)},
    excerpt: ${JSON.stringify(post.excerpt)},
    featuredImage: ${JSON.stringify(post.featuredImage)},
    tags: ${JSON.stringify(post.tags)},
    content: \`${post.content.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`,
  },
`;
  });

  output += `];
`;

  // Write output
  fs.writeFileSync(CONFIG.POSTS_OUTPUT, output);

  // Summary
  console.log('╔══════════════════════════════════════════╗');
  console.log('║           Generation Complete!           ║');
  console.log('╚══════════════════════════════════════════╝\n');

  const avgContentLength = Math.round(posts.reduce((sum, p) => sum + p.content.length, 0) / posts.length);
  console.log(`   📰 Articles generated: ${posts.length}`);
  console.log(`   📝 Avg content length: ${avgContentLength} chars`);
  console.log(`   📄 Output: src/data/posts.ts\n`);
}

main().catch(error => {
  console.error(`\n❌ Error: ${error.message}`);
  process.exit(1);
});
