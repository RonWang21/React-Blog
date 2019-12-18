import React, { Component } from 'react'

import router from './config/routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// 引入组件默认主题
import 'element-theme-default'

// 引入Home组件
import Home from './containers/home/Home'
import ArticleList from './components/home/homeMain/articleList/ArticleList'
//引入Admin 组件
import Admin from './containers/adminContainers/admin/Admin'
class App extends Component {
  render() {
    return (
      <Router history={Router}>
        <Switch>
          {/* Admin和Home是同一级 */}
          <Route path="/admin" component={Admin} />
          <Home>
            <Switch>
              {router.map((route, index) => (
                <Route key={index} {...route}></Route>
              ))}
              <Route key="_id" path="*" component={ArticleList} />
            </Switch>
          </Home>
        </Switch>
      </Router>
    )
  }
}
export default App
