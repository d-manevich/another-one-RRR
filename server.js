const serve = require('koa-static')
const Koa = require('koa')
const app = new Koa()
const send = require('koa-send')

app.use(serve(__dirname + '/src/build'))
app.use(serve(__dirname + '/src/static'))
app.use(async ctx => {
  await send(ctx, '/src/static/index.html')
})

app.listen(9000)
