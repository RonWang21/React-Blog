import React, { Component } from 'react'
// 使用layout布局、Tabs标签页方法
import { Layout, Tabs } from 'element-react'
// 引入homeDetail组件
import HomeDetail from '../homeDetail/HomeDetail'
// 引入HomeTages自定义样式
import './HomeTages.less'
class HomeTags extends Component {
  render() {
    return (
      <div>
        <Tabs
          activeName="1"
          onTabClick={tab => console.log(tab.props.name)}
          className="homeTages"
        >
          <Tabs.Pane label="用户管理" name="1">
            <div style={{ marginTop: '100px' }} className="home-contanier">
              <Layout.Row gutter="20">
                <Layout.Col span="16">
                  <div className="grid-content bg-purple">
                    <div className="home-main-contanier">
                      <HomeDetail />
                    </div>
                  </div>
                </Layout.Col>
              </Layout.Row>
            </div>
          </Tabs.Pane>
          <Tabs.Pane label="配置管理" name="2">
            <div style={{ marginTop: '100px' }} className="home-contanier">
              <Layout.Row gutter="20">
                <Layout.Col span="16">
                  <div className="grid-content bg-purple">
                    <div className="home-main-contanier">
                      配置管理
                      {console.log(this)}
                    </div>
                  </div>
                </Layout.Col>
              </Layout.Row>
            </div>
          </Tabs.Pane>
          <Tabs.Pane label="角色管理" name="3">
            <div style={{ marginTop: '100px' }} className="home-contanier">
              <Layout.Row gutter="20">
                <Layout.Col span="16">
                  <div className="grid-content bg-purple">
                    <div className="home-main-contanier">
                      角色管理
                      {console.log(this)}
                    </div>
                  </div>
                </Layout.Col>
              </Layout.Row>
            </div>
          </Tabs.Pane>
          <Tabs.Pane label="定时补偿任务" name="4">
            <div style={{ marginTop: '100px' }} className="home-contanier">
              <Layout.Row gutter="20">
                <Layout.Col span="16">
                  <div className="grid-content bg-purple">
                    <div className="home-main-contanier">
                      定时任务
                      {console.log(this)}
                    </div>
                  </div>
                </Layout.Col>
              </Layout.Row>
            </div>
          </Tabs.Pane>
        </Tabs>
      </div>
    )
  }
}

export default HomeTags
