import eslintConfigPrettier from "eslint-config-prettier";
import json from "@eslint/json";

export default {
  files: ["**/*.json"],
  ignores: ["**/package-lock.json"],
  language: "json/json",
  ...json.configs.recommended,
  ...eslintConfigPrettier,
};
