import eslintConfigPrettier from "eslint-config-prettier";
import markdown from "@eslint/markdown";

export default {
  files: ["**/*.md"],
  ...markdown.configs.recommended[0],
  ...eslintConfigPrettier,
};
