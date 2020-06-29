/* eslint-disable */

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);
const TerserPlugin = require(`terser-webpack-plugin`);
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const ScriptExtHtmlWebpackPlugin = require(`script-ext-html-webpack-plugin`);
const common = require(`./webpack.common`);
const merge = require(`webpack-merge`);
const path = require("path");

module.exports = merge(common, {
  mode: `production`,
  entry: [`babel-polyfill`, `./index.ts`],
  output: {
    path: path.resolve(__dirname, `dist`),
    filename: `app.[contenthash].js`,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /(node_modules)/,
        loader: [`babel-loader`],
      },
    ],
  },
  optimization: {
    namedChunks: true,
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        axios: { test: /node_modules\/axios\//, name: "axios", chunks: "all" },
        autoSuggest: {
          test: /node_modules\/react-autosuggest\//,
          name: "autoSuggest",
          chunks: "all",
        },
        axiosAuthRefresh: {
          test: /node_modules\/react-autosuggest\//,
          name: "axiosAuthRefresh",
          chunks: "all",
        },
        react: {
          test: /node_modules\/react((\-dom))?\//,
          name: "react",
          chunks: "all",
        },
        smoothscroll: {
          test: /node_modules\/smoothscroll-polyfill\//,
          name: "smoothscroll",
          chunks: "all",
        },
        styledComponents: {
          test: /node_modules\/styled-components\//,
          name: "styled-components",
          chunks: "all",
        },
        toastify: {
          test: /node_modules\/react-toastify\//,
          name: "toastify",
          chunks: "all",
        },
      },
    },
    minimizer: [
      new OptimizeCssAssetsPlugin({
        preset: ["default", { discardComments: { removeComments: true } }],
      }),
      new TerserPlugin({ parallel: 4 }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      root: process.cwd(),
    }),
    new MiniCssExtractPlugin({
      filename: "[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./template.html",
      inject: "head",
      meta: {
        "application-name": "VidShare",
        robots: "index,follow",
        googlebot: "index,follow",
        rating: "general",
        "theme-color": "#232325",
      },
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      title: "Eventsi",
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "defer",
    }),
    new BundleAnalyzerPlugin(),
  ],
});
