# @ebarooni/eslint-config

This package provides custom ESLint configurations for formatting Javascript and various web-focused languages.

## Prerequisites

The peer dependencies might need to be installed separately. To install the peer dependencies run the following command:

```bash
npm i -D eslint @eslint/js @types/eslint__js typescript-eslint angular-eslint prettier eslint-plugin-prettier eslint-config-prettier
```

## Installation

To install the package, run the following command:

```bash
npm i -D @ebarooni/eslint-config
```

## Usage

To use the configuration in a project, reference the module in your `eslint.config.js`:

```js
import ebarooniBaseESLintConfig from "@ebarooni/eslint-config";

export default {
  ...ebarooniBaseESLintConfig,
};
```
