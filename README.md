# virtualidentity-quality-gate

Coding quality and standards for biotope projects built on Stencil.

This package gives you default configurations for biotope projects for `eslint` and `stylelint`,
which will enable you to lint `.js`, `.jsx`, `.ts`, `.tsx`, `.css` and `.scss` files by simply
extending the configurations provided.

This package includes the necessary tools and plugins as dependencies for both configurations to run
without a hassle, but it will require you to run both `eslint` and `stylelint` on your projects.

## Installing
- `npm i -D @virtualidentity/quality-gate`

## Using the recommended configs

### Eslint
Create an `.eslintrc` file and extend the default recommended config like so:
```js
{
  "extends": "./node_modules/@virtualidentity/quality-gate/config/.eslintrc.js"
  // Add any other definition here. Example:
  // "globals": {
  //   "MY_GLOBAL_VARIABLE": true
  //   ...
  // }
}
```

Run `eslint` in a script like so:
```js
{
  "scripts": {
    // ...
    "lint:code": "eslint \"./**/*.js\" \"./**/*.ts\""
  }
}
```

Since you're running `eslint` natively, check out their documentation on how to run or extend it [here][link-eslint-disable].

### Stylelint
Create a `.stylelintrc` file and extend the default recommended config like so:
```js
{
  "extends": "./node_modules/@virtualidentity/quality-gate/config/.stylelintrc.js"
  // Add any other definition here. Example:
  // "rules": {
  //   "unit-whitelist": ["em", "rem", "%", "s"]
  //   ...
  // }
}
```

Run `stylelint` in a script like so:
```js
{
  "scripts": {
    // ...
    "lint:style": "stylelint \"./**/*.css\" \"./**/*.scss\""
  }
}
```

Since you're running `stylelint` natively, check out their documentation on how to run or extend it [here][link-stylelint-disable].

### Commitlint
Create a `.commitlintrc.json` file and extend the default recommended config like so:
```js
{
  "extends": ["@virtualidentity/quality-gate/config/.commitlintrc.js"]
  // Add any other definition here.
}
```

## Recommended settings
### Stencil
#### .eslintrc
```js
{
  "extends": "./node_modules/@virtualidentity/quality-gate/config/.eslintrc.js",
  "rules": {
    "class-methods-use-this": 0,
    "no-script-url": 0,
    "react/prop-types": 0,
    "react/jsx-key": 0, // Otherwise eslint will force you to set keys for arrays, even if there aren't any arrays!
  },
}
```
#### .stylelintrc
```js
{
  "extends": "./node_modules/@virtualidentity/quality-gate/config/.stylelintrc.js",
  "rules": {
    "selector-class-pattern": ".",
    "selector-no-qualifying-type": null,
    "no-descending-specificity": null
  }
}
```

## Browser support
Create a `.browserslistrc` file with the following content:
```bash
last 2 years and >= 0.5%
not dead
ie 11
firefox esr
# Add any other definition here.
```

## IDEs
To take advantage of the linters' strengths and to ensure no problems during merges, please consider installing the following plugins on your IDE.

If your IDE is not present on this list, please help us by making a PR to include proper plugins for it and ensure everyone shares this knowledge.

Hint: "on-save" linting can be a big help to save development time.

### VSCode
- dbaeumer.vscode-eslint
- stylelint.vscode-stylelint


[link-eslint-config]: https://eslint.org/docs/user-guide/configuring
[link-stylelint-config]: https://stylelint.io/user-guide/configuration/#the-configuration-object
