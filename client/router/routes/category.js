/**
 * 文章分类路由
 */

const express = require('express')
const router = express.Router()
const { API_BASEPATH } = require('../../config')
const Categories = require('../../models/categories')

// 获取文章分类
router.get(`${API_BASEPATH}/getCategories`, async (req, res) => {
  // 初始化返回信息
  const data = {
    categories: []
  }

  try {
    const categories = await Categories.find()
    res.json({
      status: 0,
      data: {
        categories
      }
    })
  } catch (error) {
    res.json({
      status: 1,
      data
    })
  }
})

// 添加文章分类
router.post(`${API_BASEPATH}/addCategory`, async (req, res) => {
  const { categoryname, tags } = req.body
  if (categoryname) {
    try {
      // 查找传入文章分类是否已存在
      const hasCategory = await Categories.findOne({ name: categoryname })
      if (!hasCategory) {
        // 添加文章分类
        await Categories.create({
          name: categoryname,
          tags
        })
        // 获取所有文章分类
        const categories = await Categories.find()
        res.json({
          status: 0,
          data: {
            categories
          }
        })
      } else {
        res.json({
          status: 1,
          msg: 'category is exist~'
        })
      }
    } catch (error) {
      res.json({
        status: 1,
        msg: error
      })
    }
  } else {
    res.json({
      status: 1,
      msg: 'categoryname is required'
    })
  }
})
// 修改文章分类
router.post(`${API_BASEPATH}/updateCategory`, async (req, res) => {
  const { id, categoryname } = req.body
  try {
    // 查找传入文章分类是否存在
    const hasCategory = await Categories.findOne({ _id: id })
    if (!hasCategory) {
      return res.json({
        status: 1,
        msg: 'category is not exist'
      })
    }
    if (categoryname) {
      // 更新文章分类
      await Categories.update({ _id: id }, { name: categoryname })
      // 获取当前文章分类
      const category = await Categories.findOne({ _id: id })
      res.json({
        status: 0,
        data: {
          category
        }
      })
    } else {
      res.json({
        status: 1,
        msg: 'categoryname is required'
      })
    }
  } catch (error) {
    res.json({
      status: 1,
      msg: error
    })
  }
})

// 删除文章分类
router.post(`${API_BASEPATH}/delCategory`, async (req, res) => {
  const { id } = req.body
  try {
    // 删除文章分类
    await Categories.deleteOne({ _id: id })
    // 获取所有文章分类
    const categories = await Categories.find()
    res.json({
      status: 0,
      data: {
        categories
      }
    })
  } catch (error) {
    res.json({
      status: 1,
      msg: error
    })
  }
})

module.exports = router
