const { test, expect } = require('@playwright/test');

test('page loads and body is visible', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await expect(page.locator('body')).toBeVisible();
});