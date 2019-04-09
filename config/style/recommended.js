
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
  ],
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    'number-leading-zero': 'never',
  },
};
