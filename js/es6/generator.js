/**
 * Created by cooper on 2023/3/20.
 */
const { printAnything } = require("../util")

function* helloWorldGenerator() {
  yield "hello"
  yield "world"
  return "ending"
}


const hw = helloWorldGenerator()

printAnything(hw, hw.next(), hw.next(), hw.next())


function* foo(x) {
  const y = 2 * (yield (x + 1))
  const z = yield (y / 3)
  return (x + y + z)
}

const a = foo(5)

printAnything(
  // x: 5, y: 12, z: undefined
  a.next(),
  // x: 5, y: 24, z: 8
  a.next(12),
  // x: 5, y: 24, z: 13
  a.next(13))

// Generator是异步解决的一种方案，最大特点则是将异步操作同步化表达出来
function* loadUI() {
  yield "show loading screen"
  yield "load UI Data Asynchronously"
  yield "hide Loading Screen"
}

const loader = loadUI()

printAnything(
  // 加载UI
  loader.next(),
  // 卸载
  loader.next(),
  loader.next()
)


for (const value of loadUI()) {
  console.log(value)
}


/**
 * 使用Generator函数实现对象的iterator接口
 * @type {{[Symbol.iterator]: ((function(): Generator<[string,*], void, *>)|*), x: number, y: number, z: number}}
 */
const c = {
  x: 1,
  y: 2,
  z: 3,
  [Symbol.iterator]: function* () {
    for (const argumentsKey in this) {
      yield [argumentsKey, this[argumentsKey]]
    }
  }
}

for (const cElement of c) {
  console.log(cElement)
}

function* boo() {
  yield 3
  yield 4
}

function* foo() {
  yield 1
  yield 2
  yield* boo()
  yield 5
}

const f = foo()

printAnything(f, f.next(), f.next(), f.next(), f.next(), f.next(), f.next(), f.next())
