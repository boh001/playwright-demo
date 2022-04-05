import {devices, PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
  forbidOnly: true,
  globalSetup: "example1.setup.ts",
  use: {
    headless: false,
    launchOptions: {
      slowMo: 100,
    },
    storageState: 'example1.state.json',
    ...devices["Desktop Chrome"]
  },
}

export default config
