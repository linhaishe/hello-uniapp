module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-standard-scss',
  ],
  customSyntax: 'postcss-html',
  rules: {
    'comment-no-empty': true,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
      extends: [
        'stylelint-config-recommended',
        'stylelint-config-standard',
        'stylelint-config-recommended-vue',
      ],
      rules: {
        indentation: [2, { baseIndentLevel: 1 }],
      },
    },
  ],
};
