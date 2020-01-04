# Windows环境变量路径空格解决方案

- 第一种解决方案：

> 如下图所示，在空格这一段添加双引号。

注意：如果这里同时使用了maven，那么这种方式会导致maven无法使用，所以不建议使用。



- 第二种解决方案：使用Windows的软连接

> 在Windows的命令终端（cmd）中，使用命令：

创建软连接：mklink /J E:\myRJ\java "C:\Program Files\Java\jdk1.8.0_60"

增加java_home软连：set JAVA_HOME="E:\myRJ\java" 



完成以上操作，再来检查我们的每一项环境，都可以正常使用了。