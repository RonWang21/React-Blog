//更新数据状态的函数
import {
  GET_USERLIST,
  GET_CATEGORIES,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DEL_CATEGORY
} from './action-types'

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
function categories(prevState = [], action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.data.data.categories
    case ADD_CATEGORY:
      // [...prevState, action.data.data.categories]
      return action.data.data.categories
    case UPDATE_CATEGORY:
      const index = prevState.indexOf(action.data.data)
      if (index !== -1) {
        prevState[index] = action.data
      }
      return prevState
    case DEL_CATEGORY:
      // const arr = prevState.filter(category => category._id !== action.data._id)
      // console.log(arr, action.data)
      return action.data.data.categories
    default:
      return prevState
  }
}

export default combineReducers({
  userList,
  categories
})
