/**
 * Created by cooper on 2023/2/9.
 */
import Vue from 'vue'
import Tip from '@/plugins/tip/index.vue'

const TipConstructor = Vue.extend(Tip)

const tip = (options) => {
  const tipInstance = new TipConstructor({
    data: options,
  }).$mount()
  document.body.appendChild(tipInstance.$el)
  return tipInstance
}

export default tip
