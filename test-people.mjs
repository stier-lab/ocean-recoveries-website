import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:4321';
const SCREENSHOT_DIR = './screenshots/people-fixed';

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

async function main() {
  const browser = await chromium.launch();

  for (const mode of ['light', 'dark']) {
    const context = await browser.newContext({ viewport: { width: 1200, height: 800 } });
    const page = await context.newPage();

    await page.goto(`${BASE_URL}/people`, { waitUntil: 'networkidle' });
    await setTheme(page, mode);
    await page.waitForTimeout(500);

    // Get page height
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);
    let scrollY = 0;
    let index = 1;

    while (scrollY < pageHeight) {
      await page.evaluate((y) => window.scrollTo(0, y), scrollY);
      await page.waitForTimeout(300);

      const filename = `people-${index}-${mode}.png`;
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, filename) });
      console.log(`✓ ${filename}`);

      scrollY += 700;
      index++;
      if (index > 10) break;
    }

    await context.close();
  }

  await browser.close();
  console.log('\n✓ People page screenshots complete!');
}

main().catch(console.error);
