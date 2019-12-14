// 引入Home组件
import Home from '../containers/home/Home'
//引入Admin 组件
import Admin from '../containers/adminContainers/admin/Admin'
// 默认暴露路由
export default [{
    exact: true,
    path: '/',
    component: Home
  },
  {
    exact: true,
    path: '/admin/:id',
    component: Admin
  }
]