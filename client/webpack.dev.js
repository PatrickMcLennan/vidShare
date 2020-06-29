/* eslint-disable */

const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const common = require(`./webpack.common`);
const merge = require(`webpack-merge`);
const path = require("path");

module.exports = merge(common, {
  mode: `development`,
  entry: [`react-hot-loader/patch`, path.resolve(__dirname, `index.ts`)],
  devServer: {
    contentBase: path.resolve(__dirname, `desktop/dist`),
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    port: 8080,
    stats: `minimal`,
  },
  devtool: `source-map`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /(node_modules)/,
        loader: [
          `react-hot-loader/webpack`,
          `babel-loader`,
          `eslint-loader`,
          `stylelint-custom-processor-loader`,
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: path.resolve(__dirname, `template.html`),
      inject: `body`,
    }),
  ],
});
