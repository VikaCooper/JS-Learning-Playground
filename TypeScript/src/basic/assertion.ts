/**
 * 类型断言
 */

/**
 * 将一个联合类型断言为其中一个类型
 */
interface Cat {
  name: string
  run(): void
}

interface Fish {
  name: string
  swim(): void
}

function getName(animal: Cat | Fish) {
  return animal.name
}

function run(animal: Cat | Fish) {
  try {
    (animal as Cat).run();
  } catch (e) {
    console.log(e)
  }
}

/**
 * 将一个父类断言为更加具体的子类
 */
interface ApiError extends Error {
  code: number;
}
interface HttpError extends Error {
  statusCode: number;
}

function isApiError(error: Error) {
  if (typeof (error as ApiError).code === 'number') {
    return true;
  }
  return false;
}

/**
 * 将任何一个类型断言为 any
 * 一方面不能滥用 as any，另一方面也不要完全否定它的作用，我们需要在类型的严格性和开发的便利性之间掌握平衡
 */

(this as any).bar = 1;

/**
 * 将 any 断言为一个具体的类型
 */
function getCacheData(key: string): any {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

const tom = getCacheData('tom') as Cat;
tom.run();


/**
 * 类型断言的限制
 *
 * 联合类型可以被断言为其中一个类型
 * 父类可以被断言为子类
 * 任何类型都可以被断言为 any
 * any 可以被断言为任何类型
 * 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可
 */

// 此例中，在上面的例子中，Cat 包含了 Animal 中的所有属性，除此之外，它还有一个额外的方法 run。
// TypeScript 并不关心 Cat 和 Animal 之间定义时是什么关系，而只会看它们最终的结构有什么
// 关系——所以它与 Cat extends Animal 是等价的
interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}

let tom1: Cat = {
  name: 'Tom',
  run: () => { console.log('run') }
};
let animal: Animal = tom1;

/**
 * 双重断言
 *
 * 除非迫不得已，千万别用双重断言。
 */

function testCat(cat: Cat) {
  return (cat as any as Fish);
}
