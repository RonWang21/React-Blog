import {
  GET_USERLIST,
  UPDATE_CATEGORY,
  DEL_CATEGORY,
  GET_CATEGORIES,
  ADD_CATEGORY
} from './action-types'
import {
  reqUser,
  reqGetCategories,
  reqAddCategory,
  reqUpdateCategory,
  reqDelCategory
} from '../api'

const getUserListSuccess = userList => ({
  type: GET_USERLIST,
  data: userList
})

export const getUserList = () => {
  return async dispatch => {
    const result = await reqUser()
    if (result) {
      console.log(result)
      dispatch(getUserListSuccess(result))
    }
  }
}

const getCategoriesSuccess = tags => ({
  type: GET_CATEGORIES,
  data: tags
})

export const getCategories = () => {
  return async dispatch => {
    const result = await reqGetCategories()
    if (result) {
      console.log(result)
      dispatch(getCategoriesSuccess(result))
    }
  }
}
const addCategorySuccess = tags => ({
  type: ADD_CATEGORY,
  data: tags
})

export const addCategory = ({ tags, categoryname }) => {
  return async dispatch => {
    const result = await reqAddCategory({ tags, categoryname })
    if (result) {
      console.log(result)
      dispatch(addCategorySuccess(result))
    }
  }
}
const updateCategorySuccess = tags => ({
  type: UPDATE_CATEGORY,
  data: tags
})

export const updateCategory = ({ id, categoryname }) => {
  return async dispatch => {
    const result = await reqUpdateCategory({ id, categoryname })
    if (result) {
      console.log(result)
      dispatch(updateCategorySuccess(result))
    }
  }
}
const delCategorySuccess = tags => ({
  type: DEL_CATEGORY,
  data: tags
})

export const delCategory = id => {
  return async dispatch => {
    const result = await reqDelCategory(id)
    if (result) {
      console.log(result)
      dispatch(delCategorySuccess(result))
    }
  }
}
