const fs = require('fs');
const analyzed = fs.readdirSync('./publications/analyzed').filter(f => f.endsWith('-analysis.json'));

// Count image usage
const imageUsage = {};
for (const file of analyzed) {
  const data = JSON.parse(fs.readFileSync('./publications/analyzed/' + file, 'utf-8'));
  const img = data.featuredImage || '';
  if (!imageUsage[img]) imageUsage[img] = [];
  const speciesRaw = data.analysis?.species;
  const species = (Array.isArray(speciesRaw) ? speciesRaw.join(', ') : (speciesRaw || '')).substring(0, 60);
  imageUsage[img].push({
    id: data.publicationId,
    title: (data.title || '').substring(0, 50),
    species: species,
    location: (data.analysis?.location || '').substring(0, 40),
    themes: (data.analysis?.themes || []).slice(0, 3).join(', ')
  });
}

// Show duplicates
console.log('DUPLICATE IMAGE USAGE:');
console.log('='.repeat(100));
const duplicates = [];
for (const [img, pubs] of Object.entries(imageUsage)) {
  if (pubs.length > 1) {
    console.log('\n' + img.replace('/images/', '') + ' (' + pubs.length + ' uses):');
    for (const p of pubs) {
      console.log('  ' + p.id.padStart(2) + ': ' + p.title);
      console.log('      Species: ' + p.species);
      duplicates.push({img, ...p});
    }
  }
}

console.log('\n\nTotal duplicated assignments:', duplicates.length);
