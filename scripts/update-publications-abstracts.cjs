#!/usr/bin/env node
/**
 * Update publications.ts with extracted abstracts
 */

const fs = require('fs');
const path = require('path');

// Load extracted abstracts
const abstractsPath = path.join(__dirname, '..', 'data', 'abstracts-complete.json');
const abstracts = JSON.parse(fs.readFileSync(abstractsPath, 'utf8'));

// Read publications.ts
const pubsPath = path.join(__dirname, '..', 'src', 'data', 'publications.ts');
let content = fs.readFileSync(pubsPath, 'utf8');

// Update each abstract
for (const [id, abstract] of Object.entries(abstracts)) {
  // Clean up the abstract - fix concatenated words and special chars
  let cleanAbstract = abstract
    .replace(/coralassociated/gi, 'coral-associated')
    .replace(/Trapeziaspp\./gi, 'Trapezia spp.')
    .replace(/Pocilloporasp\./gi, 'Pocillopora sp.')
    .replace(/massivePorites/gi, 'massive Porites')
    .replace(/withinPocillopora/gi, 'within Pocillopora')
    .replace(/withinP\./gi, 'within P.')
    .replace(/onP\./gi, 'on P.')
    .replace(/seastarAcanthaster/gi, 'seastar Acanthaster')
    .replace(/cyanobacteria,Lyngbya/gi, 'cyanobacteria, Lyngbya')
    .replace(/hare,Stylocheilus/gi, 'hare, Stylocheilus')
    .replace(/nudibranch,Gymnodoris/gi, 'nudibranch, Gymnodoris')
    .replace(/ofPocillopora/gi, 'of Pocillopora')
    .replace(/ofAcanthaster/gi, 'of Acanthaster')
    .replace(/corals:Acropora/gi, 'corals: Acropora')
    .replace(/surroundingflora/gi, 'surrounding flora')
    .replace(/usedfish/gi, 'used fish')
    .replace(/tofive/gi, 'to five')
    .replace(/followingfield/gi, 'following field')
    .replace(/d -1/g, 'd⁻¹')
    .replace(/[\u2019]/g, "'")  // curly apostrophe to straight
    .replace(/\s+/g, ' ')  // normalize spaces
    .trim();

  // Find the publication by id and update abstract
  const idPattern = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?abstract:\\s*)undefined`, 'g');
  const newContent = content.replace(idPattern, `$1"${cleanAbstract.replace(/"/g, '\\"')}"`);

  if (newContent !== content) {
    console.log(`[OK] Updated ID ${id}`);
    content = newContent;
  } else {
    console.log(`[SKIP] ID ${id} - pattern not found or already has abstract`);
  }
}

// Write updated content
fs.writeFileSync(pubsPath, content);
console.log('\nPublications.ts updated successfully!');
