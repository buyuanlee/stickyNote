const webpack = require('webpack');
const path = require('path');

// var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var autoprefixer = require('autoprefixer')

module.exports = {
    entry: path.join(__dirname, "src/js/app/index.js"),
    output: {
        filename: 'javascripts/index.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]
            // use: ExtractTextPlugin.extract({
            //     fallback: "style-loader",
            //     use: ["css-loader", "less-loader", "postcss-loader"]
            // }) //把 css 抽离出来生成一个文件
        }]
    },
    resolve: {
        alias: {
            mod: path.join(__dirname, "src/js/mod"),
            less: path.join(__dirname, "src/less")
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        // new ExtractTextPlugin("css/index.css"),
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         postcss: [
        //             autoprefixer(),
        //         ]
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        //     output: {
        //         comments: false,
        //     },
        // }),
    ]
};