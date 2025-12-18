/**
 * Assign Unique Featured Images to Publications
 *
 * This script assigns a unique image to each publication based on its themes/content.
 * Each image is used only once across all publications.
 * Uses the image database (data/image-database.json) for intelligent matching.
 *
 * USAGE:
 *   node scripts/assign-publication-images.cjs
 *   node scripts/assign-publication-images.cjs --dry-run  # Preview without saving
 */

const fs = require('fs');
const path = require('path');

const analyzedDir = './publications/analyzed';
const imageDbPath = './data/image-database.json';
const isDryRun = process.argv.includes('--dry-run');

// Load image database
if (!fs.existsSync(imageDbPath)) {
  console.error('Image database not found:', imageDbPath);
  process.exit(1);
}

const imageDb = JSON.parse(fs.readFileSync(imageDbPath, 'utf-8'));
console.log(`Loaded image database with ${imageDb.images.length} images`);

// Get content string from analysis for matching
function getContentString(analysis) {
  const parts = [
    analysis.title || '',
    analysis.analysis?.summary || '',
    analysis.analysis?.newsHeadline || '',
    analysis.analysis?.whyItMatters || '',
    analysis.analysis?.location || '',
    analysis.analysis?.species || '',
    ...(analysis.analysis?.themes || []),
    ...(analysis.analysis?.keyFindings || []),
  ];
  return parts.join(' ').toLowerCase();
}

// Score how well an image matches a publication
function scoreImageMatch(image, contentString) {
  let score = 0;

  // Check species matches (highest weight)
  for (const species of image.species || []) {
    if (contentString.includes(species.toLowerCase())) {
      score += 10;
    }
  }

  // Check theme matches (high weight)
  for (const theme of image.themes || []) {
    if (contentString.includes(theme.toLowerCase())) {
      score += 5;
    }
  }

  // Check habitat matches (medium weight)
  for (const habitat of image.habitat || []) {
    if (contentString.includes(habitat.toLowerCase())) {
      score += 3;
    }
  }

  // Check location matches (lower weight)
  if (image.location && contentString.includes(image.location.toLowerCase())) {
    score += 2;
  }

  // Check description keywords
  const descWords = (image.description || '').toLowerCase().split(/\s+/);
  for (const word of descWords) {
    if (word.length > 4 && contentString.includes(word)) {
      score += 1;
    }
  }

  return score;
}

// Find best matching image for a publication
function findBestImage(analysis, availableImages, usedImages) {
  const content = getContentString(analysis);

  // Score all available images
  const scoredImages = availableImages
    .filter(img => !usedImages.has(img.filename))
    .map(img => ({
      image: img,
      score: scoreImageMatch(img, content)
    }))
    .sort((a, b) => b.score - a.score);

  if (scoredImages.length === 0) {
    return null;
  }

  // Return highest scoring image (or random from top scorers if tie)
  const topScore = scoredImages[0].score;
  const topImages = scoredImages.filter(s => s.score === topScore);

  // If there are multiple top-scoring images, prefer the first one
  return topImages[0].image;
}

// Main execution
const availableImages = imageDb.images;
console.log(`${availableImages.length} images available for assignment`);

// Read all analysis files
const analysisFiles = fs.readdirSync(analyzedDir)
  .filter(f => f.endsWith('-analysis.json'))
  .sort((a, b) => {
    const idA = parseInt(a.split('-')[0]);
    const idB = parseInt(b.split('-')[0]);
    return idA - idB;
  });

console.log(`Found ${analysisFiles.length} publication analysis files\n`);

// Track used images to prevent duplicates
const usedImages = new Set();
const assignments = [];

// First pass: check for existing assignments and validate they're still valid
console.log('=== CHECKING EXISTING ASSIGNMENTS ===');
for (const file of analysisFiles) {
  const filePath = path.join(analyzedDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  if (data.featuredImage) {
    const imageName = data.featuredImage.replace('/images/', '');

    // Check if image exists in database
    const imageExists = availableImages.some(img => img.filename === imageName);

    if (imageExists && !usedImages.has(imageName)) {
      usedImages.add(imageName);
      console.log(`  [KEEP] ${file}: ${imageName}`);
      assignments.push({
        file,
        id: data.publicationId,
        title: (data.analysis?.newsHeadline || data.title).substring(0, 60),
        image: data.featuredImage,
        status: 'existing',
        score: 'N/A'
      });
    } else if (usedImages.has(imageName)) {
      console.log(`  [DUPLICATE] ${file}: ${imageName} - will reassign`);
      // Don't add to assignments - will be reassigned
    } else {
      console.log(`  [INVALID] ${file}: ${imageName} - not in database, will reassign`);
      // Don't add to assignments - will be reassigned
    }
  }
}

// Second pass: assign images to publications that need one
console.log('\n=== ASSIGNING NEW IMAGES ===');
for (const file of analysisFiles) {
  const filePath = path.join(analyzedDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Skip if already assigned
  if (assignments.some(a => a.file === file)) {
    continue;
  }

  // Find best matching image
  const bestMatch = findBestImage(data, availableImages, usedImages);

  if (bestMatch) {
    usedImages.add(bestMatch.filename);
    const imagePath = `/images/${bestMatch.filename}`;
    const score = scoreImageMatch(bestMatch, getContentString(data));

    assignments.push({
      file,
      id: data.publicationId,
      title: (data.analysis?.newsHeadline || data.title).substring(0, 60),
      image: imagePath,
      status: 'new',
      score: score,
      matchReason: bestMatch.themes?.slice(0, 3).join(', ') || 'general'
    });

    // Update the analysis file
    if (!isDryRun) {
      data.featuredImage = imagePath;
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }

    console.log(`  [NEW] ${file} (score: ${score})`);
    console.log(`         -> ${bestMatch.filename}`);
    console.log(`         Themes: ${bestMatch.themes?.slice(0, 3).join(', ') || 'N/A'}`);
  } else {
    console.error(`  [ERROR] ${file}: No available images!`);
  }
}

// Summary
console.log('\n=== SUMMARY ===');
console.log(`Total publications: ${analysisFiles.length}`);
console.log(`Images kept from before: ${assignments.filter(a => a.status === 'existing').length}`);
console.log(`New images assigned: ${assignments.filter(a => a.status === 'new').length}`);
console.log(`Unique images used: ${usedImages.size}`);
console.log(`Remaining available: ${availableImages.length - usedImages.size}`);

if (isDryRun) {
  console.log('\n[DRY RUN] No files were modified. Run without --dry-run to save changes.');
}

// Verify no duplicates
const imageUsage = {};
for (const assignment of assignments) {
  const img = assignment.image;
  if (!imageUsage[img]) {
    imageUsage[img] = [];
  }
  imageUsage[img].push(assignment.id);
}

const duplicates = Object.entries(imageUsage).filter(([img, ids]) => ids.length > 1);
if (duplicates.length > 0) {
  console.error('\n!!! DUPLICATE IMAGES DETECTED !!!');
  for (const [img, ids] of duplicates) {
    console.error(`  ${img}: used by publications ${ids.join(', ')}`);
  }
  process.exit(1);
} else {
  console.log('\nNo duplicate images - each publication has a unique image.');
}

// Output assignment table
console.log('\n=== ASSIGNMENT TABLE ===');
console.log('ID\tScore\tImage\tTitle');
console.log('-'.repeat(100));
for (const a of assignments.sort((x, y) => parseInt(x.id) - parseInt(y.id))) {
  const shortImage = a.image.replace('/images/', '').substring(0, 35);
  const shortTitle = a.title.substring(0, 40);
  console.log(`${a.id}\t${a.score}\t${shortImage}\t${shortTitle}...`);
}
