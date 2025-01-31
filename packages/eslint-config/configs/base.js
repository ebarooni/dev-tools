const eslintConfigPrettier = require("eslint-config-prettier");
const json = require("@eslint/json").default;
const pluginJs = require("@eslint/js");
const pluginPromise = require("eslint-plugin-promise");

module.exports = [
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
    rules: {
      "sort-imports": "error",
      "sort-keys": "error",
      "sort-vars": "error",
    },
  },
];
