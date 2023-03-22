/**
 * Created by cooper on 2023/2/9.
 */
class Bus {
  _callbacks = {}

  constructor() {}

  $on(name, fn) {
    if (this._callbacks[name]) {
      this._callbacks[name].push(fn)
    } else {
      this._callbacks[name] = [fn]
    }
  }

  $emit(name, args) {
    const fn = this._callbacks[name]
    if (fn && fn.length > 0) {
      fn.forEach((f) => {
        f.call(null, args)
      })
    }
  }
}

export default Bus
