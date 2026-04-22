// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('User cannot login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('wrongUser', 'wrongPass');
  await loginPage.assertLoginFailed();
});