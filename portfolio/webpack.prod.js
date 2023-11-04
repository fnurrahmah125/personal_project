const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

const path = require("path");
const glob = require("glob");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = merge(config, {
  mode: "production",
  optimization: {
    minimizer: [
      "...",
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: { implementation: ImageMinimizerPlugin.squooshMinify },
      }),
      new TerserPlugin({}),
    ],
  },
  plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ],
});
