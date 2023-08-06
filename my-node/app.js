const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')()//实例化new路由
const cors = require('koa2-cors')
const abnormal = require('./config/abnormal.js')

app.use(cors())
app.use(json())
app.use(bodyParser())
app.use(abnormal)
// 全局异常处理


// 注册；登录
const login = require('./router/login/login.js')
// 文章管理
const blog = require('./router/blog/blog.js')
// 热门文章
const hotblog = require('./router/hotblog/hotblog.js')


// 配置路由接口
router.use('/api', login)
router.use('/api', blog)
router.use('/api', hotblog)


/* 启动路由 */
app.use(router.routes()).use(router.allowedMethods())

// 自定义启动端口5000：不能跟其他程序的启动端口一样，否则造成端口冲突
app.listen(5000, () => {
    console.log('Server running on port %d', 5000);
});
console.log('成功')