const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require("./webpack.common.js");
const devConfig = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: "./dist",
        port: 8080,
        open:true,
        hot: true
    },
    optimization: {
		usedExports: true
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ]
}
module.exports = merge(commonConfig,devConfig)
