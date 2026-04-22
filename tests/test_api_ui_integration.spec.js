const { test, expect } = require('@playwright/test');

test('dummy api/ui integration test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await expect(page).toHaveTitle(/TodoMVC/);
});