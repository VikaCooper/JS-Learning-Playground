/**
 * Created by cooper on 2023/2/24.
 */
import InterceptorManage from './InterceptorManage'
import { interceptors } from 'axios'

class MyAxios {
  constructor(options) {
    this.interceptors = {
      request: new InterceptorManage(),
      response: new InterceptorManage(),
    }
  }

  request(options) {
    // 拦截器和请求组装队列
    const chain = [this.sendAjax.bind(this), undefined] // 成对出现的，失败回调暂时不处理

    this.interceptors.request.handlers.forEach((interceptor) => {
      chain.unshift(interceptor.fullfield, interceptor.rejected)
    })
    this.interceptors.response.handlers.forEach((interceptor) => {
      chain.push(interceptor.fullfield, interceptor.rejected)
    })

    let promise = Promise.resolve(options)
    while (chain.length > 0) {
      promise = promise.then(chain.shift(), chain.shift())
    }
    return promise
  }

  sendAjax(options) {
    return new Promise((resolve, reject) => {
      const { url = '', method = '', data = {} } = options
      // 构建请求代理，UNSENT状态 readyState 0
      const httpReq = new XMLHttpRequest()
      // 进入OPENED状态，readyState 1
      httpReq.open(method, url, true)
      // 请求回调函数
      httpReq.onload = () => {
        resolve(httpReq.responseText)
      }
      // 发送请求 HEADERS_RECEIVED状态 2
      httpReq.send(data)
    })
  }
}

// 实现各种不同的方法
const methodsArr = ['get', 'delete', 'head', 'options', 'put', 'patch', 'post']

methodsArr.forEach((method) => {
  MyAxios.prototype[method] = () => {
    if (['get', 'options', 'delete', 'head'].includes(method)) {
      return this.request({
        method,
        url: arguments[0],
        ...(arguments[1] || {}),
      })
    } else {
      return this.request({
        method,
        url: arguments[0],
        data: arguments[1],
        ...(arguments[2] || {}),
      })
    }
  }
})

const extend = (a, b, context) => {
  for (let key in b) {
    if (b.hasOwnProperty(key)) {
      if (typeof b[key] === 'function') {
        a[key] = b[key].bind(context)
      } else {
        a[key] = b[key]
      }
    }
  }
}

// 最终导出axios的方法，即实例的request方法
function CreateAxiosFn() {
  let axios = new MyAxios()
  let req = axios.request.bind(axios)

  extend(req, MyAxios.prototype, axios)
  extend(req, axios)
  return req
}

// 得到最后的全局变量axios
let axios = CreateAxiosFn()

export default MyAxios
// export {
//   CreateAxiosFn
// }
