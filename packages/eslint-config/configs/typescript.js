// @ts-check

const eslintConfigPrettier = require("eslint-config-prettier");
const json = require("@eslint/json").default;
const pluginJs = require("@eslint/js");
const pluginPromise = require("eslint-plugin-promise");
const tseslint = require("typescript-eslint");

module.exports = tseslint.config(
  {
    extends: [
      pluginJs.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      pluginPromise.configs["flat/recommended"],
      eslintConfigPrettier,
    ],
    files: ["**/*.ts", "**/*.cts", "**/mts", "**/*.tsx"],
  },
  {
    extends: [json.configs.recommended],
    files: ["**/*.json"],
    ignores: ["**/package-lock.json"],
    language: "json/json",
  },
  {
    rules: {
      "sort-imports": "error",
      "sort-keys": "error",
      "sort-vars": "error",
    },
  },
);
