// pages/BasePage.ts
import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(path = '/home.html') {
  await this.page.goto(`file://${process.cwd()}/static${path}`);
 }
}
