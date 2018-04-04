var path = require('path');
var webpack = require('webpack');
var loaders = require('babel-loader');

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "App.js"
    },
    
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
    
   /*
   module: {
     
        rules: [ 

        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            }
        }

        ]
    }
    */
}




/*
module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
      path: "./app/temp/scripts",
      filename: "App.js"
    },
    module: {
      loaders: [
        {
          loader: 'babel',
          query: {
            presets: ['es2015']
          },
          test: /\.js$/,
          exclude: /node_modules/
        }
      ]
    }
  }
  */