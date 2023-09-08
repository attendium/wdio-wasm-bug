import { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  runner: "browser",
  reporters: ["spec"],
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  specs: ["specs/**/*.spec.ts"],
  mochaOpts: {
    ui: "bdd",
    timeout: 6000000,
  },
};
