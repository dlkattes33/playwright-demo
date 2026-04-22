// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,
  retries: 1,

  reporter: [
    ['list'],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['html', { outputFolder: 'test-results/html', open: 'never' }]
  ],

  use: {
    headless: true,
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    baseURL: 'https://playwright.dev',
  },

  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
});
