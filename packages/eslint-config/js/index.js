const js = require("@eslint/js");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = {
  configs: {
    base: {
      name: "ebarooni/base",
      ...js.configs.recommended,
    },
    recommended: {
      name: "ebarooni/recommended",
      ...js.configs.recommended,
      ...eslintPluginPrettierRecommended,
    },
  },
};
