/**
 * 文章路由
 */

const express = require('express')
const router = express.Router()
const { API_BASEPATH } = require('../../config')

const Articles = require('../../models/articles')

// 获取文章
router.get(`${API_BASEPATH}/getArticles`, async (req, res) => {
  // 初始化返回值
  const data = {
    total: 0,
    articles: []
  }

  // 定义搜索条件
  let searchCondition = {}

  // 遍历query 如果有传搜索条件就加入到搜索条件对象
  for (const condition in req.query) {
    // 过滤pageNum 和 pageSize
    if (condition !== 'pageNum' && condition !== 'pageSize') {
      searchCondition[condition] = req.query[condition]
    }
  }
  // 如果没有搜索条件就指向null
  if (JSON.stringify(searchCondition) === '{}') {
    searchCondition = null
  }
  // skip(跳过数据): 传入页码-1 * 每页list数量 如：页码为1，skip为0 * pageSize
  let skip =
    req.query.pageNum - 1 < 0 ? 0 : (req.query.pageNum - 1) * req.query.pageSize
  let limit = +req.query.pageSize
  try {
    // 获取文章总数
    const total = await Articles.countDocuments()
    const articles = await Articles.find(
      searchCondition,
      {},
      {
        skip,
        limit
      }
    )
    res.json({
      status: 0,
      data: {
        total,
        articles
      }
    })
  } catch (error) {
    res.json({
      status: 1,
      data
    })
  }
})

// 添加文章
router.post(`${API_BASEPATH}/addArticle`, async (req, res) => {
  const {
    title,
    content,
    coverImg,
    author,
    tag,
    category,
    isPublish,
    viewCount,
    likes,
    isDeleted,
    createTime
  } = req.body
  if (title && content && author && category && isPublish) {
    try {
      await Articles.create({
        title,
        content,
        author,
        category,
        isPublish,
        tag: tag || '',
        coverImg: coverImg || '',
        viewCount: viewCount || 0,
        likes: likes || 0,
        isDeleted: isDeleted || false,
        createTime: createTime || Date.now(),
        lastModifiedTime: Date.now()
      })
      const total = await Articles.countDocuments()
      const articles = await Articles.find()
      res.json({
        status: 0,
        data: {
          total,
          articles
        }
      })
    } catch (error) {
      res.json({
        status: 1,
        msg: error.message
      })
    }
  } else {
    res.json({
      status: 1,
      msg: 'title,content,author,category,isPublish is required'
    })
  }
})

// 更新文章
router.post(`${API_BASEPATH}/updateAricle`, async (req, res) => {
  // 获取文章id
  const { id } = req.body

  if (id) {
    // 初始化修改数据对象
    const bodyData = {}

    // 遍历req.body将需要修改的属性和值都放入bodyData
    for (const item in req.body) {
      // 过滤id
      if (item !== 'id') bodyData[item] = req.body[item]
    }
    // 如果没有传入更新元素
    if (JSON.stringify(bodyData) === '{}') {
      res.json({
        status: 0,
        msg: 'nothing to update'
      })
    } else {
      // 设置修改时间
      bodyData.lastModifiedTime = Date.now()
      try {
        // 传入bodyData更新
        const article = await Articles.findOneAndUpdate({ _id: id }, bodyData)
        res.json({
          status: 0,
          data: {
            article
          }
        })
      } catch (error) {
        res.json({
          status: 1,
          msg: error.message
        })
      }
    }
  } else {
    res.json({
      status: 1,
      msg: 'article id is required'
    })
  }
})

// 刪除文章
router.post(`${API_BASEPATH}/delArticle`, async (req, res) => {
  // 获取文章id
  const { id } = req.body

  try {
    // 删除
    await Articles.deleteOne({ _id: id })
    const total = await Articles.countDocuments()
    const articles = await Articles.find()
    res.json({
      status: 0,
      total,
      articles
    })
  } catch (error) {
    res.json({
      status: 1,
      msg: error.message
    })
  }
})

module.exports = router
