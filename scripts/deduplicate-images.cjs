const fs = require('fs');

// Strategy: For each duplicate group, keep the best match and reassign others to unused images

// Reassignment plan based on paper topics and unused images available:
const reassignments = {
  // chromis-acropora.jpeg (2 uses) - keep for #1 (fish services to corals - chromis focus)
  "76": "/images/barracuda-school-underwater-blue.jpg",  // density-dependent mortality in reef fishes - schooling fish

  // scuba-divers-shark-deep-blue.JPG (3 uses) - keep for #11 (large carnivore recoveries - sharks)
  "41": "/images/blacktip-reef-sharks-split-view-island.jpeg",  // predation gauntlet - reef sharks
  "60": "/images/manta-ray-silhouette-underwater.JPG",  // multiple predators - large marine predator

  // kelp-hero.jpeg (2 uses) - keep for #17 (kelp disturbance - foundation species)
  "13": "/images/kelp_canopy.jpg",  // detrital supply/kelp deforestation - kelp canopy view

  // research-team-boats-turquoise-lagoon.webp (2 uses) - keep for #9 (remoteness/coral resilience)
  "16": "/images/researcher-on-boat-ocean-fieldwork.jpg",  // monitoring thresholds - research/fieldwork

  // forested-islands-aerial-ocean-view.JPG (2 uses) - keep for #18 (food webs/spatial ecology - theoretical)
  "47": "/images/conifer-forest-sunlight-trees.jpg",  // cottonwood/stickleback - terrestrial-aquatic (forest focus)

  // trapezia-coral-crab-hiding.jpg (3 uses) - keep for #2 (coral guard crabs - main paper)
  "51": "/images/red-spotted-coral-crab-macro.jpeg",  // cryptofauna with trapezia - different crab angle
  "61": "/images/Arete indicus - ML.jpg",  // synergistic defense with crabs AND shrimp - show shrimp

  // spiny-lobsters-group-reef-hideout.jpeg (3 uses) - keep for #4 (metabolic/temperature - main lobster paper)
  "6": "/images/lobster-in-underwater-trap-cage.jpeg",  // lobster-urchin body size - lobster in trap
  "20": "/images/lobster.jpeg",  // lobster spillover from MPAs - single lobster

  // pacific-herring-net.jpeg (4 uses) - keep for #26 (metapopulation collapse - herring focus)
  "27": "/images/fish-eggs-roe-hand-closeup.JPG",  // portfolio erosion - herring roe/spawning
  "40": "/images/fishing-boat-seagulls-rocky-coast.jpeg",  // expert perceptions - fishing/community
  "50": "/images/fishing-harbor-marina-mountains.JPG",  // trade-offs in herring fisheries - fisheries context

  // lorenz-attractor-abstract-art.jpeg (3 uses) - keep for #35 (landscape configuration - theoretical)
  "31": "/images/flatfish-flounder-camouflage-sand.JPG",  // metabolic scaling in fish - actual fish
  "55": "/images/rocky-tidepool-coastline-sunset.jpg",  // statistical methods - generic marine

  // damselfish-pair-acropora-coral.jpeg (3 uses) - keep for #8 (cascading benefits - damselfish/hawkfish)
  "36": "/images/blue-green-chromis-coral-school.JPG",  // priority effects colonization - chromis school
  "70": "/images/damselfish-single-coral-closeup.jpeg",  // propagule redirection - single damselfish

  // blacktip-reef-shark-swimming.jpg (2 uses) - keep for #56 (illegal shark fishing - sharks)
  "39": "/images/scuba-divers-shark-deep-blue.JPG",  // synchronized recovery - predator imagery (swap)

  // coral-guard-crab-red-spotted-macro.jpeg (2 uses) - keep for #71 (guard crabs/vermetids)
  "46": "/images/trapezia-coral-crab-red-spotted.jpg",  // mutualism context - different trapezia image

  // sheephead.jpeg (3 uses) - keep for #66 (priority effects wrasse - main wrasse paper)
  "57": "/images/california-sheephead-kelp-forest.jpeg",  // competitive hierarchies wrasse - CA sheephead
  "74": "/images/garibaldi-fish-orange-kelp-forest.jpeg",  // order of arrival wrasse - colorful reef fish

  // coral-reef-panorama-anthias-fish.jpeg (3 uses) - keep for #68 (fish recruitment - reef fish focus)
  "59": "/images/bleach-coral.jpeg",  // surgeonfish mortality - reef stress
  "65": "/images/overwater-bungalows-split-view-reef-fish.jpeg",  // Porites coral density - reef scene
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

console.log(`\nReassigned ${count} images to eliminate duplicates.`);
console.log('Run "node scripts/generate-news.cjs" to regenerate posts.ts');
