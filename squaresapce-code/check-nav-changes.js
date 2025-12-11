const { chromium } = require('playwright');
const path = require('path');

async function checkNavigation(browser, filename) {
  console.log(`\n=== Checking ${filename} ===`);
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const filePath = path.join(__dirname, filename);
  await page.goto(`file://${filePath}`);
  await page.waitForTimeout(500);

  // Check if old nav exists
  const oldNav = await page.locator('.sticky-nav').count();
  console.log(`  Old sticky-nav: ${oldNav > 0 ? '✗ STILL PRESENT' : '✓ REMOVED'}`);

  // Check if new nav exists
  const newToggle = await page.locator('.page-nav-toggle').count();
  const newPanel = await page.locator('.page-nav-panel').count();
  console.log(`  New floating nav: ${newToggle > 0 && newPanel > 0 ? '✓ PRESENT' : '✗ MISSING'}`);

  // Take screenshot
  const screenshotPath = `${filename.replace('.html', '')}-nav-fixed.png`;
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log(`  Screenshot: ${screenshotPath}`);

  // Click button and take screenshot with panel open
  if (newToggle > 0) {
    await page.click('.page-nav-toggle');
    await page.waitForTimeout(300);
    const openScreenshot = `${filename.replace('.html', '')}-nav-open.png`;
    await page.screenshot({ path: openScreenshot, fullPage: false });
    console.log(`  Panel open screenshot: ${openScreenshot}`);
  }

  await context.close();
}

(async () => {
  const browser = await chromium.launch();

  const files = [
    'kelp-forests.html',
    'coral_reefs.html',
    'organismal.html'
  ];

  for (const file of files) {
    await checkNavigation(browser, file);
  }

  await browser.close();
  console.log('\n✓ Navigation check complete!');
})();
