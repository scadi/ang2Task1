var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/main.ts',
    output:{
        path: 'js',
        filename: 'main.js'
    }
}