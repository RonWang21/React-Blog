/**
 * 文章标签的表数据
 */
const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  name: String // 标签名
})
