module.exports = {
  devServer: {
    proxy: {
      /* 匹配所有以'/api'开头的请求路径 */
      '/api': {
        target: 'http://localhost:5000',//代理目标的基础路径,
        changeOrigin: true,
        pathRewrite: {  // 重命名
          '^/api': ''
        },
        // ws: true,//用于支持websocket
        // changeOrigin: true,//用于请求头中的host值
      },
     
     
    }
  }
}
