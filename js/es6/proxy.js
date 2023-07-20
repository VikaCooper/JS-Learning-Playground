import { printAnything } from "../util.js"

/**
 * Created by cooper on 2023/2/26.
 */
const obj = { x: 1, y: 2 }

const objProxy = new Proxy(obj, {
  get(target, p, receiver) {
    return Reflect.get(target, p)
  },
})

printAnything(objProxy.z)

/**
 * 实现负索引的功能
 * @param rest
 * @returns {any|*[]}
 */
function createArray(...rest) {
  const handler = {
    get(target, p) {
      if (p > 0) {
        return Reflect.get(target, p)
      } else {
        return Reflect.get(target, target.length + Number(p))
      }
    },
  }

  const arr = Array.from(rest)
  return new Proxy(arr, handler)
}

const a = createArray(1, 2, 3)
//
// let validator = {
//   set: function (target, p, value) {
//     if (p === 'x') {
//       if (!Number.isInteger(value)) {
//         throw new Error('只能设为数字')
//       } else if (value > 200) {
//         throw new Error('设置的数字不能超过200')
//       }
//     }
//     Reflect.set(target, p, value)
//   },
// }
//
// const obj1 = new Proxy({}, validator)
// obj1.x = 1
// obj1.x = 2001
// obj1.x = '1'

printAnything(a[-1])

function isPrivate(key) {
  if (key[0] === '_') {
    throw new Error('无法删除私有属性')
  }
}

const deleteHandler = {
  deleteProperty(target, p) {
    isPrivate(p)
    Reflect.deleteProperty(target, p)
  },
}

const obj2 = new Proxy({ _x: 1 }, deleteHandler)
// console.log(Reflect.deleteProperty(obj2, "_x"))

/**
 * 实现观察者模式
 */
const queued = new Set()

const obHandler = {
  set(target, p, value, receiver) {
    const result = Reflect.set(target, p, value, receiver)

    queued.forEach((fn) => {
      fn && fn()
    })

    return result
  },
}

const observer = (fn) => queued.add(fn)
const observable = (obj) => new Proxy(obj, obHandler)

const obj3 = observable(obj)
observer(() => {
  console.log('changed')
})
obj3.x = 3
obj3.y = 3
