# @ebarooni/dev-tools

<p align="center">
    <img src="https://img.shields.io/maintenance/yes/2024?style=flat-square" />
    <img src="https://img.shields.io/github/package-json/v/ebarooni/dev-tools" />
    <br>
    <img src="https://img.shields.io/github/commit-activity/y/ebarooni/dev-tools" />
    <img src="https://img.shields.io/github/repo-size/ebarooni/dev-tools" />
</p>

This repository is a collection of tools and configurations frequently used across various projects. It centralizes and
streamlines the management of these tools, making them easy to consume as npm packages in any project.

## Contents

This monorepo contains various tools and configurations, including but not limited to:

- **ESLint Configurations**: Custom ESLint configurations for linting JavaScript and TypeScript code.
  - _**JavaScript**_: `@ebarooni/eslint-config/js`
  - _**TypeScript**_: `@ebarooni/eslint-config/ts`
  - _**Angular**_:
    - Recommended: `@ebarooni/eslint-config/angular-recommended`
    - Recommended Type Checked: `@ebarooni/eslint-config/angular-recommended-type-checked`
    - Strict: `@ebarooni/eslint-config/angular-strict`
    - Strict Type Checked: `@ebarooni/eslint-config/angular-strict-type-checked`
- **Prettier Configurations**: Custom Prettier configurations for consistent code formatting.
- **Stylelint Configurations**: Custom Stylelint configurations for linting CSS, SCSS, and other style sheets.
- **SwiftLint Configuration**: Custom SwiftLint configuration for linting and formatting swift files.

## Getting Started

### Prerequisites

Before using the packages in this monorepo, ensure the following are installed:

#### [Homebrew](https://brew.sh/)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### [nvm](https://formulae.brew.sh/formula/nvm)

```bash
brew install nvm
```

### Installation

Each package from the monorepo can be installed individually via npm. Below are examples of how to install some of the packages:

#### [ESLint Config](packages/eslint-config/README.md)

```bash
npm i-D @ebarooni/eslint-config
```

#### [Prettier Config](packages/prettier-config/README.md)

```bash
npm i -D @ebarooni/prettier-config
```

#### [Stylelint Config](packages/stylelint-config/README.md)

```bash
npm i -D @ebarooni/stylelint-config
```

#### [SwiftLint Config](packages/swiftlint-config/README.md)

```bash
npm i -D @ebarooni/swiftlint-config
```

## Usage

### ESLint

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

### Prettier

To use the configuration in a project, reference the module in your `package.json`:

```json
{
  "name": "my-cool-library",
  "version": "9000.0.1",
  "prettier": "@ebarooni/prettier-config"
}
```

### Stylelint

To use the Stylelint configuration in a project, extend it in the `.stylelintrc.json` file:

```json
{
  "extends": ["@ebarooni/stylelint-config"]
}
```

### SwiftLint

To use the configuration in a project, create a `swiftlint.config.js` file:

```js
module.exports = {
  ...require("@ebarooni/swiftlint-config"),
  included: ["${PWD}/ios"],
};
```

## Contributing

Contributions are welcome. If there are any suggestions, bug reports, or improvements, please open an issue or submit a pull request.

### Development

To set up the development environment:

1. Clone the repository:

   ```bash
   git clone git@github.com:ebarooni/dev-tools.git
   ```

2. Install dependencies:
   ```bash
   cd dev-tools
   npm i
   ```

## License

This repository is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for more details.
