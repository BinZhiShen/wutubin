# 大纲
```npm
npm update [-g] [<pkg>...]

别名: up, upgrade
```
# 描述
这个命令将把所有列出的包更新到最新的版本(由标记配置指定)，这与semver有关。

它还将安装丢失的包。与所有安装包的命令一样，`--dev`标志也将导致处理devDependencies。

如果指定了-g标志，该命令将更新全局安装的包。

如果没有指定包名，则将更新指定位置(全局或本地,global or local)中的所有包。

从npm@2.6.1开始，npm更新将只检查顶级包。以前的npm版本也会递归地检查所有依赖项。要获得旧的行为，请使用`npm --depth 9999 update`。

从npm@5.0.0开始，npm更新将更改package.json保存新版本为所需的最低依赖项。要获得旧的行为，请使用`npm update --no-save`。