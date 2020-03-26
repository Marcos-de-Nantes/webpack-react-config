const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const dotenv = require("dotenv/config");

module.exports = merge(common, {
	mode: "development",
	stats: {
		children: false
	},
	devtool: "inline-source-map",
	devServer: {
		port: process.env.PORT || 5000,
		compress: true,
		headers: {"Access-Control-Allow-Origin": "*"},
		stats: "errors-warnings",
		contentBase: "./build",
		watchContentBase: true
	}
});