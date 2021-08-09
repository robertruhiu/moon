const BrotliPlugin = require('brotli-webpack-plugin');
module.exports = {
    configureWebpack: {
        performance: {
            hints: false
        },
        plugins: [
            new BrotliPlugin({
                asset: '[path].br[query]',
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0.7
            }),


        ],


    },


}

