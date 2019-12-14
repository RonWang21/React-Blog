import React, { Component } from 'react'

import { Tabs } from 'element-react'
class Login extends Component {
  render() {
    return (
      <Tabs activeName="2" onTabClick={tab => console.log(tab.props.name)}>
        <Tabs.Pane activeName="login" label="登录" name="1"></Tabs.Pane>
        <Tabs.Pane activeName="register" label="注册" name="2"></Tabs.Pane>
      </Tabs>
    )
  }
}

export default Login
