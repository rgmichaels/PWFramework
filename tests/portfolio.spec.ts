// tests/portfolio.spec.ts
import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../pages/portfolioPage';

test('Portfolio site loads and displays key info', async ({ page }) => {
  const portfolio = new PortfolioPage(page);

  await portfolio.goto();
  await portfolio.expectNameVisible();
  await portfolio.expectTitleVisible();
  await portfolio.expectGitHubLink();
  await portfolio.expectResumeLink();
});
