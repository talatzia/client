const webpack = require('webpack');

module.exports = {
    resolve: {
        fallback: {
            "zlib": require.resolve("browserify-zlib"),
            "querystring": require.resolve("querystring-es3"),
            "path": require.resolve("path-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "url": require.resolve("url/"),
            "buffer": require.resolve("buffer/"),
            "util": require.resolve("util/"),
            "fs": false, // fs is not supported in the browser
            "net": false, // net is not supported in the browser
            "http": require.resolve("stream-http"),
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process/browser',
        }),
    ],
};