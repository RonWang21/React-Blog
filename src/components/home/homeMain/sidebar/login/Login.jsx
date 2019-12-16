import React, { Component } from 'react'
import { connect } from 'react-redux'
import './less/Login.less'

import { Tabs } from 'element-react'

import { reqUserLogin, reqUserRegister } from '../../../../../api/index'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import LoginSuccess from './loginSuccess/LoginSuccess'
@connect(
  state => ({
    user: state.user.user
  }),
  null
)
class Login extends Component {
  constructor(props) {
    super(props)

    // 用来存储登录/注册表单数据的状态数据
    this.state = {
      // 当前tab切换状态
      status: 'login',
      userInfo: {}
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

  render() {
    console.log(this.props.user)
    if (this.state.userInfo.type === 'admin') {
    }
    return (
      <div className="logiWrapper">
        <div className="introduce">
          <span>银河护卫队</span>
          <span style={{ fontSize: '14px', fontWeight: '400' }}>
            保卫星球，拯救梦想
          </span>
        </div>
        <Tabs
          activeName="login"
          onTabClick={tab => this.onTabChange(tab.props.name)}
        >
          <Tabs.Pane label="登录" name="login">
            <LoginForm
              // 当跳转到login时将registerForm的数据清空
              setLoginForm={loginForm => {
                this.loginForm = loginForm
                // if (this.registerForm) {
                //   this.registerForm.resetFields()
                // }
                this.loginForm = loginForm
              }}
            />
          </Tabs.Pane>
          <Tabs.Pane label="注册" name="register">
            <RegisterForm
              setRegisterForm={registerForm => {
                this.registerForm = registerForm
                // if (this.loginForm) {
                //   this.loginForm.resetFields()
                // }
              }}
            />
          </Tabs.Pane>
        </Tabs>
        <div className="agreementTipsBox">
          注册登录即表示
          <br />
          <span>
            同意<a href="###">用户协议</a>、<a href="###">隐私政策</a>
          </span>
        </div>
      </div>
    )
  }
}

export default Login
