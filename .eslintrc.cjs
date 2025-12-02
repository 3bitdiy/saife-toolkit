module.exports = {
  root: true,
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    // FIXME: eslint-plugin-promise is not yet working with eslint 8
    // "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:svelte/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
    // FIXME: eslint-plugin-promise is not yet working with eslint 8
    // "promise",
    "import",
    "unicorn",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  // FIXME: remove svelte.config.js as soon as type error resolves
  ignorePatterns: ["src/types", "svelte.config.js", "*.d.ts"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".js"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "object-curly-spacing": "off",
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-constant-condition": [
      "error",
      {
        checkLoops: false,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "svelte.config.js",
          "tailwind.config.cjs",
          "postcss.config.cjs",
          "vite.config.ts",
          "scripts/**/*.js",
        ],
      },
    ],
    "import/no-mutable-exports": "off",
    "simple-import-sort/imports": "error",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
        ignore: [/^__layout\.svelte/],
      },
    ],
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
};
