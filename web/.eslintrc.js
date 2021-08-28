module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "flowtype", "css-modules", "prettier"],
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:flowtype/recommended",
    "plugin:css-modules/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
  ],
  globals: {
    __DEV__: true,
  },

  env: {
    browser: true,
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    "no-undef": 0,
    // Forbid the use of extraneous packages
    // eslint-disable-next-line max-len
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    "import/no-extraneous-dependencies": ["error", { packageDir: "." }],
    // "@typescript-eslint/no-unused-vars": "error",
    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // https://eslint.org/docs/rules/no-console
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"],
      },
    ],
    "no-use-before-define": 'off',
    // "@typescript-eslint/no-use-before-define": ["error"],

    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // Ensure <a> tags are valid
    // eslint-disable-next-line max-len
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/jsx-filename-extension": 0,
    // eslint-disable-next-line max-len
    // Functional and class components are equivalent from React’s point of view
    // eslint-disable-next-line max-len
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    "react/prefer-stateless-function": "off",
    "react/react-in-jsx-scope": "off",
    "react/forbid-prop-types": "off",
    "react/destructuring-assignment": "off",
    "max-len": ["error", 100],
    "react/require-default-props": 0,
    "react/prop-types": 0,
    "import/extensions": 0,
    "no-return-assign": 0,
    "linebreak-style": "off",
    "arrow-parens": ["error", "as-needed"],
    "keyword-spacing": [
      2,
      {
        overrides: {
          function: {
            after: false,
          },
        },
      },
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "no-shadow": 0,
    eqeqeq: 2,
    "no-var": "error",
    "no-plusplus": "error",
    "import/no-unresolved": "off",
    "no-unreachable": "error",
  },
};
