import {FullConfig, chromium} from "@playwright/test";

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.gopax.co.kr/signin');

  await page.fill('[placeholder="휴대전화 번호 또는 이메일 주소 입력"]', "boh0012@naver.com")
  await page.fill('[placeholder="비밀번호 입력"]', "Asd369246*")
  await page.locator('.email-verification-button').click()

  await page.fill('#pin-1', "3")
  await page.fill('#pin-2', "6")
  await page.fill('#pin-3', "9")
  await page.fill('#pin-4', "2")
  await page.fill('#pin-5', "4")
  await page.fill('#pin-6', "6")

  await page.waitForTimeout(3000)

  process.env.SESSION_STORAGE = await page.evaluate(() => JSON.stringify(sessionStorage));
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close()
}

export default globalSetup
