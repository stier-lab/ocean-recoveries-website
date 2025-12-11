const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  const filePath = path.join(__dirname, 'join_us2.html');
  await page.goto(`file://${filePath}`);

  // Wait for page to load
  await page.waitForTimeout(2000);

  // Check spacing and alignment
  const spacing = await page.evaluate(() => {
    const results = {};

    // Hero panel position
    const heroPanel = document.querySelector('.hero-panel');
    if (heroPanel) {
      const rect = heroPanel.getBoundingClientRect();
      const styles = window.getComputedStyle(heroPanel);
      results.heroPanel = {
        left: rect.left,
        width: rect.width,
        marginLeft: styles.marginLeft,
        marginRight: styles.marginRight,
        maxWidth: styles.maxWidth,
        textAlign: styles.textAlign
      };
    }

    // Container padding
    const container = document.querySelector('.container');
    if (container) {
      const styles = window.getComputedStyle(container);
      results.container = {
        paddingLeft: styles.paddingLeft,
        paddingRight: styles.paddingRight,
        maxWidth: styles.maxWidth
      };
    }

    // First section top margin
    const firstSection = document.querySelector('.section');
    if (firstSection) {
      const styles = window.getComputedStyle(firstSection);
      results.firstSection = {
        marginTop: styles.marginTop
      };
    }

    // Card alignment
    const card = document.querySelector('.card');
    if (card) {
      const rect = card.getBoundingClientRect();
      const containerRect = document.querySelector('.container').getBoundingClientRect();
      results.card = {
        left: rect.left,
        containerLeft: containerRect.left,
        alignsWithContainer: Math.abs(rect.left - containerRect.left) < 5
      };
    }

    // Hero inner alignment
    const heroInner = document.querySelector('.hero-inner');
    if (heroInner) {
      const styles = window.getComputedStyle(heroInner);
      results.heroInner = {
        alignItems: styles.alignItems,
        padding: styles.padding
      };
    }

    return results;
  });

  console.log('\n=== Spacing & Alignment Check ===\n');
  console.log('Hero Panel:', spacing.heroPanel);
  console.log('\nContainer:', spacing.container);
  console.log('\nFirst Section:', spacing.firstSection);
  console.log('\nCard:', spacing.card);
  console.log('\nHero Inner:', spacing.heroInner);
  console.log('\n');

  // Take screenshot
  await page.screenshot({ path: 'join_us2_spacing.png', fullPage: true });
  console.log('Screenshot saved as join_us2_spacing.png');

  // Keep browser open for 10 seconds
  await page.waitForTimeout(10000);

  await browser.close();
})();
