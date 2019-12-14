import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'element-react'
import { Link } from 'react-router-dom'

@withRouter
class AdminMain extends Component {
  componentDidMount() {
    console.log(this.props.location.pathname)
  }
  render() {
    const { pathname } = this.props.location
    return (
      <div>
        <header>
          <Menu
            theme="White"
            defaultActive={pathname}
            className="el-menu-demo"
            mode="horizontal"
          >
            <Link to="/admin/main">
              <Menu.Item index="/admin/main">首页</Menu.Item>
            </Link>
            <Link to="/admin/user">
              <Menu.Item index="/admin/user">读者管理</Menu.Item>
            </Link>
            <Link to="/admin/essay">
              <Menu.Item index="4">分类管理</Menu.Item>
            </Link>
            <Menu.SubMenu
              index="/admin/essay"
              title="我的文章"
              defaultActive={pathname}
            >
              <Link to="/admin/essay">
                <Menu.Item index="2-1">文章列表</Menu.Item>
              </Link>
              <Link to="/admin/essay">
                <Menu.Item index="2-3">添加文章</Menu.Item>
              </Link>
            </Menu.SubMenu>
          </Menu>
        </header>
      </div>
    )
  }
}

export default AdminMain
