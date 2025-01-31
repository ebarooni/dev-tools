// @ts-check

const angular = require("angular-eslint");
const eslintConfigPrettier = require("eslint-config-prettier");
const json = require("@eslint/json").default;
const pluginJs = require("@eslint/js");
const pluginPromise = require("eslint-plugin-promise");
const tseslint = require("typescript-eslint");

module.exports = tseslint.config(
  {
    extends: [
      pluginJs.configs.recommended,
      pluginPromise.configs["flat/recommended"],
      eslintConfigPrettier,
    ],
    files: ["**/*.js", "**/*.cjs", "**/*.mjs", "**/*.jsx"],
  },
  {
    extends: [
      pluginJs.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...angular.configs.tsRecommended,
      pluginPromise.configs["flat/recommended"],
      eslintConfigPrettier,
    ],
    files: ["**/*.ts"],
    processor: angular.processInlineTemplates,
  },
  {
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
      eslintConfigPrettier,
    ],
    files: ["**/*.html"],
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
