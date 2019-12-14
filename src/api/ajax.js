import axios from 'axios'
import qs from 'qs'
import {
  Message
} from 'element-react'

//基本路径
axios.defaults.baseURL = `http://localhost:3001/`
//请求拦截器
axios.interceptors.request.use(config => {
  //获取参数
  let data = config.data
  if (data && data instanceof Object) {
    // qs.stringify()将对象 序列化成URL的形式，以&进行拼接
    // var a = {name:'hehe',age:10};
    // qs.stringify(a)
    // // 'name=hehe&age=10'
    config.data = qs.stringify(data)
  }
  return config
})

//响应拦截器
axios.interceptors.response.use(response => {
  return response.data
}, erros => {
  Message('错误' + erros);
  // 中断错误消息
  return new Promise(() => {})
})

export default axios