const mongoose = require('mongoose')

//导入数据库链接配置
const { DB_CONFIG } = require('../config')

// 连接数据库
mongoose.connect(`mongodb://${DB_CONFIG.host}:${DB_CONFIG.port}/teamBlog_db`, {
  useNewUrlParser: true,
  useCreateIndex: true
})

// 监听首次数据库的链接
mongoose.connection.once('open', err => {
  return err
    ? console.log('========falied to connect!========')
    : console.log(
        `========successed to connect with ${DB_CONFIG.host}:${DB_CONFIG.port}/teamBlog_db!========`
      )
})
