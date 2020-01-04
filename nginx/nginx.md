- [nginx是什么](#nginx%e6%98%af%e4%bb%80%e4%b9%88)
- [安装](#%e5%ae%89%e8%a3%85)
  - [window](#window)
  - [linux](#linux)
# nginx是什么
> Nginx是一款轻量级的Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，在BSD-like 协议下发行。其特点是占有内存少，并发能力强，事实上nginx的并发能力在同类型的网页服务器中表现较好，中国大陆使用nginx网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。
# 安装
## window
- 下载nginx
- 解压到指定目录（路径不能有中文）
## linux
直接安装
```linux
yum -y install nginx
```
查看安装包
```linux
rpm -qa|grep nginx
```
查看安装路径
```linux
rpm -ql nginx
```
查看状态
```linux
ps -ef | grep nginx
```
启动、停止
```linux
<!-- 启动 -->
nginx [-c 配置文件] 
<!-- 停止 -->
nginx -s stop
```
修改配置后重新加载生效
```linux
nginx -s reload
```