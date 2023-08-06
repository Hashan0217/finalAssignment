// -----------------------------注册-登录-接口----------------------
const router = require("koa-router")(); //实例化new路由
// 引入统一给前端返回的body响应
const result = require("../../config/result.js");
// 操作数据库的接口
const db = require("../../config/databaseapi.js");

//获取全部文章
router.get("/blog/hotblog", async (ctx) => {
  const sql = `SELECT * FROM hotlist `;
  //查询结果处理
  const resData = await new db(sql).checkdata();

  if (resData.code === 200) {
    new result(ctx, "获取成功", resData.code, { data: resData.data }).answer();
  } else {
    new result(ctx, "获取失败", resData.code, {
      error: resData.error,
    }).answer();
  }
});



module.exports = router.routes();
