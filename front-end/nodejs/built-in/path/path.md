- [path](#path)
  - [Windows vs. POSIX](#windows-vs-posix)
  - [path.join([...paths])](#pathjoinpaths)
# path
> path模块提供了处理文件和目录路径的实用程序。可以使用以下命令访问它:
> ```js
> const path = require('path');
> ```
## Windows vs. POSIX
> path模块的默认操作因运行Node.js应用程序的操作系统而异。具体来说，当在Windows操作系统上运行时，path模块将假定使用的是Windows样式的路径。

> 因此，在POSIX和Windows上使用path.basename()可能会产生不同的结果

On POSIX:
```js
path.basename('C:\\temp\\myfile.html');
// Returns: 'C:\\temp\\myfile.html'
```
On Windows:
```js
path.basename('C:\\temp\\myfile.html');
// Returns: 'myfile.html'
```
要在任何操作系统上使用Windows文件路径时获得一致的结果，请使用path.win32:

On POSIX and Windows:
```js
path.win32.basename('C:\\temp\\myfile.html');
// Returns: 'myfile.html'
```
在任何操作系统上使用POSIX文件路径时，要获得一致的结果，请使用path.posix:

On POSIX and Windows:
```js
path.posix.basename('/tmp/myfile.html');
// Returns: 'myfile.html'
```
在Windows Node.js遵循的概念，每个驱动器的工作目录。在使用没有反斜杠的驱动器路径时可以观察到这种行为。例如，path.resolve('`c:\\`')可能会返回与path.resolve('c:')不同的结果。有关更多信息，请参见此MSDN页面。
## path.join([...paths])
> - `...paths`: \<`string`> 路径段的序列
> - `返回`: \<string>  
 
> `path.join()`方法使用特定于平台的分隔符作为分隔符将所有给定的路径段连接在一起，然后对结果路径进行规范化。

>忽略零长度的路径段。如果连接的路径字符串是零长度的字符串，那么'`.`'将返回，表示当前工作目录。

**示例**

```js
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar');
// Throws 'TypeError: Path must be a string. Received {}'
```
> 如果任何路径段不是字符串，就会引发类型错误。