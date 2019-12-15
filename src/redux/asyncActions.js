/**
 * 异步actions
 */


 // 引入同步action
import { reqUserLogin, getTagsSuccess } from './action-creator'

// 引入接口请求方法
import { reqGetTags, reqLogin } from '../api'

const asyncUserLogin = ({ username, password }) => {
  return async dispatch => {
    const result = await reqLogin({ username, password })
    console.log(result)
    if (result) {
      dispatch(reqUserLogin)
    }
  }
}
const asyncGetTags = () => {
  return async dispatch => {
    const result = await reqGetTags()
    if (result) {
      console.log(result)
      dispatch(getTagsSuccess(result))
    }
  }
}

// const asyncGetUsers = () => {
//   return async dispatch => {
//     const result = await reqUser()
//     if (result) {
//       console.log(result)
//       dispatch(getUserListSuccess(result))
//     }
//   }
// }

export { asyncUserLogin, asyncGetTags }
