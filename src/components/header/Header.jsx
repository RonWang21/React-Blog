import React, { Component } from 'react'
// 引入react-router-dom路由,解构Link方法
// import { Link } from 'react-router-dom'
// 引入elementUI组件库
import { Menu } from 'element-react'
// 引入菜单数据
import menus from '../../config/menus.js'
// 引入Header.less样式文件
import './Header.less'
class Header extends Component {
  // 创建一级菜单的
  createMenus = () => {
    return menus.map(menu => (
      <Menu.Item key={menu.key} index={menu.key}>
        {menu.title}
      </Menu.Item>
    ))
  }
  onSelect() {}
  render() {
    const menus = this.createMenus()

    return (
      <header>
        <Menu
          defaultActive="1"
          className="el-menu-demo"
          mode="horizontal"
          onSelect={this.onSelect.bind(this)}
        >
          {menus}
        </Menu>
      </header>
    )
  }
}

export default Header
