const path = require("path");
const common = require("./webpack.config.common.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "prod-dist"),
    filename: "[name].[contenthash]-bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      // https://webpack.js.org/plugins/mini-css-extract-plugin/#options
      filename: "[name].[contenthash]-css-bundle.css",
      insert: "head", // also the default, could be any #element
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        // sass-loader: transform sass script files into css
        // css-loader: converts and packages css into common js
        // style-loader: injects js based css into DOM
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
});
