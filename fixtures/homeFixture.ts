// fixtures/homeFixture.ts
import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

export const test = base.extend({
  homePage: async ({ page }, use) => {
    const home = new HomePage(page);
    await use(home);
  },
});

export const expect = test.expect;
