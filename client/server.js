const express = require('express')
const app = express()

const md5 = require('blueimp-md5')

// 导入服务器连接配置
const { SERVER_CONFIG } = require('./config')

// 导入路由器
const router = require('./router')

// 导入数据库连接
require('./db')

// 导入数据库中的用户
const Users = require('./models/users')

// 使用qs库解析post请求中间件
app.use(express.urlencoded({ extends: true }))
// 解析json
app.use(express.json({}))

// 应用路由器
app.use(router)

// 启动服务器
app.listen(SERVER_CONFIG.port, err => {
  return !err
    ? console.log(
        `========servers start success with localHost:${SERVER_CONFIG.port}!========`
      )
    : console.log('========servers start failed!========')
})

/**
 * 初始化一位管理员用户: admin/admin
 */
Users.findOne({ username: 'admin' }).then(async user => {
  if (!user) {
    // 如果admin没有找到
    try {
      // 新建admin用户
      await Users.create({
        username: 'admin',
        password: md5('admin'),
        usertype: 'admin',
        email: 'admin@gmail.com',
        signature: '你全心全意做到的最好，可能还不如别人的随便搞搞~',
        createTime: Date.now()
      })
      console.log(
        'Super Admin init success! Try to sign in with username: admin, password: admin'
      )
    } catch (error) {
      console.log('Super Admin init failed!' + error)
    }
  } else {
    console.log(
      'welcome to back! Try to sign in with username: admin, password: admin'
    )
  }
})
