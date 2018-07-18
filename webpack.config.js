var path = require('path');
var webpack = require('webpack');
var browserSync = require("browser-sync");

var argv;
try {
    argv = JSON.parse(process.env.npm_config_argv).original;
} catch (ex) {
    argv = process.argv;
}

var config = {
    entry: path.resolve(__dirname, './packages/' + argv[2] + '/examples/' + argv[3] + '/main.js'),
    output: {
        // path: __dirname,
        path: path.resolve(__dirname, './packages/' + argv[2] + '/examples/' + argv[3] + '/'),
        filename: 'bundler.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                query: {
                    presets: 'env',
                    "plugins": [
                        "transform-class-properties"
                    ]
                },

            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoEmitOnErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    // devtool: 'source-map',
};


browserSync({ 
    server: './packages', 
    startPath: argv[2] + '/examples/' + argv[3] + '/index.html' ,
    files: './packages/'+argv[2]  
});

module.exports = config;
