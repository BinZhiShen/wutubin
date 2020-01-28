// 封装操作数据库的底层库
// 接口：制定行为规范
// 泛型: 解决代码复用
// 定义接口卡
interface DBI<T> {
  add(info:T):boolean;
  update(info:T, id:number):boolean;
  delete(id:number):boolean;
  get(id:number):any[];
}

// 要实现泛型接口，这个类也必须是泛型
// 定义操作mysql的类
class MysqlDB<T> implements DBI<T> {
  add(info: T): boolean {
    console.log(info)
    return true
  }  
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

// 定义操作mssql的类
class MsSqlDB<T> implements DBI<T> {
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }  
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

// 操作用户表，定义一个User类和数据表做映射
class User {
  username:string|undefined;
  password:string|undefined;
}

let u = new User();
u.username = '张三';
u.password = '123345';

let db = new MysqlDB<User>();
db.add(u)