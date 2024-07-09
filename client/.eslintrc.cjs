module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "prettier",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "prettier"],
  rules: {
    "no-shadow": "off",
    "arrow-body-style": "off",
    "import/extensions": "off",
    "curly": ["error", "multi"],
    "react/button-has-type": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "semi": 1,
    "react/function-component-definition": "off",
    "indent": "off",
    "max-len": "off",
    "comma-dangle": "off",
    "no-redeclare": "off",
    "react/jsx-indent": "off",
    "no-unused-vars": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "operator-linebreak": "off",
    "object-curly-newline": "off",
    "function-paren-newline": "off",
    "implicit-arrow-linebreak": "off",
    "react/require-default-props": "off",
    "nonblock-statement-body-position": "off",
    "react/jsx-one-expression-per-line": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-props-no-spreading": "off",
    "global-require": "off",
    "react/jsx-props-no-spreading": "off",
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'consistent-return': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'object-shorthand': 'off'
  },
}
