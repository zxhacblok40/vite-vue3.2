import instance from '../../http/index.js'
export const login = (data) => instance.post('/api/user/login', data)
export const login2 = (data) => instance.post('/api/login', data)
export default {
  login,
  login2
}
