"use strict";
// 泛型：解决类，接口，函数的复用性，以及不确定数据的支持
// 泛型函数
// function getData<T>(value:T):T{
//   return value
// }
// getData<number>(12)
// getData<number>('ads'); // 错误
// 泛型类
// class MinNum<T> {
//   public list:T[] = [];
//   constructor(){
//   }
//   add(value:T){
//     this.list.push(value)
//   }
//   min():T{
//     let min = this.list[0];
//     for (let i = 1; i < this.list.length; i++) {
//       if (min > this.list[i]) {
//         min = this.list[i]
//       }
//     }
//     return min
//   }
// }
// let num = new MinNum<number>();
// num.add(2);
// num.add(23);
// num.add(12);
// alert(num.min())
// let num1 = new MinNum<string>();
// num1.add('a');
// num1.add('g');
// num1.add('j');
// alert(num1.min())
// 泛型接口
// interface Config {
//   <T>(value:T):T;
// }
// let cfg:Config = function<T>(value:T):T{
//   return value;
// }
// cfg<number>(123);
// interface Config<T> {
//   (value:T):T;
// }
// function getInfo<T>(value:T):T{
//   return value
// }
// let cfg:Config<number> = getInfo
// cfg(123);
// 把类作为参数的泛型类
// class User {
//   username:string|undefined
//   age:number|undefined
// }
// class Mysql {
//   constructor(){
//   }
//   add(user:User):boolean{
//     console.log(user)
//     return true
//   }
// }
// let mysql = new Mysql();
// let u = new User()
// u.username = '张三';
// u.age = 20;
// mysql.add(u)
