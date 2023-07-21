/**
 * 类与接口
 *
 * 实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类
 * 之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字
 * 来实现。这个特性大大提高了面向对象的灵活性。
 */

namespace ClassAndInterface {
  interface Alarm {
    alert(): void
  }

  class Door {}

  class Security extends Door implements Alarm {
    alert() {
      console.log('SecurityDoor alert')
    }
  }

  interface Light {
    lightOn(): void
    lightOff(): void
  }
  // 一个类可以实现多个接口
  class Car implements Alarm, Light {
    alert() {
      console.log('Car alert')
    }
    lightOn() {
      console.log('light on')
    }
    lightOff() {
      console.log('light off')
    }
  }
  // 接口继承接口
  interface LightAlarm extends Alarm {
    lightOn(): void
    lightOff(): void
  }

  // 接口继承类
  /**
   * 实际上，当我们在声明 class Point 时，除了会创建一个名为 Point 的类之外，同时也创建了一个
   * 名为 Point 的类型（实例的类型）。相当于创建了Prototype和interface。
   */
  class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x
      this.y = y
    }
  }

  interface PointInstanceType {
    x: number;
    y: number;
  }

  /**
   * interface Point3D extends Point 等价于 interface Point3D extends PointInstanceType
   *
   * 接口继承类的时候，只会继承它的实例属性和实例方法，构造函数是不包含的，静态属性或静态方法也是不包含的。
   */
  interface Point3D extends Point {
    z: number;
  }

  const p: Point3D = {
    x: 1,
    y: 2,
    z: 3
  }

  console.log(p.constructor)


}
