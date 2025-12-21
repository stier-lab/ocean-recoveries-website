import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:4321';
const SCREENSHOT_DIR = './screenshots/mobile';

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

async function testMobilePage(browser, pagePath, pageName) {
  console.log(`Testing ${pageName} (mobile)...`);

  const context = await browser.newContext({
    viewport: { width: 375, height: 812 }, // iPhone X size
  });
  const page = await context.newPage();

  await page.goto(`${BASE_URL}${pagePath}`, { waitUntil: 'networkidle' });
  await setTheme(page, 'light');
  await page.waitForTimeout(500);

  // Take viewport screenshot
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, `${pageName}-mobile-light.png`) });
  console.log(`  ✓ ${pageName}-mobile-light.png`);

  // Dark mode
  await setTheme(page, 'dark');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, `${pageName}-mobile-dark.png`) });
  console.log(`  ✓ ${pageName}-mobile-dark.png`);

  await context.close();
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
    await testMobilePage(browser, p.path, p.name);
  }

  await browser.close();
  console.log('\n✓ Mobile screenshots complete!');
}

main().catch(console.error);
