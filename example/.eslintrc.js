module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:prettier/recommended', 'eslint-config-prettier'],
  parser: 'babel-eslint',
  // plugins: ['jest'],
  plugins: ['prettier', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      classes: true,
      experimentalObjectRestSpread: true,
    },
  },
  // env: {
  //   'jest/globals': true,
  // },
  rules: {
    'max-len': [2, { code: 110, tabWidth: 2, ignoreUrls: true }],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'global-require': 'off',
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-underscore-dangle': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-nested-ternary': 'off',
    'react/no-multi-comp': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': 'off',
    semi: ['error', 'never'],
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: false }], // disable the rule for variables, but enable it for functions and classes
    'prettier/prettier': [
      // copy from prettierrc.js
      'error',
      {
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 110,
        jsxBracketSameLine: false,
        semi: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // 檢查 Hook 的規則
    'react-hooks/exhaustive-deps': 'warn', // 檢查 effect 的相依性
    'no-unused-expressions': 'off',
  },
}
