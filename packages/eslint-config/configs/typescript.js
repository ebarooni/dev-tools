// @ts-check

import eslintConfigPrettier from "eslint-config-prettier";
import javascript from "./javascript.js";
import tseslint from "typescript-eslint";

export default tseslint.config(
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
