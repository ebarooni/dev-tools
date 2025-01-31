import eslintConfigPrettier from "eslint-config-prettier";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import pluginJs from "@eslint/js";
import pluginPromise from "eslint-plugin-promise";

export default [
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs", "**/*.jsx"],
    ...pluginJs.configs.recommended,
    ...pluginPromise.configs["flat/recommended"],
    ...eslintConfigPrettier,
  },
  {
    files: ["**/*.json"],
    ignores: ["**/package-lock.json"],
    language: "json/json",
    ...json.configs.recommended,
  },
  {
    files: ["**/*.md"],
    ...markdown.configs.recommended[0],
  },
  {
    rules: {
      "sort-imports": "error",
      "sort-keys": "error",
      "sort-vars": "error",
    },
  },
];
