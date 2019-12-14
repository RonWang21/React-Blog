import {
  GET_USERLIST
} from './action-types'
import {
  reqUser
} from '../api'

const getUserListSuccess = (userList) => ({
  type: GET_USERLIST,
  data: userList
})

export const getUserList = () => {
  return async (dispatch) => {
    const result = await reqUser()
    if (result) {
      console.log(result);
      dispatch(getUserListSuccess(result))
    }
  }
}