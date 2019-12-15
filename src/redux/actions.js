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
  GET_ARTICLES
} from './action-types'

// 操作tags
const handleTag = {
  getTags: data => ({
    type: GET_TAGS,
    data
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

export { handleTag, handleUser, handleArticle }
