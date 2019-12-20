import React, { Component } from 'react'
import { connect } from 'react-redux'
import './less/Login.less'

import { Tabs, MessageBox, Message } from 'element-react'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import LoginSuccess from './loginSuccess/LoginSuccess'

// 删除用户action
import { handleUser } from '../../../../../redux/actions'
const { removeUser } = handleUser
@connect(
  state => ({
    user: state.user
  }),
  {
    removeUser
  }
)
class Login extends Component {
  constructor(props) {
    super(props)

    // 用来存储登录/注册表单数据的状态数据
    this.state = {
      // 当前tab切换状态
      status: 'login'
    }
  }

  // tab栏切换事件
  onTabChange = status => {
    this.setState({
      status
    })
    if (status === 'login' && this.registerForm) {
      this.registerForm.resetFields()
    }
    if (status === 'register' && this.loginForm) {
      this.loginForm.resetFields()
    }
  }

  // 退出
  handleLoginout = () => {
    MessageBox.confirm('确定离开吗?', '提示', {
      type: 'warning'
    }).then(() => {
      // 删除用户信息
      this.props.removeUser()
      Message({
        type: 'success',
        message: '退出成功!',
        showClose: false
      })
    })
  }

  render() {
    return (
      <div className="main-user">
        {this.props.user.token ? (
          <div className="logined">
            <LoginSuccess />
            {/* 退出登录 */}
            <span onClick={this.handleLoginout} className="loginOut">
              退出
            </span>
          </div>
        ) : (
          <div className="logiWrapper">
            <div className="introduce">
              <span>北京时间:</span>
              <span style={{ fontSize: '14px', fontWeight: '400' }}>
                123123
              </span>
            </div>
            <div>
              <Tabs
                activeName="login"
                onTabClick={tab => this.onTabChange(tab.props.name)}
              >
                <Tabs.Pane label="管理员登录" name="login">
                  <LoginForm
                    // 当跳转到login时将loginForm给this.loginForm
                    setLoginForm={loginForm => {
                      this.loginForm = loginForm
                    }}
                  />
                </Tabs.Pane>
                {/* <Tabs.Pane label="注册" name="register">
                  <RegisterForm
                    setRegisterForm={registerForm => {
                      this.registerForm = registerForm
                    }}
                  />
                </Tabs.Pane> */}
              </Tabs>
              {/* <div className="agreementTipsBox">
                注册登录即表示
                <br />
                <span>
                  同意<a href="###">用户协议</a>、<a href="###">隐私政策</a>
                </span>
              </div> */}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Login
