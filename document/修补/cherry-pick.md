# 名称
`git cherry-pick`&emsp;应用一些现有提交引入的更改
# 概要
```git
git cherry-pick [--edit] [-n] [-m parent-number] [-s] [-x] [--ff]
		  [-S[<keyid>]] <commit>…​
git cherry-pick (--continue | --skip | --abort | --quit)
```
# 描述
给定一个或多个现有提交，应用每个提交所引入的更改，记录每个新提交。这要求您的工作树是干净的(没有修改HEAD提交)。

当不清楚如何应用更改时，将发生以下情况：
- 当前的分支和头指针停留在最后一次成功提交的地方。
- CHERRY PICK HEAD ref被设置为指向提交，该提交引入了难以应用的更改。
- 干净地应用更改的路径将在索引文件和工作树中更新。
- 对于冲突路径，索引文件最多记录三个版本，如git-merge[1]的“TRUE MERGE”部分所述。
- 工作树文件将包括冲突的描述，用常用的冲突标记<<<<<<< <<和>>>>>>>括起来。
- 没有其他修改。  
有关解决此类冲突的一些提示，请参阅git-merge[1]。
# 选项
`<commit>`

致力于例句。有关拼写提交的更完整的方法列表，请参阅gitrevision[7]。可以传递提交集，但默认情况下不进行遍历，就像指定了`--no-walk`选项一样，请参见git-rev-list[1]。注意，指定一个范围将把所有<commit>参数提供给单个修订遍历(参见后面使用maint master..next的示例)。
