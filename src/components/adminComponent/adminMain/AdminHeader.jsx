import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu, Layout, Button, MessageBox, Message } from 'element-react'
import { Link } from 'react-router-dom'
import './adminHeader.styl'
@withRouter
class AdminMain extends Component {
  componentDidMount() {
  }
  //退出操作
  loginOut = () => {
    MessageBox.confirm('将要跳转到文章展示页面, 是否继续?', '提示', {
      type: 'warning'
    }).then(() => {
      this.props.history.push('/', {})
      Message({
        type: 'success',
        message: '跳转成功!'
      })
    })
  }
  render() {
    const { pathname } = this.props.location
    const user = JSON.parse(window.localStorage.user)
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
              <Link to="/admin">
                <Menu.Item index="/admin">首页</Menu.Item>
              </Link>
              {/* <Link to="/admin/user">
                <Menu.Item index="/admin/user">读者管理</Menu.Item>
              </Link> */}
              <Link to="/admin/tags">
                <Menu.Item index="/admin/tags">分类管理</Menu.Item>
              </Link>
              <Menu.SubMenu
                index="/admin/article"
                title="我的文章"
                defaultActive={pathname}
              >
                <Link to="/admin/articlelist">
                  <Menu.Item index="/admin/articlelist">文章列表</Menu.Item>
                </Link>
                <Link to="/admin/article">
                  <Menu.Item index="/admin/article">添加文章</Menu.Item>
                </Link>
              </Menu.SubMenu>
              <Layout.Col span="6" offset="10">
                <div className="userBox">
                  欢迎&nbsp;{user.username}&nbsp;使用，
                  <Button type="text" onClick={this.loginOut}>
                    退出
                  </Button>
                </div>
              </Layout.Col>
            </Layout.Row>
          </Menu>
        </header>
      </div>
    )
  }
}

export default AdminMain
