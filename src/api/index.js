import ajax from './ajax'
const url = `/api`
export const reqUser = () =>
  ajax({
    method: 'get',
    url: url + '/userlist'
  })
export const reqGetTags = () =>
  ajax({
    method: 'get',
    url: url + '/getTags'
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
