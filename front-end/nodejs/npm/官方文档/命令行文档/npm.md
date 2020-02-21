# npm
javascript package manager
## 概要
```cli
npm <command> [args]
```
## 版本
@VERSION@
## 描述
npm是node JavaScript平台的包管理器。它将模块放置在适当的位置以便node可以找到它们，并智能地管理依赖冲突。

它是非常可配置的，以支持各种各样的用例。最常见的是，它用于发布、发现、安装和开发节点程序。

运行`npm help`获得可用命令的列表。
## 重要
npm被配置为使用npm, Inc.的公共注册中心默认在https://registry.npmjs.org.使用npm公共注册表须遵守下列使用条款在https://www.npmjs.com/policies/terms.

您可以配置npm来使用任何您喜欢的兼容注册表，甚至可以运行您自己的注册表。对他人注册表的使用可能受其使用条款的约束。
## 介绍
你可能有npm，因为你想安装东西。

使用npm install blerg来安装最新版本的blerg。更多信息请查看npm-install。它可以做很多事情。

使用npm search命令来显示所有可用的内容。使用npm ls显示你安装的所有东西。
## 依赖
如果一个包引用另一个带有git URL的包，npm就依赖于预安装的git。

如果npm试图安装的包之一是本机node模块，并且需要编译c++代码，npm将使用node-gyp来完成该任务。对于Unix系统，node-gyp需要Python、make和类似GCC的构建链。在Windows上，需要Python和Microsoft Visual Studio c++。Python 3不受node-gyp的支持。更多信息请访问node-gyp知识库和node-gyp Wiki。
## 指南
查看npm-folders，了解npm把东西放在哪里。

特别是，npm有两种操作模式:
* global模式：npm将包安装到安装前缀prefix/lib/node_modules，bins安装在prefix/bin
* local模式：npm将包安装到当前项目目录，默认是当前工作目录。包被安装到./node_modules,bin命令被安装到./node_modules/.bin

默认是local模式。在任何命令上使用-g或——global，以在全局模式下操作。
## 开发人员使用
如果您正在使用npm开发和发布代码，请查看以下帮助主题：
* json:创建一个package.json文件。看package.json
* link:用于将当前工作代码链接到node的路径，这样就不必每次进行更改时都重新安装。使用npm link来做这件事。
* install:如果你不需要符号链接，安装东西是个好主意。特别是，从注册表中安装其他人的代码是通过npm install完成的
* add user:创建一个帐户或登录。凭据存储在用户配置文件中。
* publish:使用npm publish命令将代码上载到注册表。
## 配置
npm是非常可配置的。它从5个位置读取配置选项。
* 命令行开关：用--key val设置一个配置。所有的键都有一个值，即使它们是布尔值(配置解析器在解析时并不知道有哪些选项)。如果没有提供值，则将该选项设置为boolean true。
* 环境变量：通过使用npm_config_在环境变量中设置名称前缀来设置任何配置。例如，导出npm_config_key_=val。
* 用户配置：$HOME/.npmrc的文件是一个ini格式的配置列表.如果存在，则解析它。如果在cli或env中设置了userconfig选项，则将使用它。
* 全局配置：在../etc/npmrc（从node可执行文件，默认会解析/usr/local/etc/npmrc）的文件会被解析，如果找到的话。如果在cli、env或用户配置中设置了globalconfig选项，则解析该文件。
* 默认：npm的默认配置项在lib/utils/config-defs.js定义了。这些不能改变

要获得更多信息请看npm-config
## 贡献
补丁欢迎!如果你想做些贡献，但又不知道该做些什么，请阅读贡献指南并检查问题列表。
## bugs

## 作者