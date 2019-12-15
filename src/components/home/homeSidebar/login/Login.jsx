import React, { Component } from 'react'

import './less/Login.less'

import { Tabs, Form, Input, Button, Message } from 'element-react'

import { reqUserLogin, reqUserRegister } from '../../../../api/index'
class Login extends Component {
  constructor(props) {
    super(props)

    // 用来存储登录/注册表单数据的状态数据
    this.state = {
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        email: '',
        password: '',
        rePassword: ''
      },
      // 当前tab切换状态
      status: 'login',
      userInfo: null
    }
  }

  async componentDidMount() {
    const result = await reqUserLogin({ username: 'admin', password: 'admin' })
    console.log('====================================')
    console.log('login', result)
    this.setState({
      userInfo: result
    })
    console.log('====================================')
  }

  loginSuccess() {
    Message({
      message: '登陆失败，请检查网络连接！',
      type: 'success'
    })
  }

  registerSuccess() {
    Message({
      message: '注册成功',
      type: 'success'
    })
  }

  // tab栏切换事件
  onTabChange = status => {
    this.setState({
      status
    })
    const from = `${status}Form`
    // 清空表单
    from === 'loginForm'
      ? this.refs.registerForm.resetFields()
      : this.refs.loginForm.resetFields()
  }

  // 表单按钮点击事件
  handleSubmit = async e => {
    // 阻止默认事件
    e.preventDefault()
    const { status } = this.state
    if (status === 'login') {
      const { username, password } = this.state.loginForm
      // const result = await reqLogin({ username, password })
      // console.log(result)
      const result = await reqUserLogin({
        username: 'admin',
        password: 'admin'
      })
      console.log(result)
    }
    if (status === 'register') {
      const { username, email, password, rePassword } = this.state.registerForm
      // const result = await reqRegister({
      // username, email, password, rePassword
      // })
      // console.log(result)
    }
  }

  // 绑定登录表单的输入内容
  onLoginChange(key, value) {
    this.setState({
      loginForm: Object.assign({}, this.state.loginForm, { [key]: value })
    })
  }

  // 绑定注册表单的输入内容
  onRegisterChange(key, value) {
    this.setState({
      registerForm: Object.assign({}, this.state.registerForm, { [key]: value })
    })
  }
  render() {
    console.log(this.state.userInfo)
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
            <Form
              ref="loginForm"
              model={this.state.loginForm}
              className="demo-ruleForm"
            >
              <Form.Item prop="username">
                <Input
                  className="inputStyle"
                  type="username"
                  value={this.state.loginForm.username}
                  onChange={this.onLoginChange.bind(this, 'username')}
                  placeholder="请输入用户名或邮箱"
                />
              </Form.Item>
              <Form.Item prop="password">
                <Input
                  className="inputStyle"
                  type="password"
                  value={this.state.loginForm.password}
                  onChange={this.onLoginChange.bind(this, 'password')}
                  autoComplete="off"
                  placeholder="请输入密码"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ width: '100%' }}
                  type="primary"
                  onClick={this.handleSubmit.bind(this)}
                >
                  提交
                </Button>
              </Form.Item>
            </Form>
          </Tabs.Pane>
          <Tabs.Pane label="注册" name="register">
            <Form
              ref="registerForm"
              model={this.state.registerForm}
              rules={this.state.rules}
              className="demo-ruleForm"
            >
              <Form.Item prop="username">
                <Input
                  className="inputStyle"
                  type="username"
                  value={this.state.registerForm.username}
                  onChange={this.onRegisterChange.bind(this, 'username')}
                  placeholder="请输入用户名"
                />
              </Form.Item>
              <Form.Item prop="email">
                <Input
                  className="inputStyle"
                  type="email"
                  value={this.state.registerForm.email}
                  onChange={this.onRegisterChange.bind(this, 'email')}
                  placeholder="请输入邮箱"
                />
              </Form.Item>
              <Form.Item prop="password">
                <Input
                  className="inputStyle"
                  type="password"
                  value={this.state.registerForm.password}
                  onChange={this.onRegisterChange.bind(this, 'password')}
                  autoComplete="off"
                  placeholder="密码（不少于6位）"
                />
              </Form.Item>
              <Form.Item prop="rePassword">
                <Input
                  className="inputStyle"
                  type="password"
                  value={this.state.registerForm.rePassword}
                  onChange={this.onRegisterChange.bind(this, 'rePassword')}
                  autoComplete="off"
                  placeholder="确认密码"
                ></Input>
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ width: '100%' }}
                  type="primary"
                  onClick={this.handleSubmit.bind(this)}
                >
                  提交
                </Button>
              </Form.Item>
            </Form>
          </Tabs.Pane>
        </Tabs>
        <div className="tipsWrapper">
          <span>注册登录即表示</span>
          <span>同意<a href="###">用户协议</a>、</span>
        </div>
      </div>
    )
  }
}

export default Login
