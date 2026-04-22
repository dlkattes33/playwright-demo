const { test, expect } = require('@playwright/test');

test('user can load the demo page', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await expect(page).toHaveTitle(/TodoMVC/);
});