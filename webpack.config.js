const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build"),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: { presets: ["@babel/env", "@babel/preset-react"] },
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	devServer: {
		port: 3000,
		hot: true,
		open: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public/index.html"),
			filename: "index.html",
		}),
	],
	performance: {
		// maxAssetSize: 1000000,
		hints: false,
	},
};