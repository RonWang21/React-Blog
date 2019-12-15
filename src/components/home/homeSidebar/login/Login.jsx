import React, { Component } from 'react'

import './less/Login.less'

import { Tabs, Form, Input, Button, Message } from 'element-react'

import { reqLogin } from '../../../../api/index'
class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        password: '',
        rePassword: ''
      },
      status: 'login'
    }
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

  // 表单按钮点击事件
  handleSubmit = e => {
    // 阻止默认事件
    e.preventDefault()
    const { status } = this.state
    if (status === 'login') {
      this.loginSuccess()
    } else {
      this.registerSuccess()
    }
  }

  // 绑定登录表单的内容
  onLoginChange(key, value) {
    this.setState({
      loginForm: Object.assign({}, this.state.loginForm, { [key]: value })
    })
  }

  // 绑定注册表单的内容
  onRegisterChange(key, value) {
    this.setState({
      registerForm: Object.assign({}, this.state.registerForm, { [key]: value })
    })
  }
  async componentDidMount() {
    const result = await reqLogin({ username: 'admin', password: 'admin' })
    console.log('====================================')
    console.log('login', result)
    console.log('====================================')
  }
  render() {
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
          onTabClick={tab => (this.state.status = tab.props.name)}
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
              ref="form"
              model={this.state.registerForm}
              rules={this.state.rules}
              className="demo-ruleForm"
            >
              <Form.Item prop="username">
                <Input
                  className="inputStyle"
                  value={this.state.registerForm.username}
                  onChange={this.onRegisterChange.bind(this, 'username')}
                  placeholder="请输入用户名"
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
              <Form.Item prop="checkPass">
                <Input
                  className="inputStyle"
                  type="password"
                  value={this.state.registerForm.checkPass}
                  onChange={this.onRegisterChange.bind(this, 'checkPass')}
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
      </div>
    )
  }
}

export default Login
