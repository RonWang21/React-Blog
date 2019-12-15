/**
 * 用户路由
 */

const express = require('express')
const router = express.Router()
const { API_BASEPATH } = require('../../config')
const md5 = require('blueimp-md5')
const jwt = require('jsonwebtoken')

const { PRIVARE_KEY } = require('../../config')

const Users = require('../../models/users')
// 用户登录路由
router.post(`${API_BASEPATH}/login`, async (req, res) => {
  // 获取请求体
  const { username, password } = req.body

  // 判断用户账号密码
  const user = await Users.findOne({ username, password: md5(password) })

  if (!user) {
    return res.json({
      status: 1,
      msg: '用户名密码不正确'
    })
  }

  const userToken = {
    id: user._id
  }

  // 签发token
  const token = jwt.sign(userToken, PRIVARE_KEY, { expiresIn: '7 days' })

  // 返回用户信息
  res.json({
    status: 0,
    data: {
      token,
      user: {
        username: user.username,
        email: user.email,
        usertype: user.usertype,
        createTime: user.createTime
      }
    }
  })
})

// 用户名、密码、邮箱正则
const emailPattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/
const userNamePattern = /^([a-zA-Z0-9_\u4e00-\u9fa5]{4,26})$/
const passwordPattern = /^[\w_]{6,16}$/

// 管理员名单
const admins = ['小黑0708', '诗杰0708', '政东0708', '张景0708', '老王0708']

// 用户注册路由
router.post(`${API_BASEPATH}/register`, async (req, res) => {
  // 获取请求体
  const { username, email, password, rePassword } = req.body
  // 正则校验 && 重复密码校验
  if (
    userNamePattern.test(username) &&
    passwordPattern.test(password) &&
    rePassword === password &&
    emailPattern.test(email)
  ) {
    // 查找用户
    const hasUser = await Users.findOne({ username })
    const hasUserEmail = await Users.findOne({ email })
    if (!hasUser && !hasUserEmail) {
      try {
        // 判断注册人是否是管理员
        const admin = admins.indexOf(username) === -1 ? false : true
        if (!admin) {
          // 创建用户
          await Users.create({
            username,
            password: md5(password),
            email,
            createTime: Date.now(),
            usertype: 'user' // 默认为普通用户
          })
        } else {
          // 创建用户
          await Users.create({
            username,
            password: md5(password),
            email,
            createTime: Date.now(),
            usertype: 'admin'
          })
          console.log(`你好！${username.substring(2, 0)}同学`)
        }
        res.json({
          status: 0,
          msg: '注册成功！'
        })
      } catch (error) {}
    } else if (hasUser) {
      res.json({
        status: 1,
        msg: '用户名已存在！'
      })
    } else if (hasUserEmail) {
      res.json({
        status: 1,
        msg: '邮箱已被注册！'
      })
    }
  } else {
    res.json({
      status: 1,
      msg:
        userNamePattern.test(username) && passwordPattern.test(password)
          ? password === rePassword
            ? '邮箱格式错误！示例邮箱：luckron98@gmail.com'
            : '两次输入密码不一致！请重新输入'
          : '用户名密码格式错误！请输入4-16位（中、英文）用户名及6-16位（字母、数字、下划线）'
    })
  }
})

module.exports = router
