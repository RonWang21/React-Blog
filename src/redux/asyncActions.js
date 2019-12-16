/**
 * 异步actions
 */

// 引入同步action
import { handleTag, handleUser, handleArticle } from './actions'

// 引入接口请求方法
import { reqGetTags, reqLogin } from '../api'

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
const asyncHandleUser= {
  asyncGetUsers: () => {
    return async dispatch => {
      const result = await reqGetTags()
      if (result) {
        dispatch(handleTag.getTags(result))
      }
    }
  }
}

export { asyncHandleTag, asyncHandleUser }
