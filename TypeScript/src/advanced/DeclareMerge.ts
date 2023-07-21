/**
 * 声明合并
 */

namespace DeclareMerge {
  /**
   * 函数声明
   * 即重载
   */
  type AddArgumentsType = number | string
  function add(x: number, y: number): number
  function add(x: string, y: string): string
  function add(x: AddArgumentsType, y: AddArgumentsType): AddArgumentsType {
    if (typeof x === 'number' && typeof y === 'number') {
      return x + y
    } else if (typeof x === 'string' && typeof y === 'string') {
      return x + y
    } else {
      return String(x) + String(y)
    }
  }

  /**
   * 接口合并
   * 接口中的属性在合并时会简单的合并到一个接口中
   */

  interface A {
    x: number
    alert(s: string): string
  }
  interface A {
    y: number
    alert(s: string, n: number): string
  }

  /**
   * 等价于
   *
   * interface A {
   *   x: number
   *   y: number
   *   // 接口中方法的合并与函数重载相同
   *   alert(s: string): string
   *   alert(s: string, n: number): string
   * }
   */

  // 如果有重复的属性，重复的属性类型必须一致

  /**
   *   interface A {
   *     x: string  // 编译报错
   *   }
   */

  /**
   * 类的合并
   * 与接口的合并相同？实际合并会报错？
   */

  class B {
    name: string
    constructor(n: string) {
      this.name = n
    }
  }
}
