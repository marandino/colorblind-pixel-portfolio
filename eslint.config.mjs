import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

const config = [
  {
    files: ["**/*.{ts,jsx,tsx}"],
    ignores: ["**/*.js", "**/*.jsx"], // don't lint the javascript files
  },
  { languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off", //React is being passed globally, so no need to have it in scope for jsx files
      "react/no-children-prop": "off", // this one is related to redux, somehow it needs the children prop.
    },
  },
];

export default config;
