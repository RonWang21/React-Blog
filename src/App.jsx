import React, { Component } from 'react'

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

// 引入Home组件
import Home from './containers/home/Home'
import HomeMain from './components/home/homeMain/HomeMain'
//引入Admin 组件
import Admin from './containers/adminContainers/admin/Admin'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* Admin和Home是同一级 */}
          <Route path="/admin/:id" exact component={Admin} />
          <Home>
            <Switch>
              {router.map((route, index) => (
                <Route key={index} {...route}></Route>
              ))}
            </Switch>
          </Home>
          <Redirect path="/admin" to="/admin/main" />
          <Route component={NotMath}></Route>
        </Switch>
      </Router>
    )
  }
}
export default App
