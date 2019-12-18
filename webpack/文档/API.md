- [加载器接口](#%e5%8a%a0%e8%bd%bd%e5%99%a8%e6%8e%a5%e5%8f%a3)
  - [示例](#%e7%a4%ba%e4%be%8b)
  - [同步加载器](#%e5%90%8c%e6%ad%a5%e5%8a%a0%e8%bd%bd%e5%99%a8)
  - [异步加载器](#%e5%bc%82%e6%ad%a5%e5%8a%a0%e8%bd%bd%e5%99%a8)
  - [pitching loader](#pitching-loader)
# 加载器接口
> 加载器只是一个导出函数的JavaScript模块。加载程序运行器调用此函数并将前一个加载程序或资源文件的结果传递给它。函数的这个上下文由webpack和加载器运行器填充，并提供了一些有用的方法，这些方法允许加载器(除其他外)将其调用样式更改为异步，或获取查询参数。
> 
> 第一个加载器传递一个参数:资源文件的内容。编译器期望最后一个加载器的结果。结果应该是字符串或缓冲区(转换为字符串)，表示模块的JavaScript源代码。还可以传递一个可选的SourceMap结果(作为JSON对象)。

> 可以以同步模式返回单个结果。对于多个结果，必须调用this.callback()。在异步模式下，必须调用this.async()来指示加载器运行器应该等待异步结果。它返回this.callback ()。然后加载器必须返回undefined并调用该回调。

## 示例
> 以下部分提供了不同类型装入器的一些基本示例。注意，map和meta参数是可选的
## 同步加载器
> return 和 this.callback可以用来同步地返回转换后的内容:
```js
// sync-loader
module.exports = function(content, map, meta) {
  return someSyncOperation(content);
};
```
> this.callback方法更加灵活，因为它允许传递多个参数，而不仅仅是内容。
```js
// sync-loader-with-multiple-results
module.exports = function(content, map, meta) {
  this.callback(null, someSyncOperation(content), map, meta);
  return; // always return undefined when calling callback()
};
```
## 异步加载器
> 对于异步加载器，是this.async用于检索回调函数
```js
// async-loader
module.exports = function(content, map, meta) {
  var callback = this.async();
  someAsyncOperation(content, function(err, result) {
    if (err) return callback(err);
    callback(null, result, map, meta);
  });
};
```
```js
// async-loader-with-multiple-results
module.exports = function(content, map, meta) {
  var callback = this.async();
  someAsyncOperation(content, function(err, result, sourceMaps, meta) {
    if (err) return callback(err);
    callback(null, result, sourceMaps, meta);
  });
};
```
> `加载器最初设计为在同步加载管道中工作，如Node.js(使用经过增强的require)和异步管道中工作，如在webpack中。然而，由于昂贵的同步计算在像Node这样的单线程环境中是一个糟糕的主意。我们建议使你的加载异步如果可能。如果计算量很小，那么同步加载器是可以的。`

> 默认情况下，资源文件被转换成UTF-8字符串并传递给加载程序。通过设置raw标记，加载器将接收原始缓冲区。每个加载器都允许将其结果作为字符串或缓冲区交付。编译器在加载器之间转换它们。
```js
module.exports = function(content) {
  assert(content instanceof Buffer);
  return someSyncOperation(content);
  // return value can be a `Buffer` too
  // This is also allowed if loader is not "raw"
};
module.exports.raw = true;
```
## pitching loader
> 加载器总是从右向左调用。在某些情况下，加载程序只关心请求背后的元数据，可以忽略前一个加载程序的结果。加载器上的俯仰方法在实际执行加载器之前从左到右调用(从右到左)。

> `加载器可以在请求中内联添加，并通过内联前缀禁用，这将影响它们“定位”和执行的顺序。`

> 用于下列use的配置
```js
module.exports = {
  //...
  module: {
    rules: [
      {
        //...
        use: [
          'a-loader',
          'b-loader',
          'c-loader'
        ]
      }
    ]
  }
};
```
> 这些步骤将会发生:
```js
|- a-loader `pitch`
  |- b-loader `pitch`
    |- c-loader `pitch`
      |- requested module is picked up as a dependency
    |- c-loader normal execution
  |- b-loader normal execution
|- a-loader normal execution
```
> 那么，为什么装载机可以利用“俯仰”阶段?
> 
> 首先，传递给pitch方法的数据也在执行阶段公开。数据，对于捕获和共享周期早期的信息非常有用。

```js
module.exports = function(content) {
  return someSyncOperation(content, this.data.value);
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  data.value = 42;
};
```
> 其次，如果加载器在pitch方法中交付结果，则该过程将转回并跳过其余加载器。在上面的例子中，如果b-loaders pitch方法返回了什么:
```js
module.exports = function(content) {
  return someSyncOperation(content);
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  if (someCondition()) {
    return 'module.exports = require(' + JSON.stringify('-!' + remainingRequest) + ');';
  }
};
```
> 以上步骤将被缩短为:
```js
|- a-loader `pitch`
  |- b-loader `pitch` returns a module
|- a-loader normal execution
```
