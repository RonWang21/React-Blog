import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Form, Input, Button, Message } from 'element-react'

import { reqUserRegister } from '../../../../../api/index'

export class RegisterForm extends Component {
  static propTypes = {
    setRegisterForm: PropTypes.func
  }
  constructor(props) {
    super(props)

    // 用来存储登录/注册表单数据的状态数据
    this.state = {
      registerForm: {
        username: '',
        email: '',
        password: '',
        rePassword: ''
      }
    }
  }

  registerSuccess() {
    Message({
      message: '注册成功',
      type: 'success'
    })
  }
  // 绑定注册表单的输入内容
  onRegisterChange(key, value) {
    this.setState({
      registerForm: Object.assign({}, this.state.registerForm, { [key]: value })
    })
  }
  // 表单按钮点击事件
  handleSubmit = async e => {
    // 阻止默认事件
    e.preventDefault()
    
    // 发送注册请求
    const { username, email, password, rePassword } = this.state.registerForm
    const result = await reqUserRegister({
      username,
      email,
      password,
      rePassword
    })
  }
  render() {
    // 传给父级当前form标签
    this.props.setRegisterForm(this.refs.registerForm)
    return (
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
    )
  }
}

export default RegisterForm
