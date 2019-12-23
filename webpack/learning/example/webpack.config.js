module.exports = {
  entry: './src/index.js',
  output: {
    library: 'someLibName',
    libraryTarget: 'umd',
    filename: 'someLibName.js',
    // auxiliaryComment: '附加注释', // 每个libraryTarget插入同样的注释，与libraryTarget，library配合使用
    // 每个libraryTarget插入不同的注释
    auxiliaryComment: {
      root: 'Root Comment',
      commonjs: 'CommonJS Comment',
      commonjs2: 'CommonJS2 Comment',
      amd: 'AMD Comment'
    }
  },
  mode: 'development'
}