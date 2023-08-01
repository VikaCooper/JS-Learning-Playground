/**
 * Created by cooper on 2023/8/1.
 */

Array.prototype.__map = function(callback) {
  const res = []
  const self = this
  if (self.toString() === "[object Object]" || typeof self !== "object") {
    throw new TypeError("required array")
  }
  for (let i = 0; i < self.length; i++) {
    res.push(callback(self[i], i))
  }
  return res
}

Array.prototype.__filter = function(callback) {
  const res = []
  const self = this
  if (self.toString() === "[object Object]" || typeof self !== "object") {
    throw new TypeError("required array")
  }
  for (let i = 0; i < self.length; i++) {
    const t = callback(self[i], i)
    if (t) {
      res.push(self[i])
    }
  }
  return res
}

const a = [1, 2, 3].__map((item) => {
  return item + 1
})

const b = [1, 2, 3, 0, 0].__filter((item) => {
  return item
})

console.log(a)
console.log(b)
