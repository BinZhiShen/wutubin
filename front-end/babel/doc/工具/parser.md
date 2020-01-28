# @babel/parser
Babel解析器(以前称为Babylon)是Babel中使用的JavaScript解析器。
* 最新的ECMAScript版本默认启用(ES2017)。
* 注释绑定
* 支持JSX、Flow、Typescript。
* 支持实验语言提案(接受任何至少阶段-0的PRs)。
## api
### parse(code, [options])
将提供的代码解析为一个完整的ECMAScript程序
* options
  * sourceType: 指示应该解析代码的模式。可以是"script", "module", 或者 "unambiguous"。默认是"script"。"unambiguous"将使@babel/parser根据ES6导入或导出语句的存在来尝试猜测。带有ES6导入和导出的文件被认为是“模块”，否则就是“脚本”。