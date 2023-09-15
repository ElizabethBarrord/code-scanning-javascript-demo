module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  "ignorePatterns": ["**/test/*"],
  extends: [
    "airbnb-base",
    "plugin:eslint-comments/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:import/recommended",
    "plugin:n/recommended",
    "plugin:no-use-extend-native/recommended",
    "plugin:security/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "prettier",
    "xo",
    // "xo-typescript/space",
],
plugins: ["jest", "no-only-tests", "simple-import-sort", "sonarjs"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  },
  "settings": {
    "jest": {
        "version": "latest"
    }
}
  
};
