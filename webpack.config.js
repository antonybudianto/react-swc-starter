const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  stats: "minimal",
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  entry: {
    web: path.join(__dirname, "/src/index.js"),
  },
  output: {
    path: path.join(__dirname, "/public"),
  },
  plugins: [isDevelopment && new ReactRefreshPlugin()].filter(Boolean),
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
