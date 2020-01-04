> chmod是一个Linux命令，它允许您对文件“设置权限”(即分配谁可以读取/写入/执行)。

用法:
```linux
 chmod permissions file
```
或者：
```linux
 chmod permission1_permission2_permission3 file
```
> 在使用chmod时，您需要知道有三种类型的Linux用户需要设置权限。因此，在设置权限时，您是在为“您自己”、“您的组”和世界上的“其他人”分配权限。这些用户在技术上被称为:
- Owner
- Group
- World

> 因此，在设置文件的权限时，您将希望分配所有三个级别的权限，而不仅仅是一个用户。  
> chmod命令实际上有以下语法…
```linux
chmod owner group world FileName
```
> 既然您已经了解了您正在为三个用户级别设置权限，那么您只需了解您能够设置哪些权限  
> Linux为每个文件提供三种类型的权限。
- read
- write
- execute
  
**把它们放在一起:**
> 所以，用外行的术语来说，如果您想让每个人都能读并且只有您自己能写，那么您可以使用以下结构来编写chmod命令。
```linux
COMMAND : OWNER : GROUP : WORLD : PATH
chmod read & write read read FileName
chmod 6 4 4 myDoc.txt
```
**等等!那些数字是什么**  
电脑喜欢数字，不喜欢文字。对不起。你将不得不面对它。查看以下`ls -l`的输出:
```linux
-rw-r--r-- 1 gcawood iqnection 382 Dec 19 6:49 myDoc.txt
```
您将需要根据下表将单词read、write或execute转换为数字等价物(八进制)。
- 4 – read (r)
- 2 – write (w)
- 1 – execute (x)
  
**实际案例**
```linux
chmod 400 mydoc.txt – read by owner
chmod 040 mydoc.txt – read by group
chmod 004 mydoc.txt – read by anybody (other)
chmod 200 mydoc.txt – write by owner
chmod 020 mydoc.txt – write by group
chmod 002 mydoc.txt – write by anybody
chmod 100 mydoc.txt – execute by owner
chmod 010 mydoc.txt – execute by group
chmod 001 mydoc.txt – execute by anybody
```
**等等!我不明白…没有足够的权限来做我想做的事**  
问的好。您需要将这些数字相加才能获得其他类型的权限……

所以，试着把你的头绕着这个
```
7 = 4+2+1 (read/write/execute)
6 = 4+2 (read/write)
5 = 4+1 (read/execute)
4 = 4 (read)
3 = 2+1 (write/execute)
2 = 2 (write)
1 = 1 (execute)
```
```linux
chmod 666 mydoc.txt – read/write by anybody! (the devil loves this one!)
chmod 755 mydoc.txt – rwx for owner, rx for group and rx for the world
chmod 777 mydoc.txt – read, write, execute for all! (may not be the best plan in the world...)
```