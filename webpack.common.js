const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;


module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'app.js')
  },
  mode: env,
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[hash].bundle.js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: false // Set to true to use indented SASS syntax.
            }
          }
        ],
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  performance: {
    hints: false
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist', 'index.html'),
      template: path.join(__dirname, 'src', 'index.html'),
      inject: true,
    }),
  ]
}