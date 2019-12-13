import React, { Component } from 'react'
import './Home.less'
// 引入HomeTags组件
import HomeTags from '../../components/home/homeTags/HomeTags'
import HomeSidebar from '../../components/home/homeSidebar/HomeSidebar'
import { Layout } from 'element-react'

class Home extends Component {
  render() {
    return (
      <div>
        <Layout.Row type="flex" justify="center">
          <HomeTags />
          <HomeSidebar />
        </Layout.Row>
      </div>
    )
  }
}

export default Home
