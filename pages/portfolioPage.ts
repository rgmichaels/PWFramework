// pages/portfolioPage.ts
import { expect, Page } from '@playwright/test';

export class PortfolioPage {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto('https://rgmichaels.github.io/portfolio/');
  }

  async expectNameVisible() {
    await expect(this.page.getByRole('heading', { name: 'Robert Michaels' })).toBeVisible();
  }

  async expectTitleVisible() {
    await expect(this.page.getByText(/QA Engineer/i)).toBeVisible();
  }

  async expectGitHubLink() {
    await expect(this.page.getByRole('link', { name: 'GitHub', exact: true }))
      .toHaveAttribute('href', 'https://github.com/rgmichaels');
  }

  async expectResumeLink() {
    await expect(this.page.getByRole('link', { name: /Resume/i }))
      .toHaveAttribute('href', 'https://rgmichaels.github.io/portfolio/resume.pdf');
  }
}
