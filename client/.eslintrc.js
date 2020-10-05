/* eslint-disable */

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    "airbnb-typescript",
    // "airbnb-hooks",
    "eslint:recommended",
    "plugin:jsx-a11y/strict",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "better-styled-components"],
  rules: {
    "@typescript-eslint/quotes": "off", // Use whatever quotes you want
    "@typescript-eslint/no-inferrable-types": "off", // Inferrable types aren't bad
    "@typescript-eslint/indent": "off", // Prettier will handle my styles
    "comma-dangle": 0, // Trailing commas are useless
    "max-len": 0, // Prettier will handle my styles
    "no-console": 0, // It is what it is
    "import/prefer-default-export": "off", // I never use default exports in my .style.ts files
    "react/jsx-one-expression-per-line": "off",
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": "off",
    "operator-linebreak": "off",
    "prefer-promise-reject-errors": "off",
    "object-curly-newline": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-cycle": "off",
    "no-confusing-arrow": "off",
    "consistent-return": "1",
    "no-else-return": "off",
    "nonblock-statement-body-position": "off",
    curly: "off",
    "import-order": "off",
    "no-prototype-builtins": "off",
    "no-lonely-if": "off",
  },
};
