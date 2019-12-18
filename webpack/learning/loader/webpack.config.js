module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['./package/test1','./package/test2','./package/test3']
      }
    ]
  }
}