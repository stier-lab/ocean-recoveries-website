#!/usr/bin/env node
/**
 * Extract abstracts from PDFs using multiple strategies.
 * V2: Handle different journal formats better.
 */

const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const PUBS = [
  { id: '1', pdf: 'Stier et al. (Coral Reefs) 2025.pdf' },
  { id: '2', pdf: 'Stier and Osenberg  (Current Biology) 2024.pdf', type: 'currentbiology-magazine' },
  { id: '3', pdf: 'Stier and Osenberg (Current Biology) 2024 II.pdf', type: 'currentbiology-magazine' },
  { id: '5', pdf: 'Curtis et al. (Coral Reefs) 2023.pdf' },
  { id: '35', pdf: 'Hamman et al. Theoretical Ecology) 2017.pdf' },
  { id: '38', pdf: 'Samhouri et al. (NEE) 2017.pdf' },
  { id: '40', pdf: 'Stier et al (Coral Reefs) 2017.pdf' },
  { id: '41', pdf: 'Geange et al. (Coral Reefs) 2016.pdf' },
  { id: '52', pdf: 'Stier Hein et al. (Nature Communications) 2014.pdf', type: 'nature' },
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

function extractAbstract(text, type = 'standard') {
  // Handle Nature Communications format (no explicit Abstract header)
  if (type === 'nature') {
    // Look for the text after title and before DOI/affiliations end, then before main body
    const match = text.match(/DOI:[^\n]+\n[^\n]*\n([A-Z][^.]+\.[^.]+\.[^.]+\.[^.]+\.)/);
    if (match && match[1] && match[1].length > 100) {
      return match[1].replace(/\s+/g, ' ').trim();
    }
    // Alternative: look for italicized summary text after affiliations
    const altMatch = text.match(/www\.nature\.com[^\n]+\n+([A-Z][\s\S]{200,1500}?)(?=\n+[A-Z])/);
    if (altMatch && altMatch[1]) {
      return altMatch[1].replace(/\s+/g, ' ').trim();
    }
    return null;
  }

  // Handle Current Biology Magazine format (no abstract, just Q&A format)
  if (type === 'currentbiology-magazine') {
    // These are Q&A/primer articles without traditional abstracts
    // Look for the first paragraph after the title
    const match = text.match(/Coral guard crabs\n([^?]+\?)/);
    if (match) {
      return null; // Q&A format, no abstract
    }
    return null;
  }

  // Standard extraction for most journals
  // Find the Abstract section (handle "AbstractText" without space)
  let abstractMatch = text.match(/Abstract\s*([A-Z][\s\S]+?)(?=Keywords?\b|Introduction\b|INTRODUCTION\b|Background\b|\n\s*\*\s*[A-Z]|\n\s*1\s+Department|\nReceived:)/i);

  if (abstractMatch && abstractMatch[1]) {
    let abstract = abstractMatch[1]
      .replace(/\s+/g, ' ')
      .replace(/- /g, '')
      .trim();

    if (abstract.length > 100 && abstract.length < 2500) {
      return abstract;
    }
  }

  // Fallback: look for text between Abstract marker and common end patterns
  const abstractIdx = text.search(/Abstract/i);
  if (abstractIdx !== -1) {
    const content = text.substring(abstractIdx + 8);
    const endPatterns = [
      /Keywords?\s*[:\s]/i,
      /\nIntroduction\b/i,
      /\n\*\s*[A-Z]/,
      /\nReceived:/i,
      /\n1\s+[A-Z]/,
    ];

    let endIdx = content.length;
    for (const pattern of endPatterns) {
      const match = content.match(pattern);
      if (match && match.index < endIdx) {
        endIdx = match.index;
      }
    }

    if (endIdx > 100) {
      let abstract = content.substring(0, endIdx)
        .replace(/\s+/g, ' ')
        .replace(/- /g, '')
        .trim();

      if (abstract.length > 100 && abstract.length < 2500) {
        return abstract;
      }
    }
  }

  return null;
}

async function processPdf(pdfPath, type) {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    return extractAbstract(data.text, type);
  } catch (err) {
    return null;
  }
}

async function main() {
  console.log('Extracting abstracts (V2)...\n');
  const results = {};

  for (const pub of PUBS) {
    const pdfPath = path.join(PDF_DIR, pub.pdf);
    if (!fs.existsSync(pdfPath)) {
      console.log(`[SKIP] ID ${pub.id}: File not found - ${pub.pdf}`);
      continue;
    }

    const abstract = await processPdf(pdfPath, pub.type || 'standard');
    if (abstract) {
      console.log(`[OK] ID ${pub.id}: ${abstract.length} chars`);
      results[pub.id] = abstract;
    } else {
      console.log(`[FAIL] ID ${pub.id}: Could not extract`);
    }
  }

  // Save results
  const outputPath = path.join(__dirname, '..', 'data', 'abstracts-final-v2.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`\nExtracted ${Object.keys(results).length}/${PUBS.length} abstracts`);
  console.log(`Saved to: ${outputPath}`);
}

main().catch(console.error);
