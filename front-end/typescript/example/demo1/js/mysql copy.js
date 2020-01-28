"use strict";
// 要实现泛型接口，这个类也必须是泛型
// 定义操作mysql的类
var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
    }
    MysqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDB;
}());
// 定义操作mssql的类
var MsSqlDB = /** @class */ (function () {
    function MsSqlDB() {
    }
    MsSqlDB.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MsSqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MsSqlDB;
}());
// 操作用户表，定义一个User类和数据表做映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '张三';
u.password = '123345';
var db = new MysqlDB();
db.add(u);
