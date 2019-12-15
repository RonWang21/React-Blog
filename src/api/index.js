import ajax from './ajax'
const url = `/api/v1.0`
export const reqUser = () =>
  ajax({
    method: 'get',
    url: url + '/userlist'
  })
export const reqGetTags = id =>
  ajax({
    method: 'get',
    url: url + '/getTags',
    data: {
      id
    }
  })
export const reqGetCategories = () =>
  ajax({
    method: 'get',
    url: url + '/getCategories'
  })

export const reqAddCategory = ({ categoryname, tags }) =>
  ajax({
    method: 'post',
    url: url + '/addCategory',
    data: { categoryname, tags }
  })
export const reqUpdateCategory = ({ categoryname, id }) =>
  ajax({
    method: 'post',
    url: url + '/updateCategory',
    data: { categoryname, id }
  })
export const reqDelCategory = id =>
  ajax({
    method: 'post',
    url: url + '/delCategory',
    data: { id }
  })
export const reqAddTag = ({ tagname }) =>
  ajax({
    method: 'post',
    url: url + '/addTag',
    data: {
      tagname
    }
  })
export const reqDelTag = ({ tagname }) =>
  ajax({
    method: 'post',
    url: url + '/delTag',
    data: {
      tagname
    }
  })
export const requpdateTag = ({ tagname, newname }) =>
  ajax({
    method: 'post',
    url: url + '/updateTag',
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
