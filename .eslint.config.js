/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    rules: {
      "import/no-unresolved": "error",
    },
    plugins: ["import"],
  },
};
