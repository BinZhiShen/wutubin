- [子进程](#%e5%ad%90%e8%bf%9b%e7%a8%8b)
  - [异步进程的创建](#%e5%bc%82%e6%ad%a5%e8%bf%9b%e7%a8%8b%e7%9a%84%e5%88%9b%e5%bb%ba)
    - [child_process.exec(command, options)](#childprocessexeccommand-options)
# 子进程
## 异步进程的创建
### child_process.exec(command[, options][, callback])
- `command` \<string> 要运行的命令，参数以空格分隔。
- `options` \<Object>
  - `cwd` \<string> 子进程的当前工作目录。默认: null.
  - `env` \<Object> 环境`键-值`对。默认: process.env.
  - `encoding` \<string> 默认: 'utf8'
  - `shell` \<string> Shell来执行命令. 默认: '/bin/sh' on Unix, process.env.ComSpec on Windows.
  - `timeout` \<number> 默认: 0
  - `maxBuffer` \<number> stdout或stderr上允许的最大字节数。如果超出，则终止子进程并截断任何输出。默认: 1024 * 1024.
  - `killSignal` \<string> | \<integer> 默认: 'SIGTERM'
  - `uid` \<number> 设置进程的用户标识.
  - `gid` \<number> 设置进程的组标识.
  - `windowsHide` \<boolean> 隐藏通常在Windows系统上创建的子进程控制台窗口. 默认: false.
- `callback` \<Function> 进程终止时使用输出调用。
  - `error` \<Error>
  - `stdout` \<string> | \<Buffer>
  - `stderr` \<string> | \<Buffer>
- `Returns`: \<ChildProcess>

生成一个shell，然后在该shell中执行命令，缓冲任何生成的输出。传递给exec函数的命令字符串由shell直接处理，需要相应地处理特殊字符(根据shell而异)

永远不要将未经消毒的用户输入传递到此函数。任何包含shell元字符的输入都可以用来触发任意命令执行。

> 如果提供回调函数，则使用参数(error、stdout、stderr)调用它。如果成功，错误将为null。如果错误，error将是Error的一个实例。这个`error.code`代属性将是子进程的退出代码,`error.sigal`将被设置为终止进程的信号。任何非0的退出码都被认为是错误。

> 传递给回调的stdout和stderr参数将包含子进程的stdout和stderr输出。默认情况下，Node.js会将输出解码为UTF-8，并将字符串传递给回调。可以使用`encoding`选项指定用于解码stdout和stderr输出的字符编码。如果编码是“buffer”，或者是无法识别的字符编码，那么buffer对象将被传递给回调。

> 如果timeout大于0，则如果子进程运行的时间超过timeout毫秒，则父进程将发送killSignal属性标识的信号(默认为'SIGTERM')。

> 与exec(3) POSIX系统调用不同，子进程.exec()不替换现有进程，而是使用shell来执行命令。

> 如果调用此方法作为其util.promisify()ed版本，则它将返回具有stdout和stderr属性的对象的Promise。返回的ChildProcess实例作为子属性附加到Promise上。如果出现错误(包括导致除0之外的退出码的任何错误)，将返回一个被拒绝的承诺，该承诺与回调中给出的错误对象相同，但带有两个附加属性stdout和stderr。

```js
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function lsExample() {
  const { stdout, stderr } = await exec('ls');
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}
lsExample();
```
