// tests/visual.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Visual Testing Suite', () => {
  test('news.html - capture full page screenshot @screenshot', async ({ page }) => {
    await page.goto('/news.html', { waitUntil: 'domcontentloaded' });

    // Wait a bit for any lazy-loaded content
    await page.waitForTimeout(2000);

    // Take full page screenshot
    await page.screenshot({
      path: 'screenshots/news-full-page.png',
      fullPage: true
    });

    console.log('✓ Screenshot saved: screenshots/news-full-page.png');
  });

  test('organismal.html - capture full page screenshot @screenshot', async ({ page }) => {
    await page.goto('/organismal.html', { waitUntil: 'domcontentloaded' });

    // Wait a bit for any lazy-loaded content
    await page.waitForTimeout(2000);

    // Take full page screenshot
    await page.screenshot({
      path: 'screenshots/organismal-full-page.png',
      fullPage: true
    });

    console.log('✓ Screenshot saved: screenshots/organismal-full-page.png');
  });

  test('news.html - basic page checks', async ({ page }) => {
    await page.goto('/news.html');

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');

    // Check that the page title exists
    const title = await page.title();
    console.log(`Page title: ${title}`);

    // Get page dimensions
    const dimensions = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight
    }));
    console.log(`Page dimensions: ${dimensions.width}x${dimensions.height}`);
  });

  test('organismal.html - basic page checks', async ({ page }) => {
    await page.goto('/organismal.html');

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');

    // Check that the page title exists
    const title = await page.title();
    console.log(`Page title: ${title}`);

    // Get page dimensions
    const dimensions = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight
    }));
    console.log(`Page dimensions: ${dimensions.width}x${dimensions.height}`);
  });

  test('kelp-forests.html - capture full page screenshot @screenshot', async ({ page }) => {
    await page.goto('/kelp-forests.html', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    await page.screenshot({
      path: 'screenshots/kelp-forests-full-page.png',
      fullPage: true
    });

    console.log('✓ Screenshot saved: screenshots/kelp-forests-full-page.png');
  });

  test('coral-reefs.html - capture full page screenshot @screenshot', async ({ page }) => {
    await page.goto('/coral_reefs.html', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    await page.screenshot({
      path: 'screenshots/coral-reefs-full-page.png',
      fullPage: true
    });

    console.log('✓ Screenshot saved: screenshots/coral-reefs-full-page.png');
  });

  test('join_us.html - capture full page screenshot @screenshot', async ({ page }) => {
    await page.goto('/join_us.html', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    await page.screenshot({
      path: 'screenshots/join-us-full-page.png',
      fullPage: true
    });

    console.log('✓ Screenshot saved: screenshots/join-us-full-page.png');
  });

  test('people.html - capture full page screenshot @screenshot', async ({ page }) => {
    await page.goto('/people.html', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    await page.screenshot({
      path: 'screenshots/people-full-page.png',
      fullPage: true
    });

    console.log('✓ Screenshot saved: screenshots/people-full-page.png');
  });
});
