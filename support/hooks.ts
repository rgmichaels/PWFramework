import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
export let page: Page;

setDefaultTimeout(60 * 1000);

Before(async () => {
  browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
});

After(async () => {
  await browser.close();
});

