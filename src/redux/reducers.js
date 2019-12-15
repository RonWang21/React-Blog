//更新数据状态的函数
import { GET_USERLIST, GET_TAGS, ADD_TAG } from './action-types'

//引入redux
import { combineReducers } from 'redux'

function userList(prevState = [], action) {
  switch (action.type) {
    case GET_USERLIST:
      return action.data
    default:
      return prevState
  }
}
// function tags(prevState = [], action) {
//   switch (action.type) {
//     case GET_TAGS:
//       return action.data
//     case ADD_TAG:
//       return [...prevState.action.data]

//     default:
//       break
//   }
// }

export default combineReducers({
  userList,
  // tags
})