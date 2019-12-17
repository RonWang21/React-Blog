/**
 * 异步actions
 */

// 引入同步action
import {
  handleTag,
  handleUser,
  handleArticle,
  handCategories,
  handArticle
} from './actions'

// 引入接口请求方法
import {
  reqGetTags,
  reqUserLogin,
  reqGetCategories,
  reqAddCategory,
  reqGetArticle,
  reqAddArticle,
  reqDelArticle,
  reqUpdateArticle,
  reqUpdateCategory,
  reqDelCategory,
  reqAddTag,
  reqUpdateTag,
  reqDelTag
} from '../api'

// 异步操作tag
const asyncHandleUser = {
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
const asyncHandleTag = {
  asyncGetUsers: () => {
    return async dispatch => {
      const result = await reqGetTags()
      if (result) {
        dispatch(handleTag.getTags(result.data))
      }
    }
  },
  asyncAddTag: tagname => {
    return async dispatch => {
      const result = await reqAddTag({ tagname })
      if (result.status === 0) {
        dispatch(handleTag.addTag(result.data))
      }
    }
  },
  asyncUpdateTag: ({ targetTag, tagName, id }) => {
    return async dispatch => {
      const result = await reqUpdateTag({ targetTag, tagName, id })
      if (result.status === 0) {
        dispatch(handleTag.updateTag(result.data))
      }
    }
  },
  asyncDelTag: ({ id, targetTag }) => {
    return async dispatch => {
      const result = await reqDelTag({ id, targetTag })
      if (result.status === 0) {
        dispatch(handleTag.delTag(result.datas))
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
        dispatch(handCategories.addCategory(result))
      }
    }
  },
  asyncUpdateCategory: ({ categoryname, id }) => {
    return async dispatch => {
      const result = await reqUpdateCategory({ categoryname, id })
      if (result.status === 0) {
        dispatch(handCategories.updateCategory(result))
      }
    }
  },
  asyncDelCategory: id => {
    return async dispatch => {
      const result = await reqDelCategory(id)
      if (result.status === 0) {
        dispatch(handCategories.delCategory(result))
      }
    }
  }
}
// 异步的article
const asyncArticle = {
  asyncGetArticle: () => {
    return async dispatch => {
      const result = await reqGetArticle()
      if (result) {
        dispatch(handArticle.getArticle(result))
      }
    }
  },
  asyncAddArticle: ({ title, content, category, isPublish, author }) => {
    return async dispatch => {
      const result = await reqAddArticle({
        title,
        content,
        category,
        isPublish,
        author
      })
      if (result.status === 0) {
        dispatch(handArticle.addArticle(result))
      }
    }
  },
  asyncUpdateArticle: ({ category, id, title, content, author, isPublish }) => {
    return async dispatch => {
      const result = await reqUpdateArticle({
        category,
        id,
        title,
        content,
        author,
        isPublish
      })

      if (result.status === 0) {
        dispatch(handArticle.updateArticle(result.data))
      }
    }
  },
  asyncDelArticle: id => {
    return async dispatch => {
      const result = await reqDelArticle(id)
      if (result.status === 0) {
        dispatch(handArticle.delArticle(result))
      }
    }
  }
}
export { asyncHandleTag, asyncHandleUser, asyncCategory, asyncArticle }
