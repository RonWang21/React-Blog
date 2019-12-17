import React, { Component } from 'react'
// 引入头部样式
import './hedaer.less'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemList: [
        {
          itemName: '首页',
          id: 'home'
        },
        {
          itemName: '关于',
          id: 'about'
        }
      ],
      currentTab: 'home'
    }
  }

  // tab切换
  onTabChange(currentTab) {
    this.setState({
      currentTab
    })
  }

  render() {
    return (
      <div className="main-header-container">
        <header className="main-header">
          <div className="main-header-content">
            <a href="/" className="log">
              <img
                src={require('../../../assets/images/logo.png')}
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
                    <a>{li.itemName}</a>
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
