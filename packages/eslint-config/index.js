import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const ebarooniBaseESLintConfig = {
  meta: {
    name: "@ebarooni/eslint-config-base",
    version: "1.0.0",
  },
  rules: {
    ...js.configs.recommended,
    ...eslintPluginPrettierRecommended,
  },
};

export default ebarooniBaseESLintConfig;
