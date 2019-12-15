/**
 * 分类标签路由
 */

const express = require('express')
const router = express.Router()
const { API_BASEPATH } = require('../../config')
const Categories = require('../../models/categories')

// 获取某分类下的标签
router.get(`${API_BASEPATH}/getTags`, async (req, res) => {
  const { id } = req.query
  try {
    // 获取标签
    const category = await Categories.findOne({ _id: id })
    if (category) {
      const tags = await Categories.findOne({ _id: id })
      res.json({
        status: 0,
        data: {
          tags: tags.tags,
          categoryName: tags.name
        }
      })
    } else {
      res.json({ status: 1, msg: '分类不存在' })
    }
  } catch (error) {
    res.json({
      status: 1,
      msg: '获取标签失败！'
    })
  }
})

// 添加文章分类中的tags
router.post(`${API_BASEPATH}/addTag`, async (req, res) => {
  const { id, tagname } = req.body
  if (tagname) {
    try {
      // 查找传入分类是否已存在
      const hasCategory = await Categories.findOne({ _id: id })
      if (hasCategory) {
        // 查看是否已有该标签名
        const hasTag = hasCategory.tags.indexOf(tagname)
        if (hasTag > -1) {
          res.json({
            status: 1,
            msg: 'tag in this category is exist'
          })
        } else {
          try {
            // 添加标签
            await Categories.updateOne(
              { _id: id },
              { $addToSet: { tags: tagname } }
            )
            const category = await Categories.findOne({ _id: id })
            res.json({
              status: 0,
              data: {
                // 返回该分类的标签
                tags: category.tags,
                categoryId: category.name
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
          msg: 'category is not exist'
        })
      }
    } catch (error) {
      res.json({
        status: 1,
        msg: error.message
      })
    }
  } else {
    res.json({
      status: 1,
      msg: 'tagname is required'
    })
  }
})

// 更新文章分类中的tags
router.post(`${API_BASEPATH}/updateTags`, async (req, res) => {
  const { id, targetTag, tagName } = req.body
  if (targetTag && tagName) {
    try {
      // 查找传入文章分类是否已存在
      const hasCategory = await Categories.findOne({ _id: id })
      if (!hasCategory) {
        return res.json({
          status: 1,
          msg: 'category is not exist'
        })
      }
      // 更新标签
      await Categories.updateOne(
        { _id: id, tags: targetTag },
        { $set: { 'tags.$': tagName } }
      )
      // 获取标签
      const category = await Categories.findOne({ _id: id })

      // 返回更新后的tags
      res.json({
        status: 0,
        data: {
          tags: category.tags,
          categoryName: category.name
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
      msg: 'oldTagName/newTagName is required'
    })
  }
})

// 删除文章分类中的标签
router.post(`${API_BASEPATH}/delTag`, async (req, res) => {
  const { id, targetTag } = req.body
  if (targetTag) {
    try {
      // 删除标签
      // { $pull: { fruits: { $in: [ "apples", "oranges" ] }
      await Categories.update({ _id: id }, { $pull: { tags: targetTag } })
      // 获取所有标签
      const category = await Categories.findOne({ _id: id })
      console.log(category)
      res.json({
        status: 0,
        data: {
          tags: category.tags,
          categoryName: category.name
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
      msg: 'targetTag is required'
    })
  }
})

module.exports = router
