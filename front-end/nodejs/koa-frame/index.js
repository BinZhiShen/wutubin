const koa = require('koa')
const config = require('./config/default')
const mysql = require('./mysql/index')

const app = new koa()

app.use(async (ctx)=>{
  let data = await mysql.getDate()
  ctx.body = {
    code: 1,
    data: data,
    msg:'ok'
  }
})
app.listen(config.port)

console.log(`listening on port ${config.port}`)