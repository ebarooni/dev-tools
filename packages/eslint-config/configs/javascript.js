import eslintConfigPrettier from "eslint-config-prettier";
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
    rules: {
      "sort-imports": "error",
      "sort-keys": "error",
      "sort-vars": "error",
    },
  },
];
