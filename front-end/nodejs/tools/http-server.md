# http-server
http-server 是一个简单的零配置的命令行 http服务器，它足够强大便于生产和使用，用于本地测试和开发。
## 安装
全局安装便于使用
```npm
npm i http-server -g
```
## 快速使用
```nodejs
http-server
```
## 使用方式
```npm
http-server [path] [options]
```
示例：
```npm
http-server c:/demo -a 127.0.0.1 -p 8090
```
参数说明：
* `path`:是目录地址，可以省略，默认是cmd打开的路径地址
* `-a` 参数是监听地址
* `-p` 参数是监听端口
## 其他参数
