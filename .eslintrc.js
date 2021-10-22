module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:jsdoc/recommended', // Enables esling-plugin-jsdoc
  ],
  rules: {
    'valid-jsdoc': [
      'warn',
      {
        requireReturnDescription: false,
        requireParamDescription: false,
        requireParamType: false,
        requireReturnType: false,
      },
    ],
    'jsdoc/require-jsdoc': [
      'warn',
      {
        publicOnly: true,
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
    'jsdoc/check-tag-names': 0,
    'jsdoc/require-returns-description': 0,
    'jsdoc/require-param-description': 0,
    'jsdoc/require-returns-type': 0,
    'jsdoc/require-param-type': 0,
    'jsdoc/no-undefined-types': 0,
    'jsdoc/require-returns': 0,
    'max-len': [
      1,
      96,
      4,
      {
        ignoreUrls: true,
        ignoreComments: true,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': ['error'],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
        ignoreComments: true,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
      },
    ],
  },
  plugins: ['jsdoc'],
};
