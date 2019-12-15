import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu, Layout } from 'element-react'
import { Link } from 'react-router-dom'
import './adminHeader.styl'
@withRouter
class AdminMain extends Component {
  componentDidMount() {
    console.log(this.props.location.pathname)
  }
  render() {
    const { pathname } = this.props.location
    return (
      <div>
        <header className="adminHeader">
          <Menu
            theme="White"
            defaultActive={pathname}
            className="el-menu-demo"
            mode="horizontal"
          >
            <Layout.Row gutter="24">
              <Link to="/admin/main">
                <Menu.Item index="/admin/main">首页</Menu.Item>
              </Link>
              <Link to="/admin/user">
                <Menu.Item index="/admin/user">读者管理</Menu.Item>
              </Link>
              <Link to="/admin/tags">
                <Menu.Item index="/admin/tags">分类管理</Menu.Item>
              </Link>
              <Menu.SubMenu
                index="/admin/essay"
                title="我的文章"
                defaultActive={pathname}
              >
                <Link to="/admin/essaylist">
                  <Menu.Item index="/admin/essaylist">文章列表</Menu.Item>
                </Link>
                <Link to="/admin/essay">
                  <Menu.Item index="/admin/essay">添加文章</Menu.Item>
                </Link>
              </Menu.SubMenu>
              <Layout.Col span="6" offset="10">
                <div className="userBox">userName</div>
              </Layout.Col>
            </Layout.Row>
          </Menu>
        </header>
      </div>
    )
  }
}

export default AdminMain
