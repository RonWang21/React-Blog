/**
 * 配置路由器
 */

const express = require('express')

const router = express.Router()

// 引入路由
const userRoute = require('../router/routes/user')

// 使用路由
router.use(userRoute)

module.exports = router
