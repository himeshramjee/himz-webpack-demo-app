const path = require("path");
const common = require("./webpack.config.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dev-dist"),
    filename: "[name]-js-bundle.js",
  },
  module: {
    rules: [
      {
        // This will match the `import "./css/index.scss";` in index.js
        // test: /css\/\.s?css$/i,
        test: /\.s?css$/i,
        // Once our sass script is converted to css; we need the css-loader module to interpret @import and url() like import/require(), and resolve them, along with the style-loader module to inject our CSS into the DOM.
        // This all happens in reverse order of what's specified so:
        // Step 1. sass-loader: transform sass script files into css
        // Step 2. css-loader: converts and packages css into js bundle
        // Step 3. style-loader: injects js based css into DOM as style element (supposedly, this isn't working for dev config)
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
