const path = require('path');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, "divinc_frontend.jsx"),
  output: {
    path: path.resolve(),
    filename: "../static/js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
};


