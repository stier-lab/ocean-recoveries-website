const fs = require('fs');

// Fix remaining duplicates
const reassignments = {
  // scuba-divers-shark-deep-blue.JPG (2 uses) - keep for #11 (carnivore recoveries)
  "39": "/images/blacktip-reef-shark-swimming.jpg",  // synchronized recovery - shark focus

  // lobster.jpeg (2 uses) - keep for #12 (spillover)
  "20": "/images/lobster-in-underwater-trap-cage.jpeg",  // MPA spillover - lobster in trap

  // researcher-on-boat-ocean-fieldwork.jpg (2 uses) - keep for #24 (climate policy)
  "16": "/images/research-team-boats-turquoise-lagoon.webp",  // monitoring thresholds - research team

  // trapezia-coral-crab-red-spotted.jpg (2 uses) - keep for #3 (coral resilience)
  "46": "/images/coral-guard-crab-red-spotted-macro.jpeg",  // mutualism context - macro crab shot

  // blue-green-chromis-coral-school.JPG (2 uses) - keep for #58 (predator timing)
  "36": "/images/damselfish-pair-pink-coral.jpeg",  // priority effects - damselfish pair

  // fishing-harbor-marina-mountains.JPG (2 uses) - keep for #37 (stakeholder participation)
  "50": "/images/norht-sea-fishing.jpeg",  // herring trade-offs - fishing vessel

  // fishing-boat-seagulls-rocky-coast.jpeg (2 uses) - keep for #77 (course corrections)
  "40": "/images/pacific-herring-net.jpeg",  // expert perceptions on herring - herring net

  // blacktip-reef-sharks-split-view-island.jpeg (2 uses) - keep for #45 (apex predator context)
  "41": "/images/barracuda-school-underwater-blue.jpg",  // predation gauntlet - schooling predators

  // damselfish-single-coral-closeup.jpeg (2 uses) - keep for #42 (hawkfish/chromis)
  "70": "/images/chromis-acropora.jpeg",  // propagule redirection - Dascyllus species
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
