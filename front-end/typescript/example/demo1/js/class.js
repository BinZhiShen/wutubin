"use strict";
// 类定义
// class Person {
//   name:string;
//   constructor(name:string){
//     this.name = name;
//   }
//   run():void{
//     alert(this.name)
//   }
// }
// let person = new Person('张三');
// person.run()
// 继承
// class Person {
//   name:string;
//   constructor(name:string){
//     this.name = name;
//   }
//   run():string{
//     return `${this.name}在运动`
//   }
// }
// class Student extends Person {
//   constructor(name:string){
//     super(name)
//   }
// }
// let stu = new Student('张三');
// alert(stu.run());
// 静态方法
// class Person {
//   name:string;
//   static age = 20;
//   constructor(name:string){
//     this.name = name;
//   }
//   run():string{
//     return `${this.name}在运动${Person.age}`
//   }
//   static print() {
//     alert(Person.age)
//   }
// }
// Person.print()
// 抽象类
// 抽象类可以没有抽象方法，但抽象方法只能在抽象类
// abstract class Animal {
//   name:string;
//   constructor(name:string) {
//     this.name = name
//   }
//   abstract eat():void;
// }
// // new Animal('小猫') // 抽象类不能实例化，只是作为标准来继承的基类
// class Dog extends Animal {
//   constructor(name:string){
//     super(name)
//   }
//   eat(){
//   }
// }
