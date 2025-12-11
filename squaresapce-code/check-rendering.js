const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });

  // Screenshot section 1 - Hero
  console.log('Capturing hero section...');
  await page.goto('file://' + path.resolve('research_section1_hero.html'));
  await page.screenshot({ path: 'screenshot_section1_hero.png', fullPage: true });

  // Screenshot section 2 - Tiles
  console.log('Capturing tiles section...');
  await page.goto('file://' + path.resolve('research_section2_tiles.html'));
  await page.screenshot({ path: 'screenshot_section2_tiles.png', fullPage: true });

  // Screenshot section 3 - Accordions
  console.log('Capturing accordions section...');
  await page.goto('file://' + path.resolve('research_section3_accordions.html'));
  await page.screenshot({ path: 'screenshot_section3_accordions.png', fullPage: true });

  await browser.close();
  console.log('Screenshots complete!');
})();
