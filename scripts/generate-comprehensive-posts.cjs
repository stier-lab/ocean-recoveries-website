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
 * Clean text for display - removes academic artifacts
 */
function cleanText(text) {
  if (!text) return '';
  return text
    // Remove abstract label
    .replace(/^Abstract\s*/i, '')
    // Remove journal metadata (Vol., DOI in header, etc.)
    .replace(/Vol\.\:\([^)]+\)[^.]+\./g, '')
    .replace(/Vol\.\:[^\n]+/g, '')
    // Remove author affiliations with superscripts (e.g., "Curtis 1,2 ·")
    .replace(/\b[A-Z][a-z]+\s+\d+,?\d*\s*·/g, '')
    // Remove DOIs appearing in text (not citations)
    .replace(/https:\/\/doi\.org\/[^\s\)]+\s*/g, '')
    // Remove table/figure references - comprehensive
    .replace(/\(Table \d+[^)]*\)/gi, '')
    .replace(/\(Fig\.\s*\d+[^)]*\)/gi, '')
    .replace(/\(Figure \d+[^)]*\)/gi, '')
    .replace(/Table \d+\b[^.]*?\./gi, '')
    .replace(/Table \d+\b/gi, '')
    .replace(/Figure \d+\./gi, '')
    .replace(/\(see Table[^)]+\)/gi, '')
    .replace(/\(see Fig[^)]+\)/gi, '')
    .replace(/\(Table S\d+\)/gi, '')
    .replace(/Table S\d+/gi, '')
    // Remove statistical notation
    .replace(/\bp\s*[<>=]\s*0\.\d+/gi, '')
    .replace(/\bchi-squared\s*=\s*[\d.]+/gi, '')
    .replace(/\bF\s*\d+,\d+\s*=?\s*[\d.]+/gi, '')
    .replace(/\banova\b/gi, 'analysis')
    .replace(/\bTukey'?s?\s+(HSD\s+)?test/gi, 'statistical test')
    .replace(/\bTukey'?s?\s+post\s*hoc/gi, 'follow-up analysis')
    // Remove incomplete references like "(i." or "(e."
    .replace(/\(i\.\s*$/gm, '')
    .replace(/\(e\.\s*$/gm, '')
    .replace(/\(i\.\s*,/g, ',')
    // Remove copyright/journal header artifacts
    .replace(/©\s*\d{4}[^.]+\./g, '')
    .replace(/Received:.*?Accepted:[^©]+/g, '')
    // Remove weird spacing from PDF extraction (e.g., "1 3 Coral")
    .replace(/(\d)\s+(\d)\s+([A-Z])/g, '$3')
    // Clean up multiple spaces
    .replace(/\s+/g, ' ')
    // Clean up multiple newlines
    .replace(/\n+/g, '\n\n')
    .trim();
}

/**
 * Clean key findings - more aggressive cleaning for bullet points
 */
function cleanKeyFinding(text) {
  if (!text) return '';

  let cleaned = text
    // Remove all statistical notation and p-values
    .replace(/\bp\s*[<>=]\s*[\d.]+/gi, '')
    .replace(/\bp\s*10\s*\d+/gi, '') // p 10 15 format
    .replace(/\bchi-squared[^.]*\./gi, '')
    .replace(/\bF\s*[\d,]+\s*[=≈]\s*[\d.]+/gi, '')
    .replace(/\bF\s*\d+,\d+[^.]+/gi, '')
    .replace(/ANOVA[^,.;]*/gi, '')
    .replace(/Tukey'?s?\s*(HSD\s*)?(test|post[- ]?hoc)?[^,.;]*/gi, '')
    .replace(/MANOVA[^,.;]*/gi, '')
    // Remove table/figure references - more comprehensive
    .replace(/\([^)]*Table\s*\d+[^)]*\)/gi, '')
    .replace(/\([^)]*Fig\.?\s*\d*[^)]*\)/gi, '')
    .replace(/\([^)]*Figure\s*\d+[^)]*\)/gi, '')
    .replace(/\([^)]*Appendix[^)]*\)/gi, '')
    .replace(/\([^)]*Supplement[^)]*\)/gi, '')
    .replace(/Table\s*\d+\./gi, '')
    .replace(/\(Table\s*\d+/gi, '(')
    .replace(/\(Fig\.\s*\d*/gi, '(')
    .replace(/\(Figure\s*\d+/gi, '(')
    // Remove parentheses that now only contain punctuation or spaces
    .replace(/\(\s*[,.:;\s]*\s*\)/g, '')
    // Remove journal artifacts
    .replace(/Coral Reefs \d+ \d+/gi, '')
    .replace(/\d+ \d+ [A-Z][a-z]+/g, '') // Pattern like "1 3 Coral"
    // Remove incomplete parenthetical refs
    .replace(/\([^)]{0,3}$/g, '')
    .replace(/\([^)]*$/g, '') // Remove unclosed parentheses at end
    // Remove "We found that" style starts - make more direct
    .replace(/^we found (that\s+)?/i, '')
    .replace(/^we show (that\s+)?/i, '')
    .replace(/^we observed (that\s+)?/i, '')
    .replace(/^our results (show|indicate|suggest) (that\s+)?/i, '')
    .replace(/^our findings (show|indicate|suggest) (that\s+)?/i, '')
    .replace(/^results (show|indicate|reveal) (that\s+)?/i, '')
    .replace(/^significant\s+(differences?|effects?)\s+/i, 'There were differences ')
    // Clean up hyphenated line breaks from PDFs
    .replace(/(\w)- (\w)/g, '$1$2')
    // Clean up multiple spaces
    .replace(/\s+/g, ' ')
    .trim();

  // Skip findings that are too short after cleaning or look broken
  if (cleaned.length < 20) return '';
  if (cleaned.match(/^[^a-zA-Z]*$/)) return ''; // No letters
  if (cleaned.match(/^\d+[\s,.\d]*$/)) return ''; // Just numbers

  return cleaned;
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
    const cleanedFindings = keyFindings
      .map(f => cleanKeyFinding(f))
      .filter(f => f.length > 20 && f.length < 400) // Filter out too short/long
      .filter(f => !f.match(/^\d+$/)) // Filter out just numbers
      .filter(f => !f.match(/^[^a-zA-Z]*$/)); // Filter out non-text

    const uniqueFindings = [...new Set(cleanedFindings)].slice(0, 5);

    if (uniqueFindings.length > 0) {
      parts.push('\n\n## Key Findings\n');
      uniqueFindings.forEach(finding => {
        // Capitalize first letter if needed
        let cleanFinding = finding;
        if (cleanFinding.charAt(0) === cleanFinding.charAt(0).toLowerCase()) {
          cleanFinding = cleanFinding.charAt(0).toUpperCase() + cleanFinding.slice(1);
        }
        // Ensure it ends with a period
        if (!cleanFinding.match(/[.!?]$/)) {
          cleanFinding += '.';
        }
        parts.push(`- ${cleanFinding}`);
      });
    }
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
  let text = pub.plainSummary || pub.abstract || '';

  // Don't use PDF abstract for excerpt - it often has formatting issues
  // Only fall back to it if we have nothing else
  if (!text && pub.pdfContent?.abstractExtracted) {
    text = pub.pdfContent.abstractExtracted;
  }

  text = cleanText(text);

  // Skip if it looks like journal metadata
  if (text.match(/^Vol\.|^\d+\s+\d+\s+[A-Z]/)) {
    return `New research from the Ocean Recoveries Lab published in ${pub.journal}.`;
  }

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
