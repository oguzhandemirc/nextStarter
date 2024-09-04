module.exports = {
  extends: ['next', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-arrow-callback': 'error',
    'no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false }],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
        ignoreCase: true,
      },
    ],
  },
}
