import { chromium, FullConfig } from '@playwright/test';

async function example1Setup(config: FullConfig) {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://github.com/login');
  await page.fill('input[name="login"]', 'user');
  await page.fill('input[name="password"]', 'password');
  await page.click('input[type="submit"]');
  await page.waitForTimeout(3000)

  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'example1.state.json' });
  await browser.close();
}

export default example1Setup;
