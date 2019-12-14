//更新数据状态的函数
import {
  GET_USERLIST
} from './action-types'

//引入redux
import {
  combineReducers
} from 'redux'

function userList(prevState = [], action) {
  switch (action.type) {
    case GET_USERLIST:
      return action.data
    default:
      return prevState
  }
}


export default combineReducers({
  userList
})