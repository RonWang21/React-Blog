/**
 * 同步actions
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
  GET_ARTICLES,
  ADD_ARTICLES,
  UPDATE_ARTICLES,
  DEL_ARTICLES
} from './actionTypes'
import { DEL_CATEGORY } from './actionTypes'

// 操作tags
const handleTag = {
  getTags: data => ({
    type: GET_TAGS,
    data
  }),
  addTag: data => ({
    type: ADD_TAG,
    data
  }),
  updateTag: data => ({
    type: UPDATE_TAG,
    data
  }),
  delTag: data => ({
    type: REMOVE_TAG
  })
}

// 操作user
const handleUser = {
  getUsers: data => ({
    type: GET_USERS,
    data
  }),
  saveUser: data => ({
    type: SAVE_USER,
    data
  })
}

// 操作article
const handleArticle = {
  getArticles: data => ({
    type: GET_ARTICLES,
    data
  })
}
// category
const handCategories = {
  getCategories: data => ({
    type: GET_CATEGORIES,
    data
  }),
  addCategory: data => ({
    type: ADD_CATEGORY,
    data
  }),
  updateCategory: data => ({
    type: UPDATE_CATEGORY,
    data
  }),
  delCategory: data => ({
    type: DEL_CATEGORY,
    data
  })
}
// Article
const handArticle = {
  getArticle: data => ({
    type: GET_ARTICLES,
    data
  }),
  addArticle: data => ({
    type: ADD_ARTICLES,
    data
  }),
  updateArticle: data => ({
    type: UPDATE_ARTICLES,
    data
  }),
  delArticle: data => ({
    type: DEL_ARTICLES,
    data
  })
}
export { handleTag, handleUser, handleArticle, handCategories, handArticle }
