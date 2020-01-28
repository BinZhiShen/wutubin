"use strict";
// 函数定义
// function add():number{
//   return 12
// }
// let add1= function():number{
//   return 12
// }
// 传参
// function getInfo(name:string,age:number):string{
//   return `${name}----${age}`
// }
// alert(getInfo('张三',20))
// let getInfo = function(name:string,age:number):string{
//   return `${name}----${age}`
// }
// alert(getInfo('张三',200))
// 可选参数,必须放到参数后面
// function getInfo(name:string,age?:number):string{
//   if (age) {
//     return `${name}----${age}`
//   } else {
//     return `${name}----年龄保密`
//   }
// }
// alert(getInfo('张三'))
// 默认参数
// function getInfo(name:string,age:number=20):string{
//   if (age) {
//     return `${name}----${age}`
//   } else {
//     return `${name}----年龄保密`
//   }
// }
// alert(getInfo('张三'))
// 剩余参数
// function sum(...result:number[]):number{
//   let sum = 0;
//   for (let i = 0; i < result.length; i++) {
//     sum += result[i];
//   }
//   return sum
// }
// alert(sum(1,2,4));
// 方法重载
// function getInfo(name:string):string;
// function getInfo(age:number):string;
// function getInfo(str:any):any{
//   if (typeof str === 'string') {
//     return `我叫${str}`
//   } else {
//     return `我的年龄-${str}`
//   }
// }
// alert(getInfo('张三'))
// alert(getInfo(20));
// function getInfo(name:string):string;
// function getInfo(name:string,age:number):string;
// function getInfo(name:any,age?:any):any{
//   if (age) {
//     return `我叫${name}我的年龄-${age}`
//   } else {
//     return `我叫${name}`
//   }
// }
// alert(getInfo('张三'))
// alert(getInfo('张三',20))
// alert(getInfo(20)); // 错误
// 箭头函数
