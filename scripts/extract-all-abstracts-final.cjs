#!/usr/bin/env node
/**
 * Final extraction script with specific handling for each PDF format.
 */

const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const PDF_DIR = path.join(__dirname, '..', 'publications', 'Lab Publications');

async function getPdfText(filename) {
  const pdfPath = path.join(PDF_DIR, filename);
  if (!fs.existsSync(pdfPath)) return null;
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdf(dataBuffer);
  return data.text;
}

async function main() {
  const results = {};

  // ID 1: Stier et al. (Coral Reefs) 2025
  const text1 = await getPdfText('Stier et al. (Coral Reefs) 2025.pdf');
  if (text1) {
    const match = text1.match(/Abstract\s+(On coral reefs[\s\S]+?)(?=\n\s*\*\s*Adrian)/i);
    if (match) results['1'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').trim();
  }

  // ID 2 & 3: Current Biology Magazine format - Q&A primer, no traditional abstract
  // These are intentionally skipped as they don't have abstracts

  // ID 5: Curtis et al. (Coral Reefs) 2023
  const text5 = await getPdfText('Curtis et al. (Coral Reefs) 2023.pdf');
  if (text5) {
    const match = text5.match(/Abstract\s*(Photogrammetry[\s\S]+?)(?=Supplementary|Keywords?)/i);
    if (match) results['5'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').trim();
  }

  // ID 35: Hamman et al. Theoretical Ecology
  const text35 = await getPdfText('Hamman et al. Theoretical Ecology) 2017.pdf');
  if (text35) {
    const match = text35.match(/Abstract\s*(Variation in the density[\s\S]+?)(?=Keywords)/i);
    if (match) results['35'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').trim();
  }

  // ID 38: Samhouri et al. (NEE) 2017 - Nature format, no explicit Abstract header
  const text38 = await getPdfText('Samhouri et al. (NEE) 2017.pdf');
  if (text38) {
    // Handle curly apostrophe
    const match = text38.match(/(One of the twenty-first century[\u2019']s greatest[\s\S]+?human well-being\.)/i);
    if (match) results['38'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').trim();
  }

  // ID 40: Stier et al (Coral Reefs) 2017
  const text40 = await getPdfText('Stier et al (Coral Reefs) 2017.pdf');
  if (text40) {
    const match = text40.match(/Abstract\s*(The ubiquity[\s\S]+?)(?=Keywords)/i);
    if (match) results['40'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').trim();
  }

  // ID 41: Geange et al. (Coral Reefs) 2016
  const text41 = await getPdfText('Geange et al. (Coral Reefs) 2016.pdf');
  if (text41) {
    const match = text41.match(/Abstract\s*(The\s+sequence[\s\S]+?)(?=Keywords)/i);
    if (match) results['41'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').trim();
  }

  // ID 52: Nature Communications - special format
  const text52 = await getPdfText('Stier Hein et al. (Nature Communications) 2014.pdf');
  if (text52) {
    const match = text52.match(/(Top predators are a critical[\s\S]+?trophic structure\.)/i);
    if (match) results['52'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').trim();
  }

  // ID 54: Stier and Leray (Coral Reefs) 2014
  const text54 = await getPdfText('Stier and Leray (Coral Reefs) 2014.pdf');
  if (text54) {
    const match = text54.match(/Abstract\s*(Coral reefs are the most[\s\S]+?)(?=Keywords)/i);
    if (match) results['54'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').trim();
  }

  // ID 55: Stier and White (Coral Reefs) 2014
  const text55 = await getPdfText('Stier and White (Coral Reefs) 2014.pdf');
  if (text55) {
    const match = text55.match(/Abstract\s*(Predation is a key[\s\S]+?)(?=Keywords)/i);
    if (match) results['55'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').trim();
  }

  // ID 61: McKeon et al. (Oecologia) 2012
  const text61 = await getPdfText('McKeon et al. (Oecologia) 2012.pdf');
  if (text61) {
    const match = text61.match(/Abstract\s*(The majority[\s\S]+?)(?=Keywords)/i);
    if (match) results['61'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').trim();
  }

  // ID 67: Stier et al. (Coral Reefs) 2010 - handle "AbstractStony" without space
  const text67 = await getPdfText('Stier et al. (Coral Reefs) 2010.pdf');
  if (text67) {
    const match = text67.match(/Abstract\s*(Stony[\s\S]+?)(?=Keywords)/i);
    if (match) results['67'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').replace(/\x02/g, ' ').trim();
  }

  // ID 69: Geange & Stier (Oecologia) 2010
  const text69 = await getPdfText('Geange & Stier (Oecologia) 2010.pdf');
  if (text69) {
    const match = text69.match(/Abstract\s*(Both habitat[\s\S]+?)(?=Keywords)/i);
    if (match) results['69'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').trim();
  }

  // ID 70: Geange and Stier (Coral Reefs) 2010
  const text70 = await getPdfText('Geange and Stier (Coral Reefs) 2010.pdf');
  if (text70) {
    const match = text70.match(/Abstract\s*(The trophic[\s\S]+?)(?=Keywords)/i);
    if (match) results['70'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').trim();
  }

  // ID 72: Shantz et al. (Coral Reefs) 2011 - handle "AbstractThe" without space
  const text72 = await getPdfText('Shantz et al. (Coral Reefs) 2011.pdf');
  if (text72) {
    const match = text72.match(/Abstract\s*(The\s+influence[\s\S]+?)(?=Keywords)/i);
    if (match) results['72'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').replace(/\x02/g, ' ').trim();
  }

  // ID 74: Boyer et al. (JEMBE) 2009 - special format with "abstractarticle info"
  const text74 = await getPdfText('Boyer et al. (JEMBE) 2009.pdf');
  if (text74) {
    const match = text74.match(/Porites australiensis\s*(Ecological research[\s\S]+?)(?=\n1\.\s*Introduction)/i);
    if (match) results['74'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').trim();
  }

  // ID 75: Stier et al. (Coral Reefs) 2008 - NOTE format, use first paragraph as summary
  const text75 = await getPdfText('Stier et al. (Coral Reefs) 2008.pdf');
  if (text75) {
    const match = text75.match(/(Between January and July 2008, we observed[\s\S]+?normally associate with sea urchins\.)/i);
    if (match) results['75'] = match[1].replace(/\s+/g, ' ').replace(/- /g, '').trim();
  }

  // Save results
  const outputPath = path.join(__dirname, '..', 'data', 'abstracts-complete.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`Extracted ${Object.keys(results).length} abstracts`);
  console.log(`Saved to: ${outputPath}`);

  // Show which ones we got
  console.log('\nExtracted IDs:', Object.keys(results).join(', '));
}

main().catch(console.error);
