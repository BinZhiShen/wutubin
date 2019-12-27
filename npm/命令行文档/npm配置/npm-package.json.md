# npm-package.json
> npm的package.json文件的处理细节
## 描述
> 关于package.json需要什么，这个文档包含所有你需要知道的。它必须是实际的JSON，而不仅仅是JavaScript对象文字。

## bin
许多包都有一个或多个可执行文件，希望将它们安装到路径中。npm使这变得非常简单(实际上，它使用这个特性来安装npm可执行文件)。

要使用它，请在package.json中提供bin字段，是命令名到本地文件名的映射。在安装时，npm将该文件符号链接到全局安装的prefix/bin中，或本地安装的./node_modules/.bin/中。

例如，myapp可以有这个：
```json
{ "bin" : { "myapp" : "./cli.js" } }
```
因此，当您安装myapp时，它将创建一个从clip .js脚本到/usr/local/bin/myapp的符号链接

如果您有一个单一的可执行文件，它的名称应该是包的名称，那么您可以将它作为字符串提供。例如:
```json
{ 
  "name": "my-program",
  "version": "1.2.5",
  "bin": "./path/to/program" 
}
```
等同于
```json
{ "name": "my-program"
, "version": "1.2.5"
, "bin" : { "my-program" : "./path/to/program" } }
```
> 请确保bin中引用的文件以“`#!/usr/bin/env node`”开始，否则，脚本将在没有node可执行文件的情况下启动
## files
> 可选文件字段是一个文件模式数组，它描述了作为依赖项安装包时要包含的条目。  
> 文件模式遵循与`.gitignore`类似的语法,但是相反：包含文件、目录或glob模式(\*, \*\*/\*)将使该文件在打包时包含在tarball中。  
> 省略字段将使它默认为["*"]，这意味着它将包括所有文件。

> 一些特殊的文件和目录也被包含或排除，不管它们是否存在于files数组中(见下面)。

> 您还可以在包的根目录或子目录中提供`.npmignore`文件，这样可以避免包含文件。在包的根目录中，它不会覆盖files字段，但在子目录中会覆盖。`.npmignore`文件的工作原理与`.gitignore`类似。如果有一个`.gitignore`文件，并且缺少`.npmignore`，则使用`.gitignore`的内容。

> `package.json#files`字段包含的文件无法通过.npmignore或.gitignore排除。

无论设置如何，某些文件总是包括在内
- package.json
- README
- CHANGES / CHANGELOG / HISTORY
- LICENSE / LICENCE
- NOTICE
- The file in the “main” field
  
README, CHANGES, LICENSE & NOTICE 以有任意的格和扩展

相反，有些文件总是被忽略：
- .git
- CVS
- .svn
- .hg
- .lock-wscript
- .wafpickle-N
- .*.swp
- .DS_Store
- ._*
- npm-debug.log
- .npmrc
- node_modules
- config.gypi
- *.orig
- package-lock.json (use shrinkwrap instead)