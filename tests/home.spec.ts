// tests/home.spec.ts
import { test, expect } from '../fixtures/homeFixture';

test('homepage loads and has title', async ({ homePage }) => {
  await homePage.goto('/');
  const title = await homePage.getTitle();
  expect(title).toContain('Playwright');
});
