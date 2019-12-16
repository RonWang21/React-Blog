/**
 *
 */
import {
  SAVE_USER,
  GET_USERS,
  UPDATE_USER,
  REMOVE_USER,
  GET_TAGS,
  ADD_TAG,
  UPDATE_TAG,
  REMOVE_TAG,
  GET_CATEGORIES,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  REMOVE_CATREGORY,
  GET_ARTICLES
} from './actionTypes'

// 引入redux
import { combineReducers } from 'redux'

// 引入存入localstorage的方法
import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
  clearLocalStorageItems
} from '../utils/saveToLocalStorage'

// 初始化user preveState的值---从localstorage获取
const initState = {
  user: getLocalStorageItem('user') || {},
  token: getLocalStorageItem('token') || ''
}
// 操作user数据
function user(preveState = initState, action) {
  switch (action.type) {
    case SAVE_USER:
      // 存入localstorage
      setLocalStorageItem('user', action.data.user)
      setLocalStorageItem('token', action.data.token)
      return action.data
    default:
      return preveState
  }
}

// 操作tags数据
function tags(preveState = [], action) {
  switch (action.type) {
    case ADD_TAG:
      return preveState
    case GET_TAGS:
      return preveState
    default:
      return preveState
  }
}
// 操作article数据
function articles(preveState = [], action) {
  switch (action.type) {
    case GET_ARTICLES:
      return action.data
    default:
      return preveState
  }
}
export default combineReducers({
  tags,
  user,
  articles
})
