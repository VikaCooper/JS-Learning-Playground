/**
 * Created by cooper on 2023/3/10.
 */
const { printAnything } = require('../util')

function fn(v) {
  return v
}

const fn2 = (v, v2 = 1) => {
  return {
    v,
    v2,
  }
}

const bar = fn2.bind(this)

printAnything(fn.length, fn.name, fn2.length, fn2.name, bar.name)
