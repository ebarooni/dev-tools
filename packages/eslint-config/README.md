# @ebarooni/eslint-config

This package provides custom ESLint configurations for formatting Javascript and various web-focused languages.

## Prerequisites

The peer dependencies might need to be installed separately. To install the peer dependencies run the following command:

```bash
npm i -D eslint @eslint/js typescript typescript-eslint angular-eslint prettier eslint-plugin-prettier
```

If applicable, create a `tsconfig.eslint.json` file with the following content:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "noEmit": true
  },
  "include": ["src", "test", "tools"]
}
```

## Installation

To install the package, run the following command:

```bash
npm i -D @ebarooni/eslint-config
```

## Usage

To use the configuration in a project, reference the module in your `eslint.config.js`:

### Base and recommended configs

- #### ESM

  In `package.json`:

  ```json
  {
    "name": "my-cool-library",
    "version": "9000.0.1",
    "type": "module"
  }
  ```

  ```js
  // eslint.config.js or eslint.config.mjs

  import eb from "@ebarooni/eslint-config/js";

  export default {
    ...eb.configs.base, // Or ...eb.configs.recommended
    files: ["*.js", "*.mjs", "*.jsx"],
    ignores: ["*.html"],
  };
  ```

- #### CommonJS

  ```js
  // eslint.config.js

  const eb = require("@ebarooni/eslint-config/js");

  module.exports = {
    ...eb.configs.base, // Or ...eb.configs.recommended
    files: ["*.js", "*.mjs", "*.jsx"],
    ignores: ["*.html"],
  };
  ```

### Typescript config

- #### ESM

  In `package.json`:

  ```json
  {
    "name": "my-cool-library",
    "version": "9000.0.1",
    "type": "module"
  }
  ```

  ```js
  // eslint.config.js or eslint.config.mjs

  // @ts-check

  import eb from "@ebarooni/eslint-config/ts";
  import tseslint from "typescript-eslint";

  export default tseslint.config(...eb, {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.eslint.json", "./packages/*/tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  });
  ```

- #### CommonJS

  ```js
  // eslint.config.js

  // @ts-check

  const eb = require("@ebarooni/eslint-config/ts");
  const tseslint = require("typescript-eslint");

  module.exports = tseslint.config(...eb, {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.eslint.json", "./packages/*/tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  });
  ```

### Angular configs

- #### ESM

  ```js
  // eslint.config.js or eslint.config.mjs

  // @ts-check

  import eb from "@ebarooni/eslint-config/angular-strict";
  import tseslint from "typescript-eslint";

  export default tseslint.config(...eb, {
    languageOptions: {
      parserOptions: {
        project: ["**/tsconfig*.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  });
  ```

- #### CommonJS

  ```js
  // eslint.config.js

  // @ts-check

  const eb = require("@ebarooni/eslint-config/angular-strict");
  const tseslint = require("typescript-eslint");

  module.exports = tseslint.config(...eb, {
    languageOptions: {
      parserOptions: {
        project: ["**/tsconfig*.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  });
  ```
