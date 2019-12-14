// import Mock from 'mockjs'
const Mock = require('mockjs')
const user = Mock.mock({
  user: [],
  'userList|12': [
    {
      date: '@time',
      name: '@name',
      address: '@address',
      tag: '家'
    }
  ]
})

module.exports = user
