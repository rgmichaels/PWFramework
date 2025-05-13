import { defineConfig } from '@playwright/test';

const envName = process.env.TEST_ENV || 'prod';
const env = require(`./config/env.${envName}`).default;

export default defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: env.baseURL,
  },
  reporter: [['html', { open: 'never' }]], // prevents auto-open on run
});
