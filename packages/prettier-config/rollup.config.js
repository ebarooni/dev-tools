export default {
  external: ["prettier"],
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
