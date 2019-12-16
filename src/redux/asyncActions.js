/**
 * 异步actions
 */

// 引入同步action
import { handleTag, handleUser, handleArticle, handCategories } from './actions'

// 引入接口请求方法
import {
  reqGetTags,
  reqUserLogin,
  reqGetCategories,
  reqAddCategory
} from '../api'

// 异步操作tag
const asyncHandleTag = {
  asyncGetTags: () => {
    return async dispatch => {
      const result = await reqGetTags()
      if (result) {
        dispatch(handleTag.getTags(result))
      }
    }
  }
}
// 异步操作tag
const asyncHandleUser = {
  asyncGetUsers: () => {
    return async dispatch => {
      const result = await reqGetTags()
      if (result) {
        dispatch(handleTag.getTags(result))
      }
    }
  }
}
// 异步的category
const asyncCategory = {
  asyncGetCategories: () => {
    return async dispatch => {
      const result = await reqGetCategories()
      if (result) {
        dispatch(handCategories.getCategories(result))
      }
    }
  },
  asyncAddCategory: ({ categoryname, tags }) => {
    return async dispatch => {
      const result = await reqAddCategory({ categoryname, tags })
      if (result.status === 0) {
        dispatch(handCategories.addCategories(result))
      }
    }
  },
  asyncUpdateCategory: ({ categoryname, id }) => {
    return async dispatch => {
      const result = await reqAddCategory({ categoryname, id })
      if (result.status === 0) {
        dispatch(handCategories.updateCategories(result))
      }
    }
  },
  asyncDelCategory: id => {
    return async dispatch => {
      const result = await reqAddCategory(id)
      if (result.status === 0) {
        dispatch(handCategories.delCategories(result))
      }
    }
  }
}
export { asyncHandleTag, asyncHandleUser, asyncCategory }
