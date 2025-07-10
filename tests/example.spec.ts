import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { log } from '../utils/logger';

test('example with logging', async ({ page }) => {
  const home = new HomePage(page);

  log('Navigating to homepage');
  await home.goto();

  log('Asserting title');
  await home.assertTitleContains('Example Domain');
});
 