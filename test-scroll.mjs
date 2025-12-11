import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:4321';
const SCREENSHOT_DIR = './screenshots';

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

async function scrollAndScreenshot(page, pageName, mode) {
  const screenshots = [];

  // Get page height
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  const viewportHeight = 800;
  let scrollY = 0;
  let index = 1;

  while (scrollY < pageHeight) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(400);

    const filename = `${pageName}-scroll${index}-${mode}.png`;
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, filename) });
    console.log(`✓ ${filename}`);
    screenshots.push(filename);

    scrollY += viewportHeight - 100; // Overlap a bit
    index++;

    if (index > 20) break; // Safety limit
  }

  return screenshots;
}

async function testPage(browser, pagePath, pageName) {
  console.log(`\n=== ${pageName} ===`);

  for (const mode of ['light', 'dark']) {
    const context = await browser.newContext({ viewport: { width: 1200, height: 800 } });
    const page = await context.newPage();

    await page.goto(`${BASE_URL}${pagePath}`, { waitUntil: 'networkidle' });
    await setTheme(page, mode);
    await page.waitForTimeout(500);

    await scrollAndScreenshot(page, pageName, mode);
    await context.close();
  }
}

async function main() {
  const browser = await chromium.launch();

  const pages = [
    { path: '/', name: 'homepage' },
    { path: '/people', name: 'people' },
    { path: '/research', name: 'research' },
    { path: '/publications', name: 'publications' },
    { path: '/news', name: 'news' },
    { path: '/join-us', name: 'join-us' },
  ];

  for (const p of pages) {
    await testPage(browser, p.path, p.name);
  }

  await browser.close();
  console.log('\n✓ Complete!');
}

main().catch(console.error);
