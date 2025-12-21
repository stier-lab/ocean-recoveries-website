#!/usr/bin/env node

/**
 * Script to fix essays with duplicate phrases caused by bad regex replacements
 */

const fs = require('fs');
const path = require('path');

const analyzedDir = './publications/analyzed';

// Clean essay starts for files with duplicate phrases
const cleanStarts = {
  '13': 'We wanted to solve a puzzle that has haunted marine ecologists for decades: why do some kelp forests coexist peacefully with sea urchins while others get completely obliterated, turning into underwater deserts called urchin barrens? We suspected the answer lay in the balance between how much kelp the forest produces and how much the urchins consume.',

  '23': 'We studied parrotfish behavior across Caribbean reefs and discovered that these critical reef cleaners behave dramatically differently depending on where they live—a finding that could change how we protect coral reefs.',

  '26': 'We studied Pacific herring populations across British Columbia\'s coastline and discovered something more insidious than the usual story of fishing pressure and population decline: entire local populations were collapsing while regional assessments suggested everything was fine.',

  '49': 'We wanted to solve one of the most tantalizing questions in regenerative biology: why do most animals lose their ability to regrow body parts as they mature? Frogs can regenerate limbs as tadpoles but lose this power around metamorphosis. Salamanders supposedly keep it throughout their lives. But previous studies were messy—scientists couldn\'t separate the effects of metamorphosis from age, body size, or developmental stage.',

  '53': 'We wanted to understand how predators and habitat characteristics interact to shape fish populations on coral reefs.',

  '58': 'We studied predation on coral reefs and discovered that timing matters as much as size when it comes to survival.',

  '62': 'We examined one of the most compelling questions in evolutionary biology: why some animals can regenerate injured structures while others cannot.',

  '63': 'We studied coral reefs in French Polynesia and discovered that corals with four clearly separated clades of their symbiotic algae responded differently to temperature stress than those with mixed populations.',

  '66': 'We studied young wrasse settling onto coral reefs in the lagoons of Moorea, French Polynesia.',

  '67': 'We wanted to understand how fish populations naturally fluctuate on coral reefs—specifically, what controls how many young fish survive their first vulnerable weeks after settling onto the reef.',

  '68': 'We examined how predators affect young coral-dwelling fish during their critical first weeks on the reef.',

  '70': 'We studied coral reef fish settlement in French Polynesia and discovered that baby fish arriving on reefs face an immediate gauntlet of predators.'
};

// Read and fix each file
Object.entries(cleanStarts).forEach(([id, cleanStart]) => {
  const filePath = path.join(analyzedDir, `${id}-analysis.json`);

  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let essay = data.analysis?.essay || '';

  // Find where the second paragraph starts (after first \n\n)
  const firstBreak = essay.indexOf('\n\n');
  if (firstBreak === -1) {
    console.log(`No paragraph break found in ${id}`);
    return;
  }

  // Get rest of essay after first paragraph
  const restOfEssay = essay.substring(firstBreak);

  // Build new essay with clean start
  const newEssay = cleanStart + restOfEssay;

  data.analysis.essay = newEssay;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log(`Fixed: ${id}-analysis.json`);
  console.log(`  New start: ${newEssay.substring(0, 80)}...`);
});

console.log('\nDone fixing duplicate phrases.');
