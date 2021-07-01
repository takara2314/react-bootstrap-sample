const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const config = {
    context: path.join(__dirname, 'src'),
    entry: './js/index.jsx',
    output: {
      path: __dirname,
      filename: 'bundle.js',
      publicPath: ''
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.css/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: { url: false }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'esbuild-loader',
              options: {
                loader: 'js'
              }
            }
          ]
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'esbuild-loader',
              options: {
                loader: 'jsx'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: './index.html',
        template: './html/index.html'
      }),
    ],
    mode: 'development',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: __dirname,
      open: true,
      port: 3000
    }
  };

  return config;
};