/**
 * Update Manual Image Assignments
 *
 * This script updates the featuredImage field in analysis JSON files
 * for publications that were manually assigned specific images.
 */

const fs = require('fs');
const path = require('path');

const analyzedDir = './publications/analyzed';

// Manual image assignments from conversation history
// Format: { analysisFile: newImage }
const manualAssignments = {
  // 1. Big cat article (Only 3% of World's Large Predators)
  '11-analysis.json': '/images/CheetahFam-1.jpg',

  // 2. Remote Coral Reefs article
  '9-analysis.json': '/images/tropical-island-split-view-coral-reef-shark.jpeg',

  // 3. Lionfish article
  '22-analysis.json': '/images/lionfish-soft-coral.jpeg',

  // 4. Teal Deal article
  '24-analysis.json': '/images/offshore-wind-farm.jpeg',

  // 5. Wilson Landscape of Fear article
  '28-analysis.json': '/images/coyote-road.jpeg',

  // 6. Ingeman Moving Targets article
  '30-analysis.json': '/images/whale-ship.jpeg',

  // 7. Geange 2009 First Come First Served
  '74-analysis.json': '/images/wrasse-6bar.jpeg',

  // 8. Geange 2017 Size Doesn't Always Matter
  '42-analysis.json': '/images/ambon-damselfish.jpeg',

  // 9. Samhouri CA Current Early Warning
  '38-analysis.json': '/images/ca-sealion.jpeg',

  // 10. Samhouri Predator-Prey Together
  '39-analysis.json': '/images/orca-pod.jpeg',

  // 11. Traditional Knowledge article
  '40-analysis.json': '/images/whale-eating-herring.jpeg',

  // 12. Reef Predators grouper article
  '41-analysis.json': '/images/grouper.jpeg',

  // 13. Sampling Bias article
  '44-analysis.json': '/images/fish-biodiversity.jpeg',

  // 14. Tree Genes Fish Pond Rudman
  '47-analysis.json': '/images/stickleback.jpeg',

  // 15. Crown of Thorns / Coral Housekeepers
  '63-analysis.json': '/images/crown-of-thorns.jpeg',

  // 16. Geange 2013 Pecking Order wrasse
  '57-analysis.json': '/images/fivestripewrasse.jpeg',

  // 17. Timing Is Everything hawkfish
  '58-analysis.json': '/images/hawkfish-on-coral.jpeg',
};

console.log('Updating manual image assignments...\n');

let updated = 0;
let errors = 0;

for (const [filename, newImage] of Object.entries(manualAssignments)) {
  const filePath = path.join(analyzedDir, filename);

  if (!fs.existsSync(filePath)) {
    console.error(`ERROR: File not found: ${filename}`);
    errors++;
    continue;
  }

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const oldImage = data.featuredImage || '(none)';

    // Update the image
    data.featuredImage = newImage;

    // Write back
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    console.log(`[UPDATED] ${filename}`);
    console.log(`  Old: ${oldImage}`);
    console.log(`  New: ${newImage}`);
    console.log(`  Title: ${(data.analysis?.newsHeadline || data.title).substring(0, 60)}...`);
    console.log('');

    updated++;
  } catch (e) {
    console.error(`ERROR processing ${filename}: ${e.message}`);
    errors++;
  }
}

console.log('=== SUMMARY ===');
console.log(`Updated: ${updated}`);
console.log(`Errors: ${errors}`);
console.log(`Total assignments: ${Object.keys(manualAssignments).length}`);
