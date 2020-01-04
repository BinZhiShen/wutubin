- [属性](#%e5%b1%9e%e6%80%a7)
- [方法](#%e6%96%b9%e6%b3%95)
  - [Object.assign()](#objectassign)
# 属性
# 方法
## Object.assign()
`Object.assign()` 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

**语法**
```js
Object.assign(target, ...sources)
```
**参数**
- `target`：目标对象
- `sources`: 源对象

**返回值**
- 目标对象

**描述**
> 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。