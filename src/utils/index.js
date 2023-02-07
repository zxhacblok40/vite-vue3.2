import axios from 'axios'
import router from '@/router/index'
// 默认配置
const instance = axios.create({
  baseURL: import.meta.env.baseURL,
  timeout: 6000,
  headers: { 'Content-Type': 'application/json' }
})

// 响应前
instance.interceptors.request.use(config => {
  if (!['/login', '/captchaImage'].includes(config.url)) {
    config.headers.token = window.localStorage.getItem('token') || ''
  }
  return config
}, (err) => {
  // 请求错误
  console.log(err)
  return Promise.reject(err)
})

// 响应后
instance.interceptors.response.use(response => {
  const { status, data, data: { code } } = response
  if (status === 200 && code !== 401) {
    return data
  } else {
    localStorage.removeItem('token')
    return router.push('/login')
  }
}, err => {
  // 响应错误
  if (err.response.status === 500) {
    localStorage.removeItem('token')
  }
  console.log(err)
  return Promise.reject(err)
}
)
export default instance
