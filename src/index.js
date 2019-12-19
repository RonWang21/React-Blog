import React from 'react'
import ReactDOM from 'react-dom'
// 引入样式重置文件
import './assets/css/reset.styl'
// 引入组件默认主题
import 'element-theme-default'
//引入store
import store from './redux/store'
import { Provider } from 'react-redux'
// 引入根组件
import App from './App.jsx'

ReactDOM.render(
  <Provider store={store}>
    {' '}
    <App />{' '}
  </Provider>,
  document.getElementById('root')
)
