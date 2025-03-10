import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "next/core-web-vitals",
    "airbnb",
    "airbnb-typescript",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended"
  ),
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-duplicate-imports": "error",
      "@typescript-eslint/comma-dangle": ["error", "never"],
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "unicorn/filename-case": "off",
      "unicorn/prevent-abbreviations": "off",
      "react/require-default-props": "off",
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": "off",
      "no-console": "warn",
      "react/button-has-type": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "react/no-array-index-key": "off",
      "implicit-arrow-linebreak": "off",
      "function-paren-newline": "off",
      "object-curly-newline": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-wrap-multilines": "off",
      "react/prop-types": "off",
      "react/jsx-one-expression-per-line": "off",
      "no-underscore-dangle": "off",
      "linebreak-style": "off",
      "no-confusing-arrow": "off",
      "react/jsx-curly-newline": "off",
      "unicorn/expiring-todo-comments": "off",
      "unicorn/no-null": "off",
      "unicorn/no-array-for-each": "off",
      "@typescript-eslint/indent": "off",
      "unicorn/catch-error-name": "off",
      "operator-linebreak": "off",
      "no-nested-ternary": "off",
    },
  },
];
