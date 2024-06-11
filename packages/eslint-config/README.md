# @ebarooni/eslint-config

This package provides custom ESLint configurations for formatting Javascript and various web-focused languages.

## Prerequisites

The peer dependencies might need to be installed separately. To install the peer dependencies run the following command:

```bash
npm i -D eslint @eslint/js @types/eslint__js typescript typescript-eslint angular-eslint prettier eslint-plugin-prettier eslint-config-prettier
```

## Installation

To install the package, run the following command:

```bash
npm i -D @ebarooni/eslint-config
```

## Usage

To use the configuration in a project, reference the module in your `eslint.config.js`:

### Base and recommended configs

#### ESM

```js
//  eslint.config.js or eslint.config.mjs

import eb from "@ebarooni/eslint-config/js";

export default {
  ...eb.configs.base, // Or ...eb.configs.recommended
  files: ["*.js", "*.mjs", "*.jsx"],
  ignores: ["*.html"],
};
```

#### CommonJS

```js
//  eslint.config.js

import eb from "@ebarooni/eslint-config/js";

module.exports = {
  ...eb.configs.base, // Or ...eb.configs.recommended
  files: ["*.js", "*.mjs", "*.jsx"],
  ignores: ["*.html"],
};
```
