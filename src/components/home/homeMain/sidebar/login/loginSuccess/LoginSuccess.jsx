import React, { Component } from 'react'

import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import { Button } from 'element-react'

import './loginSuccess.less'

// 引入时间戳转换方法
import utils from '../../../../../../utils/setTime'
const { getTimeAgo } = utils
@withRouter
@connect(
  state => ({
    user: state.user.user
  }),
  null
)
class LoginSuccess extends Component {
  handleSubmit = () => {}

  render() {
    return (
      <div className="showUserInfo">
        <div className="userAvatar">
          <img src={require('./images/portrait.png')} alt="userAvatar" />
        </div>
        <div className="userInfo">
          <span>{this.props.user.username}</span>
          <br />
          <span>"{this.props.user.signature}"</span>
        </div>
        <div className="lastLoginTime">
          <span>上次登录时间: </span>
          {/* <br /> */}
          <span>{getTimeAgo(this.props.user.lastLoginTime)}</span>
        </div>
        {this.props.user.usertype === 'admin' ? (
          <Button
            type="primary"
            onClick={() => {
              // 跳转到后台UI
              this.props.history.push('/admin')
            }}
          >
            进入管理后台
          </Button>
        ) : null}
      </div>
    )
  }
}

export default LoginSuccess
