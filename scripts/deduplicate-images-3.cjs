const fs = require('fs');

// Final round - use remaining unused images
const reassignments = {
  // chromis-acropora.jpeg - keep for #1 (fish services - chromis focus)
  "70": "/images/research-team-group-photo-beach.jpeg",  // propagule redirection - field research

  // damselfish-pair-pink-coral.jpeg - keep for #10 (fertilization by coral fish)
  "36": "/images/overwater-bungalows-split-view-reef-fish.jpeg",  // priority effects - reef fish scene

  // norht-sea-fishing.jpeg - keep for #15 (North Sea regime shifts)
  "50": "/images/dungeness-crab-beach-closeup.jpeg",  // herring trade-offs - fishery species (crab)

  // research-team-boats-turquoise-lagoon.webp - keep for #9 (remoteness/resilience)
  "16": "/images/rocky-beach-cove-panorama.jpeg",  // monitoring thresholds - coastal scene

  // lobster-in-underwater-trap-cage.jpeg - keep for #6 (lobster-urchin body size)
  "20": "/images/california-coastline-rocky-shore.jpg",  // MPA spillover California - CA coast

  // pacific-herring-net.jpeg - keep for #26 (metapopulation)
  "40": "/images/fishing-boat-seagulls-rocky-coast.jpeg",  // expert perceptions - fishing community

  // blacktip-reef-shark-swimming.jpg - keep for #56 (Galapagos shark fishing)
  "39": "/images/manta-ray-silhouette-underwater.JPG",  // synchronized recovery - marine predator

  // barracuda-school-underwater-blue.jpg - keep for #76 (density-dependent mortality)
  "41": "/images/scuba-divers-shark-deep-blue.JPG",  // predation gauntlet - shark predation

  // coral-guard-crab-red-spotted-macro.jpeg - keep for #71 (guard crabs/vermetids)
  "46": "/images/CheetahFam-1.jpg",  // mutualism context - has ants/acacias (terrestrial mutualism)
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
