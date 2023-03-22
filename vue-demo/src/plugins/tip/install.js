/**
 * Created by cooper on 2023/2/9.
 */
import tip from './index.js'

const install = function (Vue) {
  Vue.prototype.$tip = tip
}

export default install
