// @ts-check

import angular from "angular-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import typescript from "./typescript.mjs";

export default tseslint.config(
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
