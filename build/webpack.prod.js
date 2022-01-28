const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { getConfig } = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(getConfig(true), {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true,
        extractComments: false,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|prop-types|react-router-dom)[\\/]/,
          name: "vendor-react",
          priority: 20,
          chunks: "all",
        },
        antd: {
          test: /[\\/]node_modules[\\/](antd)[\\/]/,
          name: "vendor-antd",
          priority: 10,
          chunks: "all",
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: 1,
          chunks: "all",
          reuseExistingChunk: true,
        },
      },
    },
  },
});
