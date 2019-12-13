import React, { Component } from 'react'
import { Menu } from 'element-react'
import { Link } from 'react-router-dom'
class AdminMain extends Component {
  render() {
    return (
      <div>
        {' '}
        <header>
          <Menu
            theme="White"
            defaultActive="1"
            className="el-menu-demo"
            mode="horizontal"
          >
            <Link to="/admin/main">
              <Menu.Item index="1">首页</Menu.Item>
            </Link>
            <Link to="/admin/user">
              <Menu.Item index="3">读者管理</Menu.Item>
            </Link>
            <Menu.SubMenu index="2" title="文章管理">
              <Link to="/admin/essay">
                <Menu.Item index="2-1">我的文章</Menu.Item>
              </Link>
              <Link to="/admin/essay">
                <Menu.Item index="2-2">分类管理</Menu.Item>
              </Link>
              <Link to="/admin/essay">
                <Menu.Item index="2-3">添加文章</Menu.Item>
              </Link>
              <Link to="/admin/essay">
                <Menu.Item index="2-4">编辑文章</Menu.Item>
              </Link>
            </Menu.SubMenu>
          </Menu>
        </header>
      </div>
    )
  }
}

export default AdminMain
