const HtmlWebpackPlugin = require("html-webpack-plugin");
// const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   loader: "file-loader",
      //   options: {
      //     name: "[name].[contenthash].[ext]",
      //     output: "imgs",
      //   },
      // }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // https://github.com/jantimon/html-webpack-plugin#options
      filename: "index.html",
      template: "./src/template.html",
      inject: "body",
      // scriptLoading: "defer",
    }),
  ],
};
