import {devices, PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
  forbidOnly: true,
  testDir: ".",
  use: {
    headless: false,
    viewport:   { width: 1440, height: 1200 },
    launchOptions: {
      // slowMo: 100,
    }
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"]}
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"]}
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ]
}

export default config
