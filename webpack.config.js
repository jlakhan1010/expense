const path = require('path');
const webpack = require('webpack');
// It moves all the required *.css modules in entry chunks into a separate CSS file
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Prepare compressed versions of assets to serve them with Content-Encoding
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  const GZIPCompress = new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  });
  // Minify Javscript code
  const minEverything = new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
      warnings: false, // Suppress uglification warnings
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      screw_ie8: true
    },
    output: {
      comments: false,
    },
    sourceMap: true,
    exclude: [/\.min\.js$/gi] // skip pre-minified libs
  }); // minify everything
  return {
    entry: './src/app/App.js', // its should tell where to start project
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }

          ]
        })
      }

      ]
    },

    plugins: isProduction ? [
      CSSExtract,
      minEverything,
      GZIPCompress
    ] : [
      CSSExtract
    ],

    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};
