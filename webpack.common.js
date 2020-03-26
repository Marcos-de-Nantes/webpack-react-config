const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const PnpWebpackPlugin = require("pnp-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/build"),
		filename: "app[hash].js",
		libraryTarget: "umd"
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: [
					{ loader: "babel-loader", options: PnpWebpackPlugin.tsLoaderOptions() },
					{ loader: "eslint-loader" }
				],
				include: [path.resolve(__dirname, "src")],
				exclude: [path.resolve(__dirname, "node_modules")]
			},
			{
				test: /\.(css|scss|sass)$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				],
				include: [path.resolve(__dirname, "src"), path.resolve(__dirname, "node_modules")],
				exclude: [path.resolve(__dirname, "public")]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{ loader: "file-loader" }
				]
			},
		]
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin({
			test: /\.js(\?.*)?$/i,
			include: [path.resolve(__dirname, "src")],
			exclude: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "public")],
			cache: false
		})],
	},
	resolve: {
		modules: [
			"node_modules",
			path.resolve(__dirname, "src")
		],
		extensions: [".js", ".jsx", ".css"],
		plugins: [ PnpWebpackPlugin ]
	},
	resolveLoader: {
		plugins: [
			PnpWebpackPlugin.moduleLoader(module)
		],
	},
	node: {
		child_process: "empty",
		fs: "empty",
		crypto: "empty",
		net: "empty",
		tls: "empty"
	}
};