const mongoose = require('mongoose')
const articleSchema = require('../schemas/articleSchema')

module.exports = mongoose.model('Articles', articleSchema)
