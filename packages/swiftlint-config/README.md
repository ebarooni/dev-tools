# @ebarooni/swiftlint-config

This package provides custom SwiftLint configurations for linting and formatting swift files.

## Prerequisites

1. Install [SwiftLint](https://github.com/realm/SwiftLint)

   ```bash
   brew install swiftlint
   ```

2. The peer dependencies might need to be installed separately. To install the peer dependencies run the following command:

   ```bash
   npm i -D swiftlint
   ```

3. Add a script to your project's `package.json`:

   ```json
   {
     "scripts": {
       "swiftlint": "node-swiftlint"
     }
   }
   ```

## Installation

To install the package, run the following command:

```bash
npm i -D @ebarooni/swiftlint-config
```

## Usage

To use the configuration in a project, create a `swiftlint.config.js` file:

```js
module.exports = {
  ...require("@ebarooni/swiftlint-config"),
  included: ["${PWD}/ios"],
  excluded: ["${PWD}/node_modules", "${PWD}/ios/Pods"],
};
```

### Scripts

The following helper scripts can be added to `package.json`:

```json
{
  "scripts": {
    "lint:swift": "npm run swiftlint -- lint",
    "fmt:swift": "npm run swiftlint -- --fix --format"
  }
}
```

### Extending

To extend the configuration or overwrite some properties from the shared configuration, import the file in a `swiftlint.config.js`
file and export the modifications, e.g:

```js
module.exports = {
  ...require("@ebarooni/swiftlint-config"),
  // override options here
};
```
