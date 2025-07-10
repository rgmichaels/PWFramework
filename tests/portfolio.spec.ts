<<<<<<< HEAD
// tests/portfolio.spec.ts
import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../pages/portfolioPage';
=======
// features/step-definitions/portfolioSteps.ts
>>>>>>> origin/main
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../support/hooks';

Given('I navigate to the portfolio site', async () => {
  await page.goto('https://rgmichaels.github.io/portfolio/');
});

<<<<<<< HEAD
Given('I navigate to the portfolio site', async () => {
  await page().goto('https://rgmichaels.github.io/portfolio/');
=======
Then('I should see the name {string}', async (name: string) => {
  await expect(page.getByRole('heading', { name })).toBeVisible();
});

Then('I should see a {string} link', async (linkText: string) => {
  await expect(page.getByRole('link', { name: new RegExp(linkText, 'i') })).toBeVisible();
});
Then('the GitHub link should point to {string}', async (url: string) => {
  const link = page.getByRole('link', { name: 'GitHub', exact: true });
  await expect(link).toHaveAttribute('href', url);
});

Then('the Resume link should point to {string}', async (url: string) => {
  const link = page.getByRole('link', { name: /Resume/i });
  await expect(link).toHaveAttribute('href', url);
>>>>>>> origin/main
});