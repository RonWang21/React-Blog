const express = require('express')
const app = express()

//导入服务器连接配置
const { SERVER_CONFIG } = require('./config')

// 导入数据库连接
require('./db')

// 启动服务器
app.listen(SERVER_CONFIG.port, err => {
  return !err
    ? console.log(
        `========servers start success with localHost:${SERVER_CONFIG.port}!========`
      )
    : console.log('========servers start failed!========')
})
