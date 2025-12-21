const fs = require('fs');
const path = require('path');

// Read posts.ts to extract DOIs and images
const postsContent = fs.readFileSync(path.join(__dirname, '../src/data/posts.ts'), 'utf8');
const pubsContent = fs.readFileSync(path.join(__dirname, '../src/data/publications.ts'), 'utf8');

// Extract DOI from URL
function extractDoi(doiUrlOrDoi) {
  if (!doiUrlOrDoi) return undefined;
  if (doiUrlOrDoi.startsWith('10.')) return doiUrlOrDoi.toLowerCase();
  const match = doiUrlOrDoi.match(/(?:doi\.org\/|doi:)(.+)/i);
  return match ? match[1].toLowerCase() : undefined;
}

// Parse posts - need to look for doiUrl first since it comes after featuredImage in each object
const postBlocks = postsContent.split(/\n\s*\{[\s\n]*slug:/g).slice(1); // Split by post objects
const imageMap = new Map();

for (const block of postBlocks) {
  const imageMatch = block.match(/featuredImage:\s*["']([^"']+)["']/);
  const doiMatch = block.match(/doiUrl:\s*["']([^"']+)["']/);

  if (imageMatch && doiMatch) {
    const image = imageMatch[1];
    const doiUrl = doiMatch[1];
    const doi = extractDoi(doiUrl);
    if (doi) {
      imageMap.set(doi, image);
    }
  }
}

console.log('Posts with DOIs and images:', imageMap.size);
console.log('\nSample DOIs from posts:');
let i = 0;
for (const [doi, img] of imageMap) {
  if (i++ < 5) console.log(`  "${doi}" -> ${img}`);
}

// Parse publications DOIs
const pubDoiMatches = [...pubsContent.matchAll(/id:\s*['"](\d+)['"][\s\S]*?doi:\s*["']([^"']+)["']/g)];
console.log('\nSample DOIs from publications:');
for (let j = 0; j < 5 && j < pubDoiMatches.length; j++) {
  const doi = extractDoi(pubDoiMatches[j][2]);
  console.log(`  [${pubDoiMatches[j][1]}] "${doi}"`);
}

// Now match
console.log('\n=== Matching ===');
let matched = 0;
for (const match of pubDoiMatches) {
  const id = match[1];
  const doi = extractDoi(match[2]);

  if (doi && imageMap.has(doi)) {
    matched++;
    if (matched <= 10) {
      console.log(`  [${id}] ${doi} -> ${imageMap.get(doi)}`);
    }
  }
}

console.log('\nTotal matched:', matched);
