const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        // sass-loader: transform sass script files into css
        // css-loader: converts and packages css into common js
        // style-loader: injects js based css into DOM
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // https://github.com/jantimon/html-webpack-plugin#options
      filename: "index.html",
      template: "./src/template.html",
      inject: "body",
      scriptLoading: "defer",
    }),
  ],
};
