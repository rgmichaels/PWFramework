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
});
