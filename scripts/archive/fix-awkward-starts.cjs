#!/usr/bin/env node

/**
 * Script to fix awkward essay starts from previous regex replacements
 */

const fs = require('fs');
const path = require('path');

const analyzedDir = './publications/analyzed';

// Custom fixes for awkward starts
const customFixes = {
  '5': 'We compared traditional measuring techniques to 3D photogrammetry and found significant',
  '8': 'We developed mathematical models at UC Santa Barbara to explore a paradox observed',
  '10': 'We investigated how coral-dwelling fish affect their hosts during bleaching events',
  '13': 'We wanted to solve a puzzle that has haunted',
  '17': 'We studied California kelp forests and developed a mathematical model to understand',
  '23': 'We studied parrotfish behavior across Caribbean reefs and discovered that these critical',
  '25': 'We analyzed 18 years of data from 32 plots across nine rocky reefs in the Santa',
  '26': 'We studied Pacific herring populations across British Columbia\'s coastline and discovered',
  '42': 'We studied hawkfish hunting behavior on coral reefs and expected larger predators to',
  '49': 'We wanted to solve one of the most tantalizing questions in regenerative biology',
  '53': 'We wanted to understand how predators and habitat characteristics',
  '58': 'We studied predation on coral reefs and discovered that timing matters as much',
  '61': 'We investigated whether multiple species of mutualistic',
  '63': 'We studied coral reefs in French Polynesia and discovered that corals with four clearly',
  '66': 'We studied young wrasse settling onto coral reefs',
  '67': 'We wanted to understand how fish populations naturally fluctuate',
  '68': 'We examined how predators affect young coral-dwelling',
  '69': 'We studied coral reefs in Moorea\'s lagoons and documented a pattern: some coral colonies',
  '70': 'We studied coral reef fish settlement in French Polynesia and discovered that baby'
};

// Get all analysis files
const files = fs.readdirSync(analyzedDir)
  .filter(f => f.endsWith('.json'))
  .sort((a, b) => parseInt(a) - parseInt(b));

let updatedCount = 0;

files.forEach(filename => {
  const filePath = path.join(analyzedDir, filename);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const id = data.publicationId;

  if (!customFixes[id]) return;

  let essay = data.analysis?.essay || '';

  // Find the end of the first problematic segment
  // Look for common patterns to find where to cut
  const firstSentenceEnd = essay.indexOf('. ');
  if (firstSentenceEnd === -1) return;

  // Get everything after the first sentence segment
  // We need to find where the actual content starts
  let cutPoint = 0;

  // Different patterns to handle
  if (essay.startsWith('We led by ')) {
    // "We led by Mae Rennick and her colleagues wanted to solve"
    // Find "wanted" or next verb
    const wantedMatch = essay.match(/wanted to|have developed|have identified|discovered|found|examined|investigated/i);
    if (wantedMatch) {
      cutPoint = essay.indexOf(wantedMatch[0]);
    }
  } else if (essay.startsWith('We McKeon')) {
    // "We McKeon, Stier, McIlroy, and Bolker investigated"
    const investigatedIdx = essay.indexOf('investigated');
    if (investigatedIdx !== -1) cutPoint = investigatedIdx;
  } else if (essay.startsWith('We Shane')) {
    // "We Shane Wallace Geange and Adrian C. Stier studied"
    const studiedIdx = essay.indexOf('studied');
    if (studiedIdx !== -1) cutPoint = studiedIdx;
  } else if (essay.startsWith('We at UC') || essay.startsWith('We at the')) {
    // "We at UC Santa Barbara developed"
    const verbMatch = essay.match(/developed|studied|examined|investigated|discovered|wanted/i);
    if (verbMatch) {
      cutPoint = essay.indexOf(verbMatch[0]);
    }
  } else if (essay.match(/^We (studying|analyzing|comparing|investigating|conducted)/)) {
    // These need the verb form fixed
    cutPoint = 3; // After "We "
  }

  let restOfEssay;
  if (cutPoint > 0) {
    restOfEssay = essay.substring(cutPoint);
  } else {
    // Just take after the awkward start
    const spaceAfterWe = essay.indexOf(' ', 3);
    restOfEssay = essay.substring(spaceAfterWe + 1);
  }

  // Build new essay
  const newEssay = customFixes[id] + ' ' + restOfEssay.replace(/^\s+/, '');

  data.analysis.essay = newEssay;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  updatedCount++;
  console.log(`Updated: ${filename}`);
  console.log(`  Old start: ${essay.substring(0, 60)}...`);
  console.log(`  New start: ${newEssay.substring(0, 60)}...`);
});

console.log(`\nTotal files updated: ${updatedCount}`);
