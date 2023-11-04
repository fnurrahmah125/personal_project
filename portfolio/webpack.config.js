const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const packageConfig = require("./package.json");
const { version } = packageConfig;

module.exports = {
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `js/[name].${version}.js`,
    assetModuleFilename: "assets/[name][ext]",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/index.pug",
    }),
    new MiniCssExtractPlugin({
      filename: `css/style.${version}.css`,
    }),
  ],
  devtool: false,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.pug$/i,
        use: ["pug-loader"],
      },
    ],
  },
};
