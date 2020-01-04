- [path](#path)
  - [path.join([...paths])](#pathjoinpaths)
# path
> path模块提供了处理文件和目录路径的实用程序。可以使用以下命令访问它:
> ```js
> const path = require('path');
> ```

## path.join([...paths])
> - `...paths`: \<`string`> 路径段的序列
> - `返回`: \<string>  
 
> `path.join()`方法使用特定于平台的分隔符作为分隔符将所有给定的路径段连接在一起，然后对结果路径进行规范化。

>忽略零长度的路径段。如果连接的路径字符串是零长度的字符串，那么'。将返回，表示当前工作目录。

**示例**

```js
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar');
// Throws 'TypeError: Path must be a string. Received {}'
```
> 如果任何路径段不是字符串，就会引发类型错误。