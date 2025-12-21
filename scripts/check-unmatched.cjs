const fs = require('fs');
const path = require('path');

const postsContent = fs.readFileSync(path.join(__dirname, '../src/data/posts.ts'), 'utf8');
const pubsContent = fs.readFileSync(path.join(__dirname, '../src/data/publications.ts'), 'utf8');

function extractDoi(doiUrlOrDoi) {
  if (!doiUrlOrDoi) return undefined;
  if (doiUrlOrDoi.startsWith('10.')) return doiUrlOrDoi.toLowerCase();
  const match = doiUrlOrDoi.match(/(?:doi\.org\/|doi:)(.+)/i);
  return match ? match[1].toLowerCase() : undefined;
}

// Build image map from posts
const postBlocks = postsContent.split(/\n\s*\{[\s\n]*slug:/g).slice(1);
const imageMap = new Map();
for (const block of postBlocks) {
  const imageMatch = block.match(/featuredImage:\s*["']([^"']+)["']/);
  const doiMatch = block.match(/doiUrl:\s*["']([^"']+)["']/);
  if (imageMatch && doiMatch) {
    const doi = extractDoi(doiMatch[1]);
    if (doi) imageMap.set(doi, imageMatch[1]);
  }
}

// Find unmatched publications
const pubDoiMatches = [...pubsContent.matchAll(/id:\s*['"](\d+)['"][\s\S]*?title:\s*["']([^"']+)["'][\s\S]*?doi:\s*["']([^"']+)["']/g)];

console.log('Publications without matching news post images:');
for (const match of pubDoiMatches) {
  const id = match[1];
  const title = match[2].substring(0, 60);
  const rawDoi = match[3];
  const doi = extractDoi(rawDoi);

  if (!doi || !imageMap.has(doi)) {
    console.log(`  [${id}] ${title}...`);
    console.log(`       DOI: ${rawDoi}`);
    console.log(`       Extracted: ${doi}`);
  }
}
