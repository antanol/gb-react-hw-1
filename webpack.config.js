const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
    entry — файл, с которого начинается сборка приложения. Их может быть несколько, тогда и сборка будет не одна;
    context — папка, в которой нужно искать entry;
    output содержит имя файла сборки (filename) и путь до папки, куда этот файл будет сохранен (path).

    __dirname — это константа node.js, определяемая автоматически в каждом файле и содержащая путь до папки, в которой лежит исполняемый файл 
                (у нас это корневая папка).
*/

module.exports = {
   entry: {
       app: './index.js',
   },
   context: path.resolve(__dirname, 'static_src'),
   output: {
       path: path.resolve(__dirname, 'static', 'build'),
       filename: 'app.js'
   },
   plugins: [
       new MiniCssExtractPlugin({
           filename: 'main.css'
       })
   ],

   module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, "static_src"),
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            }
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
          }
    ]
   }
};