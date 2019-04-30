const webpack = require('webpack');
const { NamedModulesPlugin, HotModuleReplacementPlugin } = webpack;

module.exports = {
  entry: [
    'es6-promise',
    'babel-polyfill',
    './src/index.js'
  ],
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer:{
    hot:true,
    historyApiFallback: true,
    contentBase: '.'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      }
    ]
  },
  plugins:[
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin()
  ]
}
/**
  loaders: [
    { 
      test: /\.js$/, 
      exclude: /node_modules/, 
      loader: 'babel-loader?presets[]=es2015&presets[]=react' 
    }
  ]
 **/