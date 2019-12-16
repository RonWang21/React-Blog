/**
 * 异步actions
 */

// 引入同步action
import {
  handleTag,
  handleUser,
  handleArticle,
  handCategories,
  handEssay
} from './actions'

// 引入接口请求方法
import {
  reqGetTags,
  reqUserLogin,
  reqGetCategories,
  reqAddCategory,
  reqGetEssay,
  reqAddEssay,
  reqDelEssay,
  reqUpdateEssay
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
// 异步的essay
const asyncEssay = {
  asyncGetEssay: () => {
    return async dispatch => {
      const result = await reqGetEssay()
      if (result) {
        dispatch(handEssay.getEssay(result))
      }
    }
  },
  asyncAddEssay: ({ title, content, category, isPulish, author }) => {
    return async dispatch => {
      const result = await reqAddEssay({
        title,
        content,
        category,
        isPulish,
        author
      })
      if (result.status === 0) {
        dispatch(handEssay.addEssay(result))
      }
    }
  },
  asyncUpdateEssay: ({ category, id, title, content, author, isPublish }) => {
    return async dispatch => {
      const result = await reqUpdateEssay({
        category,
        id,
        title,
        content,
        author,
        isPublish
      })

      if (result.status === 0) {
        console.log(result)
        dispatch(handEssay.updateEssay(result.data))
      }
    }
  },
  asyncDelEssay: id => {
    return async dispatch => {
      const result = await reqDelEssay(id)
      if (result.status === 0) {
        dispatch(handEssay.delEssay(result))
      }
    }
  }
}
export { asyncHandleTag, asyncHandleUser, asyncCategory, asyncEssay }
