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
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".wasm"],
  },
  entry: {
    web: path.join(__dirname, "/src/index.tsx"),
  },
  output: {
    path: path.join(__dirname, "/public"),
  },
  plugins: [isDevelopment && new ReactRefreshPlugin()].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
};
