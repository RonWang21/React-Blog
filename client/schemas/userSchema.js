/**
 * 用户的表结构
 *  */

const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  createTime: String, // 创建时间
  usertype: String, // 用户类型
  loginTime: String, // 登录时间
  signature: String // 用户签名
})
