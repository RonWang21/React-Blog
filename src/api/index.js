import ajax from './ajax'
const BASE_URL = '/api/v1.0'

// 用户登录
export const reqUserLogin = ({ username, password }) => {
  ajax({
    method: 'POST',
    url: `${BASE_URL}/login`,
    data: {
      username,
      password
    }
  })
}

// 用户注册
export const reqUserRegister = ({ username, email, password, rePassword }) => {
  ajax({
    method: 'POST',
    url: `${BASE_URL}/register`,
    data: {
      username,
      email,
      password,
      rePassword
    }
  })
}

// 获取所有用户
export const reqGetUsers = () =>
  ajax({
    method: 'GET',
    url: `${BASE_URL}/userlist`
  })

// 获取标签
export const reqGetTags = () =>
  ajax({
    method: 'GET',
    url: `${BASE_URL}/getTags`
  })

// 添加标签
export const reqAddTag = ({ tagname }) =>
  ajax({
    method: 'POST',
    url: `${BASE_URL}/addTag`,
    data: {
      tagname
    }
  })

// 删除标签
export const reqDelTag = ({ tagname }) =>
  ajax({
    method: 'POST',
    url: `${BASE_URL}/delTag`,
    data: {
      tagname
    }
  })

// 更新标签
export const reqUpdateTag = ({ tagname, newname }) =>
  ajax({
    method: 'POST',
    url: `${BASE_URL}/updateTag`,
    data: {
      tagname,
      newname
    }
  })
// export const requpdateTag = ({ tagname, newname }) =>
//   ajax({
//     method: 'post',
//     url: url + '/updateTag',
//     data: {
//       tagname,
//       newname
//     }
//   })
export const reqLogin = ({ username, password }) =>
  ajax({
    method: 'post',
    url: url + '/login',
    data: { username, password }
  })
