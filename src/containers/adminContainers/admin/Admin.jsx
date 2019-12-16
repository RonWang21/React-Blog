import React, { Component } from 'react'
//引入ui
// import { Menu } from 'element-react'
import 'element-theme-default'
//路由
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
// import Home from '../../home/Home'
import routes from '../../../config/admin-routes'
import Header from '../../../components/adminComponent/adminMain/AdminHeader'
import NotMath from '../../../components/notMath/NotMath'
// 引入样式
import './admin.css'
class Admin extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="adminContent">
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route}></Route>
            ))}
          </Switch>
        </div>
      </div>
    )
  }
}

export default Admin
