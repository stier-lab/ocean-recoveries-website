const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function checkContrast(browser, filename, colorScheme) {
  console.log(`\n=== ${filename} (${colorScheme} mode) ===`);

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    colorScheme: colorScheme
  });
  const page = await context.newPage();

  const filePath = path.join(__dirname, filename);
  await page.goto(`file://${filePath}`);
  await page.waitForTimeout(1000);

  // Take full page screenshot
  const screenshotPath = `contrast-${colorScheme}-${filename.replace('.html', '')}.png`;
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`  Screenshot: ${screenshotPath}`);

  // Check for potential contrast issues
  const contrastIssues = await page.evaluate(() => {
    const issues = [];

    // Helper to get computed color
    function getColor(element, property) {
      const computed = window.getComputedStyle(element);
      return computed[property];
    }

    // Helper to check if color is dark
    function isDark(rgbString) {
      const match = rgbString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!match) return false;
      const [, r, g, b] = match.map(Number);
      // Using relative luminance formula
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return luminance < 0.5;
    }

    // Check all text elements
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, span, a, button, label, td, th');

    textElements.forEach((el, index) => {
      if (!el.textContent.trim()) return;

      const color = getColor(el, 'color');
      const bgColor = getColor(el, 'backgroundColor');

      const textIsDark = isDark(color);
      const bgIsDark = isDark(bgColor);

      // Flag if both are dark
      if (textIsDark && bgIsDark && bgColor !== 'rgba(0, 0, 0, 0)') {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          issues.push({
            element: el.tagName.toLowerCase(),
            text: el.textContent.trim().substring(0, 50),
            color: color,
            backgroundColor: bgColor,
            selector: el.className ? `.${el.className.split(' ')[0]}` : el.tagName.toLowerCase()
          });
        }
      }
    });

    return issues.slice(0, 10); // Return first 10 issues
  });

  if (contrastIssues.length > 0) {
    console.log(`  ⚠️  Found ${contrastIssues.length} potential contrast issues:`);
    contrastIssues.forEach((issue, i) => {
      console.log(`    ${i + 1}. ${issue.element} "${issue.text}..."`);
      console.log(`       Color: ${issue.color}, BG: ${issue.backgroundColor}`);
    });
  } else {
    console.log(`  ✓ No obvious contrast issues detected`);
  }

  await context.close();
  return contrastIssues.length > 0;
}

(async () => {
  const browser = await chromium.launch();

  const files = fs.readdirSync(__dirname)
    .filter(f => f.endsWith('.html') && !f.includes('check') && !f.includes('playwright'));

  console.log(`Found ${files.length} HTML files to check\n`);

  const results = [];

  for (const file of files) {
    const lightIssues = await checkContrast(browser, file, 'light');
    const darkIssues = await checkContrast(browser, file, 'dark');

    results.push({
      file,
      lightMode: lightIssues,
      darkMode: darkIssues
    });
  }

  await browser.close();

  console.log('\n\n=== SUMMARY ===');
  results.forEach(r => {
    const status = (r.lightMode || r.darkMode) ? '⚠️' : '✓';
    console.log(`${status} ${r.file}`);
    if (r.lightMode) console.log(`   - Light mode: has contrast issues`);
    if (r.darkMode) console.log(`   - Dark mode: has contrast issues`);
  });

  const problemFiles = results.filter(r => r.lightMode || r.darkMode);
  if (problemFiles.length > 0) {
    console.log(`\n⚠️  ${problemFiles.length} file(s) need attention`);
  } else {
    console.log('\n✓ All files have good contrast!');
  }
})();
