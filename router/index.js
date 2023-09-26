var router = require('koa-router')();

router.all("/", (c, next) => {

    if (c.cookies.get("token") === undefined) {
        setCookie(c, "token", c.request.ip)
    }
    next()
})


router.get("/", (c, next) => {
    // console.log(ctx);
    // console.log(ctx.cookies.get("111"));
    c.cookies.set(111, 222)
    c.body = 'Hello World';
})


/** 设置cookie
 * @date 2023-09-27
 * @param {any} ctx ctx对象
 * @param {String} name cookie名
 * @param {String} value cookie内容
 * @param {Number} time 过期时间（分钟）,默认0（会话）
 * @param {String} domain cookie域
 */
function setCookie(ctx, name, value, time = 0, domain = false) {
    let options = {
        maxAge: 6000 * time,      // cookie过期时间 默认会话
        httpOnly: true,         //只能服务器改变cookie
        // domain: 'localhost',    // cookie域
        // path: "/",           // 路径
        // sameSite: lax,         // 是否为相同站点 'strict', 'lax', 'none'
        // overwrite: true
        // secure: false,          // 是否仅通过HTTPS发送
        // signed: true,
        // overwrite: true
    }
    domain !== false ? options.domain = domain : false
    ctx.cookies.set(name, value, options)
}

module.exports = router;