import {test} from "@playwright/test";

test.describe("example2", () => {
  test("signin gopax", async ({ page }) => {
    const sessionStorage = process.env.SESSION_STORAGE;

    await page.goto('https://www.gopax.co.kr')

    if (sessionStorage) {
      const storage: string = JSON.parse(sessionStorage);
      await page.evaluate(storage => {
        for (const [key, value] of Object.entries(storage)) {
          window.sessionStorage.setItem(key, value);
        }
      }, storage)
    }

   await page.waitForTimeout(5000000)
  })
})
