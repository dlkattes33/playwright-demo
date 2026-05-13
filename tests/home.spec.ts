// tests/home.spec.ts
import { test, expect } from '../fixtures/homeFixture';

test('homepage loads and has title', async ({ homePage }) => {
  await homePage.goto('/home.html');
  const title = await homePage.getTitle();
  expect(title).toContain('Playwright');
});
