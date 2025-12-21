#!/usr/bin/env node

/**
 * Script to ensure all essays start with first-person plural
 */

const fs = require('fs');
const path = require('path');

const analyzedDir = './publications/analyzed';

// Manual fixes for specific files that need custom openers
const customStarts = {
  '1': 'Our review reveals that on coral reefs, the relationship between fish and their coral hosts runs deeper than simple shelter-seeking.',
  '2': 'Our research on the remarkable world of coral guard crabs reveals one of nature\'s most unlikely partnerships.',
  '3': 'We studied trapeziid crabs, which represent a remarkable example of mutualistic relationships in coral reef ecosystems.',
  '4': 'We heated seawater to 26°C—near the upper limit of what California spiny lobsters experience in their natural range—',
  '7': 'Our research reveals something counterintuitive about how reefs recover from disasters.',
  '9': 'We tested an intuitive idea: coral reefs far from human civilization should be better protected from our influence.',
  '12': 'We examined scientific traps in 2018 near the borders of California\'s Channel Islands marine reserves and found something remarkable.',
  '14': 'We started collecting invertebrates from the bottoms of streams and nearshore waters around Moorea, French Polynesia.',
  '16': 'We addressed a major challenge in sustainability science: identifying targets that maximize ecosystem benefits to humanity while minimizing the risk of crossing critical system thresholds.',
  '21': 'We examined why stakeholders fight over natural resources, finding that conflicts often stem from differences in how they perceive the system rather than competing values alone.',
  '22': 'We descended onto the patch reefs of Caribbean Panama in January 2015 expecting to find what decades of research had suggested.',
  '24': 'We examined climate policy discussions around Green New Deal proposals, which have focused primarily on terrestrial solutions.',
  '29': 'We examined satellite images of tropical coastlines and noticed something curious: rings of bare sand surrounding isolated coral heads.',
  '31': 'We began curating metabolic rate data from fish studies and found evidence for a surprising scaling relationship.',
  '34': 'We examined how dispersal—the movement of organisms between habitat patches—profoundly influences biodiversity patterns.',
  '35': 'We investigated why some habitat patches consistently harbor more organisms than others, even when they seem identical.',
  '36': 'We studied what happens when young fish settle from the plankton onto coral reefs and face a competitive gauntlet.',
  '37': 'We examined participatory management, where stakeholders collaborate on marine resource decisions.',
  '39': 'We found that marine conservation typically tackles one species or fishery at a time—protect the cod, restore the sharks, manage the herring.',
  '40': 'We studied Pacific herring, which are central to the coastal food webs of the Pacific Northwest.',
  '43': 'We recognized that conservation has celebrated remarkable predator recovery stories: wolves returning to Yellowstone, sea otters reclaiming Pacific coastlines.',
  '45': 'We found that apex predator recovery programs around the world face significant challenges beyond the well-documented ecological hurdles.',
  '46': 'We observed Crematogaster nigriceps ants systematically destroying the flower buds of their acacia tree hosts.',
  '52': 'We challenged the common assumption that predators act independently: if one shark eats ten fish per day, do two sharks eat twenty?',
  '54': 'We mapped predator-to-prey ratios across Pacific coral reefs, expecting to see clear patterns.',
  '55': 'We identified a troubling trend in how researchers analyze computer simulation models.',
  '56': 'We documented what happened on July 19, 2011, when the Galápagos National Park and Ecuadorian Navy seized the Fer Mary I.',
  '57': 'We investigated whether competition between multiple species follows predictable mathematical patterns.',
  '62': 'We examined one of the most compelling questions in evolutionary biology: why some animals can regenerate injured structures while others cannot.',
  '64': 'We began tallying up what the world\'s coastlines and estuaries contribute to human welfare.',
  '65': 'Our field experiment in French Polynesia revealed surprising results about how coral colonies benefit from their resident fish.',
  '71': 'We transplanted coral colonies onto patch reefs in Moorea\'s lagoon and discovered something unexpected.',
  '72': 'We examined density dependence—the phenomenon where population growth slows as populations become crowded.',
  '73': 'We addressed a question marine biologists often face: when they need to collect small fish living in coral colonies using clove oil.',
  '75': 'We documented reef fish using crown-of-thorns starfish as habitat.',
  '76': 'We joined ecologists who have searched for decades for universal rules governing how animal populations grow and stabilize.',
  '77': 'We recognized that climate change is reshaping our oceans in ways that challenge everything we know about managing fisheries.'
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

  let essay = data.analysis?.essay || '';

  // Skip if already starts with first-person
  if (essay.match(/^(Our |We )/)) {
    return;
  }

  // Check for custom start
  if (customStarts[id]) {
    // Replace the first sentence with the custom start
    const restOfEssay = essay.replace(/^[^.!?]+[.!?]\s*/, '');
    essay = customStarts[id] + ' ' + restOfEssay;
    data.analysis.essay = essay;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    updatedCount++;
    console.log(`Updated: ${filename} (custom start)`);
  }
});

console.log(`\nTotal files updated: ${updatedCount}`);
