const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	stats: {
		children: false
	},
	devtool: "inline-source-map",
	devServer: {
		port: process.env.PORT || 3000,
		compress: true,
		headers: {"Access-Control-Allow-Origin": "*"},
		stats: "errors-only",
		contentBase: "./build",
		watchContentBase: true
	}
});