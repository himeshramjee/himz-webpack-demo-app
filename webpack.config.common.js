const HtmlWebpackPlugin = require("html-webpack-plugin");
// const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  output: {
    assetModuleFilename: "imgs/[hash][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
        // exclude: /\.(png|jpe?g|gif|svg)$/i,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // https://github.com/jantimon/html-webpack-plugin#options
      template: "./src/index.html",
      filename: "index.html", // the generated file name
      inject: "body",
      // scriptLoading: "defer",
    }),
  ],
};
