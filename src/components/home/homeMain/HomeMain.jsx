import React, { Component } from 'react'

import './homeMain.less'

import Sidebar from './sidebar/Sidebar'
class HomeMain extends Component {
  render() {
    return (
      // 首页main---
      <main style={{ marginTop: '100px' }} className="main-container">
        {this.props.children}
        {/* main--sidebar--start */}
        <Sidebar />
        {/* main--sidebar--end */}
      </main>
    )
  }
}

export default HomeMain
