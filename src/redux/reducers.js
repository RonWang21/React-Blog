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

//引入redux
import { combineReducers } from 'redux'

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
function categories(preveState = [], action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.data.data.categories
    case ADD_CATEGORY:
      return action.data.data.categories
    default:
      return preveState
  }
}

export default combineReducers({
  tags,
  categories
})
