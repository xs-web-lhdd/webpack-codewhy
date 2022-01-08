const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

// 导出配置信息：
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.js',
    // 必须是绝对路径
    path: path.resolve(__dirname, './build'),
    // 对所有的 assetModuleFilename 都放入这个文件夹中
    // assetModuleFilename: 'img/[name].[hash:6][ext]'
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
        // type: 'asset/resource',
        // type: 'asset/inline',
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:6][ext]'
        },
        // 当大于 100kb 的时候会变成图片，小于则变成 64位编码
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // title 默认值是：webpack App
      title: '又是学习 webpack 的一天！',
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: '"./"'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          // to 不写会默认复制到 output 生成的文件夹,
          // to: 'build',
          globOptions: {
            ignore: [
              '**/index.html',
              '**/abc.txt',
            ]
          }
        }
      ]
    })
  ]
}