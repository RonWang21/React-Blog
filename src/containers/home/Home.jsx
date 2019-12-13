import React, { Component } from 'react'
import './Home.less'
// 引入header组件
import Header from '../../components/header/Header.jsx'
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-contanier">
          <div className="home-main-contanier">home-mian</div>
          <div className="home-sidebar-contanier">home-sidebar</div>
        </div>
      </div>
    )
  }
}

export default Home
