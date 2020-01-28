# Gruntfile
Gruntfile.js 或 Gruntfile.coffee 文件是有效的 JavaScript 或 CoffeeScript 文件，应当放在你的项目根目录中，和package.json文件在同一目录层级，并和项目源码一起加入源码管理器。

Gruntfile由以下几部分构成：

* "wrapper" 函数
* 项目与任务配置
* 加载grunt插件和任务
* 自定义任务

## "wrapper" 函数
每一份 Gruntfile （和grunt插件）都遵循同样的格式，你所书写的Grunt代码必须放在此函数内：
```js
module.exports = function(grunt) {
  // Do grunt-related things in here
};
```
## 项目和任务配置
大部分的Grunt任务都依赖某些配置数据，这些数据被定义在一个object内，并传递给`grunt.initConfig` 方法。

在下面的案例中，grunt.file.readJSON('package.json') 将存储在package.json文件中的JSON元数据引入到grunt config中。 由于`<% %>`模板字符串可以引用任意的配置属性，因此可以通过这种方式来指定诸如文件路径和文件列表类型的配置数据，从而减少一些重复的工作。

你可以在这个配置对象中(传递给initConfig()方法的对象)存储任意的数据，只要它不与你任务配置所需的属性冲突，否则会被忽略。此外，由于这本身就是JavaScript，你不仅限于使用JSON；你可以在这里使用任意的有效的JS代码。如果有必要，你甚至可以以编程的方式生成配置。

与大多数task一样，grunt-contrib-uglify 插件中的uglify 任务要求它的配置被指定在一个同名属性中。在这里有一个例子, 我们指定了一个banner选项(用于在文件顶部生成一个注释)，紧接着是一个单一的名为build的uglify目标，用于将一个js文件压缩为一个目标文件。
```js
// Project configuration.
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  uglify: {
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    build: {
      src: 'src/<%= pkg.name %>.js',
      dest: 'build/<%= pkg.name %>.min.js'
    }
  }
});
```