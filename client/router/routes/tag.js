/**
 * 获取文章标签路由
 */

const express = require('express')
const router = express.Router()

const Tags = require('../../models/tags')

// 获取标签
router.get('/api/getTags', async (req, res) => {
  try {
    const tags = (await Tags.find()) || []
    res.json({
      status: 0,
      msg: '获取标签成功',
      data: {
        tags
      }
    })
  } catch (error) {
    res.json({
      status: 1,
      msg: '获取标签失败！'
    })
  }
})

// 添加标签
router.post('/api/addTag', async (req, res) => {
  const { tagname } = req.body
  if (tagname && typeof tagname === 'string') {
    try {
      // 查找传入标签名是否已存在
      const hasTag = await Tags.findOne({ name: tagname })
      if (hasTag) {
        return res.json({
          status: 1,
          msg: '标签名已存在'
        })
      }
      // 添加标签
      await Tags.create({
        name: tagname
      })
      // 获取所有标签
      const tags = await Tags.find()
      res.json({
        status: 0,
        msg: '添加标签成功',
        data: {
          tags
        }
      })
    } catch (error) {
      res.json({
        status: 1,
        msg: `添加分类失败: ${error}`
      })
    }
  } else {
    res.json({
      status: 1,
      msg: `标签名不合法！`
    })
  }
})

// 删除标签
router.post('/api/delTag', async (req, res) => {
  const { tagname } = req.body
  // 判断标签名是否正确
  if (tagname && typeof tagname === 'string') {
    try {
      // 判断标签名是否存在
      const tag = await Tags.findOne({ name: tagname })
      if (tag) {
        // 删除标签
        await Tags.deleteOne({ name: tagname })
        // 获取所有标签
        const tags = await Tags.find()
        res.json({
          status: 0,
          msg: '删除标签成功',
          data: {
            tags
          }
        })
      } else {
        res.json({
          status: 1,
          msg: '标签名不存在'
        })
      }
    } catch (error) {
      res.json({
        status: 1,
        msg: `删除标签失败: ${error}`
      })
    }
  } else {
    res.json({
      status: 1,
      msg: `删除失败，请检查标签名是否正确！`
    })
  }
})

module.exports = router
