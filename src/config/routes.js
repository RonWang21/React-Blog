import ArticleList from '../components/home/homeMain/articleList/ArticleList'
import ArticleDetail from '../components/home/homeMain/articleDetail/ArticleDetail'

// 默认暴露路由
export default [
  {
    exact: true,
    path: '/welcome/:category',
    component: ArticleList
  },
  {
    exact: true,
    path: '/welcome/:category/:articledetail',
    component: ArticleDetail
  }
]
