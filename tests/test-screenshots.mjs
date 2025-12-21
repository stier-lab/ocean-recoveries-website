import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:4321';
const SCREENSHOT_DIR = './screenshots';

// Pages to test
const pages = [
  { name: 'homepage', path: '/' },
  { name: 'people', path: '/people' },
  { name: 'research-index', path: '/research' },
  { name: 'research-coral', path: '/research/coral-reef-recovery' },
  { name: 'research-kelp', path: '/research/kelp-forest-dynamics' },
  { name: 'research-mechanisms', path: '/research/organismal-mechanisms' },
  { name: 'publications', path: '/publications' },
  { name: 'news-index', path: '/news' },
  { name: 'join-us', path: '/join-us' },
];

// Create screenshot directory
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function takeScreenshot(page, name, mode) {
  const filename = `${name}-${mode}.png`;
  const filepath = path.join(SCREENSHOT_DIR, filename);

  // Take screenshot at reasonable size (800x600 viewport, scaled down)
  await page.screenshot({
    path: filepath,
    fullPage: false, // Just viewport to keep size manageable
  });

  console.log(`✓ ${filename}`);
  return filepath;
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
  // Wait for theme transition
  await page.waitForTimeout(300);
}

async function testPage(browser, pageInfo, mode) {
  const context = await browser.newContext({
    viewport: { width: 1200, height: 800 },
  });
  const page = await context.newPage();

  try {
    await page.goto(`${BASE_URL}${pageInfo.path}`, { waitUntil: 'networkidle' });
    await setTheme(page, mode);
    await page.waitForTimeout(500); // Wait for animations

    const screenshot = await takeScreenshot(page, pageInfo.name, mode);
    return { success: true, screenshot, page: pageInfo.name, mode };
  } catch (error) {
    console.error(`✗ ${pageInfo.name}-${mode}: ${error.message}`);
    return { success: false, error: error.message, page: pageInfo.name, mode };
  } finally {
    await context.close();
  }
}

async function main() {
  console.log('Starting visual tests...\n');

  const browser = await chromium.launch();
  const results = [];

  for (const pageInfo of pages) {
    // Test light mode
    const lightResult = await testPage(browser, pageInfo, 'light');
    results.push(lightResult);

    // Test dark mode
    const darkResult = await testPage(browser, pageInfo, 'dark');
    results.push(darkResult);
  }

  await browser.close();

  // Summary
  console.log('\n--- Summary ---');
  const failed = results.filter(r => !r.success);
  if (failed.length === 0) {
    console.log('All tests passed!');
  } else {
    console.log(`${failed.length} tests failed:`);
    failed.forEach(f => console.log(`  - ${f.page} (${f.mode}): ${f.error}`));
  }

  console.log(`\nScreenshots saved to: ${SCREENSHOT_DIR}/`);
}

main().catch(console.error);
