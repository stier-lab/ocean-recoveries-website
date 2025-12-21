const fs = require('fs');
const imageDb = JSON.parse(fs.readFileSync('./data/image-database.json', 'utf-8'));
const analyzed = fs.readdirSync('./publications/analyzed').filter(f => f.endsWith('-analysis.json'));

// Get all used images
const usedImages = new Set();
for (const file of analyzed) {
  const data = JSON.parse(fs.readFileSync('./publications/analyzed/' + file, 'utf-8'));
  if (data.featuredImage) {
    usedImages.add(data.featuredImage.replace('/images/', ''));
  }
}

// Find unused images
console.log('UNUSED IMAGES AVAILABLE:');
console.log('='.repeat(80));
const unused = [];
for (const img of imageDb.images) {
  if (!usedImages.has(img.filename)) {
    unused.push(img);
    console.log('\n' + img.filename);
    console.log('  ' + img.description.substring(0, 70));
    console.log('  Species: ' + (img.species || []).join(', '));
    console.log('  Themes: ' + (img.themes || []).join(', '));
  }
}
console.log('\n\nTotal unused images:', unused.length);
