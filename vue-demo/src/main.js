import Vue from 'vue'
import App from './App.vue'
import tip from '@/plugins/tip/install.js'
import Bus from '@/lib/bus'
import router from '@/router'
import mixins from './mixins'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

// 挂载事件总线到vue实例
Vue.prototype.$bus = new Bus()

// 全局混入需要特别注意，因为它会影响到每一个组件实例（包括第三方组件）
Vue.mixin(mixins)

// 使用Tip插件
Vue.use(tip)

Vue.use(VueRouter)

// 实例化、注入vue-router，并挂载到id为app的dom节点上
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
