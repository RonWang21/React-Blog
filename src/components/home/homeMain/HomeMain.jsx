import React, { Component } from 'react'
import './homeMain.less'
import Sidebar from './sidebar/Sidebar'
import CategoryNav from './categoryNav/CategoryNav'
import { StickyContainer } from 'react-sticky'
class HomeMain extends Component {
  render() {
    return (
      <div>
        {/* // 首页main--- */}
        <main className="main-container">
          {/* 分类导航栏 */}
          <CategoryNav></CategoryNav>
          {/* 分类导航栏 */}
          <div className="main-tagnav">
            {/* 标签导航栏 */}
            {/* 标签导航栏 */}
            <StickyContainer>
              <div className="main-content">
                {/* 文章列表和文章详情 */}
                <div className="main-articlebox">{this.props.children}</div>
                {/* <StickyContainer> */}
                {/* 文章列表和文字详情 */}
                {/* main--sidebar--start */}
                <Sidebar />
                {/* main--sidebar--end */}
                {/* </StickyContainer> */}
              </div>
            </StickyContainer>
          </div>
        </main>
      </div>
    )
  }
}

export default HomeMain
