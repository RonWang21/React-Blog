import React, { Component } from 'react'

import router from './config/routes'
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
import ArticleList from './components/home/homeMain/articleList/ArticleList'
//引入Admin 组件
import Admin from './containers/adminContainers/admin/Admin'
import { StickyContainer, Sticky } from 'react-sticky'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* Admin和Home是同一级 */}
          <Route path="/admin" component={Admin} />
          <StickyContainer>
            <Home>
              <Switch>
                {router.map((route, index) => (
                  <Route key={index} {...route}></Route>
                ))}
                <Route key="_id" path="*" component={ArticleList} />
              </Switch>
            </Home>
          </StickyContainer>
        </Switch>
      </Router>
    )
  }
}
export default App
