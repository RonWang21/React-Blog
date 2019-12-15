import React, { Component } from 'react'

// import HomeTagesDetail from '../homeTagesDetail/HomeTagesDetail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout, Tabs } from 'element-react'

// 引入HomeTages自定义样式
import './HomeTages.less'
// import HomeSidebar from '../homeSidebar/HomeSidebar'
import HomeTagesDetail from '../homeTagesDetail/HomeTagesDetail'
import HomeDetail from '../homeDetail/HomeDetail'
class HomeTags extends Component {
  homeDetail = () => {
    // this.props.history.push('/detail')
    console.log(this)
  }
  render() {
    return (
      <Router>
        <Tabs
          activeName="1"
          onTabClick={tab => console.log(tab.props.name)}
          className="homeTages"
        >
          <Tabs.Pane label="首页" name="1">
            <div style={{ marginTop: '100px' }} className="home-contanier">
              <Layout.Row gutter="20">
                <Layout.Col span="16">
                  <div className="grid-content bg-purple">
                    <div className="home-main-contanier">
                      <Layout.Col
                        span={16}
                        offset={0}
                        style={{
                          padding: '10px',
                          width: '693px',
                          marginBottom: '10px'
                        }}
                      >
                        <Switch>
                          <Route path="/detail" component={HomeDetail}></Route>
                          <Route path="/" component={HomeTagesDetail}></Route>
                        </Switch>
                      </Layout.Col>
                    </div>
                  </div>
                </Layout.Col>
              </Layout.Row>
            </div>
          </Tabs.Pane>
          <Tabs.Pane label="React" name="2">
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
          <Tabs.Pane label="Vue" name="3">
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
          <Tabs.Pane label="学习随笔" name="4">
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
      </Router>
    )
  }
}

export default HomeTags
