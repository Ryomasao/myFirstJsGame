const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // buildのタイミングでdist配下を消す
    new CleanWebpackPlugin(),
    // bundle.jsを参照するindex.htmlを生成してくれる。
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new CopyPlugin([
      { from: 'assets', to: 'assets' },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
};
