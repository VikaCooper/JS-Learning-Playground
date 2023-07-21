/**
 * 泛型
 * 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 */

namespace Generics {
  // function createArray(length: number, value: any): Array<any> {
  //   let result = [];
  //   for (let i = 0; i < length; i++) {
  //     result[i] = value;
  //   }
  //   return result;
  // }
  //
  // createArray(3, 'x'); // ['x', 'x', 'x']

  function createArray<T>(length: number, value: T): Array<T> {
    let result: Array<T> = []
    for (let i = 0; i < length; i++) {
      result[i] = value
    }
    return result
  }

  createArray<number>(3, 3)

  /**
   * 多个类型参数
   */

  function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
  }
  swap<number, string>([1, 'a'])

  /**
   * 泛型约束
   */

  // 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法
  interface LengthWise {
    length: number
  }
  function getArrayLength<T extends LengthWise>(arr: T): number {
    return arr.length
  }

  console.log(getArrayLength([1]))
  // console.log(getArrayLength({x: 1})) Error

  // 多个类型参数之间也可以互相约束
  function copyField<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
      target[id] = (<T>source)[id]
    }
    return target
  }

  let x = { a: 1, b: 2, c: 3 }
  console.log(copyField(x, { b: 30, c: 40 }))

  /**
   * 泛型接口
   */

  /**
   * interface CreateArrayFunc {
   *     <T>(length: number, value: T): Array<T>
   *   }
   */
  interface CreateArrayFunc<T> {
    (length: number, value: T): Array<T>
  }

  let myCreateArrayFunc: CreateArrayFunc<any>

  myCreateArrayFunc = function <T>(length: number, value: T): Array<T> {
    let result: T[] = []
    for (let i = 0; i < length; i++) {
      result[i] = value
    }

    return result
  }
  console.log(myCreateArrayFunc(3, 3))
  /**
   * 泛型类
   */

  class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T

    constructor(z: T, add?: (x: T, y: T) => T) {
      this.zeroValue = z
      this.add = add as (x: T, y: T) => T
    }
  }

  const gn = new GenericNumber<number>(1)
  gn.add = (x: number, y: number): number => x + y

  console.log(gn.add(1, 2))

  /**
   * 泛型参数的默认值
   */
  function createArray1<T = string>(length: number, value: T): Array<T> {
    let result: T[] = []
    for (let i = 0; i < length; i++) {
      result[i] = value
    }
    return result
  }

  console.log(createArray1(2, [1, '2']))
}
