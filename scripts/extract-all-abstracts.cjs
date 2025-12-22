#!/usr/bin/env node
/**
 * Extract abstracts from PDFs using multiple strategies.
 */

const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const PUBS = [
  { id: '1', pdf: 'Stier et al. (Coral Reefs) 2025.pdf' },
  { id: '2', pdf: 'Stier and Osenberg  (Current Biology) 2024.pdf' },
  { id: '3', pdf: 'Stier and Osenberg (Current Biology) 2024 II.pdf' },
  { id: '5', pdf: 'Curtis et al. (Coral Reefs) 2023.pdf' },
  { id: '35', pdf: 'Hamman et al. Theoretical Ecology) 2017.pdf' },
  { id: '38', pdf: 'Samhouri et al. (NEE) 2017.pdf' },
  { id: '40', pdf: 'Stier et al (Coral Reefs) 2017.pdf' },
  { id: '41', pdf: 'Geange et al. (Coral Reefs) 2016.pdf' },
  { id: '52', pdf: 'Stier Hein et al. (Nature Communications) 2014.pdf' },
  { id: '54', pdf: 'Stier and Leray (Coral Reefs) 2014.pdf' },
  { id: '55', pdf: 'Stier and White (Coral Reefs) 2014.pdf' },
  { id: '61', pdf: 'McKeon et al. (Oecologia) 2012.pdf' },
  { id: '67', pdf: 'Stier et al. (Coral Reefs) 2010.pdf' },
  { id: '69', pdf: 'Geange & Stier (Oecologia) 2010.pdf' },
  { id: '70', pdf: 'Geange and Stier (Coral Reefs) 2010.pdf' },
  { id: '72', pdf: 'Shantz et al. (Coral Reefs) 2011.pdf' },
  { id: '74', pdf: 'Boyer et al. (JEMBE) 2009.pdf' },
  { id: '75', pdf: 'Stier et al. (Coral Reefs) 2008.pdf' },
];

const PDF_DIR = path.join(__dirname, '..', 'publications', 'Lab Publications');

function extractAbstract(text) {
  // Find the Abstract section
  const abstractIdx = text.search(/\bAbstract\b/i);
  if (abstractIdx === -1) return null;

  // Get text starting from Abstract
  let content = text.substring(abstractIdx + 8);

  // Look for various end markers
  const endMarkers = [
    /\n\s*\*\s*[A-Z][a-z]+\s+[A-Z]/,  // Author line starting with *
    /\n\s*1\s*Department/i,             // Department affiliation
    /\n\s*Introduction\b/i,
    /\n\s*INTRODUCTION\b/,
    /\n\s*Background\b/i,
    /\n\s*Results?\b/i,
    /\n\s*Methods?\b/i,
    /\n\s*Materials and Methods/i,
    /\n\s*Correspondence/i,
    /\n\s*Electronic supplementary/i,
    /\n\s*\[1\]/,                        // Reference marker
    /\n\s*Received:/i,
  ];

  let endIdx = content.length;
  for (const marker of endMarkers) {
    const match = content.match(marker);
    if (match && match.index < endIdx) {
      endIdx = match.index;
    }
  }

  let abstract = content.substring(0, endIdx).trim();

  // Clean up
  abstract = abstract
    .replace(/\s+/g, ' ')
    .replace(/- /g, '')
    .replace(/\s*\*\s*$/, '')
    .trim();

  // Validate length
  if (abstract.length > 100 && abstract.length < 2500) {
    return abstract;
  }

  return null;
}

async function processPdf(pdfPath) {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    return extractAbstract(data.text);
  } catch (err) {
    return null;
  }
}

async function main() {
  console.log('Extracting abstracts...\n');
  const results = {};

  for (const pub of PUBS) {
    const pdfPath = path.join(PDF_DIR, pub.pdf);
    if (!fs.existsSync(pdfPath)) {
      console.log(`[SKIP] ID ${pub.id}: File not found - ${pub.pdf}`);
      continue;
    }

    const abstract = await processPdf(pdfPath);
    if (abstract) {
      console.log(`[OK] ID ${pub.id}: ${abstract.length} chars`);
      results[pub.id] = abstract;
    } else {
      console.log(`[FAIL] ID ${pub.id}: Could not extract`);
    }
  }

  // Save results
  const outputPath = path.join(__dirname, '..', 'data', 'abstracts-final.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`\nExtracted ${Object.keys(results).length}/${PUBS.length} abstracts`);
  console.log(`Saved to: ${outputPath}`);
}

main().catch(console.error);
