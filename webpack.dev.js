const webpackCommon = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(webpackCommon, {
  mode: "development",
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
});
