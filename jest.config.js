const dotenv = require("dotenv");
const nextJest = require("next/jest");
const { loadEnvConfig } = require("@next/env");

dotenv.config({
  path: ".env.development",
});

const projectDir = process.cwd();
loadEnvConfig(projectDir);
const createJestConfig = nextJest({
  dir: ".",
});
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
