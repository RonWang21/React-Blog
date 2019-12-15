/**
 * 文章的表结构
 */

const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'missing title']
  }, // 文章标题
  content: {
    type: String,
    required: [true, 'missing content']
  }, // 文章内容
  viewCount: Number, // 浏览次数
  likes: Number, // 点赞次数
  createTime: String, // 发表时间
  lastModifiedTime: String,
  coverImg: String, // 封面图片
  author: {
    type: String,
    required: [true, 'missing author']
  }, // 作者
  tag: String, // 标签
  category: {
    type: String,
    required: [true, 'missing category']
  }, // 分类
  isPublish: {
    type: Boolean,
    required: [true, 'missing publish state']
  },
  isDeleted: Boolean // 是否已删除
})
