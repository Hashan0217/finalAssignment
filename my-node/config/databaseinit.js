const mysql = require('mysql');


function __connection(){

  var connection = mysql.createConnection({
      host     : 'localhost', //数据库地址
      user     : 'root',  //数据库用户
      password : 'root',  //数据库密码
      database : 'hashan21180076' //数据库名称
  });
  connection.connect();
  return connection;
}

  const initdata= function(sql,parmas=null){
  //1.获取数据库连接对象
  const connection=__connection();
  return new Promise(function(reject,resolve){
  
  //2执行sql语句
  connection.query(sql,parmas, function (error, results, fields) {
    if (error) {
      resolve(error)
      // return error
      }  
      reject(results);
  
  });
  //3关闭连接
  connection.end();
  })
}

module.exports = initdata;



