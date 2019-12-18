import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-react'

//基本路径
axios.defaults.baseURL = `http://localhost:3001/`
//请求拦截器
axios.interceptors.request.use(config => {
  //获取参数
  let data = config.data
  if (data && data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})

//响应拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if(error.message.indexOf('500')){
      Message({
        message: "服务器出错啦~",
        type: 'error'
      })
    }
    // 中断错误消息
    return new Promise(() => {})
  }
)

export default axios
