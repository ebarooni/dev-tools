// @ts-check

const eslintConfigPrettier = require("eslint-config-prettier");
const javascript = require("javascript");
const tseslint = require("typescript-eslint");

module.exports = tseslint.config(
  {
    extends: [
      ...javascript,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      eslintConfigPrettier,
    ],
    files: ["**/*.ts", "**/*.cts", "**/mts", "**/*.tsx"],
  },
  {
    rules: {
      "sort-imports": "error",
      "sort-keys": "error",
      "sort-vars": "error",
    },
  },
);
