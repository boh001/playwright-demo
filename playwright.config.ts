import {devices, PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
  forbidOnly: true,
  testDir: "__tests__",
  globalSetup: "global-setup-session.ts",
  timeout: 1200000,
  use: {
    headless: false,
    viewport:   { width: 1440, height: 1200 },
    launchOptions: {
      // slowMo: 100,
    },
    storageState: 'storageState.json',
  },
  projects: [
    {
      name: "chromium",
        use: { ...devices["Desktop Chrome"]}
    }
  ]
}

export default config
