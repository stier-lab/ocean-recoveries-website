const fs = require('fs');

// Final 4 duplicates
const reassignments = {
  // scuba-divers-shark-deep-blue.JPG - keep for #11 (carnivore recoveries)
  "41": "/images/stingrays-group-sandy-bottom.JPG",  // predation gauntlet - benthic predators

  // overwater-bungalows-split-view-reef-fish.jpeg - keep for #65 (Porites coral density)
  "36": "/images/rock-crab-kelp-tidepool.jpg",  // priority effects colonization - habitat complexity

  // manta-ray-silhouette-underwater.JPG - keep for #60 (multiple predators)
  "39": "/images/manta.jpg",  // synchronized recovery - different manta shot

  // fishing-boat-seagulls-rocky-coast.jpeg - keep for #40 (expert perceptions herring)
  "77": "/images/hurricane-earth-from-space.jpeg",  // climate course corrections - climate/storm
};

// Apply reassignments
let count = 0;
for (const [id, newImage] of Object.entries(reassignments)) {
  const filePath = `./publications/analyzed/${id}-analysis.json`;

  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const oldImage = data.featuredImage;

  if (oldImage === newImage) {
    console.log(`${id}: Already set to ${newImage}`);
    continue;
  }

  data.featuredImage = newImage;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log(`${id}: ${oldImage.replace('/images/', '')} → ${newImage.replace('/images/', '')}`);
  count++;
}

console.log(`\nReassigned ${count} images.`);
