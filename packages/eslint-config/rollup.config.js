export default {
  external: [
    "@eslint/js",
    "@eslint/json",
    "@eslint/markdown",
    "angular-eslint",
    "eslint",
    "eslint-config-prettier",
    "eslint-plugin-promise",
    "typescript",
    "typescript-eslint",
  ],
  input: "index.js",
  output: {
    file: "index.cjs",
    format: "cjs",
    generatedCode: {
      constBindings: true,
      objectShorthand: true,
    },
  },
};
