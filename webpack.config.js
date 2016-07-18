var webpack = require("webpack")

module.exports = {
    entry: "./import-demo/subfolder/app.js",
    output: { filename: "dist/import-demo.js" },
    module: {
        loaders: [
            {
                test: /.js/,
                loader: "babel-loader"
            }
        ]
    }
}
