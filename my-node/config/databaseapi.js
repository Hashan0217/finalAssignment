const initdata = require("./databaseinit");

// 引入统一给前端返回的body响应
const result = require("./result");

//处理数据库
class db {
  constructor(sql) {
    this.sql = sql;
  }

  //增

  async add() {
    try {
      const data = await initdata(this.sql);
      if (data.length == 0) {
        this.sql = null;
        return {
          error: "返回结果为空",
          code: 410,
        };
      }
      this.sql = null;
      return {
        data: data,
        code: 200,
      };
    } catch (error) {
      this.sql = null;
      return {
        error: error,
        code: 400,
      };
    }
  }

  //删
  async remove() {
    try {
      const data = await initdata(this.sql);
      if (data.length == 0) {
        this.sql = null;
        return {
          error: "返回结果为空",
          code: 410,
        };
      }
      this.sql = null;
      return {
        data: data,
        code: 200,
      };
    } catch (error) {
      this.sql = null;
      return {
        error: error,
        code: 400,
      };
    }
  }

  //改

  updata() {}

  //查
  async checkdata() {
    try {
      console.log(this.sql);
      const data = await initdata(this.sql);
      if (data.length == 0) {
        this.sql = null;
        return {
          error: "查询为空",
          code: 410,
        };
      }
      this.sql = null;
      return {
        data: data,
        code: 200,
      };
    } catch (error) {
      this.sql = null;
      return {
        error: error,
        code: 400,
      };
    }
  }
}

module.exports = db;
