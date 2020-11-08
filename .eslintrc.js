module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    //'prettier/@typescript-eslint',
    //'plugin:prettier/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module' // Allows for the use of imports
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-unresolved': 0,
    'class-methods-use-this': 'off',
    'no-await-in-loop': 'off',
    'no-continue': 'off',
    'no-param-reassign': 'off',
    'lines-between-class-members': 'off',
    'import/extensions': 0,
    '@typescript-eslint/camelcase': 0,
    'arrow-body-style': 0,
    'import/no-named-default': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/no-extraneous-dependencies': [
      { devDependencies: true }
    ]
  }
}
