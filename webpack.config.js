var path = require("path");

module.exports = {
    context: path.join(__dirname, "/app"),
    entry: "./app.js",
    devtool: "source-map",
    output: {
        path: __dirname,
        publicPath: "/build/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "app",
        port: process.env.PORT || 8001
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
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jpg|png|svg|ttf|eot|woff|woff2)$/,
                loader: "file-loader?limit=10000"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=public/fonts/[name].[ext]'
            }

        ]
    }
};
