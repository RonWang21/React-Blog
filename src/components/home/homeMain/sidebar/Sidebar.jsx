import React, { Component } from 'react'

import RecomArticle from './recomArticle/RecomArticle'
import Login from './login/Login'

import { Layout } from 'element-react'
import './HomeSidebar.less'

class Sidebar extends Component {
  render() {
    return (
      <aside>
        <Layout.Row type="flex">
          <Layout.Col span="1" offset="1">
            <div className="grid-content bg-purple">
              <div className="home-sidebar-contanier">
                <div className="home-sidebar-contanier">
                  <Login />
                  <RecomArticle />
                </div>
              </div>
            </div>
          </Layout.Col>
        </Layout.Row>
      </aside>
    )
  }
}

export default Sidebar
