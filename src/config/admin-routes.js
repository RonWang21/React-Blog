//Admin
import Admin from '../containers/adminContainers/admin/Admin'
//admin首页
import AdminMain from '../components/adminContent/adminMain/AdminMain'
//admin用户管理
import AdminUser from '../components/adminContent/adminUser/AdminUser'
//admin文章
import AdminEssay from '../components/adminContent/adminEssay/AdminEssay'
export default [{
  exact: true,
  path: '/admin',
  component: Admin
}, {
  exact: true,
  path: '/admin/main',
  component: AdminMain
}, {
  exact: true,
  path: '/admin/user',
  component: AdminUser
}, {
  exact: true,
  path: '/admin/essay',
  component: AdminEssay
}]