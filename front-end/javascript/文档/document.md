# document
## 属性
### `scrollingElement`
如果只是为了获取当前网页窗体的滚动高度，直接使用window.pageYOffset就可以了（IE9+），桌面端和移动端都支持。

但是window.pageYOffset是一个只读属性，我们无法用来设置窗体的滚动高度，此时，就要找到对应的滚动元素，通过设置scrollTop值来改变窗体的滚动位置。

然后，桌面端和移动端的窗体滚动元素是不一样的，如下测试代码：
```js
document.documentElement.scrollTop;
document.body.scrollTop;
```
可以看到，在不同的平台上，滚动元素是不一样的，于是就有兼容性问题。

例如要实现一个返回顶部效果，我们目前的做法是下面两个语句并行：
```js
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;
```
就显得很啰嗦，正是由于这种现状，document.scrollingElement这个属性才应运而生，直接动态识别滚动容器。

document.scrollingElement一统江湖

>在桌面端document.scrollingElement就是document.documentElement；   
在移动端document.scrollingElement就是document.body。

可以自动识别不同平台上的滚动容器。

于是当我们希望页面滚动定位到具体位置的时候，如400像素，直接一行代码就可以搞定了：
```js
document.scrollingElement.scrollTop = 400;
```
语义更好，代码更精简，老方法可以直接say goodbye了！
## 方法