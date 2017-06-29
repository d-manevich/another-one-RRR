const webpack            = require('webpack')
const path               = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/app/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/build'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(es6?|jsx?)$/,
        exclude: /(node_modules)/,
        include: [ /src\/app/ ],
        loader: 'eslint-loader',
      }, {
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
        use: [
          { loader: 'style-loader' },
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
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('src/build'),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src/app/'),
    },
  },
  devServer: {
    hot: true,
    compress: true,
    historyApiFallback: true,
    contentBase: [ path.resolve(__dirname, 'src/build'), path.resolve(__dirname, 'src/static') ],
    port: 9000,
  },
}
