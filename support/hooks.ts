<<<<<<< HEAD
import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from 'playwright';

setDefaultTimeout(60 * 1000); // 60 seconds timeout

let browser: Browser;
let context: BrowserContext;
export let page: Page;  // Export directly

Before(async function () {
  browser = await chromium.launch({ headless: true }); // Set false to debug
  context = await browser.newContext();
  page = await context.newPage();
});

After(async function () {
  await page?.close();
  await context?.close();
  await browser?.close();
=======
// support/hooks.ts
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
>>>>>>> origin/main
});
