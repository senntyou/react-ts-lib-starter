module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'import', 'node', 'jest'],
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true,
  },
  rules: {
    'react/forbid-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  overrides: [
    {
      files: ['test/**/*.js'],
      env: {
        'jest/globals': true,
      },
    },
  ],
};
