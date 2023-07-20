/**
 * 对象的类型——接口
 */

interface Person {
  name: string
  age: number
  married: boolean
}

const p: Person = {
  name: 'jack',
  age: 12,
  married: false,
}

// object

type Card = {
  name: string
  desc: string
}

interface Card2 {
  // 使用readonly后，初始赋值不受限，但是后续无法修改此属性
  readonly id?: string
  name: string
  desc: string
}


const obj: Card = {
  name: 'card1',
  desc: 'test',
}

// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
/**
 * {
 *   [index: number]: number;
 *   length: number;
 *   callee: Function;
 * }
 * 有一个前提，任意属性的类型为string时，那么确定属性和可选属性的类型都必
 * 须为它的类型的子集，这个例子是number类型，所以没有报错，你把任意属性类型换成string就会
 */
interface Card2 {
  size?: number,
  [propName: string]: string | number | void,
}

const card2: Card2 = {
  id: '2',
  name: 'card1',
  desc: 'test',
}

const card3: Card2 = {
  id: '3',
  name: 'card2',
  desc: 'test',
  size: 100,
  weight: 99
}


