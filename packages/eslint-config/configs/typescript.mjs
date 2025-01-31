// @ts-check

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
