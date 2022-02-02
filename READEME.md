# Playwright

* [공식 문서](https://playwright.dev/)
* [Github](https://github.com/microsoft/playwright)

현대 브라우저를 위한 MS에서 만든 E2E 테스트 프레임워크입니다.

## 테스트의 종류
![img_2.png](../playwright_demo/img_2.png)

### 단위 테스트
하나의 모듈을 기준으로 독립적으로 진행되는 가장 작은 단위의 테스트입니다.
모듈이란 애플리케이션에서 작동하는 하나의 기능 또는 메소드로 생각할 수 있습니다.

단위 테스트는 해당 모듈에 대한 독립적인 테스트이기 때문에 다른 모듈 대신에 가짜 모듈을
사용합니다.

### 통합 테스트
통합 테스트는 모듈을 통합하는 과정에서 모듈 간의 호환성을 확인하기 위한 테스트입니다.

통합 테스트의 목적은 여러 개의 모듈들로 구성된 애플리케이션의 통합된 모듈들이 올바르게 연계되어 동작하는지를 위한
검증입니다.

### E2E 테스트
실제 앱을 사용하는 사용자의 흐름에 대해 테스트를 위해서 실제 브라우저 환경에서 UI 변경 사항 및 시스템 전반에 대해서 테스트합니다.


## Playwright 기능

### Cross-language
`Playwright` API는  `Typescript`, `Javascript`, `Python`, `.NET`, `Java`과 같은 다양한 언어를 지원합니다.

### Cross-browser
`Playwright`는 모든 최신 브라우저(크로미움, 파이어폭스, 웹킷)을 지원합니다.

```ts
const config: PlaywrightTestConfig = {
  use: { 
    ...devices['Desktop Safari'] 
  },
}
```

### Test Mobile web
`Android`, `Mobile Safari` 테스트를 위한 모바일 플랫폼 환경도 지원합니다.

```ts
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  use: {
    ...devices["iPhone6"]
  }
}
```

### Auto-waiting
특정 작동을 실행하기 전에 작동하기 위한 요소들을 검사 후 작동합니다.
모든 관련 검사가 통과할 때까지 작동 대기한 다음 요청된 작업을 수행합니다.

- Attached
- Visible
- Stable
- Enabled
- Editable
- Receives Events

### Authentication
쿠키 혹은 로컬 스토리지
```ts
// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/login');
  await page.fill('input[name="user"]', 'user');
  await page.fill('input[name="password"]', 'password');
  await page.click('text=Sign in');
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;
```
```ts
// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve('./global-setup'),
  use: {
    // Tell all tests to load signed-in state from 'storageState.json'.
    storageState: 'storageState.json'
  }
};
export default config;
```

세션 스토리지
```ts
// Get session storage and store as env variable
const sessionStorage = await page.evaluate(() => JSON.stringify(sessionStorage));
process.env.SESSION_STORAGE = sessionStorage;

// Set session storage in a new context
const sessionStorage = process.env.SESSION_STORAGE;
await context.addInitScript(storage => {
  if (window.location.hostname === 'example.com') {
    const entries = JSON.parse(storage);
    for (const [key, value] of Object.entries(entries)) {
      window.sessionStorage.setItem(key, value);
    }
  }
}, sessionStorage);
```