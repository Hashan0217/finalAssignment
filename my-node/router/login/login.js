// -----------------------------注册-登录-接口----------------------
const router = require("koa-router")(); //实例化new路由
// 引入统一给前端返回的body响应
const result = require("../../config/result.js");
// 操作数据库的接口
const db = require("../../config/databaseapi.js");

//用户注册
router.post("/login", async (ctx) => {
  /**
   * 先查询是否存在一样的账号 有 则报错 没有则 添加数据库
   */      
  // 接收前端参数
  console.log(ctx.query);
  const qry = ctx.query;

  //根据前端参数 查询用户是否存在
  const sql = `SELECT * FROM user WHERE account = '${qry.id}' `;
  //查询结果处理
  const resData = await new db(sql).checkdata();

  if (resData.code === 200) {
    new result(ctx, "注册失败", 401, {
      error: resData.error,
    }).answer();
          
  } else {
    const sql = `INSERT INTO user (account, password) VALUES ('${qry.id}', '${qry.password}')`;
    //查询结果处理
    const resData = await new db(sql).add();
    if (resData.code === 200) {
      new result(ctx, "注册成功", resData.code, {
        data: resData.data,
      }).answer();
    } else {
      new result(ctx, "注册失败", resData.code, {
        error: resData.error,
      }).answer();
    }
  }
});

//用户登录

router.get("/login", async (ctx) => {
  // 接收前端参数
  const qry = ctx.query;
  //根据前端参数 查询用户是否存在
  const sql = `SELECT * FROM user WHERE account = '${qry.id}' AND password = '${qry.password}'`;
  //查询结果处理
  const resData = await new db(sql).checkdata();

  if (resData.code === 200) {
    new result(ctx, "登录成功", resData.code, { data: resData.data }).answer();
  } else {
    new result(ctx, "登录失败", resData.code, {
      error: resData.error,
    }).answer();
  }
});

module.exports = router.routes();
