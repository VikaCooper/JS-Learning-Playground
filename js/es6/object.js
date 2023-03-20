/**
 * Created by cooper on 2023/3/10.
 */

// import { printAnything } from '../util.js'
const { printAnything } = require('../util')

// 剩余参数解构赋值，扩展运算符必须放最后
const obj = { x: 1, y: 2, z: 3, m: 5, [Symbol()]: 6 }

const { x, y, ...z } = obj

printAnything(x, y, z)

for (const k in obj) {
  // 循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）
  printAnything(`${k}: ${obj[k]}`)
}

printAnything(
  '===Object.keys(obj)====',
  // 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名
  Object.keys(obj),
  '===Object.getOwnPropertyNames(obj)====',
  // 回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名
  Object.getOwnPropertyNames(obj),
  '===Object.getOwnPropertySymbols(obj)====',
  // 返回一个数组，包含对象自身的所有 Symbol 属性的键名
  Object.getOwnPropertySymbols(obj),
  '===Reflect.ownKeys(obj)===',
  // 返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举
  Reflect.ownKeys(obj)
)

printAnything(
  '########对象新增的方法',
  // 与严格比较运算符（===）的行为基本一致，不同之处只有两个：一是+0不等于-0，二是NaN等于自身
  Object.is({ x: 1 }, { x: 1 }),
  Object.is(1, 1),
  Object.assign({ x: 1 }, { x: 3 }, { y: 2, z: 0 }),
  Object.getOwnPropertyDescriptors(obj),
  Object.setPrototypeOf({}, null),
  Object.getPrototypeOf(obj),
  Object.entries(obj),
  Object.fromEntries([
    ['x', '1'],
    ['y', '2'],
  ])
)

const obj1 = {
  foo: 'world',

  print() {
    console.log(super.foo)
  }
}

obj1.print()

Object.setPrototypeOf(obj1, {foo: 'hello'})
obj1.print()
