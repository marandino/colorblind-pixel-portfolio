const react = require('eslint-plugin-react');
const typescript = require('eslint-plugin-typescript');

module.exports = [
  {
    ...react.configs.recommended,
    ...typescript.configs.recommended,
    plugins: {
      react,
    },
  }
];
