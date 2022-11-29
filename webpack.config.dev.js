const common = require("./webpack.config.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "main.js",
  },
});
