var path = require('path');
var webpack = require('webpack');
var packageJSON = require('./package.json');
/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;

var argv;
try {
    argv = JSON.parse(process.env.npm_config_argv).original;
} catch (ex) {
    argv = process.argv;
}

var config = {
    entry: path.resolve(__dirname, './packages/' + argv[3] + '/examples/' + argv[4] + '/main.js'),
    output: {
        // path: __dirname,
        path: path.resolve(__dirname, './packages/' + argv[3] + '/examples/' + argv[4] + '/'),
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




//console.log(ENV);

module.exports = config;
