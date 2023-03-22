/**
 * Created by cooper on 2023/2/15.
 */
import Vue from 'vue'

const state = Vue.observable({
  name: '运行中',
  color: 'green',
})

const mutation = {
  changeColor(color) {
    state.color = color
  },
  changeName(name) {
    state.name = name
  },
}

export { state, mutation }
