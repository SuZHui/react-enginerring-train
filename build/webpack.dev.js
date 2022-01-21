const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

context = path.resolve(__dirname, '../')
const resolve = p => path.resolve(context, p)

const projectUrlPath = '/react-enginerring-train'

module.exports = {
  mode: 'development',
  // devtool: {}
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    hot: true,
    static: {
      directory: './docs',
      publicPath: projectUrlPath
    }
  },

  // common
  context,
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.js',
    path: resolve('docs'),
    publicPath: projectUrlPath + '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ESLintPlugin({
      fix: true,
      exclude: ['build']
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [resolve('src')],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}