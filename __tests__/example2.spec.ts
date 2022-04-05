import {test} from "@playwright/test";

test.describe("example2", () => {
  test("signin gopax", async ({ page }) => {
    const jsonStorage = process.env.SESSION_STORAGE;

    await page.goto('https://www.gopax.co.kr')

    if (jsonStorage) {
      const parsedObj: string = JSON.parse(jsonStorage);
      await page.evaluate(obj => {
        for (const [key, value] of Object.entries(obj)) {
          window.sessionStorage.setItem(key, value);
        }
      }, parsedObj)
    }

    await page.goto('https://www.gopax.co.kr/exchange')

    await page.waitForTimeout(3000)
  })
})
