/**
 * 文章的表结构
 */

const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  title: String, // 文章标题
  content: String, // 文章内容
  viewCount: Number, // 浏览次数
  likes: Number, // 点赞次数
  createTime: String, // 发表时间
  coverImg: String, // 封面图片
  author: String, // 作者
  tags: Array, // 标签
  isPublish: Boolean, // 是否发布
  isDeleted: Boolean // 是否已删除
})
