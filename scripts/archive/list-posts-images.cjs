const fs = require('fs');

// Read posts.ts and extract the data
const postsContent = fs.readFileSync('./src/data/posts.ts', 'utf8');

// Simple regex to extract title, featuredImage, and doiUrl from each post
const postPattern = /\{\s*slug:[^}]*?title:\s*"([^"]+)"[^}]*?featuredImage:\s*"([^"]+)"[^}]*?doiUrl:\s*"([^"]+)"/gs;

let match;
const posts = [];
while ((match = postPattern.exec(postsContent)) !== null) {
  posts.push({
    title: match[1],
    image: match[2],
    doi: match[3]
  });
}

// Output as table
console.log('# Complete News Article Image & DOI List\n');
console.log('| # | Image | DOI | Article Title |');
console.log('|---|-------|-----|---------------|');
posts.forEach((p, i) => {
  const shortDoi = p.doi.replace('https://doi.org/', '');
  const shortTitle = p.title.substring(0, 60) + (p.title.length > 60 ? '...' : '');
  const shortImage = p.image.replace('/images/', '');
  console.log(`| ${i+1} | ${shortImage} | ${shortDoi} | ${shortTitle} |`);
});
console.log('');
console.log('Total posts with DOIs: ' + posts.length);
