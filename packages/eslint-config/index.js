import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const ebarooniBaseESLintConfig = {
  ...js.configs.recommended,
  ...eslintPluginPrettierRecommended,
};

export default ebarooniBaseESLintConfig;
