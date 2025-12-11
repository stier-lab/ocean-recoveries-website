const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  const filePath = path.join(__dirname, 'join_us.html');
  await page.goto(`file://${filePath}`);

  // Wait for page to load
  await page.waitForTimeout(2000);

  // Check text alignment of various elements
  const alignments = await page.evaluate(() => {
    const results = {};

    // Hero elements
    const heroHead = document.querySelector('.hero-head');
    const heroLead = document.querySelector('.hero-lead');
    const eyebrow = document.querySelector('.eyebrow');
    const statusBadge = document.querySelector('.status-badge');

    // Callout
    const callout = document.querySelector('.callout');

    // Card elements
    const cardH3 = document.querySelector('.card h3');
    const cardP = document.querySelector('.card p');
    const flashBox = document.querySelector('.flash');

    // Approach section
    const approachP = document.querySelector('#distinctives p');

    results.heroHead = heroHead ? window.getComputedStyle(heroHead).textAlign : 'not found';
    results.heroLead = heroLead ? window.getComputedStyle(heroLead).textAlign : 'not found';
    results.eyebrow = eyebrow ? window.getComputedStyle(eyebrow).textAlign : 'not found';
    results.statusBadge = statusBadge ? window.getComputedStyle(statusBadge).textAlign : 'not found';
    results.callout = callout ? window.getComputedStyle(callout).textAlign : 'not found';
    results.cardH3 = cardH3 ? window.getComputedStyle(cardH3).textAlign : 'not found';
    results.cardP = cardP ? window.getComputedStyle(cardP).textAlign : 'not found';
    results.flashBox = flashBox ? window.getComputedStyle(flashBox).textAlign : 'not found';
    results.approachP = approachP ? window.getComputedStyle(approachP).textAlign : 'not found';

    return results;
  });

  console.log('\n=== Text Alignment Check ===\n');
  console.log('Hero Heading:', alignments.heroHead);
  console.log('Hero Lead:', alignments.heroLead);
  console.log('Eyebrow:', alignments.eyebrow);
  console.log('Status Badge:', alignments.statusBadge);
  console.log('Callout:', alignments.callout);
  console.log('Card H3:', alignments.cardH3);
  console.log('Card P:', alignments.cardP);
  console.log('Flash Box:', alignments.flashBox);
  console.log('Approach P:', alignments.approachP);
  console.log('\n');

  // Take screenshot
  await page.screenshot({ path: 'join_us_rendering.png', fullPage: true });
  console.log('Screenshot saved as join_us_rendering.png');

  // Keep browser open for 10 seconds
  await page.waitForTimeout(10000);

  await browser.close();
})();
