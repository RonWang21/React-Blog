import React, { Component } from 'react'
import './homeMain.less'
import Sidebar from './sidebar/Sidebar'
class HomeMain extends Component {
  render() {
    return (
      <div>
        {/* // 首页main--- */}
        <main className="main-container">
          {this.props.children}

          {/* main--sidebar--start */}
          <Sidebar />
          {/* main--sidebar--end */}
        </main>
      </div>
    )
  }
}

export default HomeMain
