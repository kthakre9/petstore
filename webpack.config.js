var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    context: path.join(__dirname, "/app"),
    entry: "./app.js",
    devtool: "source-map",
    output: {
        path: __dirname,
        publicPath: "/build/",
        filename: "app.js"
    },
    devServer: {
        contentBase: "app",
        port: process.env.PORT || 8001,
        proxy: {
            '/api': {
                target: 'http://localhost:3006',
                secure: false
            }
        }
    },
    resolve: {
        modulesDirectories: ["web_modules","node_modules"],
        extensions: ["", ".js", ".json", ".es6"]
    },
    module: {
        loaders: [
            {
                test: /\.(es6|js)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
            {
                test: /\.(jpg|png|svg|ttf|eot|woff|woff2)$/,
                loader: "file?name=public/fonts/[name].[ext]"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
};
