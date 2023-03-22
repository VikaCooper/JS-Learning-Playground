/**
 * Created by cooper on 2023/2/24.
 */
import service from '@/lib/http/axiosConfig'

const httpGet = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res)
      })
      .catch((reason) => {
        reject(reason)
      })
  })
}

const httpPost = (url, params = {}, data = {}) => {
  return new Promise((resolve, reject) => {
    service({
      url,
      method: 'POST',
      params,
      data,
      transformRequest: [
        function (data) {
          let ret = ''
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        },
      ],
    })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export { httpGet, httpPost }
