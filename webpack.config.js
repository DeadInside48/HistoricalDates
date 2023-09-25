const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    port: 9000,
    liveReload: true,
    hot: false,
  },
  output: {
    filename: 'index.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.[hash].css',
      linkType: 'text/css',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      scriptLoading: 'defer',
      inject: 'body',
      minify: false,
    }),
    new CleanWebpackPlugin(),
    new ESLintWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]?ss$/i,
        use:[
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use:[MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.([cm]?ts|tsx)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },

    ]
  }
}