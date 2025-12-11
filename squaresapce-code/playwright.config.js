// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000, // 60 second timeout for tests
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:8080', // where your static server will run
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure', // Capture screenshots on failures
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'npx http-server . -p 8080', // serve your folder
    port: 8080,
    reuseExistingServer: true,
  },
});
