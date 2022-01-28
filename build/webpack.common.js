const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { PROJECT_URL_PATH } = require('./constant')

context = path.resolve(__dirname, '../')
const resolve = p => path.resolve(context, p)

const getConfig = (isProd = false) => {
  const commonCssLoaders = [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader', 
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: true
        }
      }
    }
  ]

  return {
    context,
    entry: './src/index.js',
    output: {
      clean: true,
      filename: isProd ? 'js/[name].[contenthash:8].js' : 'js/bundle.js',
      chunkFilename: isProd ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      path: resolve('docs'),
      publicPath: PROJECT_URL_PATH + '/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.png',
      }),
      new ESLintPlugin({
        fix: true,
        exclude: ['build', 'node_modules']
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
        },
        {
          test: /\.css$/,
          use: commonCssLoaders
        },
        {
          test: /\.s[ac]ss$/i,
          use: commonCssLoaders.concat([{
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }])
        }
      ]
    }
  }
}

module.exports = {
  getConfig
}