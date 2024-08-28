const globals = require('globals');
const js = require('@eslint/js');
// const babelParser = require('@babel/eslint-parser');
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  ...compat.extends('eslint:recommended', 'prettier'),
  {
    ignores: [
      'eslint.config.js',
      'coverage/**/*',
      'node_modules/**/*',
      '/package/**/node_modules/**/*',
      '**/dist/**/*',
      '**/__tmp__/**/*',
      'lerna.json',
      '**/resources/**/*',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
      ecmaVersion: 8,
      sourceType: 'commonjs',
    },

    rules: {
      'no-mixed-spaces-and-tabs': [0, 'smart-tabs'],
      quotes: [2, 'single', 'avoid-escape'],
      'no-compare-neg-zero': 0,
      'no-console': 0,
      'no-debugger': 2,
      'no-array-constructor': 2,
      'no-caller': 2,
      'no-catch-shadow': 2,
      'no-eval': 2,
      'no-extend-native': 2,
      'no-extra-bind': 2,
      'no-implied-eval': 2,
      'no-iterator': 2,
      'no-label-var': 2,
      'no-labels': 2,
      'no-lone-blocks': 2,
      'no-loop-func': 2,
      'no-multi-spaces': 2,
      'no-multi-str': 2,
      'no-native-reassign': 2,
      'no-new': 2,
      'no-new-func': 2,
      'no-new-object': 2,
      'no-new-wrappers': 2,
      'no-octal-escape': 2,
      'no-proto': 2,
      'no-return-assign': 2,
      'no-script-url': 2,
      'no-sequences': 2,
      'no-shadow': 2,
      'no-shadow-restricted-names': 2,
      'no-spaced-func': 2,
      'no-undef-init': 2,
      'no-unused-expressions': 2,
      'no-unused-vars': 'off',

      'no-use-before-define': 2,
      'no-with': 2,
      'comma-spacing': 2,
      curly: [2, 'all'],

      'dot-notation': [
        2,
        {
          allowKeywords: true,
        },
      ],

      'no-extra-parens': [2, 'functions'],
      eqeqeq: 2,

      'key-spacing': [
        2,
        {
          beforeColon: false,
          afterColon: true,
        },
      ],

      'new-cap': 2,
      'new-parens': 2,
      semi: 2,

      'semi-spacing': [
        2,
        {
          before: false,
          after: true,
        },
      ],

      'space-infix-ops': 2,
      'keyword-spacing': 2,

      'space-unary-ops': [
        2,
        {
          words: true,
          nonwords: false,
        },
      ],

      yoda: [2, 'never'],
    },
  },
];
