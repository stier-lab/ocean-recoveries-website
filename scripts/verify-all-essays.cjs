#!/usr/bin/env node

/**
 * Script to verify ALL essays start with first-person plural (Our/We)
 * and report any that fail the test
 */

const fs = require('fs');
const path = require('path');

const analyzedDir = './publications/analyzed';

// Get all analysis files
const files = fs.readdirSync(analyzedDir)
  .filter(f => f.endsWith('.json'))
  .sort((a, b) => parseInt(a) - parseInt(b));

let passCount = 0;
let failCount = 0;
const failures = [];

console.log('Checking all essays for first-person plural (Our/We)...\n');

files.forEach(filename => {
  const filePath = path.join(analyzedDir, filename);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const id = data.publicationId;
  const essay = data.analysis?.essay || '';

  // Check if essay starts with "Our " or "We "
  const startsWithFirstPerson = /^(Our |We )/.test(essay);

  if (startsWithFirstPerson) {
    passCount++;
    console.log(`✓ #${id}: PASS - "${essay.substring(0, 60)}..."`);
  } else {
    failCount++;
    const firstWords = essay.substring(0, 80);
    failures.push({ id, firstWords });
    console.log(`✗ #${id}: FAIL - "${firstWords}..."`);
  }
});

console.log('\n' + '='.repeat(60));
console.log(`SUMMARY: ${passCount} passed, ${failCount} failed out of ${files.length} total`);

if (failCount > 0) {
  console.log('\nFAILED ESSAYS:');
  failures.forEach(f => {
    console.log(`  #${f.id}: "${f.firstWords}..."`);
  });
  console.log('\nThese essays need to be fixed to start with "Our " or "We "');
  process.exit(1);
} else {
  console.log('\n✓ ALL ESSAYS PASS THE FIRST-PERSON TEST!');
  process.exit(0);
}
