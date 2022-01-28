const { getConfig } = require('./webpack.common')
const { merge } = require('webpack-merge')
const { PROJECT_URL_PATH } = require('./constant')

module.exports = merge(getConfig(), {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    hot: true,
    client: {
      logging: 'error'
    },
    static: {
      directory: './docs',
      publicPath: PROJECT_URL_PATH
    }
  },

  // common
  // context,
  // entry: './src/index.js',
  // output: {
  //   clean: true,
  //   filename: 'js/bundle.js',
  //   path: resolve('docs'),
  //   publicPath: projectUrlPath + '/'
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './public/index.html'
  //   }),
  //   new ESLintPlugin({
  //     fix: true,
  //     exclude: ['build', 'node_modules']
  //   })
  // ],
  // resolve: {
  //   extensions: ['.js', '.jsx', '.css'],
  //   alias: {
  //     '@': resolve('src')
  //   }
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx?$/,
  //       include: [resolve('src')],
  //       use: {
  //         loader: 'babel-loader'
  //       }
  //     },
  //     {
  //       test: /\.css$/,
  //       use: commonCssLoaders
  //     },
  //     {
  //       test: /\.s[ac]ss$/i,
  //       use: commonCssLoaders.concat([{
  //         loader: 'sass-loader',
  //         options: {
  //           implementation: require('sass')
  //         }
  //       }])
  //     }
  //   ]
  // }
})
