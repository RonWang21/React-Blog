import React, { Component } from 'react'
// 引入Home组件
<<<<<<< HEAD
import SideNav from './containers/sideNav/SideNav'
class App extends Component {
  render() {
    return (
      <div>
        <SideNav />
      </div>
=======
// import Home from './containers/home/Home'
//引入路由组件
import router from './config/routes'
import NotMath from './components/notMath/NotMath'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
// 引入组件默认主题
import 'element-theme-default'
class App extends Component {
  render() {
    return (
      <Router>
        {}
        <Switch>
          {router.map((route, index) => (
            <Route key={index} {...route}></Route>
          ))}
          <Redirect path="/admin" to="/admin/main" />
          <Route component={NotMath}></Route>
        </Switch>
      </Router>
>>>>>>> master
    )
  }
}
export default App
