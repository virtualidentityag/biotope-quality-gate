module.exports = {
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:compat/recommended',
    'plugin:react/recommended',
  ],
  // Needed because @typescript-eslint >= 2.0 does not check if file is typescript
  overrides: [
    {
      // Regex for @typescript-eslint < 2.0 was /\.tsx?$/
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        // Modified recommended rules (to match AirBnB rules)
        '@typescript-eslint/indent': ['error', 2],
        indent: 'off',
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': 1,
      },
    },
    {
      files: ['*'],
      rules: {
        // Storybook overrides
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
  plugins: [
    'filenames',
  ],
  rules: {
    // Project-specific Overrides
    'import/no-unresolved': 0, // FIXME should be ignoring just '\\.(s?)css$', instead of being 'off'
    'import/prefer-default-export': 0,
    'import/extensions': ['error', 'ignorePackages', { // add jsx and tsx extensions
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      mjs: 'never',
    }],

    // eslint-plugin-filenames - Force kebab-case or snake_case file naming
    'filenames/match-regex': ['error', '^[a-z-_.0-9]+$', true],

    // Stencil rules
    'react/react-in-jsx-scope': 0, // "React" is not mandatory to be imported when JSX is present
    'react/no-unknown-property': ['error', { ignore: ['class'] }], // allow "class" attribute on JSX
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: 'h' }], // allow "h" unused variable (for Stencil)
    'class-methods-use-this': 0,
    'import/no-default-export': 1,
    'no-underscore-dangle': 0,
    'default-param-last': 0,

    // This rule cannot yet be disabled ONLY for specific packages like "@stencil/core"
    // https://github.com/benmosher/eslint-plugin-import/issues/422
    // 'import/no-extraneous-dependencies': ['error', { /* add exceptions here */ }],
    'import/no-extraneous-dependencies': 'off',
  },
  env: {
    browser: true,
  },
  settings: {
    react: {
      // Hack to disable warning for "eslint-plugin-react"
      version: '16.0',
    },
  },
};
