#!/usr/bin/env node

/**
 * Script to fix grammar issues in essays
 * Converts awkward phrases like "Our researchers" to proper first-person plural
 */

const fs = require('fs');
const path = require('path');

const analyzedDir = './publications/analyzed';

// Get all analysis files
const files = fs.readdirSync(analyzedDir)
  .filter(f => f.endsWith('.json'))
  .sort((a, b) => parseInt(a) - parseInt(b));

let updatedCount = 0;

// Grammar fixes to apply
const fixes = [
  // "Our we" → "We"
  [/Our we /gi, 'We '],

  // "Our researchers" at start of sentence → "We"
  [/Our researchers /gi, 'We '],

  // "Our research have" → "We have" (grammar fix)
  [/Our research have /gi, 'We have '],

  // "Our research conducting" → "We conducted" (grammar fix)
  [/Our research conducting /gi, 'We conducted '],

  // "Our research conducted" → "We conducted"
  [/Our research conducted /gi, 'We conducted '],

  // Fix double spaces
  [/  +/g, ' '],
];

files.forEach(filename => {
  const filePath = path.join(analyzedDir, filename);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const id = data.publicationId;

  let essay = data.analysis?.essay || '';
  let originalEssay = essay;

  // Apply all fixes
  fixes.forEach(([pattern, replacement]) => {
    essay = essay.replace(pattern, replacement);
  });

  // Only update if changes were made
  if (essay !== originalEssay) {
    data.analysis.essay = essay;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    updatedCount++;
    console.log(`Updated: ${filename}`);

    // Show what changed
    const changes = [];
    fixes.forEach(([pattern, replacement]) => {
      if (originalEssay.match(pattern)) {
        changes.push(`  ${pattern.toString()} → "${replacement}"`);
      }
    });
    if (changes.length > 0) {
      console.log(changes.join('\n'));
    }
  }
});

console.log(`\nTotal files updated: ${updatedCount}`);
