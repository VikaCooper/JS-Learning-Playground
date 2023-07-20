/**
 * 数组的类型
 */

/**
 * 使用「类型 + 方括号」来表示数组
 */

let fibonacci: number[] = [1, 1, 2, 3, 5]
// 不允许出现其他的类型
// let fibonacci1: number[] = [1, '1', 2, 3, 5]
// 数组的一些方法的参数也有限制
// fibonacci.push('1')

/**
 * 数组泛型
 */

let fibonacci2: Array<number> = [1, 1, 2, 3, 5]

/**
 * 用接口表示数组
 */

interface NumberArray {
  [index: number]: number
}
let fibonacci3: NumberArray = [1, 1, 2, 3, 5]

/**
 * 类数组
 */

function sum() {
  /**
   * arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口
   */
  const args: {
    [index: number]: number
    length: number
    callee: Function
  } = arguments

  const args1: IArguments = arguments
}

/**
 * any 在数组中的应用
 */

let list: any[] = [1, '2', false]
