/**
 * Created by cooper on 2023/3/22.
 */
import { printAnything } from '../util.js'


/**
 * 类的装饰
 * 当对类本身进行装饰的时候，能够接受一个参数，即类本身
 */
const decorator = (target, func, ...rest) => {
  func.apply(null, [target, ...rest])
  return target
}

class solider {}

function equipAK(target, canFire) {
  target.AK = true
  target.canFire = canFire
}

decorator(solider, equipAK, true)

printAnything(solider.AK, solider.canFire)


/**
 * 类属性的装饰
 * 当对类属性进行装饰的时候，能够接受三个参数：
 *
 * 类的原型对象
 * 需要装饰的属性名
 * 装饰属性名的描述对象
 */

// 如果一个方法有多个装饰器，就像洋葱一样，先从外到内进入，再由内到外执行
class Foo {
  @deco1
  @deco2
  method() {

  }
}

/**
 *
 * @autobind装饰器使得方法中的this对象，绑定原始对象
 * @readonly装饰器使得属性或方法不可写
 * @deprecate或deprecated装饰器在控制台显示一条警告，表示该方法将废除
 *
 * import { autobind, readonly, deprecate } from 'core-decorators';
 */
