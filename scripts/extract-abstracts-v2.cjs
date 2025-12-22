#!/usr/bin/env node
/**
 * Extract abstracts from PDFs for publications that are missing them.
 * Uses pdf-parse to extract text and find the abstract section.
 * V2: Improved patterns and debugging output.
 */

const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

// Publications missing abstracts with their PDF file patterns
const MISSING_ABSTRACTS = [
  { id: '1', title: 'Fish services to corals', pdfPattern: 'Stier et al. (Coral Reefs) 2025' },
  { id: '2', title: 'How fishes and invertebrates impact coral resilience', pdfPattern: 'Stier and Osenberg  (Current Biology) 2024' },
  { id: '3', title: 'Coral guard crabs', pdfPattern: 'Stier and Osenberg (Current Biology) 2024 II' },
  { id: '5', title: '3D photogrammetry improves measurement', pdfPattern: 'Curtis et al. (Coral Reefs) 2023' },
  { id: '35', title: 'Landscape configuration drives', pdfPattern: 'Hamman et al. Theoretical Ecology' },
  { id: '38', title: 'Rapid and direct recoveries', pdfPattern: 'Samhouri et al. (NEE) 2017' },
  { id: '40', title: 'Biodiversity effects of the predation gauntlet', pdfPattern: 'Stier et al (Coral Reefs) 2017' },
  { id: '41', title: 'The relative influence of abundance', pdfPattern: 'Geange et al. (Coral Reefs) 2016' },
  { id: '52', title: 'Larval dispersal drives trophic structure', pdfPattern: 'Stier Hein et al. (Nature Communications) 2014' },
  { id: '54', title: 'Predators alter community organization', pdfPattern: 'Stier and Leray (Coral Reefs) 2014' },
  { id: '55', title: 'Predator density and the functional responses', pdfPattern: 'Stier and White (Coral Reefs) 2014' },
  { id: '61', title: 'Multiple defender effects', pdfPattern: 'McKeon et al. (Oecologia) 2012' },
  { id: '67', title: 'Guard crabs alleviate deleterious effects', pdfPattern: 'Stier et al. (Coral Reefs) 2010' },
  { id: '69', title: 'Priority effects and habitat complexity', pdfPattern: 'Geange and Stier (Oecologia) 2010' },
  { id: '70', title: 'Predators reduce abundance and species richness', pdfPattern: 'Geange and Stier (Coral Reefs) 2010' },
  { id: '72', title: 'Charismatic microfauna alter cyanobacterial', pdfPattern: 'Shantz et al. (Coral Reefs) 2011' },
  { id: '74', title: 'Effects of the fish anesthetic', pdfPattern: 'Boyer et al. (JEMBE) 2009' },
  { id: '75', title: 'Coral reef fishes use crown-of-thorns', pdfPattern: 'Stier et al. (Coral Reefs) 2008' },
];

const PDF_DIR = path.join(__dirname, '..', 'publications', 'Lab Publications');

function extractAbstract(text, debug = false) {
  // Normalize text first
  const normalizedText = text
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');

  if (debug) {
    // Print first 3000 chars for debugging
    console.log('\n--- PDF TEXT START (first 3000 chars) ---');
    console.log(normalizedText.substring(0, 3000));
    console.log('--- PDF TEXT END ---\n');
  }

  // Try different patterns to find abstracts
  const patterns = [
    // Pattern 1: "Abstract" followed by content until common section headers
    /\bAbstract\b[:\.\s]*\n?([\s\S]*?)(?=\n\s*(?:Keywords?|Introduction|Key\s*words|INTRODUCTION|1\.\s*Introduction|Background|Methods|Results|Materials?\s*and\s*Methods?|Study\s*Area|\n\n\n))/i,

    // Pattern 2: "ABSTRACT" (all caps) section
    /\bABSTRACT\b[:\.\s]*\n?([\s\S]*?)(?=\n\s*(?:KEYWORDS?|INTRODUCTION|KEY\s*WORDS|BACKGROUND|METHODS|RESULTS|\n\n\n))/i,

    // Pattern 3: "Summary" section (some journals use this)
    /\bSummary\b[:\.\s]*\n?([\s\S]*?)(?=\n\s*(?:Keywords?|Introduction|Background|\n\n\n))/i,

    // Pattern 4: Current Biology style - look for text between "Correspondence" and "Results"
    /Correspondence[\s\S]*?\n\n([\s\S]{200,1500}?)(?=\n\s*Results?\b)/i,

    // Pattern 5: Nature Communications style - might have ":" after abstract
    /Abstract:\s*([\s\S]*?)(?=\n\s*(?:Introduction|Background|Results))/i,

    // Pattern 6: Coral Reefs style - Abstract followed by Keywords on same logical block
    /\bAbstract\b\s+([\s\S]*?)(?=\bKeywords?\b)/i,

    // Pattern 7: Oecologia style
    /\bAbstract\b\s*([\s\S]*?)(?=\n\s*(?:Electronic supplementary|Introduction|Methods|Keywords))/i,

    // Pattern 8: Simple abstract block (fallback)
    /\bAbstract\b\s*[:\.]?\s*\n?\s*((?:[A-Z][^.]*\.[\s\S]*?){2,})(?=\n\s*\n|\nKeywords?|\nIntroduction)/i,
  ];

  for (let i = 0; i < patterns.length; i++) {
    const match = normalizedText.match(patterns[i]);
    if (match && match[1]) {
      let abstract = match[1]
        .replace(/\s+/g, ' ')  // Normalize whitespace
        .replace(/- /g, '')    // Remove hyphenation
        .replace(/^\s*\.?\s*/, '') // Remove leading dots/spaces
        .trim();

      // Skip if too short (likely false positive) or too long
      if (abstract.length > 100 && abstract.length < 3000) {
        if (debug) {
          console.log(`  Pattern ${i + 1} matched with ${abstract.length} chars`);
        }
        // Truncate if too long (with ellipsis)
        if (abstract.length > 2000) {
          abstract = abstract.substring(0, 1997) + '...';
        }
        return abstract;
      }
    }
  }
  return null;
}

async function findPdfFile(pattern) {
  const files = fs.readdirSync(PDF_DIR);
  // Try exact match first, then partial match
  let match = files.find(f => f.includes(pattern) && f.endsWith('.pdf'));

  // Try with adjusted pattern (handle parenthesis variations)
  if (!match) {
    const altPattern = pattern.replace(/\(|\)/g, '');
    match = files.find(f => {
      const cleanName = f.replace(/\(|\)/g, '');
      return cleanName.includes(altPattern) && f.endsWith('.pdf');
    });
  }

  return match ? path.join(PDF_DIR, match) : null;
}

async function processPdf(pdfPath, debug = false) {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    return extractAbstract(data.text, debug);
  } catch (err) {
    console.error(`Error processing ${pdfPath}: ${err.message}`);
    return null;
  }
}

async function main() {
  const debugMode = process.argv.includes('--debug');
  const singleId = process.argv.find(arg => arg.startsWith('--id='));

  console.log('Extracting abstracts from PDFs (V2)...\n');

  const results = [];
  const pubsToProcess = singleId
    ? MISSING_ABSTRACTS.filter(p => p.id === singleId.split('=')[1])
    : MISSING_ABSTRACTS;

  for (const pub of pubsToProcess) {
    const pdfPath = await findPdfFile(pub.pdfPattern);

    if (!pdfPath) {
      console.log(`[SKIP] ID ${pub.id}: No PDF found for pattern "${pub.pdfPattern}"`);
      results.push({ id: pub.id, title: pub.title, abstract: null, error: 'PDF not found' });
      continue;
    }

    console.log(`[PROC] ID ${pub.id}: ${path.basename(pdfPath)}`);
    const abstract = await processPdf(pdfPath, debugMode);

    if (abstract) {
      console.log(`  -> Found abstract (${abstract.length} chars)`);
      results.push({ id: pub.id, title: pub.title, abstract });
    } else {
      console.log(`  -> No abstract found`);
      results.push({ id: pub.id, title: pub.title, abstract: null, error: 'Could not extract' });
    }
  }

  // Output results as JSON
  const outputPath = path.join(__dirname, '..', 'data', 'extracted-abstracts-v2.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\nResults saved to: ${outputPath}`);

  // Summary
  const found = results.filter(r => r.abstract).length;
  console.log(`\nSummary: ${found}/${results.length} abstracts extracted`);

  // Print TypeScript update snippet for found abstracts
  if (found > 0) {
    console.log('\n--- TypeScript update snippet ---\n');
    for (const r of results.filter(r => r.abstract)) {
      console.log(`// ID ${r.id}: ${r.title.substring(0, 50)}...`);
      console.log(`abstract: ${JSON.stringify(r.abstract)},\n`);
    }
  }
}

main().catch(console.error);
