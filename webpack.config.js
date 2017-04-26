var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
const webpack = require("webpack");

module.exports = {
    context: path.join(__dirname, "/app"),
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8001/#/',
        'webpack/hot/only-dev-server',
        "./app.js"
    ],
    devtool: "inline-source-map",
    output: {
        path: __dirname,
        publicPath: "/build/",
        filename: "app.js"
    },
    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true,
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
        modules: [
            path.join(__dirname),
            "node_modules"
        ],
        extensions: [".js", ".json", ".es6"]
    },
    module: {
        rules: [
            {
                test: /\.(es6|js)$/,
                exclude: [
                    path.resolve(__dirname, "/node_modules/")
                ],
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "sass-loader"
                    ],
                })
            },
            {
                test: /\.(jpg|png|svg|ttf|eot|woff|woff2)$/,
                use: [
                    "file?name=public/fonts/[name].[ext]"
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
};
