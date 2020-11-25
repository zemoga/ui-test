const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const configProject = {
  entryJs: {
    main: './src/main.js',
  },
  publicPath: 'dist',
  portServer: 8080,
  cssName: '[name].css',
  htmlTemplate: {
    homePage: './src/index.html'
  }
};

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, configProject.publicPath),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            browser: {
              child_process: false,
            },
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['file-loader?name=[name].[ext]&outputPath=img/'],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        query: {
          name: './assets/fonts/[name].[ext]'
        }
      }
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  devServer: {
    contentBase: path.join(__dirname, configProject.publicPath),
    port: configProject.portServer,
    compress: true,
    hot: true, // Enable Hot Module Replacement on the server
    stats: 'errors-only',
    historyApiFallback: {
      index: 'dist/index.html',
    },
  },
  plugins: [
    new CopyWebpackPlugin(
      [
        { from: 'src/assets/img', to: 'assets/img' },
        {from: 'src/assets/fonts', to: 'assets/fonts'}
      ],
      {ignore: ['README.md', 'LICENSE.md', 'CHANGES.md']}
    ),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new ExtractTextPlugin({
      filename: configProject.cssName,
      disable: false,
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeScriptTypeAttributes: true,
      },
      template: configProject.htmlTemplate.homePage,
    })
  ],
};