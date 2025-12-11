const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function checkFile(browser, filename) {
  console.log(`\n=== Checking ${filename} ===`);
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const filePath = path.join(__dirname, filename);
  await page.goto(`file://${filePath}`);
  await page.waitForTimeout(1000);

  // Take screenshot
  const screenshotPath = `${filename.replace('.html', '')}-check.png`;
  await page.screenshot({ path: screenshotPath, fullPage: false });

  // Check layout metrics
  const body = await page.locator('body').first();
  const bodyBox = await body.boundingBox();

  // Check for common container elements
  const containers = await page.locator('main, .container, .orlPubs__container, .orlA main, [class*="container"]').all();

  let centered = false;
  if (containers.length > 0) {
    const box = await containers[0].boundingBox();
    if (box) {
      const leftMargin = box.x;
      const rightMargin = bodyBox.width - (box.x + box.width);
      const marginDiff = Math.abs(leftMargin - rightMargin);
      centered = marginDiff < 50; // Allow 50px difference
      console.log(`  ✓ Container width: ${box.width}px, Left: ${leftMargin.toFixed(0)}px, Right: ${rightMargin.toFixed(0)}px`);
      console.log(`  ${centered ? '✓ CENTERED' : '✗ NOT CENTERED (left-aligned)'}`);
    }
  } else {
    console.log('  ⚠ No main container found');
  }

  await context.close();
  return centered;
}

(async () => {
  const browser = await chromium.launch();

  const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html') && !f.includes('check'));

  console.log(`Found ${files.length} HTML files to check:\n`);

  const results = [];
  for (const file of files) {
    const centered = await checkFile(browser, file);
    results.push({ file, centered });
  }

  await browser.close();

  console.log('\n\n=== SUMMARY ===');
  results.forEach(r => {
    console.log(`${r.centered ? '✓' : '✗'} ${r.file}`);
  });

  const issues = results.filter(r => !r.centered);
  if (issues.length > 0) {
    console.log(`\n⚠ ${issues.length} file(s) need attention`);
  } else {
    console.log('\n✓ All files are properly centered!');
  }
})();
