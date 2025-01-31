# @ebarooni/prettier-config

A shareable Prettier configuration for JavaScript, TypeScript, and web-focused projects.

---

## Prerequisites

This package requires `prettier` as a peer dependency. If you haven't installed it yet, run:

```sh
npm install -D prettier
```

---

## Installation

To install the package, run:

```sh
npm install -D @ebarooni/prettier-config
```

---

## Usage

### Basic Configuration

To apply this Prettier configuration, add the following entry to your `package.json`:

```json
{
  "prettier": "@ebarooni/prettier-config"
}
```

---

## Prettier Scripts

To streamline formatting, add these scripts to your `package.json`:

```json
{
  "scripts": {
    "prettier": "npx prettier",
    "prettier:check": "npm run prettier -- . --check",
    "prettier:fix": "npm run prettier -- . --write"
  }
}
```

Run these commands:

- **Check formatting:**

  ```sh
  npm run prettier:check
  ```

  Verifies if files adhere to the configured formatting rules.

- **Fix formatting issues:**
  ```sh
  npm run prettier:fix
  ```
  Automatically reformats all files to match the expected style.

---

## Customizing the Configuration

If you need to modify the settings, create a `.prettierrc.js` file and extend the configuration:

```js
import ebarooniPrettierConfig from "@ebarooni/prettier-config";

export default {
  ...ebarooniPrettierConfig,
  semi: false, // Example: Disable semicolons
  tabWidth: 4, // Example: Set tab width to 4 spaces
};
```

---

## Ignoring Files

To exclude files from being formatted by Prettier, create a `.prettierignore` file in the project root:

```gitignore
# Ignore markdown files in specific directories
**/ios/*.md
**/android/*.md
```
