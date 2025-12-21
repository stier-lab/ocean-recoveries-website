const fs = require('fs');

// Image fixes based on careful review
const fixes = {
  // From automated detection
  "13": "/images/kelp-hero.jpeg",  // kelp-urchin paper, better to show kelp
  "19": "/images/butterflyfish-eating-coral.jpeg",  // corallivory paper
  "20": "/images/spiny-lobsters-group-reef-hideout.jpeg",  // lobster spillover
  "27": "/images/pacific-herring-net.jpeg",  // herring portfolio erosion
  "33": "/images/purple-urchin.jpeg",  // urchin behavior paper
  "50": "/images/pacific-herring-net.jpeg",  // herring trade-offs
  "51": "/images/trapezia-coral-crab-hiding.jpg",  // cryptofauna with Trapezia
  "55": "/images/lorenz-attractor-abstract-art.jpeg",  // statistical methods paper - theoretical
  "57": "/images/sheephead.jpeg",  // wrasse competition paper
  "61": "/images/trapezia-coral-crab-hiding.jpg",  // synergistic coral defense with crabs
  "74": "/images/sheephead.jpeg",  // wrasse order of arrival

  // Additional manual fixes
  "5": "/images/cauliflower-coral-damselfish-reef.jpeg",  // 3D photogrammetry of Pocillopora
  "6": "/images/spiny-lobsters-group-reef-hideout.jpeg",  // lobster-urchin interactions (keep lobster focus)
  "41": "/images/scuba-divers-shark-deep-blue.JPG",  // predation gauntlet on reefs - replace leopard
  "47": "/images/forested-islands-aerial-ocean-view.JPG",  // cottonwood/stickleback - terrestrial-aquatic connection
  "59": "/images/coral-reef-panorama-anthias-fish.jpeg",  // surgeonfish mortality - reef fish focus
  "67": "/images/tropical-island-aerial-view-lagoon-reef.jpeg",  // nudibranch/cyanobacteria - Moorea reef context
  "70": "/images/damselfish-pair-acropora-coral.jpeg",  // propagule redirection - damselfish focus
  "75": "/images/red-pencil-urchin-coral-reef.JPG",  // COTS paper - needs reef invertebrate image
  "77": "/images/fishing-boat-seagulls-rocky-coast.jpeg",  // climate course corrections - fisheries context
};

// Apply fixes
for (const [id, newImage] of Object.entries(fixes)) {
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
  console.log(`${id}: ${oldImage} → ${newImage}`);
}

console.log('\nDone! Run "node scripts/generate-news.cjs" to regenerate posts.ts');
