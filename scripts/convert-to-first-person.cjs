#!/usr/bin/env node

/**
 * Script to convert all essays from third-person to first-person plural
 */

const fs = require('fs');
const path = require('path');

const analyzedDir = './publications/analyzed';

// Get all analysis files
const files = fs.readdirSync(analyzedDir)
  .filter(f => f.endsWith('.json'))
  .sort((a, b) => parseInt(a) - parseInt(b));

let updatedCount = 0;

files.forEach(filename => {
  const filePath = path.join(analyzedDir, filename);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  let essay = data.analysis?.essay || '';

  // Skip if already first-person
  if (essay.match(/^Our |^We /)) {
    return;
  }

  // Extract authors from the paper
  const authors = data.authors || '';
  const authorList = authors.split(';').map(a => a.trim().split(',')[0].trim());
  const firstAuthor = authorList[0] || 'The researchers';

  // Common third-person to first-person conversions
  const replacements = [
    // Starting phrases
    [/^(A comprehensive review|A global analysis|An analysis|A meta-analysis|Research|Scientists|Researchers|The research team|The team|A study|This study|The study|In a study)/i, 'Our research'],
    [/^(Understanding|Examining|Investigating|Exploring|Analyzing)/i, 'We examined'],

    // "The researchers" → "We"
    [/The research(?:ers|er| team)/gi, 'We'],
    [/The team/gi, 'We'],
    [/The scientists/gi, 'We'],
    [/The authors/gi, 'We'],

    // "researchers found" → "we found"
    [/researchers (found|discovered|revealed|showed|demonstrated|documented|identified|analyzed|examined|tested|built|used|compiled|assembled|created|developed|tracked|measured|surveyed|conducted|ran|performed)/gi, 'we $1'],

    // "Their analysis" → "Our analysis"
    [/Their (analysis|research|findings|results|study|data|models|framework|work|experiments|observations|conclusions)/gi, 'Our $1'],

    // "The study found" → "We found"
    [/The study (found|revealed|showed|demonstrated|discovered)/gi, 'We $1'],

    // "This research" → "Our research"
    [/This research/gi, 'Our research'],
    [/This study/gi, 'Our study'],
    [/This work/gi, 'Our work'],

    // By author name patterns
    [new RegExp(`research by ${firstAuthor}[^,]*, [^,]*, [^,]*, [^,]*, and [^,]* (found|revealed|shows|demonstrates)`, 'gi'), 'our research $1'],
    [new RegExp(`${firstAuthor} and colleagues (found|discovered|showed|demonstrated|revealed)`, 'gi'), 'we $1'],
    [new RegExp(`${firstAuthor} et al\\.? (found|discovered|showed|demonstrated|revealed)`, 'gi'), 'we $1'],

    // Convert passive "was found" to active "we found"
    [/It was (found|discovered|revealed|shown|demonstrated) that/gi, 'We found that'],

    // "The findings suggest" → "Our findings suggest"
    [/The findings (suggest|show|reveal|demonstrate|indicate)/gi, 'Our findings $1'],
    [/The results (suggest|show|reveal|demonstrate|indicate)/gi, 'Our results $1'],

    // "leads to understanding" → "helps us understand"
    [/This (helps|allows|enables) (researchers|scientists|us) to/gi, 'This helps us'],

    // Clean up double spaces
    [/  +/g, ' '],
  ];

  let newEssay = essay;
  replacements.forEach(([pattern, replacement]) => {
    newEssay = newEssay.replace(pattern, replacement);
  });

  // Only update if changes were made
  if (newEssay !== essay) {
    data.analysis.essay = newEssay;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    updatedCount++;
    console.log(`Updated: ${filename}`);
  }
});

console.log(`\nTotal files updated: ${updatedCount}`);
