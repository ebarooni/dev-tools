export default {
  external: ["stylelint", "stylelint-config-standard-scss"],
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
