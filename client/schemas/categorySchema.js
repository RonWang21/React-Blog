/**
 * 文章分类的表数据
 */
const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  name: String, // 分类名
  tags: Array, // 标签数组
})
