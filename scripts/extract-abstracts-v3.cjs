#!/usr/bin/env node
/**
 * Extract abstracts from PDFs for publications that are missing them.
 * V3: Improved patterns based on actual PDF formats.
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

function extractAbstract(text) {
  // Normalize text
  const normalizedText = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // Try different patterns to find abstracts
  const patterns = [
    // Pattern for Coral Reefs style: Abstract before Keywords
    /Abstract\s+((?:On|The|In|We|This|Here|Coral|Marine|Fish|Many|Despite|Although|Because|To|Understanding|Recently|However|While|For|Most|Some|Hard|Soft|Although|It)[^*]+?)(?=Keywords?\b)/is,

    // Pattern for Current Biology: Summary section
    /Summary\s*\n?\s*((?:On|The|In|We|This|Here|Coral|Marine|Fish|Many|Despite|Although|Because|To|Understanding|Recently|However|While|For|Most|Some|Hard|Soft|It)[^*]+?)(?=\n\s*(?:Highlights?|Results?\b|Introduction))/is,

    // Pattern: Abstract with content until Introduction
    /Abstract\s+((?:[A-Z][^*]+?){3,})(?=\n\s*(?:Introduction|INTRODUCTION))/is,

    // Pattern: ABSTRACT all caps
    /ABSTRACT\s+((?:[A-Z][^*]+?){3,})(?=\n\s*(?:INTRODUCTION|KEYWORDS?|KEY WORDS))/is,

    // Nature Communications style
    /Abstract\s+((?:[A-Z][^*]+?){3,})(?=\n\s*Introduction)/is,

    // Theoretical Ecology / Oecologia style
    /Abstract\s+([^*]+?)(?=\n\s*(?:Electronic supplementary|Keywords?))/is,
  ];

  for (let i = 0; i < patterns.length; i++) {
    const match = normalizedText.match(patterns[i]);
    if (match && match[1]) {
      let abstract = match[1]
        .replace(/\s+/g, ' ')  // Normalize whitespace
        .replace(/- /g, '')    // Remove hyphenation
        .replace(/^\s*\.?\s*/, '') // Remove leading dots/spaces
        .replace(/\s*\*.*$/, '') // Remove anything after asterisk
        .trim();

      // Skip if too short (likely false positive) or too long
      if (abstract.length > 100 && abstract.length < 3000) {
        // Truncate if too long
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
  return files.find(f => f.includes(pattern) && f.endsWith('.pdf'))
    ? path.join(PDF_DIR, files.find(f => f.includes(pattern) && f.endsWith('.pdf')))
    : null;
}

async function processPdf(pdfPath) {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    return extractAbstract(data.text);
  } catch (err) {
    console.error(`Error processing ${pdfPath}: ${err.message}`);
    return null;
  }
}

async function main() {
  console.log('Extracting abstracts from PDFs (V3)...\n');

  const results = [];

  for (const pub of MISSING_ABSTRACTS) {
    const pdfPath = await findPdfFile(pub.pdfPattern);

    if (!pdfPath) {
      console.log(`[SKIP] ID ${pub.id}: No PDF found for pattern "${pub.pdfPattern}"`);
      results.push({ id: pub.id, title: pub.title, abstract: null, error: 'PDF not found' });
      continue;
    }

    console.log(`[PROC] ID ${pub.id}: ${path.basename(pdfPath)}`);
    const abstract = await processPdf(pdfPath);

    if (abstract) {
      console.log(`  -> Found abstract (${abstract.length} chars)`);
      results.push({ id: pub.id, title: pub.title, abstract });
    } else {
      console.log(`  -> No abstract found`);
      results.push({ id: pub.id, title: pub.title, abstract: null, error: 'Could not extract' });
    }
  }

  // Output results as JSON
  const outputPath = path.join(__dirname, '..', 'data', 'extracted-abstracts-v3.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\nResults saved to: ${outputPath}`);

  // Summary
  const found = results.filter(r => r.abstract).length;
  console.log(`\nSummary: ${found}/${results.length} abstracts extracted`);
}

main().catch(console.error);
