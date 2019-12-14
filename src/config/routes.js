// 引入Home组件
import Home from '../containers/home/Home'
//引入Admin 组件
import Admin from '../containers/adminContainers/admin/Admin'
//登录组件
import Login from '../containers/login/Login'
import HomeDetail from '../components/home/homeDetail/HomeDetail'
import HomeTagesDetail from '../components/home/homeTagesDetail/HomeTagesDetail'
// 默认暴露路由
export default [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    exact: true,
    path: '/admin/:id',
    component: Admin
  },
  {
    exact: true,
    path: '/login',
    component: Login
  }
  // {
  //   exact: true,
  //   path: '/home/detail',
  //   component: HomeDetail
  // }
  // {
  //   exact: true,
  //   path: '/',
  //   component: HomeTagesDetail
  // }
]
