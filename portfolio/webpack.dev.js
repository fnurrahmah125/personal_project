const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    open: true,
    compress: true,
    port: 3000,
    liveReload: true,
    client: {
      overlay: false,
    },
  },
});
