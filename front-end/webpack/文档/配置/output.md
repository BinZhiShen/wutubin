- [输出](#%e8%be%93%e5%87%ba)
  - [output.auxiliaryComment](#outputauxiliarycomment)
  - [output.chunkFilename](#outputchunkfilename)
  - [output.publicPath](#outputpublicpath)
# 输出
> 顶级输出键包含一组选项，指导webpack如何以及在何处输出包、资产以及其他任何您使用webpack打包或加载的内容。

## output.auxiliaryComment
> 与output.library、output.libraryTarget一起用时，这个参数可以允许用户在导出包里插入注释。要为每个libraryTarget类型插入相同的注释，请将auxiliaryComment设置为字符串：
```js
module.exports = {
  //...
  output: {
    library: 'someLibName',
    libraryTarget: 'umd',
    filename: 'someLibName.js',
    auxiliaryComment: 'Test Comment'
  }
};
```
产生下列结果:
```js
(function webpackUniversalModuleDefinition(root, factory) {
  // Test Comment
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require('lodash'));
  // Test Comment
  else if(typeof define === 'function' && define.amd)
    define(['lodash'], factory);
  // Test Comment
  else if(typeof exports === 'object')
    exports['someLibName'] = factory(require('lodash'));
  // Test Comment
  else
    root['someLibName'] = factory(root['_']);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
  // ...
});
```
> 对于每个libraryTarget注释的细粒度控制，传递一个对象:
```js
module.exports = {
  //...
  output: {
    //...
    auxiliaryComment: {
      root: 'Root Comment',
      commonjs: 'CommonJS Comment',
      commonjs2: 'CommonJS2 Comment',
      amd: 'AMD Comment'
    }
  }
};
```
## output.chunkFilename
string = '[id].js'
> 此选项确定非条目块文件的名称
## output.publicPath
string = ''/function
> 当使用按需加载或加载外部资源(如图像、文件等)时，这是一个重要的选项。如果指定了不正确的值，在加载这些资源时将收到404错误。

> 此选项指定在浏览器中引用时输出目录的公共URL。相对URL是相对于HTML页面(或<base>标记)解析的。服务器相对url、协议相对url或绝对url也是可能的，有时也是必需的，例如在CDN上托管资产时。

> 该选项的值前缀为运行时或加载程序创建的每个URL。因此，在大多数情况下，此选项的值以/结尾。