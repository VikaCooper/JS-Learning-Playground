/**
 * Created by cooper on 2022/12/19.
 */

class Animal {
  constructor() {
    console.log('Animal created')
  }

  makeSound() {
    console.log('Animal makeSound')
  }
}

class Dog extends Animal {
  constructor() {
    super()
  }

  eat() {
    console.log('Dog ate')
  }
}

const dog = new Dog()
dog.makeSound()
dog.eat()

const Animal1 = function () {
  console.log('Animal1 created')
}

const Dog1 = Animal1

Animal1.prototype.makeSound = function () {
  console.log('Animal1 makeSound')
}

Dog1.prototype.eat = function () {
  console.log('Dog1 ate')
}

const dog1 = new Dog1()
dog1.makeSound()
dog1.eat()

// new关键字的实现过程
const objectFactory = function () {
  // 从Object.prototype上克隆一个空的对象
  const obj = {}
  // 取得外部传入的构造器，此例是Person
  const Constructor = [].shift.call(arguments)
  // 指向正确的原型
  obj.__proto__ = Constructor.prototype
  // 借用外部传入的构造器给obj设置属性
  const ret = Constructor.apply(obj, arguments)
  // 确保返回一个对象
  return typeof ret === 'object' ? ret : obj
}

function Person(name) {
  this.name = name
}

Person.prototype.getName = function () {
  return this.name
}

const person = objectFactory(Person, 'Dave')
console.log(person.name)
console.log(person.getName())

// 原型继承
const A = function () {}
A.prototype = { name: 'Dave' }

const B = function () {}
B.prototype = new A()

const b = new B()
console.log('==========原型继承=============')
console.log(b.name)
console.log(b.test)
