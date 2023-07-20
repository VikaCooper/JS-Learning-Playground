/**
 * 函数的类型
 */

// 函数声明
function add(a: number, b: number): number {
  return a + b
}

add(1, 2)

// 函数表达式
// 手动给 addFn 添加类型
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
const addFn: (a: number, b: number) => number = function (
  a: number,
  b: number
): number {
  return a + b
}

/**
 * 用接口定义函数的形状
 */

interface SearchFunc {
  (key: string, str: string): boolean
}

let mySearchFn: SearchFunc

mySearchFn = function (key: string, str: string): boolean {
  return str.includes(key)
}

/**
 * 可选参数
 */

// 可选参数必须接在必需参数后面 可选参数后面不允许再出现必需参数了
function buildName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName
}

/**
 * 参数默认值
 */
// TypeScript 会将添加了默认值的参数识别为可选参数
function buildName1(firstName: string, lastName: string = 'Cat'): string {
  return `${firstName} ${lastName}`
}

/**
 * 剩余参数
 */

// rest 参数只能是最后一个参数
function push(target: Array<any>, ...rest: Array<any>): void {
  rest.forEach(i => {
    target.push(i)
  })
}
push([], 1, 2, 3)

/**
 * 重载
 */
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: string | number): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join())
  } else {
    return x.split('').reverse().join()
  }
}

reverse(123)
reverse('abc')
