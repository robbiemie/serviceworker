const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, '../index.js')
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    quiet: true // necessary for FriendlyErrorsPlugin
    // 随机搞一个端口吧
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/html/index.html')
    })
  ]
}
