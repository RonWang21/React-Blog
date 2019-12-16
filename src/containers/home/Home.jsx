import React, { Component } from 'react'
import './Home.less'
// 引入HomeTags组件
import HomeMain from '../../components/home/homeMain/HomeMain'
import Header from '../../components/home/header/Header'
import { Layout } from 'element-react'

// import { BrowserRouter as Router } from 'react-router-dom'
class Home extends Component {
  render() {
    return (
      <Layout.Row className="view-container" justify="center">
        {/* header--start */}
        <Header />
        {/* header--end */}
        {/* main--start */}
        {/* 由于HomeMain在Home中，在App中定义路由的时候将写在HomeMain里的路由组件变成了Home的子组件 */}
        <HomeMain children={this.props.children} />
        {/* main--end */}
      </Layout.Row>
    )
  }
}

export default Home
