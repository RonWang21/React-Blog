/**
 * 配置路由器
 */

const express = require('express')

const router = express.Router()

// 引入路由
const userRoute = require('./routes/user')
const tagRoute = require('./routes/tag')

// 使用路由
router.use(userRoute)
router.use(tagRoute)

module.exports = router
