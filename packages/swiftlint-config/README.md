# @ebarooni/swiftlint-config

A shareable SwiftLint configuration for enforcing Swift style guidelines and maintaining code consistency.

---

## Prerequisites

### 1. Install SwiftLint

Ensure `swiftLint` is installed on your system:

```sh
brew install swiftlint
```

### 2. Install Peer Dependencies

Since `swiftLint` runs as an external tool, install the necessary peer dependencies:

```sh
npm install -D swiftlint
```

### 3. Add SwiftLint to Your Scripts

To simplify usage, add the following script to your `package.json`:

```json
{
  "scripts": {
    "swiftlint": "node-swiftlint"
  }
}
```

---

## Installation

To install the shared SwiftLint configuration, run:

```sh
npm install -D @ebarooni/swiftlint-config
```

---

## Usage

### Basic Configuration

To apply this SwiftLint configuration, create a `swiftlint.config.js` file in the project root:

```js
module.exports = {
  ...require("@ebarooni/swiftlint-config"),
  included: ["${PWD}/ios"],
  excluded: ["${PWD}/node_modules", "${PWD}/ios/Pods"],
};
```

---

## Helper Scripts

To streamline linting and formatting, add these scripts to your `package.json`:

```json
{
  "scripts": {
    "swiftlint:check": "npm run swiftlint -- lint",
    "swiftlint:fix": "npm run swiftlint -- --fix --format"
  }
}
```

Run these commands:

- **Check Swift code for issues:**
  ```sh
  npm run swiftlint:check
  ```
- **Fix and format Swift code automatically:**
  ```sh
  npm run swiftlint:fix
  ```

---

## Customizing the Configuration

If you need to modify the rules, extend the configuration in `swiftlint.config.js`:

```js
module.exports = {
  ...require("@ebarooni/swiftlint-config"),
  rules: {
    line_length: {
      warning: 120,
    },
  },
};
```
