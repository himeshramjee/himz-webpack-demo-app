const common = require("./webpack.config.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
});
