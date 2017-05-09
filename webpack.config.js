var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
      }
    ]
	},
	plugins: [
		new webpack.ProvidePlugin({
      Tether: "tether"
    }),		
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	]
};
