import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:4321';
const SCREENSHOT_DIR = './screenshots';

// Create screenshot directory
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function setTheme(page, mode) {
  if (mode === 'dark') {
    await page.evaluate(() => {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    });
  } else {
    await page.evaluate(() => {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    });
  }
  await page.waitForTimeout(300);
}

async function screenshotSection(page, sectionIndex, pageName, mode) {
  const sections = await page.$$('section');
  if (sectionIndex < sections.length) {
    const section = sections[sectionIndex];
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const filename = `${pageName}-section${sectionIndex + 1}-${mode}.png`;
    await section.screenshot({ path: path.join(SCREENSHOT_DIR, filename) });
    console.log(`✓ ${filename}`);
    return true;
  }
  return false;
}

async function testHomepageSections(browser) {
  console.log('\n=== Testing Homepage Sections ===\n');

  for (const mode of ['light', 'dark']) {
    const context = await browser.newContext({ viewport: { width: 1200, height: 800 } });
    const page = await context.newPage();

    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
    await setTheme(page, mode);

    // Get all sections
    const sectionCount = await page.$$eval('section', s => s.length);
    console.log(`Homepage has ${sectionCount} sections (${mode} mode)`);

    for (let i = 0; i < sectionCount; i++) {
      await screenshotSection(page, i, 'homepage', mode);
    }

    await context.close();
  }
}

async function testPageSections(browser, pagePath, pageName) {
  console.log(`\n=== Testing ${pageName} Sections ===\n`);

  for (const mode of ['light', 'dark']) {
    const context = await browser.newContext({ viewport: { width: 1200, height: 800 } });
    const page = await context.newPage();

    await page.goto(`${BASE_URL}${pagePath}`, { waitUntil: 'networkidle' });
    await setTheme(page, mode);

    const sectionCount = await page.$$eval('section', s => s.length);
    console.log(`${pageName} has ${sectionCount} sections (${mode} mode)`);

    for (let i = 0; i < sectionCount; i++) {
      await screenshotSection(page, i, pageName, mode);
    }

    await context.close();
  }
}

async function main() {
  const browser = await chromium.launch();

  await testHomepageSections(browser);
  await testPageSections(browser, '/people', 'people');
  await testPageSections(browser, '/research', 'research');
  await testPageSections(browser, '/publications', 'publications');
  await testPageSections(browser, '/news', 'news');
  await testPageSections(browser, '/join-us', 'join-us');

  await browser.close();
  console.log('\n✓ All section screenshots complete!');
}

main().catch(console.error);
