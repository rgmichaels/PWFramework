// tests/portfolio.spec.ts
import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../pages/portfolioPage';
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../support/hooks';

test('Portfolio site loads and displays key info', async ({ page }) => {
  const portfolio = new PortfolioPage(page);

  await portfolio.goto();
  await portfolio.expectNameVisible();
  await portfolio.expectTitleVisible();
  await portfolio.expectGitHubLink();
  await portfolio.expectResumeLink();
});

Given('I navigate to the portfolio site', async () => {
  await page().goto('https://rgmichaels.github.io/portfolio/');
});