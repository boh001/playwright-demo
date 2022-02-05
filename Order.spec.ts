import { test } from '@playwright/test'

test.describe("", () => {
  test.use({

  })
  test('Market-Order XRP', async ({ page }) => {
    // 홈페이지로 이동
    await page.goto('https://www.gopax.co.kr/signin')

    // 아이디 입력
    await page.fill('[placeholder="휴대전화 번호 또는 이메일 주소 입력"]', "")
    // 비밀번호 입력
    await page.fill('[placeholder="비밀번호 입력"]', "")

    await page.locator('.email-verification-button').click()

    // pin번호 입력
    // const answer = ["3", "6", "9", "2", "4", "6"]
    //
    // const pins = await page.$$('input')
    // for (const pin of pins) {
    //   await pin.fill()
    // }

    await page.fill('#pin-1', "3")
    await page.fill('#pin-2', "6")
    await page.fill('#pin-3', "9")
    await page.fill('#pin-4', "2")
    await page.fill('#pin-5', "4")
    await page.fill('#pin-6', "6")

    // 팝업창 닫기
    await page.locator('button:has-text("확인")').click()

    // 매수할 코인 검색
    await page.fill('[placeholder="코인명, 심볼로 검색합니다."]', "xrp")

    // 매수할 코인 서택
    await page.locator('tr:has-text("리플")').click()

    // 주문 유형 선택
    await page.locator('button:has-text("시장가")').locator("visible=true").click()

    // 금액 선택
    await page.locator(".SliderRangeButton").locator("visible=true").click({ position: { x: 100, y: 10 }})

    await page.locator("asdf").click()
  })
})
