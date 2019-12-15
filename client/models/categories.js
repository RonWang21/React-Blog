const mongoose = require('mongoose')
const categorySchema = require('../schemas/categorySchema.js')

module.exports = mongoose.model('Categories', categorySchema)
