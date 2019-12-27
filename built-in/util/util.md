# 工具
util模块主要是为了支持Node.js自己的内部api需求而设计的。但是，许多实用工具对于应用程序和模块开发人员也是有用的。可以使用以下命令访问它：
```js
const util = require('util');
```
## util.promisify(original)
- `original` \<Function>
- `Returns`: \<Function>
  
接受一个遵循常见的错误优先回调样式的函数，即接受一个(err, value) =>…回调作为最后一个参数，并返回一个返回承诺的版本。

```js
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);
stat('.').then((stats) => {
  // Do something with `stats`
}).catch((error) => {
  // Handle the error.
});
```
或者，相当于使用异步函数:
```js
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

async function callStat() {
  const stats = await stat('.');
  console.log(`This directory is owned by ${stats.uid}`);
}
```