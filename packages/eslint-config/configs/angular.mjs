// @ts-check

import angular from "angular-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import pluginJs from "@eslint/js";
import pluginPromise from "eslint-plugin-promise";
import tseslint from "typescript-eslint";

export default tseslint.config(
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
    extends: [markdown.configs.recommended[0]],
    files: ["**/*.md"],
  },
  {
    rules: {
      "sort-imports": "error",
      "sort-keys": "error",
      "sort-vars": "error",
    },
  },
);
