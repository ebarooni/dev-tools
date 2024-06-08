# @ebarooni/stylelint-config

This package provides custom Stylelint configurations for linting CSS, SCSS, and other style sheets.

## Prerequisites

The peer dependencies might need to be installed separately. To install the peer dependencies run the following command:

```bash
npm i -D postcss prettier stylelint stylelint-prettier stylelint-config-standard-scss
```

## Installation

To install the Stylelint configuration package, run the following command:

```bash
npm i -D @ebarooni/stylelint-config
```

## Usage

To use the configuration in a project, extend it in the `.stylelintrc.json` file:

```json
{
   "overrides": [
      {
         "extends": ["@ebarooni/stylelint-config"]
      }
   ]
}
```

### Example

- `ignoreFiles`: A pattern to ignore the files in a specific directory.
- `overrides`: In case different configurations are wanted for different directories.
- `overrides.files`: The directories that should apply the extended configuration.

```json
{
  "ignoreFiles": [
    "example/(ios|android)/**/*.(css|scss)"
  ],
  "overrides": [
    {
      "files": ["example/**/*.(css|scss)"],
      "extends": ["@ebarooni/stylelint-config"]
    }
  ]
}
```
