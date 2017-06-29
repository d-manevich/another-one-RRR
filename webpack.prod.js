const path               = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/build'),
  },
  module: {
    rules: [
      {
        test: /\.(es6?|jsx?)$/,
        exclude: /(node_modules)/,
        include: [ /src\/app/ ],
        loader: 'babel-loader',
      }, {
        test: /\.s?css$/,
        exclude: /module\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            { loader: 'postcss-loader' },
          ],
        }),
      }, {
        test: /module\.s?css$/,
        include: [ /src\/app/ ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][name]-[local]',
                importLoaders: 1,
              },
            },
            { loader: 'postcss-loader' },
          ],
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('src/build'),
    new ExtractTextPlugin('styles.css'),
  ],
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src/app/'),
    },
  },
}
