const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const autoprefixer = require("autoprefixer");
const packageConfig = require("./package.json");
const { version } = packageConfig;

const plugins = [
  new MiniCssExtractPlugin({
    filename: `css/style.${version}.css`,
  }),
];

const generateHtmlPlugin = (name) => {
  return new HtmlWebpackPlugin({
    filename: `${name}.html`,
    template: `./src/pages/${name}.pug`,
  });
};

const populateHtmlPlugins = (pages) => {
  pages.forEach((page) => {
    plugins.push(generateHtmlPlugin(page));
  });
  return plugins;
};

const populatePlugins = populateHtmlPlugins(["index", "test"]);

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
  plugins: populatePlugins,
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
        ],
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
