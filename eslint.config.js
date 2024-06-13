const eb = require("@ebarooni/eslint-config/js");

module.exports = {
  ...eb.configs.recommended,
  files: ["*.js", "*.mjs"],
};
