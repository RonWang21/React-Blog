const delay = require('mocker-api/utils/delay')
// import userList from './userData'
const userList = require('./userData')
const data = {
  'GET /userlist': { code: 0, data: userList }
}

// Mock.mock('/userlist', { code: 0, data: userList })

module.exports = delay(data, 1000)
