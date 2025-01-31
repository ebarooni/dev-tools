const eslintConfigPrettier = require("eslint-config-prettier");
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
    rules: {
      "sort-imports": "error",
      "sort-keys": "error",
      "sort-vars": "error",
    },
  },
];
