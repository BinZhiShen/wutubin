let mysql = require('mysql')
let config = require('../config/default')

const pool = mysql.createPool({
  user: config.database.USER,
  password: config.database.PASSWORD,
  host: config.database.HOST,
  database: config.database.DATABASE
})

class Mysql {
  constructor() {

  }
  query() {
    return new Promise((resolve, reject)=>{
      pool.query("SELECT * FROM test",(err,results, fields)=>{
        if (err) {
          throw err
        }
        resolve(results)
      })
    })
  }
  getDate() {
    return new Promise((resolve, reject)=>{
      pool.query("SELECT now()",(err,results, fields)=>{
        if (err) {
          throw err
        }
        resolve(results)
      })
    })
  }
}

module.exports =  new Mysql()