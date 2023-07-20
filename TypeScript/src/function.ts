/**
 * 函数的类型
 */

function add(a: number, b: number): number {
  return a + b
}

add(1, 2)

function log(str: string, ...rest: any[]): void {
  console.log(str, rest)
}

log('hello')

// 箭头函数
const func = () => {}
const func2 = () => {
  return '123'
}
