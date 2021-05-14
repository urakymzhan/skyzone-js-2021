module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "airbnb",
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // rules still coming from airbnb style guide
    // if you want you can remove their style guide and just keep adding your own rules below
    // semi: ["error", "always"],
    // quotes: ["error", "single"],
    // "no-var": 2,
  },
};
