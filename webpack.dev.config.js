/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');

const webpackConfiguration = require('./webpack.config');

const path = require('path');

const environment = {
    paths: {
        /* Path to source files directory */
        source: path.resolve(__dirname, './src/'),

        /* Path to built files directory */
        output: path.resolve(__dirname, './dist/'),
    },
    server: {
        host: 'localhost',
        port: 8000,
    },
};

module.exports = merge(webpackConfiguration, {
    mode: 'development',

    /* Manage source maps generation process */
    devtool: 'eval-source-map',

    /* Development Server Configuration */
    devServer: {
        static: {
            directory: environment.paths.output,
            publicPath: '/',
            watch: true,
        },
        client: {
            overlay: true,
        },
        open: true,
        compress: true,
        hot: false,
        ...environment.server,
    },

    /* File watcher options */
    watchOptions: {
        aggregateTimeout: 300,
        poll: 300,
        ignored: /node_modules/,
    },

    /* Additional plugins configuration */
    plugins: [],
});
