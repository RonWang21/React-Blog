import React, { Component } from 'react'

import RecomArticle from './recomArticle/RecomArticle'
import Login from './login/Login'
import { Sticky } from 'react-sticky'
import './sidebar.less'

class Sidebar extends Component {
  render() {
    return (
      <aside>
        <div className="home-sidebar-contanier">
          <Login />
          <Sticky topOffset={150} relative={false} disableHardwareAcceleration>
            {({ style = { top: '103px' } }) => (
              <div style={{ ...style, top: '103px' }}>
                <div>
                  <img
                    src="http://www.atguigu.com/images/speech-banner.jpg"
                    alt=""
                    style={{
                      width: '100%',
                      marginBottom: '10px',
                      marginTop: '10px'
                    }}
                  />
                </div>
                <RecomArticle />
              </div>
            )}
          </Sticky>
        </div>
      </aside>
    )
  }
}

export default Sidebar
