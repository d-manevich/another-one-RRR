module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-partial-import': {
      root: 'src/',
      path: [ 'src/styles' ],
      extension: '.scss',
      prefix: '_',
    },
    'postcss-mixins': {},
    'postcss-advanced-variables': {},
    'postcss-color-function': {},
    'postcss-nesting': {},
    'postcss-nested': {},
    'postcss-extend': {},
    'postcss-media-minmax': {},
    'autoprefixer': {},
    'cssnano': { zindex: false },
  }
}
