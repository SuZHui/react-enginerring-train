const { getConfig } = require("./webpack.common");
const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { PROJECT_URL_PATH } = require("./constant");

module.exports = merge(getConfig(), {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    hot: true,
    client: {
      logging: "error",
    },
    static: {
      directory: "./docs",
      publicPath: PROJECT_URL_PATH,
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
