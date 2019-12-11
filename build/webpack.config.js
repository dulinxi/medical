const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');

const banner = new webpack.BannerPlugin({
    banner: [
        `Medicaljs v${pkg.version}`,
        // 'https://wjsh.com/',
        'Copyright (c) 2019, Du Jun'
    ].join('\n'),
    entryOnly: true,
});
const baseConfig = {
    mode: 'development',
    context: path.resolve(__dirname, '..'),
    
    entry: './src/index.js',
    output: {
        filename: 'medical.js',
        library: 'Medical',
        libraryExport: 'default',
        libraryTarget: 'umd',
        path: path.resolve(__dirname,'../dist')
    },
    plugins: [
        banner
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: false,
        port: process.env.npm_package_config_ports_webpack,
        stats: 'minimal',
        disableHostCheck: true
    }
};


module.exports = () => {
    return baseConfig;
}