const path = require('path')

// 导出配置信息：
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // 必须是绝对路径
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      {
        // 规则用正则表达式匹配：
        test: /\.css$/, // 匹配资源
        use: [
          // {loader: 'css-loader'},
          // 注意编写顺序：从下往上，从右往左，从后往前
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
          // 简写一：
          // 'css-loader'
        ],
        // 简写二：
        // loader: 'css-loader'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'less-loader',
        ]
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/,
        use: [
          'file-loader',
        ],
      }
    ]
  }
}