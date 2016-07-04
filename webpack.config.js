module.exports = {
  entry: './src/js/app.js'
  output: {
    path: './public/js',
    filename: 'bundle.js'
  }
  "scripts": {
    "webpack": "webpack -w"
  }
  module: {
    loaders: [
      {
        test: /\.js$/,
        // all files that end in '.js' will be ran through this loader
        include: /src/,
        // only run through files located in the `src` directory
        exclude: /node_modules/,
        // ignore the `node_modules` directory
        loader: 'babel-loader',
        //  use the babel-loader module
        query: {
          presets: [ "react" ]
            // use the babel-preset-react preset
        }
      }
    ]
  }
};
