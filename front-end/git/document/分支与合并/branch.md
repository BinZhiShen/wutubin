- [branch](#branch)
	- [名称](#%e5%90%8d%e7%a7%b0)
	- [概要](#%e6%a6%82%e8%a6%81)
	- [描述](#%e6%8f%8f%e8%bf%b0)
	- [选项](#%e9%80%89%e9%a1%b9)
# branch
## 名称
`git branch`:&emsp;列出、创建或删除分支
## 概要
```git
git branch [--color[=<when>] | --no-color] [--show-current]
	[-v [--abbrev=<length> | --no-abbrev]]
	[--column[=<options>] | --no-column] [--sort=<key>]
	[(--merged | --no-merged) [<commit>]]
	[--contains [<commit]] [--no-contains [<commit>]]
	[--points-at <object>] [--format=<format>]
	[(-r | --remotes) | (-a | --all)]
	[--list] [<pattern>…​]
git branch [--track | --no-track] [-f] <branchname> [<start-point>]
git branch (--set-upstream-to=<upstream> | -u <upstream>) [<branchname>]
git branch --unset-upstream [<branchname>]
git branch (-m | -M) [<oldbranch>] <newbranch>
git branch (-c | -C) [<oldbranch>] <newbranch>
git branch (-d | -D) [-r] <branchname>…​
git branch --edit-description [<branchname>]
```
## 描述
> `git branch`后面给定`--list`参数，或者没有`非选项`参数,则列出现有的分支;当前的分支将用绿色突出显示，并使用星号标记.在链接工作树中检出的任何分支都将用青色突出显示，并用加号标记。  
> 选项`-r`导致列出远程跟踪分支，选项`-a`同时显示本地和远程分支。

## 选项
`-a`  
`--all`  
列出远程跟踪分支和本地分支。与`--list`组合以匹配可选模式。

`-l`  
`--list`  
分支列表。带有可选<模式>,例如：`git branch --list 'maint-*'`,只列出与模式匹配的分支

`-r`  
`--remotes`  
列出或删除(如果与`-d`一起使用)远程跟踪分支。与`--list`结合，以匹配可选模式。