module.exports = {
  root: false,

  env: {
    node: true
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/strongly-recommended'
  ],

  parserOptions: {
    parser: 'babel-eslint',
    fix: true
  },

  rules: {
    'indent': ['error', 2],
    'no-unused-vars': 0,
    'no-useless-constructor': 0,
    'no-cond-assign': 0,
    'no-undef': 0,
    'no-new': 0,
    'quotes': ['error', 'single'],
    'semi': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'vue/html-closing-bracket-newline': ['warn', {multiline: 'never'}],
    'vue/html-quotes': [ 'warn', 'single'],
    'vue/html-indent': ['error'],
    'vue/no-multi-spaces': ['error'],
    'vue/html-closing-bracket-spacing': ['error'],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: true
      }
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea'],
      allowEmptyLines: false
    }],
    'no-debugger': 'error'
  }
};
