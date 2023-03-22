/**
 * Created by cooper on 2023/2/26.
 */

console.log(...[1, 2, 3])

const restDemo = (arg, ...rest) => {
  console.log([arg, ...rest])
}

restDemo(1, 2, 3, 4)

// 扩展运算符为浅拷贝
let a = [{ x: 1 }, 2, 3]
let b = [...a]

console.log(b)

a[0].x = 5
console.log(b)

let c = { x: { x: 1 } }
b = { ...c }

c.x.x = 5

console.log(b)

const d = '12345'
b = [...d]
//定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组
console.log(b)

// 新的api

console.log(Array.of(1))
console.log(Array.of(1, 2, 3))

console.log(Array(6).fill(1))
console.log([1, 2, 3, 4, 5, 6].copyWithin(0, 4, 5))

console.log([1, 2, 3, [4, 5]].flat())
console.log([1, 2, 3, [[[{ x: 1 }]]]].flat(2))
console.log(
  '===flatMap===\n',
  [1, 2, 3, [4, 5]].flatMap((item) => {
    return item * 2
  })
)

console.log(
  [1, 2, 3].flatMap((item) => {
    return [item, item * 2]
  })
)

b = [1, 2, 3]
b.splice(1, 1, 100)
console.log(b)

c = b.slice(0, 1)
console.log(c)
