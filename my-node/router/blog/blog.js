// -----------------------------注册-登录-接口----------------------
const router = require("koa-router")(); //实例化new路由
// 引入统一给前端返回的body响应
const result = require("../../config/result.js");
// 操作数据库的接口
const db = require("../../config/databaseapi.js");

//获取全部文章
router.get("/blog/blogall", async (ctx) => {
  const sql = `SELECT * FROM content1 `;
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

//获取分类
router.get("/blog/category", async (ctx) => {
  const sql = `SELECT * FROM category `;
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


//根据id 获取文章

router.get("/blog", async (ctx) => {
  // 接收前端参数
  const qry = ctx.query;
  //根据前端参数 查询
  const sql = `SELECT * FROM content1 WHERE article_id = '${qry.id}'`;
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

//添加文章 && 修改文章
router.post("/blog/add", async (ctx) => {
  // 接收前端参数
  const qry = ctx.query;
  console.log(qry);
  //根据前端参数 查询
  if (qry.id) {
    const sql = `DELETE FROM content1 WHERE article_id =  '${qry.id}'`;
    //查询结果处理
    const resData = await new db(sql).remove();
    if (resData.code === 200) {
      new result(ctx, "删除成功", resData.code, { data: resData.data }).answer();
    } else {
      new result(ctx, "删除失败", resData.code, {
        error: resData.error,
      }).answer();
      return
    }
  }

  const sql = `INSERT INTO content1 (article_content, title, content_category, author_id, imgUrl,author_name) VALUES ('${qry.text}', '${qry.title}', '${qry.category}', '${qry.author_id}', '${qry.imgUrl}','${qry.author_name}')`;

  //添加文章
  const resData = await new db(sql).add();

  if (resData.code === 200) {
    new result(ctx, "上传成功", resData.code, { data: resData.data }).answer();
  } else {
    new result(ctx, "上传失败", resData.code, {
      error: resData.error,
    }).answer();
  }
});

//删除文章

router.get("/blog/delete", async (ctx) => {
  // 接收前端参数
  const qry = ctx.query;
  //根据前端参数 查询

  const sql = `DELETE FROM content1 WHERE article_id= '${qry.id}' `;
  //查询结果处理
  const resData = await new db(sql).remove();
  if (resData.code === 200) {
    new result(ctx, "删除成功", resData.code, { data: resData.data }).answer();
  } else {
    new result(ctx, "删除失败", resData.code, {
      error: resData.error,
    }).answer();

  }

});



module.exports = router.routes();
