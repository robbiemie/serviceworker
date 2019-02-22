const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../index.js'),
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    quiet: true, // necessary for FriendlyErrorsPlugin
    // 随机搞一个端口吧
    // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    watchOptions: {
      poll: false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/html/index.html')
    })
  ]
}
