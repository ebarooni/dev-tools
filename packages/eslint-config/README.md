# @ebarooni/eslint-config

A shareable and extensible ESLint configuration for JavaScript, TypeScript, Angular, Markdown, and JSON projects.

## Prerequisites

Ensure the required peer dependencies are installed:

```sh
npm install -D eslint @eslint/js @eslint/markdown @eslint/json typescript typescript-eslint angular-eslint eslint-config-prettier eslint-plugin-promise
```

For TypeScript projects, consider creating a `tsconfig.eslint.json` file to prevent issues with project-wide type checking:

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

To install the ESLint configuration package, run:

```sh
npm install -D @ebarooni/eslint-config
```

## Usage

### JavaScript ESLint Configuration

For JavaScript projects that don’t use TypeScript:

Ensure `"type": "module"` is set in `package.json`:

```json
{
  "name": "my-project",
  "type": "module"
}
```

Then, create `eslint.config.js` or `eslint.config.mjs`:

```js
import eb from "@ebarooni/eslint-config";

export default {
  ...eb.javascript,
  files: ["*.js", "*.mjs"],
  ignores: ["*.html"],
};
```

### TypeScript ESLint Configuration

For TypeScript projects, extending the **JavaScript configuration**:

```js
// @ts-check
import eb from "@ebarooni/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(...eb.typescript, {
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.eslint.json", "./packages/*/tsconfig.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

### Angular ESLint Configuration

For Angular projects, extending the **TypeScript configuration**:

```js
// @ts-check
import eb from "@ebarooni/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(...eb.angular, {
  languageOptions: {
    parserOptions: {
      project: ["**/tsconfig*.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

### Markdown ESLint Configuration

To enable linting for Markdown files:

```js
import eb from "@ebarooni/eslint-config";

export default {
  eb.markdown,
  files: ["*.md"]
};
```

### JSON ESLint Configuration

To enable linting for JSON files:

```js
import eb from "@ebarooni/eslint-config";

export default {
  eb.json,
  files: ["*.json"]
};
```

## Helper Scripts

To simplify linting and fixing errors, add these scripts to your `package.json`:

```json
{
  "scripts": {
    "eslint": "npx eslint",
    "eslint:check": "npm run eslint -- .",
    "eslint:fix": "npm run eslint . --fix"
  }
}
```

Run these commands:

- **Check for linting issues:**
  ```sh
  npm run eslint:check
  ```
- **Automatically fix linting errors:**
  ```sh
  npm run eslint:fix
  ```

---

## Customizing the Configuration

This ESLint config is extensible, allowing you to customize it for your project.

### Custom Rules

To override specific rules, extend the configuration in `eslint.config.js`:

```js
import eb from "@ebarooni/eslint-config";

export default {
  ...eb.typescript,
  rules: {
    "no-console": "off",
    indent: ["error", 4],
  },
};
```

### Directory-Specific Rules

If you want different rules per directory:

```js
import eb from "@ebarooni/eslint-config";

export default [
  {
    ...eb.javascript,
    files: ["src/**/*.js"],
  },
  {
    ...eb.typescript,
    files: ["src/**/*.ts"],
  },
  {
    ...eb.markdown,
    files: ["docs/**/*.md"],
  },
  {
    ...eb.json,
    files: ["config/**/*.json"],
  },
];
```
