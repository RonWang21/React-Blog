import ajax from './ajax'
const BASE_URL = '/api/v1.0'

// 用户登录
export const reqUserLogin = ({ username, password }) =>
  ajax({
    method: 'POST',
    url: `${BASE_URL}/login`,
    data: {
      username,
      password
    }
  })

// 用户注册
export const reqUserRegister = ({ username, email, password, rePassword }) =>
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
export const reqAddTag = ({ id, tagname }) =>
  ajax({
    method: 'POST',
    url: `${BASE_URL}/addTag`,
    data: {
      tagname,
      id
    }
  })

// 删除标签
export const reqDelTag = ({ targetTag, id }) =>
  ajax({
    method: 'POST',
    url: `${BASE_URL}/delTag`,
    data: {
      targetTag,
      id
    }
  })

// 更新标签
export const reqUpdateTag = ({ targetTag, tagName, id }) =>
  ajax({
    method: 'POST',
    url: `${BASE_URL}/updateTags`,
    data: {
      targetTag,
      tagName,
      id
    }
  })
// 获取分类
export const reqGetCategories = () =>
  ajax({
    method: 'get',
    url: `${BASE_URL}/getCategories`
  })
// 添加分类
export const reqAddCategory = ({ categoryname, tags }) =>
  ajax({
    method: 'post',
    url: `${BASE_URL}/addCategory`,
    data: {
      categoryname,
      tags
    }
  })
// 更新分类
export const reqUpdateCategory = ({ categoryname, id }) =>
  ajax({
    method: 'post',
    url: `${BASE_URL}/updateCategory`,
    data: {
      categoryname,
      id
    }
  })
// 删除分类
export const reqDelCategory = id =>
  ajax({
    method: 'post',
    url: `${BASE_URL}/delCategory`,
    data: {
      id
    }
  })
// 获取文章
export const reqGetArticle = () =>
  ajax({
    method: 'get',
    url: BASE_URL + '/getArticles'
  })
// 获取文章
export const reqAddArticle = ({
  title,
  content,
  author,
  category,
  isPublish = true
}) =>
  ajax({
    method: 'post',
    url: BASE_URL + '/addArticle',
    data: { title, content, author, category, isPublish }
  })
// 获取文章
export const reqDelArticle = id =>
  ajax({
    method: 'post',
    url: BASE_URL + '/delArticle',
    data: { id }
  })
// 获取文章
export const reqUpdateArticle = ({
  category,
  title,
  content,
  author,
  isPublish
}) =>
  ajax({
    method: 'post',
    url: BASE_URL + '/updateAricle',
    data: { category, title, content, author, isPublish }
  })
