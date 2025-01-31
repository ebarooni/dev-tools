const eslintConfigPrettier = require("eslint-config-prettier");
const json = require("@eslint/json").default;

module.exports = {
  files: ["**/*.json"],
  ignores: ["**/package-lock.json"],
  language: "json/json",
  ...json.configs.recommended,
  ...eslintConfigPrettier,
};
