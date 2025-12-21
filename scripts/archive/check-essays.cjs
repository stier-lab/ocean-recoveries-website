const fs = require('fs');
const path = require('path');
const dir = './publications/analyzed';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort((a,b) => parseInt(a) - parseInt(b));

let needsManualFix = [];

files.forEach(f => {
  const data = JSON.parse(fs.readFileSync(path.join(dir, f)));
  const essay = data.analysis?.essay || '';
  const firstLine = essay.split('\n')[0].substring(0, 100);

  // Check if starts with first-person patterns
  if (!essay.match(/^(Our |We )/)) {
    needsManualFix.push({id: data.publicationId, start: firstLine});
  }
});

console.log('Files that still need first-person conversion:', needsManualFix.length);
needsManualFix.forEach(f => {
  console.log(`  #${f.id}: "${f.start}..."`);
});
