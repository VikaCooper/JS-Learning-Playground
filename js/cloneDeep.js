/**
 * Created by cooper on 2023/7/9.
 */

function cloneDeep(target) {
  const copy = {}

  for (const targetKey in target) {
    if (typeof target[targetKey] === 'object') {
      if (target[targetKey] === null) {
        copy[targetKey] = null
      } else {
        copy[targetKey] = cloneDeep(target[targetKey])
      }
    } else {
      copy[targetKey] = target[targetKey]
    }
  }
  return copy
}

const obj1 = {
  x: 1,
  sub: { y: 2 },
  z: null,
}

const obj2 = cloneDeep(obj1)

console.log(obj2)

obj1.sub.y = 3

console.log(obj2)
