// Distribution webpack config, configures optimization and minimization
'use strict';

const path = require('path');
const config = require('./config.js');
const { merge } = require('webpack-merge');

const Terser = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = merge(config, {
	mode: 'production',

	// Configure where the output folder should be
	output: {
		publicPath: '/static/frontend/',
	},

	module: {
		rules: [
			// Compile .js and .jsx files with babel
			{
				test: /\.[jt]s(x)?$/,
				resolve: { extensions: ['.js', '.jsx'] },
				include: path.resolve(__dirname, '../src'),
				use: ['thread-loader', 'babel-loader'],
			},
		],
	},

	// Specify Terser configuration
	optimization: {
		minimize: true,
		minimizer: [new Terser()],
	},

	plugins: [
		// Clean plugin removed output directory before building to avoid conflicts
		new CleanWebpackPlugin(),

		// Create a javascript bundle info needed by django
		new BundleTracker({ path: __dirname, filename: '../webpack-stats.json' }),
	],
});
