const path = require("path");

module.exports = {
  stats: "minimal",
  devServer: {
    hot: false,
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  entry: {
    web: __dirname + "/src/index.js",
  },
  output: {
    path: __dirname + "/public",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
};
