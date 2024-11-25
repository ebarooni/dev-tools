module.exports = {
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
    {
      files: "*.json",
      options: {
        parser: "json",
      },
    },
    {
      files: "*.yml",
      options: {
        parser: "yaml",
      },
    },
  ],
};
