const fs = require('fs');
const analyzed = fs.readdirSync('./publications/analyzed').filter(f => f.endsWith('-analysis.json'));
const mismatches = [];

for (const file of analyzed) {
  const data = JSON.parse(fs.readFileSync('./publications/analyzed/' + file, 'utf-8'));
  const id = data.publicationId;
  const title = data.title || '';
  const speciesRaw = data.analysis?.species;
  const species = (Array.isArray(speciesRaw) ? speciesRaw.join(' ') : (speciesRaw || '')).toLowerCase();
  const themes = (data.analysis?.themes || []).map(t => t.toLowerCase()).join(' ');
  const location = (data.analysis?.location || '').toLowerCase();
  const currentImg = data.featuredImage || '';

  let suggestion = null;
  let reason = '';

  // Check for coral guard crab papers
  if ((title.toLowerCase().includes('guard crab') || species.includes('trapezia') || title.toLowerCase().includes('coral crab')) &&
      currentImg.indexOf('trapezia') === -1 && currentImg.indexOf('guard-crab') === -1 && currentImg.indexOf('Hawkf_Tetralia') === -1) {
    suggestion = '/images/trapezia-coral-crab-hiding.jpg';
    reason = 'Paper about coral guard crabs';
  }

  // Lobster papers
  if ((species.includes('lobster') || species.includes('panulirus')) && currentImg.indexOf('lobster') === -1) {
    suggestion = '/images/spiny-lobsters-group-reef-hideout.jpeg';
    reason = 'Paper about lobsters';
  }

  // Kelp papers
  if ((species.includes('kelp') || species.includes('macrocystis') || title.toLowerCase().includes('kelp')) && currentImg.indexOf('kelp') === -1) {
    suggestion = '/images/kelp-hero.jpeg';
    reason = 'Paper about kelp';
  }

  // Herring papers
  if ((species.includes('herring') || species.includes('clupea') || title.toLowerCase().includes('herring')) && currentImg.indexOf('herring') === -1) {
    suggestion = '/images/pacific-herring-net.jpeg';
    reason = 'Paper about herring';
  }

  // Shark/illegal fishing papers
  if (title.toLowerCase().includes('shark') && currentImg.indexOf('shark') === -1) {
    suggestion = '/images/blacktip-reef-shark-swimming.jpg';
    reason = 'Paper about sharks';
  }

  // Axolotl papers
  if ((species.includes('axolotl') || title.toLowerCase().includes('axolotl')) && currentImg.indexOf('axolotl') === -1) {
    suggestion = '/images/axolotl.jpeg';
    reason = 'Paper about axolotl';
  }

  // Parrotfish papers
  if ((species.includes('parrotfish') || species.includes('sparisoma') || species.includes('scarus')) && currentImg.indexOf('parrotfish') === -1) {
    suggestion = '/images/parrotfish.jpeg';
    reason = 'Paper about parrotfish';
  }

  // Urchin papers without urchin image
  if ((species.includes('urchin') || species.includes('strongylocentrotus') || title.toLowerCase().includes('urchin')) && currentImg.indexOf('urchin') === -1) {
    suggestion = '/images/purple-urchin.jpeg';
    reason = 'Paper about urchins';
  }

  // Acropora coral papers - corallivory
  if (title.toLowerCase().includes('corallivor') && currentImg.indexOf('butterfly') === -1) {
    suggestion = '/images/butterflyfish-eating-coral.jpeg';
    reason = 'Paper about corallivory';
  }

  // Wrasse papers (competitive hierarchies)
  if ((species.includes('wrasse') || species.includes('thalassoma')) && currentImg.indexOf('sheephead') === -1 && id !== '66') {
    suggestion = '/images/sheephead.jpeg';
    reason = 'Paper about wrasses';
  }

  if (suggestion) {
    mismatches.push({id, title: title.substring(0, 60), current: currentImg, suggested: suggestion, reason});
  }
}

console.log(JSON.stringify(mismatches, null, 2));
