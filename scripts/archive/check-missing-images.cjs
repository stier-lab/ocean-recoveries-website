const fs = require('fs');
const path = require('path');

// Read posts.ts to extract featured images
const postsContent = fs.readFileSync(path.join(__dirname, '../src/data/posts.ts'), 'utf8');
const imagesDir = path.join(__dirname, '../public/images');

// Extract all featured images
const imageMatches = [...postsContent.matchAll(/featuredImage:\s*["']\/images\/([^"']+)["']/g)];
const images = imageMatches.map(m => m[1]);

console.log('Total images referenced in posts.ts:', images.length);
console.log('\nMissing images:');

let missing = 0;
for (const img of images) {
  const imgPath = path.join(imagesDir, img);
  if (!fs.existsSync(imgPath)) {
    missing++;
    console.log(`  MISSING: ${img}`);
  }
}

console.log('\nTotal missing:', missing);
console.log('Existing images:', images.length - missing);
