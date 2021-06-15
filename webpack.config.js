const path = require('path');
// нужен для HMR
const webpack = require('webpack');
// CSS в отдельный файл
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// модуль для анализа размера бандлов (выключен чуть ниже)
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/*
    entry — файл, с которого начинается сборка приложения. Их может быть несколько, тогда и сборка будет не одна;
    context — папка, в которой нужно искать entry;
    output содержит имя файла сборки (filename) и путь до папки, куда этот файл будет сохранен (path).

    __dirname — это константа node.js, определяемая автоматически в каждом файле и содержащая путь до папки, в которой лежит исполняемый файл 
                (у нас это корневая папка).
*/

module.exports = {
  mode: 'development',
  entry: {
    app: './index.js'
  },
  context: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'static', 'build'),
    // filename: 'app.js'
  },

  devServer: {
    // contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    stats: 'errors-only',
    historyApiFallback: {
      index: 'index.html'
    }
  },
   
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      output: {
        favicon: path.resolve(__dirname, 'public')
      },
    }),

    new webpack.HotModuleReplacementPlugin(),

    new MiniCssExtractPlugin({
        filename: 'main.css'
    }),
       
    // new BundleAnalyzerPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['react-hot-loader/babel']
        }
      }
    ]
  }
};