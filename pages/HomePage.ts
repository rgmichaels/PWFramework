import { Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async getTitle() {
    return this.page.title();
  }

  async assertTitleContains(text: string) {
    await expect(this.page).toHaveTitle(new RegExp(text));
  }

  async clickMoreInfo() {
    await this.page.getByRole('link', { name: 'More information...' }).click();
  }

  async assertRedirectToIANA() {
    await expect(this.page).toHaveURL(/iana\.org/);
  }
}
