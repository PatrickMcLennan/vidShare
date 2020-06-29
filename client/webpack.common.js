/* eslint-disable */

const path = require(`path`);
const Dotenv = require("dotenv-webpack");
const { resolveTsAliases } = require(`resolve-ts-aliases`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: new Dotenv(),
  resolve: {
    extensions: [`.js`, `.ts`, `.tsx`],
    alias: resolveTsAliases(path.resolve(__dirname, `tsconfig.json`)),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", {loader: "postcss-loader", options: { ident: 'postcss', plugins: [require('autoprefixer')] }}],
      },
    ],
  },
};
