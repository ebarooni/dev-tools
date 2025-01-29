# **@ebarooni/prettier-config**

A **shareable Prettier configuration** for JavaScript and web-focused projects.

---

## **📌 Prerequisites**

This package requires `prettier` as a peer dependency. If you haven't installed it yet, run:

```sh
npm install -D prettier
```

---

## **📥 Installation**

To install the package, use:

```sh
npm install -D @ebarooni/prettier-config
```

---

## **🚀 Usage**

### **Basic Configuration**

To apply this Prettier configuration, add the following entry to your `package.json`:

```json
{
  "prettier": "@ebarooni/prettier-config"
}
```

### **Prettier Scripts**

For convenience, add these commands to your `package.json` scripts:

```json
{
  "scripts": {
    "prettier": "npx prettier",
    "prettier:check": "npm run prettier -- . --check",
    "prettier:fix": "npm run prettier -- . --write"
  }
}
```

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

## **🛠 Extending the Configuration**

If you need to **override** or **extend** the default settings, create a `.prettierrc.js` file and modify it as needed:

```js
import ebarooniPrettierConfig from "@ebarooni/prettier-config";

export default {
  ...ebarooniPrettierConfig,
  semi: false, // Example: Disable semicolons
};
```

---

## **🚫 Ignoring Files**

To **exclude specific files or directories** from being formatted by Prettier, add them to a `.prettierignore` file in your project root:

```gitignore
# Ignore markdown files in specific directories
**/ios/*.md
**/android/*.md
```

---

## **📖 License**

This package is licensed under the **MIT License**.
