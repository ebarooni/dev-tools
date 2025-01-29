# **@ebarooni/swiftlint-config**

A **shareable SwiftLint configuration** for enforcing Swift style guidelines and maintaining code consistency.

---

## **📌 Prerequisites**

### **1️⃣ Install SwiftLint**

Ensure you have `swiftLint` installed on your system:

```sh
brew install swiftlint
```

### **2️⃣ Install Peer Dependencies**

Since `swiftLint` runs as an external tool, install the necessary peer dependencies:

```sh
npm install -D swiftlint
```

### **3️⃣ Add SwiftLint to Your Scripts**

To streamline usage, add the following script to your `package.json`:

```json
{
  "scripts": {
    "swiftlint": "node-swiftlint"
  }
}
```

---

## **📥 Installation**

To install the shared SwiftLint configuration, run:

```sh
npm install -D @ebarooni/swiftlint-config
```

---

## **🚀 Usage**

### **Basic Configuration**

To apply this SwiftLint configuration in your project, create a `swiftlint.config.js` file in the project root:

```js
module.exports = {
  ...require("@ebarooni/swiftlint-config"),
  included: ["${PWD}/ios"],
  excluded: ["${PWD}/node_modules`, `${PWD}/ios/Pods"],
};
```

---

## **📜 Helper Scripts**

For convenience, add these **linting and formatting commands** to your `package.json` scripts:

```json
{
  "scripts": {
    "swiftlint:check": "npm run swiftlint -- lint",
    "swiftlint:fix": "npm run swiftlint -- --fix --format"
  }
}
```

- **Check Swift code for issues:**

  ```sh
  npm run swiftlint:check
  ```

- **Fix and format Swift code automatically:**
  ```sh
  npm run swiftlint:fix
  ```

---

## **🛠 Extending the Configuration**

If you need to **customize the rules**, create a `swiftlint.config.js` file and override specific properties:

```js
module.exports = {
  ...require("@ebarooni/swiftlint-config"),
  // Override rules here
};
```
