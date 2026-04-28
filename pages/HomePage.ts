// pages/HomePage.ts
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  async goto(path = '/') {
    await super.goto(path);
  }

  async getTitle() {
    return this.page.title();
  }
}
