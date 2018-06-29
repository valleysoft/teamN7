module.exports = {
    entry: {
        app: __dirname + '/src/myproject.js',
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [ {
            test: [/\.js$/, /\.jsx$/],
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015', 'react'] },
            }]
        }]
    },
    devServer: {
       contentBase: './public'
    }
}

