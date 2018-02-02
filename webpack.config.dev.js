const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/src',

  entry: {
    app: ['./js/index']
  },

  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].js'
  },

  resolve: {
    modules: [path.resolve('./src'), 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader', {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            }
          }
        ]
      }, {
        test: /(\.css)$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.html|\.jpg|\.woff|\.svg|\.ttf|.eot$/,
        use: 'file-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'common', minChunks: Infinity, filename: 'common.bundle.js'}),

    new webpack.LoaderOptionsPlugin({minimize: true, debug: true}),

    new HtmlWebpackPlugin({template: './index.ejs'})
  ],

  devServer: {
    hot: true,
    inline: true,
    stats: {
      colors: true
    },
    port: 3000

  }
};
