import {devices, PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
  forbidOnly: true,
  use: {
    headless: false,
    launchOptions: {
      slowMo: 100,
    },
    ...devices["Desktop Chrome"]
  },
}

export default config
