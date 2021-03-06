const webpack = require('webpack');
const path = require('path');


const DIST = path.resolve(__dirname, 'dist');
const SRC = path.resolve(__dirname, 'src');


module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },

  entry: {
    tangelo: SRC + '/index.js'
  },

  output: {
    filename: '[name].js',
    path: DIST,
    library: 'Tangelo',
    libraryTarget: 'umd',
  },

  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom'
    }
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
