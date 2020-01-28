// 装饰器，就是一个方法

/*** 类装饰器**********/
// 定义一个装饰器,普通装饰器（无法传参）
// function logClass(param:any){
//   // param是当前类
//   console.log(param)
//   param.prototype.apiUrl = 'xxxx'
// }

// @logClass
// class HttpClient {
//   constructor(){

//   }
//   add(){

//   }
// }
// let c:any = new HttpClient()
// console.log(c.apiUrl)

// 定义一个装饰器,装饰器工厂（可传参）
// function logClass(param:string){
//   return function(target:any){
//     // target是当前类
//     console.log(target)
//     // param是传参
//     console.log(param)
//     target.prototype.apiUrl = param
//   }
// }

// @logClass('http://www.baidu.com')
// class HttpClient {
//   constructor(){

//   }
//   add(){

//   }
// }
// let c:any = new HttpClient()
// console.log(c.apiUrl)

// 重载
// function logClass(target:any){

//   return class extends target{
//     apiUrl = '重载后';
//     add(){
//       console.log(this.apiUrl + '-----')
//     }
//   }
// }

// @logClass
// class HttpClient {
//   apiUrl:string|undefined;
//   constructor(){
//     this.apiUrl = '重载前'
//   }
//   add(){

//   }
// }
// let c:any = new HttpClient()
// c.add()
// console.log(c.apiUrl)

/******属性装饰器 */
// function logProp(param:string){

//   return function(target:any,attr:string){
//     target[attr] = param;
//   }
// }


// class HttpClient {
//   @logProp('重载后')
//   public apiUrl:string|undefined;
//   constructor(){
//   }
//   getInfo(){
//     console.log(this.apiUrl)
//   }
// }
// let c:any = new HttpClient()
// c.getInfo()

/***方法装饰器 */
// function logMethods(param:string){

//   return function(target:any,attr:string,des:any){
//     // console.log(target);
//     // console.log(attr);
//     // console.log(des);
//     let oMethod = des.value;

//     des.value = function(...args:any[]){
//       args.map(item=>{
//         return String(item)
//       })
//       console.log(args)
//       oMethod.apply(this,args)
//     }
//   }
// }


// class HttpClient {
//   public apiUrl:string|undefined;
//   constructor(){
//   }
//   @logMethods('cccc')
//   getInfo(...args:any[]){
//     console.log('实例方法')
//   }
// }
// let c:any = new HttpClient()
// c.getInfo(12,'xxx')

/***方法参数装饰器 */
// function methodParam(param:string){

//   return function(target:any,methodName:any,paramIndex:any){
//     console.log(param)
//     console.log(target);
//     console.log(methodName);
//     console.log(paramIndex);
   
//   }
// }


// class HttpClient {
//   public apiUrl:string|undefined;
//   constructor(){
//   }
//   getInfo(@methodParam('cc') uid:string){
//     console.log(typeof uid)
//   }
// }
// let c:any = new HttpClient()
// c.getInfo(12)

/**装饰器执行顺序 */
/**
 * 属性》方法》方法参数》类
 * 多个相同装饰器，先从后面开始
 * 
 */