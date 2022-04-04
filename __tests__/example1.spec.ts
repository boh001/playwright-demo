import {test} from "@playwright/test";

test.describe("example1", () => {
  test("signin gopax", async ({ page }) => {
    await page.goto('https://github.com/')
    await page.waitForTimeout(5000)
  })
})
