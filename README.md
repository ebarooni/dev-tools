# @ebarooni/dev-tools

This repository is a collection of tools and configurations frequently used across various projects. It centralizes and 
streamlines the management of these tools, making them easy to consume as npm packages in any project.

## Contents

This monorepo contains various tools and configurations, including but not limited to:

- ~~**ESLint Configurations**: Custom ESLint configurations for linting JavaScript and TypeScript code.~~
- ~~**Prettier Configurations**: Custom Prettier configurations for consistent code formatting.~~
- **Stylelint Configurations**: Custom Stylelint configurations for linting CSS, SCSS, and other style sheets.

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

#### Stylelint Config

```bash
npm i @ebarooni/stylelint-config
```

## Usage

### Stylelint

To use the Stylelint configuration in a project, extend it in the `.stylelintrc.json` file:

```json
{
   "overrides": [
      {
         "extends": ["@ebarooni/stylelint-config"]
      }
   ]
}
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