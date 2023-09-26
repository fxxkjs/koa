const Koa = require('koa');
const app = new Koa();

// 路由
const index = require("./router/index")
app.use(index.routes(), index.allowedMethods())


app.listen(4000);