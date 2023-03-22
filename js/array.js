/**
 * Created by cooper on 2023/3/22.
 */
import { printAnything } from './util.js'

let arr = [1, 2, 3, 4, 5]

printAnything(
  arr.push(...[6, 7, 8]),
  arr.unshift(...[-1, 0]),
  arr.splice(1, 0, -1, -2),
  arr.concat([10,11,12]),
  arr,
  arr.splice(1, 5, -1,-2,-3),
  arr,
  arr.slice(0, 2),
  arr.shift(),
  arr.pop(),
  arr.indexOf(-1),
  arr.includes(8),
  arr.find(item => item === -1),
  arr.sort(),
  arr.reverse(),
  arr.every(item => {
    return item > 0
  }),
  arr.some(item => {
    return item > 0
  }),
  arr.filter(item => {
    return item > 0
  }),
  arr.map(item => {
    return item * 2
  })
)


