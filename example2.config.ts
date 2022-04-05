import {devices, PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
  forbidOnly: true,
  globalSetup: "example2.setup.ts",
  use: {
    headless: false,
    launchOptions: {
      slowMo: 100,
    },
    storageState: 'example2.state.json',
    ...devices["Desktop Chrome"]
  },
}

export default config
