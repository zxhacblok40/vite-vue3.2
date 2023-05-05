import instance from '@/http/index.js'
export const login = (data) => instance.post('/api/user/login', data)
export default {
  login
}
