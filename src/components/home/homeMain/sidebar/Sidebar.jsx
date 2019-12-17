import React, { Component } from 'react'

import RecomArticle from './recomArticle/RecomArticle'
import Login from './login/Login'

import './sidebar.less'

class Sidebar extends Component {
  render() {
    return (
      <aside>
        <div className="home-sidebar-contanier">
          <Login />
          <RecomArticle />
        </div>
      </aside>
    )
  }
}

export default Sidebar
