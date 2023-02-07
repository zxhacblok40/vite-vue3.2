import axios from 'axios'
// 默认配置
const instance = axios.create({
  baseURL: import.meta.env.baseURL,
  timeout: 6000,
  headers: { 'Content-Type': 'application/json' }
})

// 响应前
instance.interceptors.request.use(config => {
  console.log(config)
  return config
}, (err) => {
  // 请求错误
  console.log(err)
  return Promise.reject(err)
})

// 响应后
instance.interceptors.response.use(response => {
  console.log(response)
  return response
}, err => {
  // 响应错误
  console.log(err)
  return Promise.reject(err)
}
)
export default instance
