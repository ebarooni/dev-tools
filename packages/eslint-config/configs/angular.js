// @ts-check

const angular = require("angular-eslint");
const eslintConfigPrettier = require("eslint-config-prettier");
const tseslint = require("typescript-eslint");
const typescript = require("typescript");

module.exports = tseslint.config(
  {
    extends: [
      ...typescript,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...angular.configs.tsRecommended,
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
    rules: {
      "sort-imports": "error",
      "sort-keys": "error",
      "sort-vars": "error",
    },
  },
);
