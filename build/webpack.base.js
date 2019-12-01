const webpack = require('webpack');
const path = require('path');
const htmlPlugin = require('');

module.exports = {
    mode: 'development',
    entry: {
        a: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../output')
    },
    plugin: {

    }
};
