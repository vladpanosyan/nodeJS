require('babel-polyfill');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	src: path.resolve(__dirname, './src'),
	dist: path.resolve(__dirname, './dist'),
	assets: 'assets/'
};

module.exports = {
	entry: ["babel-polyfill", PATHS.src],
	output: {
		path: PATHS.dist,
		filename: `assets/js/main.js`,
		publicPath: '/dist/' 
	},
	devServer:  {
		contentBase: path.resolve(__dirname,'dist'),
		port: 8081,
		overlay: {
			warnings: true,
			errors: true
		}
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			loader: 'babel-loader', 
			exclude: /(node_modules|bower_components)/
		},
		]
	},

	plugins:[
	new HTMLWebpackPlugin({
		filename: 'index.html', 
		hash: false,// default
		template: `${PATHS.src}/index.html`
	})
	]
} 