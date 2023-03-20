/**
 * Created by cooper on 2023/1/4.
 */

// 变量的作用域
const func = function () {
  const a = 1
  console.log(a)
}

func()
// console.log(a)

var a = 1

var func1 = function () {
  var b = 2
  var func2 = function () {
    var c = 3
    console.log(b) // 输出：2
    console.log(a) // 输出：1
  }
  func2()
  // console.log(c);    // 输出：Uncaught ReferenceError: c is not defined
}

func1()

const func3 = function () {
  let a = 1
  return function () {
    a++
    console.log(a)
  }
}

const f = func3()
f()
f()
f()
f()

// 实际应用

const multiOrigin = function () {
  let a = 1
  for (let i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i]
  }
  return a
}

const multiClosure = (function () {
  let cache = {}
  const calculate = function () {
    let a = 1
    for (let i = 0, l = arguments.length; i < l; i++) {
      a = a * arguments[i]
    }
    return a
  }

  return function () {
    const args = Array.prototype.join.call(arguments, ',')
    if (args in cache) {
      return cache[args]
    }
    return (cache[args] = calculate.apply(null, arguments))
  }
})()

console.log(multiOrigin(1, 2, 3, 4, 5))
console.log(multiClosure(1, 2, 3, 4, 5))
console.log(multiClosure(1, 2, 3, 4, 5))

const reportOrigin = function (src) {
  const img = new Image()
  img.src = src
}

reportOrigin('http://xxx.com/getUserInfo')

const reportClosure = (function () {
  const imgs = []
  return function (src) {
    const img = new Image()
    imgs.push(img)
    img.src = src
  }
})()

reportClosure('http://baidu.com/getUserInfo2')

const Tv = {
  open: function () {
    console.log('打开电视机')
  },
  close: function () {
    console.log('关闭电视机')
  },
}

const OpenTvCommand = function (receiver) {
  this.reveiver = receiver
}

OpenTvCommand.prototype.execute = function () {
  this.reveiver.open()
}

OpenTvCommand.prototype.undo = function () {
  this.reveiver.close()
}

const setCommand = function (command) {
  document.getElementById('execute').onclick = function () {
    command.execute()
  }
  document.getElementById('undo').onclick = function () {
    command.undo()
  }
}

setCommand(new OpenTvCommand(Tv))

const createCommand = function (receiver) {
  const execute = function () {
    return receiver.open()
  }
  const undo = function () {
    return receiver.close()
  }

  return {
    execute,
    undo,
  }
}

setCommand(createCommand(Tv))
