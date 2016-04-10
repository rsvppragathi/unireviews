var path = require('path');
var webpack = require('webpack');
var bourbon = require('node-bourbon').includePaths;


module.exports = {
  entry: {
    javascript: path.resolve(__dirname, 'src/app/main.js'),
    html: path.resolve(__dirname, 'src/index.html')
  },
  devtool: 'sourcemap',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
 	resolve: {
    modulesDirectories: ['src/app', 'node_modules', path.resolve(__dirname)],
  },
  module: {
  	loaders: [
	    { 
	    	test: /\.jsx?$/, 
	    	exclude: /node_modules/, 
	    	loader: 'babel-loader',
	    	query: {
        	presets: ['react', 'es2015']
      	}
	    },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?includePaths[]='+bourbon
      },
  	]
  }
}