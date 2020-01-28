// 布尔类型

// let flag:boolean = true;
// flag = 12; // 错误
// flag = false
// console.log(flag);

// 数字类型

// let num:number = 12;
// num = true; // 错误
// num = 22;
// console.log(num)

// 字符串类型

// let str:string = 'hello';
// str = true; // 错误
// str = 'world';
// console.log(str);

// 数组类型
// 第一种
// let arr:number[] = [12,33,44];
// let arr1:number[] = [12,33,'str'] // 错误
// console.log(arr,arr1)
// 第二种
// let arr:Array<number> = [12,33,44];
// let arr1:Array<number> = [12,33,'str'] // 错误
// console.log(arr,arr1)

// 元组类型， 属于数组的一种
// let tuple:[number,string] = [12,'str'];
// tuple[3] = 22
// tuple[3] = 'cc'
// tuple[3] = true; //错误
// let tuple1:[number,string] = ['str','str']; // 错误
// console.log(tuple,tuple1);

// 枚举类型
// enum Color {
//   red,
//   blue = 3,
//   orange
// }

// let c:Color = Color.red;
// console.log(c);

// 任意类型
// let num:number = 23;
// num = 'str'; // 错误

// let str:any = 23;
// str = 'str'

// let odiv:any = document.getElementById('div');

// odiv.style.color = 'red';

// undefined、null, 其他(never)类型的子类型
// let num:number;
// console.log(num); // 错误

// let num1:undefined;
// console.log(num1);

// let num2:number|undefined;
// num2 = 33
// console.log(num2);

// let num3:number|undefined;
// console.log(num3);

// let num:null;
// num = 22; // 错误

// let num:number|null|undefined;
// num = 22

// void类型，没有任何类型，一般用于表示方法没有返回值

// function add():void{
//   console.log(1)
// }
// 错误
// function add():void{
//   console.log(1)
//   return 2
// }

// function add():number{
//   console.log(1)
//   return 2
// }

// never类型，其他类型的子类型（包含undefined和null），代表从不会出现的值

// let num:never;

// num = (()=>{
//     throw new Error('bb');
// })()

// num = new Error('cc'); // 错误

// function loop():never{
//   while(true){

//   }
// }


// 断言类型

// let str:any = 'i love you';
// let num:number = (<string>str).length
// let num:number = (str as string).length