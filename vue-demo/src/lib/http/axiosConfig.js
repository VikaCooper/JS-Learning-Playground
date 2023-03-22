/**
 * Created by cooper on 2023/2/24.
 */
import axios from 'axios'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://dev.xxx.com'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://prod.xxx.com'
}
let token = ''

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    token && (config.headers.Authorization = token)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      return Promise.resolve(res)
    } else if (res.status === 520) {
      return Promise.reject(res)
    }
  },
  (err) => {
    if (err.response.status) {
      // 处理请求失败的情况
      // 对不同返回码对相应处理
      return Promise.reject(err.response)
    }
  }
)

const service = axios.create({
  timeout: 30000,
  header: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8',
      // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
    },
  },
})

export default service
