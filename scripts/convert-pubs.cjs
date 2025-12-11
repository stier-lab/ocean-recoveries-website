/**
 * Convert Publications CSV to TypeScript
 *
 * USAGE:
 *   node scripts/convert-pubs.cjs
 *
 * HOW TO UPDATE PUBLICATIONS:
 * 1. Export your publications from Zotero/EndNote/etc to CSV
 * 2. Replace publications/pubs_enriched_out.csv with the new file
 * 3. Run: node scripts/convert-pubs.cjs
 * 4. Commit and push - site will rebuild automatically
 *
 * The script will:
 * - Parse all publications from the CSV
 * - Filter to Stier lab publications only
 * - Auto-categorize themes based on title/abstract
 * - Feature top-cited papers automatically
 * - Generate src/data/publications.ts
 */

const fs = require('fs');

// Parse CSV
function parseCSV(text) {
  const lines = text.split('\n');
  const headers = parseCSVLine(lines[0]);
  const results = [];

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const values = parseCSVLine(lines[i]);
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h.trim()] = values[idx] || '';
    });
    results.push(obj);
  }
  return results;
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

const csvText = fs.readFileSync('publications/pubs_enriched_out.csv', 'utf-8');
const pubs = parseCSV(csvText);

// Filter to only publications where Stier is an author
const stierPubs = pubs.filter(p =>
  p.authors && p.authors.toLowerCase().includes('stier')
);

// Sort by year descending, then by citation count
stierPubs.sort((a, b) => {
  const yearDiff = parseFloat(b.year) - parseFloat(a.year);
  if (yearDiff !== 0) return yearDiff;
  return (b.citation_count || 0) - (a.citation_count || 0);
});

console.log('Total Stier publications:', stierPubs.length);

// Map theme tags to consistent naming
function mapThemes(tags) {
  if (!tags || tags.length === 0) return [];
  return tags.map(t => {
    switch(t) {
      case 'Policy/Management': return 'Management';
      case 'Methods/Models': return 'Models';
      case 'Mutualisms': return 'Mutualism';
      default: return t;
    }
  });
}

// Clean author format (Last, First -> First Last for readability)
function formatAuthors(authors) {
  if (!authors) return '';
  // Replace semicolons with commas
  return authors.replace(/;/g, ',').trim();
}

// Clean HTML from title
function cleanTitle(title) {
  if (!title) return '';
  return title.replace(/<\/?i>/g, '').replace(/<\/?b>/g, '').trim();
}

// Get journal from pub data or extract from DOI
function getJournal(pub) {
  // First check if journal is directly available
  if (pub.journal && pub.journal.trim() && pub.journal.trim() !== '') {
    return pub.journal.trim();
  }

  // Fallback: Common journal mappings based on DOI prefixes
  const doi = pub.doi || '';
  if (doi.includes('gcb.')) return 'Global Change Biology';
  if (doi.includes('ele.')) return 'Ecology Letters';
  if (doi.includes('ecy.')) return 'Ecology';
  if (doi.includes('cobi.')) return 'Conservation Biology';
  if (doi.includes('fmars.')) return 'Frontiers in Marine Science';
  if (doi.includes('s41559')) return 'Nature Ecology & Evolution';
  if (doi.includes('s41586')) return 'Nature';
  if (doi.includes('rspb.')) return 'Proceedings of the Royal Society B';
  if (doi.includes('meps')) return 'Marine Ecology Progress Series';
  if (doi.includes('s00338')) return 'Coral Reefs';
  if (doi.includes('jembe.')) return 'Journal of Experimental Marine Biology and Ecology';
  if (doi.includes('marpol.')) return 'Marine Policy';
  if (doi.includes('lno.')) return 'Limnology and Oceanography';
  if (doi.includes('10.1890')) return 'Ecological Applications';
  if (doi.includes('oecologia')) return 'Oecologia';
  if (doi.includes('icb')) return 'Integrative and Comparative Biology';
  if (doi.includes('pone.')) return 'PLoS ONE';
  if (doi.includes('peerj.')) return 'PeerJ';
  if (doi.includes('ecosphere')) return 'Ecosphere';
  if (doi.includes('aqua')) return 'Aquatic Sciences';
  if (doi.includes('cris')) return 'Reviews in Fisheries Science';
  if (doi.includes('fish')) return 'Fish and Fisheries';
  if (doi.includes('cub.')) return 'Current Biology';

  // Default
  return 'Scientific Journal';
}

// Generate TypeScript output
let output = `export interface Publication {
  id: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  doi?: string;
  abstract?: string;
  themes: string[];
  featured?: boolean;
  openAccess?: boolean;
  dataAvailable?: boolean;
  pdfUrl?: string;
  codeUrl?: string;
  citationCount?: number;
}

export const publications: Publication[] = [
`;

// Mark highly-cited recent papers as featured
const featuredDois = new Set();
const recentHighCited = stierPubs
  .filter(p => parseFloat(p.year) >= 2020 && (parseInt(p.citation_count) || 0) >= 20)
  .slice(0, 5);
recentHighCited.forEach(p => featuredDois.add(p.doi));

// Also feature papers with high citation counts (top classics)
const classics = stierPubs
  .filter(p => (parseInt(p.citation_count) || 0) >= 100)
  .slice(0, 5);
classics.forEach(p => featuredDois.add(p.doi));

stierPubs.forEach((pub, i) => {
  const year = Math.floor(parseFloat(pub.year));
  if (isNaN(year) || year < 1990) return; // Skip invalid years

  // Get themes from theme_tags column - split by both comma and semicolon
  let themes = [];
  if (pub.theme_tags) {
    themes = pub.theme_tags.split(/[,;]/).map(t => t.trim()).filter(t => t);
    themes = mapThemes(themes);
    // Remove duplicates
    themes = [...new Set(themes)];
  }
  if (themes.length === 0) themes = ['Research'];

  const featured = featuredDois.has(pub.doi);

  // Get abstract from plain_summary or abstract column
  const abstract = pub.plain_summary || pub.abstract || '';
  const cleanAbstract = abstract.replace(/^Abstract\s*/i, '').trim();

  // Check open_access - can be TRUE/FALSE string or boolean
  const isOpenAccess = pub.open_access === 'TRUE' || pub.open_access === true || pub.open_access === 'true';

  output += `  {
    id: '${i + 1}',
    title: ${JSON.stringify(cleanTitle(pub.title))},
    authors: ${JSON.stringify(formatAuthors(pub.authors))},
    year: ${year},
    journal: ${JSON.stringify(getJournal(pub))},
    doi: ${pub.doi ? JSON.stringify(pub.doi) : 'undefined'},
    abstract: ${cleanAbstract ? JSON.stringify(cleanAbstract.substring(0, 500)) : 'undefined'},
    themes: ${JSON.stringify(themes)},
    featured: ${featured},
    openAccess: ${isOpenAccess},
    dataAvailable: ${!!(pub.data_code_links && pub.data_code_links.trim())},
    citationCount: ${parseInt(pub.citation_count) || 0},
  },
`;
});

output += `];

// Get unique themes
export const allThemes = [...new Set(publications.flatMap((p) => p.themes))].sort();

// Get year range
export const yearRange = {
  min: Math.min(...publications.map((p) => p.year)),
  max: Math.max(...publications.map((p) => p.year)),
};
`;

fs.writeFileSync('src/data/publications.ts', output);
console.log('Written', stierPubs.length, 'publications to src/data/publications.ts');
