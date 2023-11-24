const webpackCommon = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(webpackCommon, {
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    compress: true,
    port: 9000,
    hot: true,
  },
  // watch: true,
});
