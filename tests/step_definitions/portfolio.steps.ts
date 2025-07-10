import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../support/hooks';  // adjust if needed

Given('I navigate to the portfolio site', async function () {
  await page.goto('https://rgmichaels.github.io/portfolio/');
});

Then('I should see the name {string}', async function (expectedName: string) {
  const bodyText = await page.textContent('body');
  expect(bodyText).toContain(expectedName);
});
