const mongoose = require('mongoose')
const tagSchema = require('../schemas/tagSchema.js')

module.exports = mongoose.model('Tags', tagSchema)
