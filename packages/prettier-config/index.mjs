export default {
  overrides: [
    {
      files: "*.html",
      options: {
        parser: "angular",
      },
    },
    {
      files: "*.md",
      options: {
        parser: "markdown",
      },
    },
  ],
};
