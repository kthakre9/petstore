var path = require('path');
var pluginExtractText = require("extract-text-webpack-plugin");

module.exports = {
    context: path.join(__dirname, '/app'),
    entry: "./app.js",
    output: {
        path: path.join(__dirname, '/app/build'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: 'app'
    },
    resolve: {
        modulesDirectories: ['web_modules','node_modules'],
        extensions: ['', '.js', '.json', '.es6']
    },
    module: {
        loaders: [
            {
                test: /\.(es6|js)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: pluginExtractText.extract("style-loader", "css-loader")
            },
            {
                test: /\.(jpg|png|svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader?limit=10000'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }

        ]
    },
    plugins: [
        new  pluginExtractText('[name].css')
    ]
};