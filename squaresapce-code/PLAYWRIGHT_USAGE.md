# Playwright Visual Testing Setup

Microsoft Playwright has been successfully set up for this project! This allows for automated browser testing and screenshot capture of your front-end code.

## Available Commands

```bash
# Run all screenshot tests (captures full-page screenshots)
npm run screenshot

# Run all tests
npm test

# Run tests in headed mode (see the browser)
npm run test:headed

# Run tests in UI mode (interactive test runner)
npm run test:ui

# Debug tests
npm run test:debug
```

## Screenshot Output

Screenshots are automatically saved to the `screenshots/` directory:
- `screenshots/news-full-page.png` - Full page screenshot of news.html
- `screenshots/organismal-full-page.png` - Full page screenshot of organismal.html

## How It Works

1. Playwright automatically starts a local web server on port 8080
2. Opens a headless Chromium browser
3. Navigates to your HTML pages
4. Captures full-page screenshots
5. Saves them to the screenshots directory

## Configuration

The Playwright configuration is in [playwright.config.js](playwright.config.js):
- Test timeout: 60 seconds
- Browser: Chromium (Desktop Chrome)
- Screenshots on failure: Enabled
- Headless mode: Enabled by default

## Test Files

Tests are located in the `tests/` directory:
- [tests/visual.spec.js](tests/visual.spec.js) - Visual testing suite with screenshot capture and basic page checks

## Adding New Pages

To add screenshots for new HTML pages, edit [tests/visual.spec.js](tests/visual.spec.js) and add a new test:

```javascript
test('your-page.html - capture full page screenshot @screenshot', async ({ page }) => {
  await page.goto('/your-page.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  await page.screenshot({
    path: 'screenshots/your-page-full-page.png',
    fullPage: true
  });

  console.log('✓ Screenshot saved: screenshots/your-page-full-page.png');
});
```

## Benefits for Development

1. **Visual Feedback**: See exactly how your changes look in the browser
2. **Automated Testing**: Verify pages load correctly
3. **Cross-browser Testing**: Test on different browsers (Chromium, Firefox, WebKit)
4. **Regression Detection**: Compare screenshots before/after changes
5. **Documentation**: Screenshots serve as visual documentation
