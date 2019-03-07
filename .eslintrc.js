module.exports = {
  env: {
    browser: true
  },
  extends: ['airbnb'],
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    'comma-dangle': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/destructuring-assignment': 'off',
    'operator-linebreak': 'off',
    'arrow-parens': 'off',
    'no-plusplus': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'object-curly-newline': 'off'
  }
};
