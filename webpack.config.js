/* global __dirname */

module.exports = {
    entry: "./js/App.js",
    devtool: 'source-map',
    output: {
        path: __dirname + "/static",
        filename: "Bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: [".json", ".js", ".jsx"]
    }
};
