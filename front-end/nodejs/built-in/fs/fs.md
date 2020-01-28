- [fs.readFile(path[, options], callback)](#fsreadfilepath-options-callback)
- [fs.readFileSync(path[, options], callback)](#fsreadfilesyncpath-options-callback)
- [fs.stat(path[, options], callback)](#fsstatpath-options-callback)
- [fs.statSync(path[, options])](#fsstatsyncpath-options)
- [fs.unlink(path, callback)](#fsunlinkpath-callback)
- [fs.unlinkSync(path)](#fsunlinksyncpath)

## `fs.readFile(path[, options], callback)`
- path \<string> | \<Buffer> | \<URL> | \<integer> 文件名或文件描述符
- options \<Object> | \<string>
  - encoding \<string> | \<null> 默认: null
  - flag <string> 参见文件系统标志的支持. 默认: 'r'.
- callback \<Function>
  - err \<Error>
  - data \<string> | \<Buffer>

异步读取文件的全部内容。

回调函数传递两个参数(err, data)，其中data是文件的内容。

如果没有指定编码，则返回原始缓冲区。

如果options是字符串，那么它指定编码

当路径是一个目录时，fs.readFile()和fs.readFileSync()的行为是特定于平台的。在macOS、Linux和Windows上，将返回一个错误。在FreeBSD上，将返回目录内容的表示形式。

函数的作用是:缓冲整个文件。为了最小化内存开销，如果可能的话，最好使用fs.createReadStream()流。
## `fs.readFileSync(path[, options], callback)`
- path \<string> | \<Buffer> | \<URL> | \<integer> 文件名或文件描述符
- options \<Object> | \<string>
  - encoding \<string> | \<null> 默认: null
  - flag <string> 参见文件系统标志的支持. 默认: 'r'.
- returns \<string> | <Buffer>
## `fs.stat(path[, options], callback)`
- path \<string> | \<Buffer> | \<URL>
- options \<Object>
  - bigint \<boolean> 是否返回的fs.state数值是bigint. 默认: false.
- callback \<Function>
  - err \<Error>
  - stats \<fs.Stats>

回调获得两个参数(err，stats)，其中stats是fs.Stats对象。  
万一出错，用err.code将是一个常见的系统错误。

不建议在调用`fs.open()`、`fs.readFile()`或`fs.writeFile()`之前使用fs.stat()检查文件是否存在。相反，用户代码应该直接打开文件并在文件不可用时处理引发的错误

要检查文件是否存在而不需要在以后操作它，建议使用`fs.access()`。
## `fs.statSync(path[, options])`
- path \<string> | \<Buffer> | \<URL>
- options \<Object>
  - bigint \<boolean> 是否返回的fs.state数值是bigint. 默认: false.
- return \<fs.Stats>
## fs.unlink(path, callback)
- path \<string> | \<Buffer> | \<URL>
- callback \<Function>
  - err \<Error>

异步删除文件或符号链接。除了一个可能的异常之外，没有其他的参数给完成回调。

`fs.unlink()`不能在空目录或其他目录下工作。要删除目录，使用`fs.rmdir()`。
## fs.unlinkSync(path)
- path \<string> | \<Buffer> | \<URL>