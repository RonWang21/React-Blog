const mongoose = require('mongoose')
const userSchema = require('../schemas/userSchema')

module.exports = mongoose.model('Users', userSchema)