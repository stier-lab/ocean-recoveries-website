/**
 * AI-Powered Image Matcher for Publications
 *
 * This script creates a database of image descriptions and matches them
 * to publications based on species, themes, and content.
 */

const fs = require('fs');
const path = require('path');

// Load all publication analyses
const analyzedDir = path.join(__dirname, '../publications/analyzed');
const imagesDir = path.join(__dirname, '../public/images');

// Get all publication data
function loadPublications() {
  const files = fs.readdirSync(analyzedDir).filter(f => f.endsWith('-analysis.json'));
  const publications = [];

  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(path.join(analyzedDir, file)));
    publications.push({
      id: data.publicationId,
      file: file,
      title: data.title,
      species: data.analysis?.species || '',
      location: data.analysis?.location || '',
      themes: data.analysis?.themes || [],
      summary: data.analysis?.summary || '',
      currentImage: data.featuredImage,
      keywords: extractKeywords(data)
    });
  }

  return publications.sort((a, b) => parseInt(a.id) - parseInt(b.id));
}

// Extract searchable keywords from publication
function extractKeywords(data) {
  const keywords = new Set();

  // Add species
  const species = data.analysis?.species;
  if (Array.isArray(species)) {
    species.forEach(s => {
      keywords.add(s.toLowerCase());
      // Extract genus/common names
      const parts = s.split(/[\s,()]+/);
      parts.forEach(p => {
        if (p.length > 3) keywords.add(p.toLowerCase());
      });
    });
  } else if (typeof species === 'string') {
    species.toLowerCase().split(/[\s,()]+/).forEach(p => {
      if (p.length > 3) keywords.add(p);
    });
  }

  // Add themes
  (data.analysis?.themes || []).forEach(t => keywords.add(t.toLowerCase()));

  // Add location
  const location = data.analysis?.location || '';
  location.toLowerCase().split(/[\s,]+/).forEach(p => {
    if (p.length > 3) keywords.add(p);
  });

  // Extract key terms from title
  const title = (data.title || '').toLowerCase();
  const importantWords = title.match(/\b(coral|fish|reef|kelp|lobster|shark|crab|urchin|damselfish|wrasse|hawkfish|predator|prey|mutualis|symbiont|herring|whale|sea\s*lion|axolotl|salamander|regenerat|seagrass|snail|vermetid|crown.of.thorns|starfish|seastar|grouper|parrotfish|lionfish|surgeonfish|barracuda|trevally|chromis|pocillopora|porites|acropora|trapezia|alpheus)\w*/g) || [];
  importantWords.forEach(w => keywords.add(w));

  return Array.from(keywords);
}

// Image database with descriptions based on filenames
// This would ideally be populated by AI vision, but we'll use filename analysis
const imageDatabase = {
  // Coral images
  'chromis-acropora.jpeg': {
    species: ['chromis', 'damselfish', 'acropora'],
    themes: ['coral', 'reef fish', 'symbiosis'],
    description: 'Chromis damselfish swimming among Acropora coral branches'
  },
  'trapezia-coral-crab-hiding.jpg': {
    species: ['trapezia', 'coral crab', 'guard crab'],
    themes: ['coral', 'mutualism', 'defense'],
    description: 'Trapezia coral guard crab hiding in coral branches'
  },
  'trapezia-coral-crab-red-spotted.jpg': {
    species: ['trapezia', 'coral crab'],
    themes: ['coral', 'mutualism'],
    description: 'Red-spotted Trapezia coral crab'
  },
  'red-spotted-coral-crab-macro.jpeg': {
    species: ['coral crab', 'trapezia'],
    themes: ['coral', 'macro', 'crab'],
    description: 'Macro shot of red-spotted coral crab'
  },
  'coral-guard-crab-red-spotted-macro.jpeg': {
    species: ['guard crab', 'trapezia', 'coral crab'],
    themes: ['coral', 'defense', 'mutualism'],
    description: 'Red-spotted coral guard crab macro photograph'
  },
  'Arete indicus - ML.jpg': {
    species: ['arete', 'snapping shrimp', 'alpheus'],
    themes: ['coral', 'symbiont', 'shrimp'],
    description: 'Arete indicus coral-dwelling shrimp'
  },
  'cauliflower-coral-damselfish-reef.jpeg': {
    species: ['damselfish', 'pocillopora', 'cauliflower coral'],
    themes: ['coral reef', 'fish'],
    description: 'Cauliflower coral with damselfish on reef'
  },
  'coral-bleaching-timelapse-study.jpeg': {
    species: ['coral'],
    themes: ['bleaching', 'climate change', 'dead coral'],
    description: 'Coral bleaching documentation'
  },
  'bleach-coral.jpeg': {
    species: ['coral'],
    themes: ['bleaching', 'white coral', 'stress'],
    description: 'Bleached white coral'
  },
  'deadcoral.jpeg': {
    species: ['coral', 'pocillopora'],
    themes: ['bleaching', 'dead', 'white coral', 'stress'],
    description: 'Bleached/dead white Pocillopora coral colony'
  },
  'green-coral-polyps.jpeg': {
    species: ['coral', 'polyps'],
    themes: ['coral', 'macro', 'polyps'],
    description: 'Green coral polyps extended'
  },
  'coral-polyps-extended-macro.jpg': {
    species: ['coral', 'polyps'],
    themes: ['coral', 'macro'],
    description: 'Extended coral polyps macro shot'
  },
  'stylophora-coral.jpeg': {
    species: ['stylophora', 'coral'],
    themes: ['coral', 'branching'],
    description: 'Stylophora branching coral'
  },
  'butterflyfish-eating-coral.jpeg': {
    species: ['butterflyfish', 'corallivore'],
    themes: ['predation', 'corallivory', 'coral'],
    description: 'Butterflyfish eating coral polyps'
  },
  'crown-of-thorns.jpeg': {
    species: ['crown-of-thorns', 'acanthaster', 'starfish', 'seastar'],
    themes: ['coral predator', 'outbreak', 'pest'],
    description: 'Crown-of-thorns starfish (Acanthaster)'
  },

  // Damselfish images
  'damselfish-pair-acropora-coral.jpeg': {
    species: ['damselfish', 'acropora'],
    themes: ['coral', 'symbiosis', 'pair'],
    description: 'Pair of damselfish on Acropora coral'
  },
  'damselfish-pair-pink-coral.jpeg': {
    species: ['damselfish'],
    themes: ['coral', 'fertilization', 'nutrients'],
    description: 'Damselfish pair on pink coral'
  },
  'damselfish-single-coral-closeup.jpeg': {
    species: ['damselfish'],
    themes: ['coral', 'recruitment'],
    description: 'Single damselfish on coral closeup'
  },
  'dascyllus-damselfish-coral.jpeg': {
    species: ['dascyllus', 'damselfish'],
    themes: ['coral', 'settlement', 'colonization'],
    description: 'Dascyllus damselfish among coral'
  },
  'blue-green-chromis-coral-school.JPG': {
    species: ['chromis', 'damselfish'],
    themes: ['schooling', 'coral', 'recruitment'],
    description: 'School of blue-green chromis over coral'
  },
  'damselfish-school-coral-reef.jpg': {
    species: ['damselfish'],
    themes: ['schooling', 'density', 'coral reef'],
    description: 'School of damselfish on coral reef'
  },
  'ambon-damselfish.jpeg': {
    species: ['damselfish', 'ambon'],
    themes: ['tropical', 'reef fish'],
    description: 'Ambon damselfish'
  },

  // Wrasse images
  'wrasse-6bar.jpeg': {
    species: ['wrasse', 'thalassoma', 'sixbar'],
    themes: ['competition', 'reef fish', 'arrival order'],
    description: 'Six-bar wrasse (Thalassoma)'
  },
  'fivestripewrasse.jpeg': {
    species: ['wrasse', 'thalassoma', 'fivestripe'],
    themes: ['competition', 'juvenile', 'reef fish'],
    description: 'Fivestripe wrasse'
  },
  'thalassoma-staring.jpeg': {
    species: ['thalassoma', 'wrasse'],
    themes: ['reef fish', 'priority effects', 'competition'],
    description: 'Thalassoma wrasse face-on view'
  },

  // Hawkfish images
  'hawkfish-on-coral.jpeg': {
    species: ['hawkfish', 'cirrhitidae'],
    themes: ['predator', 'coral', 'perching'],
    description: 'Hawkfish perched on coral'
  },
  'hawkfish-perching.JPG': {
    species: ['hawkfish'],
    themes: ['predator', 'functional response', 'perching'],
    description: 'Hawkfish perching behavior'
  },
  'flame-hawkfish.jpg': {
    species: ['hawkfish', 'flame hawkfish', 'neocirrhites'],
    themes: ['predator', 'coral', 'cryptofauna'],
    description: 'Flame hawkfish (Neocirrhites armatus)'
  },
  'Hawkf_Tetralia_rubridactyla.jpg': {
    species: ['hawkfish', 'tetralia'],
    themes: ['coral', 'predator'],
    description: 'Hawkfish with Tetralia crab'
  },

  // Shark images
  'blacktip-reef-shark-swimming.jpg': {
    species: ['shark', 'blacktip', 'reef shark'],
    themes: ['predator', 'apex predator', 'fishing'],
    description: 'Blacktip reef shark swimming'
  },
  'blacktip-reef-sharks-split-view-island.jpeg': {
    species: ['shark', 'blacktip'],
    themes: ['apex predator', 'island', 'historical'],
    description: 'Blacktip sharks with island view'
  },

  // Large predator images
  'grouper.jpeg': {
    species: ['grouper', 'serranidae'],
    themes: ['predator', 'reef fish', 'predation gauntlet'],
    description: 'Grouper predatory reef fish'
  },
  'barracuda-school-underwater-blue.jpg': {
    species: ['barracuda'],
    themes: ['predator', 'schooling', 'density dependence'],
    description: 'School of barracuda in blue water'
  },
  'bluefintrevally.jpeg': {
    species: ['trevally', 'jack', 'carangidae'],
    themes: ['predator', 'reef fish', 'recruitment'],
    description: 'Bluefin trevally predator'
  },
  'schooling-jacks-fish-underwater.jpeg': {
    species: ['jack', 'trevally', 'carangidae'],
    themes: ['predator', 'schooling', 'functional response'],
    description: 'Schooling jacks underwater'
  },
  'lionfish-soft-coral.jpeg': {
    species: ['lionfish', 'pterois'],
    themes: ['invasive', 'predator', 'coral'],
    description: 'Lionfish near soft coral'
  },
  'lionfish.jpeg': {
    species: ['lionfish', 'pterois'],
    themes: ['invasive', 'predator'],
    description: 'Lionfish portrait'
  },

  // Lobster images
  'lobster.jpeg': {
    species: ['lobster', 'spiny lobster'],
    themes: ['spillover', 'MPA', 'fishery'],
    description: 'Spiny lobster'
  },
  'lobster-in-underwater-trap-cage.jpeg': {
    species: ['lobster'],
    themes: ['fishery', 'trap', 'harvest'],
    description: 'Lobster in underwater trap'
  },
  'spiny-lobsters-group-reef-hideout.jpeg': {
    species: ['spiny lobster', 'panulirus'],
    themes: ['predation', 'metabolism', 'group'],
    description: 'Group of spiny lobsters in reef hideout'
  },

  // Urchin images
  'purple-urchin.jpeg': {
    species: ['urchin', 'sea urchin', 'strongylocentrotus'],
    themes: ['herbivore', 'predator-induced', 'kelp'],
    description: 'Purple sea urchin'
  },
  'red-pencil-urchin-coral-reef.JPG': {
    species: ['pencil urchin', 'urchin'],
    themes: ['coral reef', 'echinoderm'],
    description: 'Red pencil urchin on coral reef'
  },
  'urchin-barron.jpg': {
    species: ['urchin'],
    themes: ['urchin barren', 'overgrazing'],
    description: 'Urchin barren habitat'
  },

  // Kelp images
  'kelp-hero.jpeg': {
    species: ['kelp', 'macrocystis'],
    themes: ['foundation species', 'forest', 'disturbance'],
    description: 'Kelp forest hero shot'
  },
  'kelp_canopy.jpg': {
    species: ['kelp', 'canopy'],
    themes: ['detritus', 'foundation species'],
    description: 'Kelp canopy from below'
  },
  'giant-kelp-sunlight-underwater.jpeg': {
    species: ['kelp', 'macrocystis', 'giant kelp'],
    themes: ['stability', 'foundation species'],
    description: 'Giant kelp with sunlight'
  },
  'kelp-forest-fish-school-underwater.jpeg': {
    species: ['kelp', 'fish'],
    themes: ['ecosystem', 'tipping points'],
    description: 'Kelp forest with fish school'
  },
  'california-sheephead-kelp-forest.jpeg': {
    species: ['sheephead', 'semicossyphus'],
    themes: ['kelp', 'predator', 'california'],
    description: 'California sheephead in kelp forest'
  },
  'sheephead.jpeg': {
    species: ['sheephead', 'semicossyphus'],
    themes: ['kelp', 'predator', 'foraging'],
    description: 'California sheephead'
  },
  'garibaldi-fish-orange-kelp-forest.jpeg': {
    species: ['garibaldi', 'hypsypops'],
    themes: ['kelp', 'california', 'territorial'],
    description: 'Orange Garibaldi in kelp forest'
  },

  // Herring images
  'pacific-herring-net.jpeg': {
    species: ['herring', 'clupea'],
    themes: ['fishery', 'metapopulation', 'forage fish'],
    description: 'Pacific herring in fishing net'
  },
  'fish-eggs-roe-hand-closeup.JPG': {
    species: ['herring', 'eggs', 'roe'],
    themes: ['fishery', 'spawn', 'reproduction'],
    description: 'Fish eggs/roe in hand'
  },
  'whale-eating-herring.jpeg': {
    species: ['whale', 'herring', 'humpback'],
    themes: ['food web', 'herring', 'predation'],
    description: 'Whale feeding on herring'
  },

  // Marine mammal images
  'orca-pod.jpeg': {
    species: ['orca', 'killer whale'],
    themes: ['predator', 'recovery', 'synchronized management'],
    description: 'Pod of orcas'
  },
  'ca-sealion.jpeg': {
    species: ['sea lion', 'california sea lion'],
    themes: ['california current', 'ecosystem threshold'],
    description: 'California sea lion'
  },
  'whale-ship.jpeg': {
    species: ['whale'],
    themes: ['ocean recovery', 'ship strike', 'conservation'],
    description: 'Whale near ship'
  },

  // Ray images
  'manta-ray-silhouette-underwater.JPG': {
    species: ['manta ray', 'ray'],
    themes: ['predator', 'silhouette', 'multiple predators'],
    description: 'Manta ray silhouette underwater'
  },
  'stingrays-group-sandy-bottom.JPG': {
    species: ['stingray', 'ray'],
    themes: ['benthic', 'group'],
    description: 'Group of stingrays on sandy bottom'
  },

  // Other fish
  'parrotfish.jpeg': {
    species: ['parrotfish', 'scaridae'],
    themes: ['herbivore', 'grazing', 'caribbean'],
    description: 'Parrotfish'
  },
  'surgeonfish-settlers.JPG': {
    species: ['surgeonfish', 'acanthuridae', 'settlers'],
    themes: ['settlement', 'mortality', 'recruitment'],
    description: 'Surgeonfish settlers/juveniles'
  },
  'pufferfish.jpeg': {
    species: ['pufferfish', 'tetraodontidae'],
    themes: ['corallivore', 'predator'],
    description: 'Spotted pufferfish'
  },
  'flatfish-flounder-camouflage-sand.JPG': {
    species: ['flatfish', 'flounder'],
    themes: ['fish', 'metabolic scaling', 'camouflage'],
    description: 'Flatfish camouflaged on sand'
  },
  'fish-biodiversity.jpeg': {
    species: ['fish', 'reef fish'],
    themes: ['biodiversity', 'diversity', 'sampling'],
    description: 'Diverse reef fish community'
  },

  // Invertebrates
  'seahare.JPG': {
    species: ['sea hare', 'aplysia', 'nudibranch'],
    themes: ['trophic cascade', 'herbivore', 'grazer'],
    description: 'Sea hare (Aplysia)'
  },
  'dungeness-crab-beach-closeup.jpeg': {
    species: ['dungeness crab', 'metacarcinus'],
    themes: ['crab', 'fishery'],
    description: 'Dungeness crab on beach'
  },
  'rock-crab-kelp-tidepool.jpg': {
    species: ['rock crab'],
    themes: ['crab', 'tidepool', 'kelp'],
    description: 'Rock crab in kelp tidepool'
  },
  'sally-lightfoot-crab-galapagos.jpg': {
    species: ['sally lightfoot crab', 'grapsus'],
    themes: ['crab', 'galapagos'],
    description: 'Sally Lightfoot crab in Galapagos'
  },
  'gooseneck-barnacles-cluster-tidepool.jpg': {
    species: ['barnacles', 'gooseneck'],
    themes: ['intertidal', 'tidepool'],
    description: 'Gooseneck barnacles cluster'
  },

  // Axolotl/Salamander
  'axolotl.JPG': {
    species: ['axolotl', 'ambystoma'],
    themes: ['regeneration', 'metamorphosis'],
    description: 'Axolotl salamander'
  },
  'axolotl.jpeg': {
    species: ['axolotl', 'ambystoma'],
    themes: ['regeneration'],
    description: 'Axolotl'
  },
  'axolotl-salamander-pink-portrait.jpg': {
    species: ['axolotl', 'salamander'],
    themes: ['regeneration', 'appendage'],
    description: 'Pink axolotl salamander portrait'
  },

  // Stickleback
  'stickleback.jpeg': {
    species: ['stickleback', 'gasterosteus'],
    themes: ['genetic variation', 'adaptive', 'freshwater'],
    description: 'Threespine stickleback'
  },

  // Seagrass
  'seagrass.jpeg': {
    species: ['seagrass', 'zostera'],
    themes: ['dispersal', 'metacommunity', 'habitat'],
    description: 'Seagrass meadow'
  },

  // Moray eels
  'whitemouth-moray-eel-coral.JPG': {
    species: ['moray eel', 'gymnothorax'],
    themes: ['coral', 'predator'],
    description: 'Whitemouth moray eel in coral'
  },
  'whitemouth-moray-eel-closeup.JPG': {
    species: ['moray eel'],
    themes: ['predator'],
    description: 'Moray eel closeup'
  },

  // Turtle
  'green-sea-turtle-swimming-blue.JPG': {
    species: ['sea turtle', 'green turtle'],
    themes: ['marine', 'swimming'],
    description: 'Green sea turtle swimming'
  },

  // Landscape/Location images
  'moorea-mountain-tropical-island-view.jpeg': {
    species: [],
    themes: ['moorea', 'french polynesia', 'tropical', 'island'],
    description: 'Moorea island mountain view'
  },
  'aerial-view-island-lagoon-barrier-reef.jpeg': {
    species: [],
    themes: ['pacific', 'island', 'lagoon', 'dispersal'],
    description: 'Aerial view of island with lagoon and barrier reef'
  },
  'tropical-island-split-view-coral-reef-shark.jpeg': {
    species: ['shark'],
    themes: ['remote', 'resilience', 'tropical'],
    description: 'Tropical island split view with reef shark'
  },
  'forested-islands-aerial-ocean-view.JPG': {
    species: [],
    themes: ['islands', 'spatial ecology', 'seascape'],
    description: 'Forested islands aerial view'
  },
  'california-coastline-rocky-shore.jpg': {
    species: [],
    themes: ['california', 'MPA', 'spillover', 'rocky shore'],
    description: 'California rocky coastline'
  },
  'rocky-beach-cove-panorama.jpeg': {
    species: [],
    themes: ['monitoring', 'coastal', 'threshold'],
    description: 'Rocky beach cove panorama'
  },
  'rocky-tidepool-coastline-sunset.jpg': {
    species: [],
    themes: ['tidepool', 'coastal', 'rocky'],
    description: 'Rocky tidepool coastline at sunset'
  },
  'seattle-urban-coastline.jpeg': {
    species: [],
    themes: ['urban', 'city', 'biodiversity'],
    description: 'Seattle urban coastline'
  },
  'tropical-beach-palm-trees-waves.JPG': {
    species: [],
    themes: ['coastal', 'estuarine', 'tropical'],
    description: 'Tropical beach with palm trees'
  },
  'fishing-harbor-marina-mountains.JPG': {
    species: [],
    themes: ['fishing', 'stakeholder', 'harbor'],
    description: 'Fishing harbor with marina and mountains'
  },
  'fishing-boat-seagulls-rocky-coast.jpeg': {
    species: ['seagull'],
    themes: ['fishing', 'fishery', 'herring'],
    description: 'Fishing boat with seagulls near rocky coast'
  },
  'norht-sea-fishing.jpeg': {
    species: [],
    themes: ['north sea', 'fishing', 'regime shift'],
    description: 'North Sea fishing scene'
  },
  'offshore-wind-farm.jpeg': {
    species: [],
    themes: ['climate', 'ocean policy', 'energy'],
    description: 'Offshore wind farm'
  },
  'ocean-wave-kelp-breaking.jpeg': {
    species: ['kelp'],
    themes: ['ocean', 'wave', 'ILTER'],
    description: 'Ocean wave breaking with kelp'
  },
  'halo-grazing.png': {
    species: [],
    themes: ['grazing halo', 'herbivory', 'coral reef'],
    description: 'Grazing halo pattern on reef'
  },

  // Terrestrial/General
  'CheetahFam-1.jpg': {
    species: ['cheetah', 'carnivore'],
    themes: ['carnivore recovery', 'large predator'],
    description: 'Cheetah family'
  },
  'Leopard-1-2.jpg': {
    species: ['leopard', 'carnivore'],
    themes: ['predator recovery', 'conservation'],
    description: 'Leopard'
  },
  'coyote-road.jpeg': {
    species: ['coyote'],
    themes: ['human-wildlife', 'behavior change', 'urban'],
    description: 'Coyote near road'
  },
  'bee-pollination.jpeg': {
    species: ['bee'],
    themes: ['mutualism', 'pollination'],
    description: 'Bee pollinating flower'
  },
  'conflict-image.jpg': {
    species: [],
    themes: ['conflict', 'conservation', 'perception', 'rashomon'],
    description: 'Conservation conflict illustration'
  },

  // Abstract/Scientific
  'lorenz-attractor-abstract-art.jpeg': {
    species: [],
    themes: ['theoretical', 'landscape', 'mathematical', 'spatial'],
    description: 'Lorenz attractor abstract visualization'
  },
  'hurricane-earth-from-space.jpeg': {
    species: [],
    themes: ['climate', 'weather', 'fisheries', 'climate change'],
    description: 'Hurricane viewed from space'
  },

  // Coral reef panoramas
  'coral-reef-panorama-anthias-fish.jpeg': {
    species: ['anthias', 'reef fish'],
    themes: ['coral reef', 'MPA', 'fish community'],
    description: 'Coral reef panorama with anthias fish'
  },
  'coral-reef-bleached-anemone-fish-school.jpeg': {
    species: ['anemonefish', 'clownfish'],
    themes: ['bleaching', 'coral', 'anemone'],
    description: 'Coral reef with anemone and fish'
  }
};

// Calculate match score between publication and image
function calculateMatchScore(pub, imageData) {
  let score = 0;
  const pubKeywords = pub.keywords.map(k => k.toLowerCase());
  const imageSpecies = (imageData.species || []).map(s => s.toLowerCase());
  const imageThemes = (imageData.themes || []).map(t => t.toLowerCase());
  const imageDesc = (imageData.description || '').toLowerCase();

  // Species matches are highest priority (3 points each)
  for (const species of imageSpecies) {
    for (const keyword of pubKeywords) {
      if (species.includes(keyword) || keyword.includes(species)) {
        score += 3;
      }
    }
  }

  // Theme matches (2 points each)
  for (const theme of imageThemes) {
    for (const keyword of pubKeywords) {
      if (theme.includes(keyword) || keyword.includes(theme)) {
        score += 2;
      }
    }
  }

  // Description matches (1 point each)
  for (const keyword of pubKeywords) {
    if (imageDesc.includes(keyword)) {
      score += 1;
    }
  }

  // Location-specific bonuses
  const pubLocation = (pub.location || '').toLowerCase();
  if (pubLocation.includes('moorea') && imageDesc.includes('moorea')) score += 5;
  if (pubLocation.includes('california') && imageDesc.includes('california')) score += 5;
  if (pubLocation.includes('galapagos') && imageDesc.includes('galapagos')) score += 5;
  if (pubLocation.includes('pacific') && imageDesc.includes('pacific')) score += 3;

  return score;
}

// Find best matching images for a publication
function findBestImages(pub, excludeImages = []) {
  const scores = [];

  for (const [filename, imageData] of Object.entries(imageDatabase)) {
    if (excludeImages.includes(filename)) continue;

    const score = calculateMatchScore(pub, imageData);
    if (score > 0) {
      scores.push({
        filename,
        score,
        description: imageData.description,
        species: imageData.species,
        themes: imageData.themes
      });
    }
  }

  return scores.sort((a, b) => b.score - a.score).slice(0, 5);
}

// Main analysis
function main() {
  const publications = loadPublications();
  const usedImages = new Set();

  console.log('='.repeat(80));
  console.log('AI-POWERED IMAGE MATCHING ANALYSIS');
  console.log('='.repeat(80));
  console.log('');

  const recommendations = [];

  for (const pub of publications) {
    const currentImageFile = pub.currentImage ? path.basename(pub.currentImage) : null;
    const bestMatches = findBestImages(pub, []);

    // Check if current image is in top matches
    const currentImageRank = bestMatches.findIndex(m => m.filename === currentImageFile);
    const currentImageScore = currentImageRank >= 0 ? bestMatches[currentImageRank].score : 0;
    const bestScore = bestMatches[0]?.score || 0;

    // Flag if current image is not optimal
    const needsReview = currentImageRank < 0 || currentImageRank > 2 ||
                        (bestScore > currentImageScore * 1.5 && bestScore >= 5);

    if (needsReview || !currentImageFile) {
      recommendations.push({
        id: pub.id,
        title: pub.title.substring(0, 60),
        currentImage: currentImageFile,
        currentScore: currentImageScore,
        keywords: pub.keywords.slice(0, 8),
        bestMatches: bestMatches.slice(0, 5)
      });
    }

    if (currentImageFile) {
      usedImages.add(currentImageFile);
    }
  }

  // Print recommendations
  console.log(`\nFOUND ${recommendations.length} PUBLICATIONS THAT MAY NEED BETTER IMAGES:\n`);

  for (const rec of recommendations) {
    console.log(`\n${'─'.repeat(80)}`);
    console.log(`#${rec.id}: ${rec.title}`);
    console.log(`Keywords: ${rec.keywords.join(', ')}`);
    console.log(`Current: ${rec.currentImage || 'NONE'} (score: ${rec.currentScore})`);
    console.log(`\nTop 5 recommended images:`);

    for (let i = 0; i < rec.bestMatches.length; i++) {
      const match = rec.bestMatches[i];
      const marker = match.filename === rec.currentImage ? ' ← CURRENT' : '';
      console.log(`  ${i + 1}. ${match.filename} (score: ${match.score})${marker}`);
      console.log(`     ${match.description}`);
    }
  }

  // Output JSON for programmatic use
  const outputPath = path.join(__dirname, '../data/image-recommendations.json');
  fs.writeFileSync(outputPath, JSON.stringify(recommendations, null, 2));
  console.log(`\n\nRecommendations saved to: ${outputPath}`);

  // Summary
  console.log('\n' + '='.repeat(80));
  console.log('SUMMARY');
  console.log('='.repeat(80));
  console.log(`Total publications: ${publications.length}`);
  console.log(`Publications needing review: ${recommendations.length}`);
  console.log(`Images in database: ${Object.keys(imageDatabase).length}`);
  console.log(`Images currently used: ${usedImages.size}`);
}

main();
