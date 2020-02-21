- [属性](#%e5%b1%9e%e6%80%a7)
- [方法](#%e6%96%b9%e6%b3%95)
  - [sassign](#sassign)
  - [entries](#entries)
# 属性
# 方法
## sassign
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
## entries
Object.entries() 方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）。

通俗点就是 Object.entries() 可以把一个对象的键值以数组的形式遍历出来，结果和 for...in 一致，但不会遍历原型属性。
**示例**
```js
const obj = { foo: 'bar', baz: 'abc' }; 
console.log(Object.entries(obj));  // [['foo', 'bar'], ['baz', 'abc']]
```