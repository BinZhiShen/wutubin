- [stash](#stash)
	- [名称](#%e5%90%8d%e7%a7%b0)
	- [概要](#%e6%a6%82%e8%a6%81)
	- [描述](#%e6%8f%8f%e8%bf%b0)
	- [选项](#%e9%80%89%e9%a1%b9)
		- [push [-p|--patch] [-k|--[no-]keep-index] [-u|--include-untracked] [-a|--all] [-q|--quiet] [-m|--message <message>] [--] [<pathspec>…​]](#push--p--patch--k--no-keep-index--u--include-untracked--a--all--q--quiet--m--message-message----pathspec%e2%80%8b)
		- [save [-p|--patch] [-k|--[no-]keep-index] [-u|--include-untracked] [-a|--all] [-q|--quiet] [<message>]](#save--p--patch--k--no-keep-index--u--include-untracked--a--all--q--quiet-message)
# stash
## 名称
`git stash`  
> 将更改保存在脏工作目录中
## 概要
```js
git stash list [<options>]
git stash show [<options>] [<stash>]
git stash drop [-q|--quiet] [<stash>]
git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]
git stash branch <branchname> [<stash>]
git stash [push [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet]
	     [-u|--include-untracked] [-a|--all] [-m|--message <message>]
	     [--] [<pathspec>…​]]
git stash clear
git stash create [<message>]
git stash store [-m|--message <message>] [-q|--quiet] <commit>
```
## 描述
> 当您想要记录工作目录和索引的当前状态，但是想要返回到一个干净的工作目录时，请使用`git stash`。该命令将您的本地修改保存起来，并将工作目录恢复为与HEAD commit匹配。
> 
> 这个命令储藏的修改可以在`git stash`列表中列出，在`git stash show`中查看，在`git stash apply`中恢复(可能在不同的提交之上)。在没有任何参数的情况下调用`git stash`等同于`git stash push`。默认情况下，储藏在分支机构名称上的WIP(半成品，在制品)列示为“WIP on branchname”，但是当您创建一个时，您可以在命令行上给出一个更具描述性的消息。  

> 您创建的最新隐藏在`refs/stash`中;旧的隐藏在这个引用的reflog中，可以使用通常的reflog语法来命名(例如，`stash@{0}`是最近创建的隐藏，`stash@{1}`是之前创建的隐藏，`stash@{1}`是之前创建的隐藏，`stash@{2.hours.ago}`也是可能的)。也可以通过指定stash索引来引用stash(例如，整数n等价于stash@{n})。

## 选项
### push [-p|--patch] [-k|--[no-]keep-index] [-u|--include-untracked] [-a|--all] [-q|--quiet] [-m|--message <message>] [--] [<pathspec>…​]
> 将您的本地修改保存到一个新的隐藏条目，并将它们回滚到HEAD(工作树和索引中)。<message>部分是可选的，它给出了隐藏状态的描述。

> 为了快速创建快照，可以忽略“push”。在此模式下，不允许使用非选项参数来防止拼错的子命令产生不需要的隐藏项。这方面的两个例外是stash -p，它充当stash push -p的别名，还有pathspecs，它允许在双连字符之后—用于消除歧义。

> 当将pathspec提供给git stash push时，新的stash条目只记录与pathspec匹配的文件的修改状态。然后，索引项和工作树文件也仅针对这些文件回滚到HEAD中的状态，而不完整地保留与pathspec不匹配的文件。

> 如果使用——keep-index选项，那么已经添加到索引中的所有更改都将保持不变。

> 使用——patch，您可以交互地从HEAD和工作树之间的差异中选择要隐藏的块。stash条目的构造使其索引状态与存储库的索引状态相同，并且其工作树仅包含您以交互方式选择的更改。然后从工作树回滚所选的更改。查看git-add[1]的交互模式部分，了解如何操作——patch模式。
### save [-p|--patch] [-k|--[no-]keep-index] [-u|--include-untracked] [-a|--all] [-q|--quiet] [<message>]
> 这个选项是不赞成的，赞成`git stash push`。它不同于`stash push`，因为它不能获取路径规格。相反，将所有非选项参数连接起来形成隐藏消息。

> 
