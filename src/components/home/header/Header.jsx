import React, { Component } from 'react'
// 引入头部样式
import './hedaer.less'

import { withRouter } from 'react-router-dom'

import { Message } from 'element-react'

@withRouter
class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemList: [
        {
          itemName: '首页',
          id: 'welcome'
        },
        {
          itemName: '关于',
          id: 'about'
        }
      ],
      currentTab: 'welcome'
    }
  }

  // tab切换
  onTabChange = currentTab => {
    if ((currentTab !== 'welcome') & (currentTab !== this.state.currentTab)) {
      Message({
        type: 'info',
        message: '该功能暂未开放，尽情期待！'
      })
    } else {
      this.setState({
        currentTab
      })
      this.props.history.push(
        `/welcome/${this.props.location.pathname.split('/')[2]}`
      )
    }
  }

  render() {
    return (
      <div className="main-header-container">
        <header className="main-header">
          <div className="main-header-content">
            <a href="/welcome" className="log">
              <img
                src={require('../../../assets/images/logo2.png')}
                className="logo-img"
                alt="log"
              />
            </a>
            <ul className="main-nav-list">
              {this.state.itemList.map((li, index) => {
                const liClass =
                  li.id === this.state.currentTab
                    ? 'main-nav-item active'
                    : 'main-nav-item'
                return (
                  <li
                    key={index}
                    className={liClass}
                    onClick={this.onTabChange.bind(this, li.id)}
                  >
                    <span>{li.itemName}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
