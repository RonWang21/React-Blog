import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Form, Input, Button, Message } from 'element-react'

import { reqUserLogin } from '../../../../../api/index'

// 引入connect
import { connect } from 'react-redux'

// 引入action
import { handleUser } from '../../../../../redux/actions'
// 从handleUser中结构
const { saveUser } = handleUser

@connect(null, {
  saveUser
})
class LoginForm extends Component {
  // 限制父级传入props
  static propTypes = {
    setLoginForm: PropTypes.func
  }
  constructor(props) {
    super(props)

    // 用来存储登录/注册表单数据的状态数据
    this.state = {
      loginForm: {
        username: '',
        password: ''
      }
    }
  }

  // 绑定登录表单的输入内容
  onLoginChange(key, value) {
    this.setState({
      loginForm: Object.assign({}, this.state.loginForm, { [key]: value })
    })
  }

  // 登录成功提示
  loginSuccess() {
    Message({
      message: '登陆成功！',
      type: 'success'
    })
  }
  loginFailed() {
    Message({
      message: '登陆失败，请检查网络连接！',
      type: 'error'
    })
  }

  // 表单按钮点击事件
  handleSubmit = async e => {
    // 阻止默认事件
    e.preventDefault()

    // 发送登录请求
    const { username, password } = this.state.loginForm
    const result = await reqUserLogin({ username, password })
    console.log(result)
    if (result.status === 0) {
      this.props.saveUser(result.data)
      this.loginSuccess()
    } else {
      this.loginFailed()
    }
  }

  render() {
    this.props.setLoginForm(this.refs.loginForm)
    return (
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
    )
  }
}

export default LoginForm
