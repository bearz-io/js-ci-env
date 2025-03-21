/**
 * ## Overview
 *
 * The `ci-env` module implements it's own `@bearz/ansi/writer` to enable
 * logging commands for Azure DevOps and Github.
 *
 * This module will evolve over time to enable using common ci environment
 * variables and make it easier to deal with secrets, environment variables
 * and outputs in ci pipelines.
 *
 * ![logo](https://raw.githubusercontent.com/bearz-io/js/refs/heads/main/eng/assets/bearz.io.png)
 *
 * [![JSR](https://jsr.io/badges/@bearz/ci-env)](https://jsr.io/@bearz/ci-env)
 * [![npm version](https://badge.fury.io/js/@bearz%2Fci-env.svg)](https://badge.fury.io/js/@bearz%2Fci-env)
 * [![GitHub version](https://badge.fury.io/gh/bearz-io%2Fjs-ci-env.svg)](https://badge.fury.io/gh/bearz-io%2Fjs-ci-env)
 *
 * ## Documentation
 *
 * Documentation is available on [jsr.io](https://jsr.io/@bearz/ci-env/doc)
 *
 * A list of other modules can be found at [github.com/bearz-io/js](https://github.com/bearz-io/js)
 *
 * ## Usage
 *
 * ```typescript
 * import { writer, CI, CI_DRIVER , setCiVariable } from "@bearz/ci-env";
 *
 * // if not using azure devops/github, the write falls back to using ansi codes.
 * // when using azure devops/github, the writer will use azure devops logging commands
 * // or github workflow commands where possible.
 *
 * writer.info("message");
 * writer.warn("warning"); // for azure devops/github this emits a warnning logging command
 * writer.error("test"); // for azure devops/github this emits a warnning logging command
 *
 * // for azure devops/github this emits a commmand logging command.
 * // this does not executing a command, but simply outputs it.
 * writer.command("git", ["commit", "-a", "-m", "test")
 *
 * console.log(CI);  // outputs if running in a CI pipeline
 * console.log(CI_DRIVER); // outputs the CI Driver name.
 *
 * // in github, azure devops, this uses GITHUB_ENV or ##vso[task.setvariable variable=TEST]one
 * // Outside of github/azure devops, it uses the BEARZ_CI_ENV variable which must be a
 * // file path.  setCiVariable will write
 * // values to that file path which can be loaded by calling `loadCiEnvVars`.  However its
 * // up to you to manage how you store the path from BEARZ_CI_ENV.
 * setCiVariable("TEST", "one");
 * setCiVariable("SECRET", "my pw", { secret: true});
 * ```
 *
 * ## License
 *
 * [MIT License](./LICENSE.md)
 * @module
 */
export * from "./driver.js";
export * from "./writer.js";
export * from "./vars.js";
