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

const jsRules = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/env',
                {
                    targets: {
                        browsers: [
                            'last 2 Chrome major versions',
                            'last 2 Firefox major versions',
                            'last 2 Safari major versions',
                            'last 2 Edge major versions',
                            'last 2 iOS major versions',
                            'last 2 ChromeAndroid major versions',
                        ],
                    },
                },
            ],
        ]
    }
};

const baseConfig = {
    mode: 'development',
    context: path.resolve(__dirname, '..'),
    entry: './src/index.js',
    output: {
        filename: 'medical.js',
        library: 'Medical',
        libraryExport: 'default',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, '../dist')
    },
    externals: {
        d3: {
            root: 'd3',
            commonjs: 'd3',
            commonjs2: 'd3',
            amd: 'd3'
        }
    },
    module: {
        rules: [jsRules]
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