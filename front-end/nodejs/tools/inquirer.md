- [inquirer:调查者，询问者](#inquirer%e8%b0%83%e6%9f%a5%e8%80%85%e8%af%a2%e9%97%ae%e8%80%85)
  - [目标和理念](#%e7%9b%ae%e6%a0%87%e5%92%8c%e7%90%86%e5%bf%b5)
  - [文档](#%e6%96%87%e6%a1%a3)
    - [安装](#%e5%ae%89%e8%a3%85)
    - [方法](#%e6%96%b9%e6%b3%95)
      - [inquirer.prompt(questions) -> promise](#inquirerpromptquestions---promise)
      - [inquirer.registerPrompt(name, prompt)](#inquirerregisterpromptname-prompt)
# inquirer:调查者，询问者
公共交互式命令行用户界面的集合。
## 目标和理念
inquirer.js致力于成为Node.js(也可能是“CLI Xanadu”)的一个易于嵌入和漂亮的命令行界面。

inquirer.js应该简化的过程:
* 提供错误的反馈
* 提问
* 解析输入
* 验证答案
* 管理层次提示

> 注意:inquier .js提供了用户界面和查询会话流。如果你正在寻找一个完全成熟的命令行程序实用工具，然后检查指挥官，vorpal或args。

## 文档
### 安装
```cli
npm install inquirer
```
```js
var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  });
```
### 方法
#### inquirer.prompt(questions) -> promise
启动提示界面(查询会话)

* questions(Array)包含question对象（使用reactive接口，您还可以传递一个RxObservable的实例）
* 返回一个promise

#### inquirer.registerPrompt(name, prompt)
在名称下注册提示插件。
* name(string)这个新提示符的名称。(用于问题类型)
* prompt(object):提示对象本身(插件)