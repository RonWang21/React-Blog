//admin首页
import AdminMain from '../components/adminContent/adminMain/AdminMain'
//admin用户管理
import AdminUser from '../components/adminContent/adminUser/AdminUser'
//admin文章
import AdminArticle from '../components/adminContent/adminArticle/AdminArticle'
//标签分类
import AdminTags from '../components/adminContent/adminTags/AdminTags'
// 文章列表
import AdminArticleList from '../components/adminContent/adminArticle/AdminArticleList'
export default [
  // {
  //   exact: true,
  //   path: '/admin',
  //   component: Admin
  // },
  {
    exact: true,
    path: '/admin',
    component: AdminMain
  },
  {
    exact: true,
    path: '/admin/user',
    component: AdminUser
  },
  {
    exact: true,
    path: '/admin/article',
    component: AdminArticle
  },
  {
    exact: true,
    path: '/admin/tags',
    component: AdminTags
  },
  {
    exact: true,
    path: '/admin/articlelist',
    component: AdminArticleList
  }
]
