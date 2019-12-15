/**
 * 配置路由器
 */

const express = require('express')

const router = express.Router()

// 引入路由
const userRoute = require('./routes/user')
const tagRoute = require('./routes/tag')
const categoryRoute = require('./routes/category')
const articleRoute = require('./routes/article')

// 使用路由
router.use(userRoute)
router.use(tagRoute)
router.use(articleRoute)
router.use(categoryRoute)

module.exports = router
