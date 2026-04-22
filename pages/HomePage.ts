// pages/HomePage.ts
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  async getTitle() {
    return this.page.title();
  }
}
