/**
 * Created by cooper on 2023/1/5.
 */

// AOP实现

Function.prototype.before = function (beforeFn) {
  const __self = this
  return function () {
    beforeFn.apply(this, arguments)
    return __self.apply(this, arguments)
  }
}

Function.prototype.after = function (afterFn) {
  const __self = this
  return function () {
    const ret = __self.apply(this, arguments)
    afterFn.apply(this, arguments)
    return ret
  }
}

let func = function () {
  console.log(2)
}

func = func
  .before(function () {
    console.log(1)
  })
  .after(function () {
    console.log(3)
  })
func()

// curry 柯里化
const currying = function (fn) {
  const args = []
  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, args)
    } else {
      ;[].push.apply(args, arguments)
      return arguments.callee
    }
  }
}

let cost = (function () {
  let money = 0
  return function () {
    for (let i = 0, l = arguments.length; i < l; i++) {
      money += arguments[i]
    }
    return money
  }
})()

let curryCost = currying(cost)

curryCost(100)
curryCost(200)
curryCost(300)

console.log(curryCost())
