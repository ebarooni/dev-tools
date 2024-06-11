import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default {
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
