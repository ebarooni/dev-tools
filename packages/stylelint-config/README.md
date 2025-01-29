# **@ebarooni/stylelint-config**

A **shareable Stylelint configuration** for enforcing best practices in **CSS, SCSS, and other style sheets**.

---

## **📌 Prerequisites**

Ensure the required peer dependencies are installed before using this package:

```sh
npm install -D stylelint stylelint-config-standard-scss
```

---

## **📥 Installation**

To install the package, run:

```sh
npm install -D @ebarooni/stylelint-config
```

---

## **🚀 Usage**

Extend this configuration in your **`.stylelintrc.json`** file:

```json
{
  "extends": ["@ebarooni/stylelint-config"]
}
```

### **🔧 Linting & Auto-Fixing Scripts**

Add these scripts to your `package.json` for **linting and fixing style files**:

```json
{
  "scripts": {
    "stylelint": "npx stylelint",
    "stylelint:check": "npm run stylelint -- \"**/*.{css,scss}\"",
    "stylelint:fix": "npm run stylelint -- \"**/*.{css,scss}\" --fix"
  }
}
```

- **Check for style errors:**
  ```sh
  npm run stylelint:check
  ```
- **Automatically fix style issues:**
  ```sh
  npm run stylelint:fix
  ```

---

## **📜 Advanced Configuration**

This package supports **custom overrides** and **ignored files** based on project structure.

### **📍 Ignoring Specific Files**

You can exclude specific directories or files by adding an `ignoreFiles` field:

```json
{
  "ignoreFiles": ["example/(ios|android)/**/*.{css,scss}"]
}
```

### **📍 Directory-Specific Overrides**

If you need different rules for specific directories, use the `overrides` field:

```json
{
  "overrides": [
    {
      "files": ["example/**/*.{css,scss}"],
      "extends": ["@ebarooni/stylelint-config"]
    }
  ]
}
```
