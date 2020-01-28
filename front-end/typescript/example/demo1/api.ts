// 接口
// 属性接口，对json的约束规范
// interface FullName {
//   firstName:string;
//   secondeName:string;
// }
// function printName(name:FullName):void{
//   alert(name.firstName + '---' + name.secondeName)
// }

// let nam = {
//   age:20,
//   firstName:'wu',
//   secondeName: 'tubin'
// }
// printName(nam)

// 可选参数
// interface FullName {
//   age?:number;
//   firstName:string;
//   secondeName:string;
// }
// function printName(name:FullName):void{
//   alert(name.firstName + '---' + name.secondeName)
// }
// function printInfo(name:FullName):void{
//   alert(name.firstName + '---' + name.secondeName + '---' + name.age)
// }

// let nam = {
//   age:20,
//   firstName:'wu',
//   secondeName: 'tubin'
// }
// printName(nam)
// printInfo(nam)

// 只读属性
// interface Point {
//   readonly x:number;
//   readonly y:number;
// }

// let p:Point = {
//   x:4,
//   y:5
// }
// p.x = 6; // 只读

// let a:Array<number> = [1,2.3];
// let or:ReadonlyArray<number> = a;
// or[5] = 5 // 错误
// or.length = 100 // 错误
// a = or // 错误
// a = or as Array<number>

// 函数接口
// interface encrypt {
//   (key:string,value:string):string
// }

// let md5:encrypt = function(k:string,v:string):string{
//   return k+v
// }

// console.log(md5('key','value'))

// 可索引接口，对数组、对象的约束
// interface UserArr {
//   [index:number]:string;
// }

// let users:UserArr = ['adfs','asd'];
// interface UserArr {
//   [index:string]:string;
// }

// let users:UserArr = {name:'asdf',sex:'asd'};

// 类 类型接口 ，类似于抽象类
// interface Animal {
//   name:string;
//   eat(str:string):void;
// }

// class Dog implements Animal {
//   name:string;
//   constructor(name:string){
//     this.name = name
//   }
//   eat(){
//     console.log(this.name+'吃东西')
//   }
// }

// let d = new Dog('小黑');
// d.eat();

// 接口扩展：接口可以继承接口
// interface Animal {
//   eat(str:string):void;
// }

// interface Person extends Animal{
//   work(str:string):void;
// }

// class Stu implements Person {
//   name:string;
//   constructor(name:string){
//     this.name = name
//   }
//   eat(){
//     console.log(`${this.name}吃东西`)
//   }
//   work(){
//     console.log(`${this.name}工作`)
//   }
// }

// let stu = new Stu('小明')
// stu.eat()