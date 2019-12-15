import { GET_USERLIST, GET_TAGS } from './action-types'
import { reqUser, reqGetTags } from '../api'

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

const getTagsSuccess = tags => ({
  type: GET_TAGS,
  data: tags
})

export const getTags = () => {
  return async dispatch => {
    const result = await reqGetTags()
    if (result) {
      console.log(result)
      dispatch(getTagsSuccess(result))
    }
  }
}
