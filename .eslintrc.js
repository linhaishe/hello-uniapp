module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'never',
      },
    ],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
      },
    ],
    'no-tabs': 0,
    'vue/multi-word-component-names': 0,
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 0,
      },
    },
  ],
};
