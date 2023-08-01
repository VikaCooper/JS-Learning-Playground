/**
 * Created by cooper on 2022/12/19.
 */
const func = function (a, b, c) {
  console.log(a, b, c)
}

func(1, 2, 3)

func.apply(null, [1, 2, 3])
func.call(null, 1, 2, 3)

// 改变this指向
const obj1 = { name: 'andy' }
const obj2 = { name: 'kyo' }

name = 'node'

const getName = function () {
  console.log(this.name)
}
getName()
getName.call(obj1)
getName.call(obj2)

console.log(Math.max(1, 2, 3))
console.log(Math.max.apply(null, [1, 2, 3, 4, 5]))

// 修正document.getElementById函数内部“丢失”的this
// document.getElementById = (function( func ){
//     return function(){
//         return func.apply( document, arguments );
//     }
// })( document.getElementById );
//
// const getId = document.getElementById;
// const div = getId( 'div1' );
// alert ( div.id );    // 输出： div1”

Function.prototype.bind = function (context) {
  const self = this
  return function () {
    return self.apply(context, arguments)
  }
}

const func1 = function () {
  console.log(this.name)
}.bind(obj1)
func1()

Function.prototype.bind = function () {
  const self = this
  const context = [].shift.call(arguments)
  const args = [].slice.call(arguments)

  return function () {
    return self.apply(context, [].concat.call(args, [].slice.call(arguments)))
  }
}

const func2 = function (a, b, c, d) {
  console.log(this.name)
  console.log([a, b, c, d])
}.bind(obj1, 1, 2)

func2(3, 4)


Function.prototype.call = function() {
  const self = this
  const target = arguments[0]
  const args = Array(arguments).slice(1)
  self.apply(target, args)

  // target['tempCall'] = self
  // target.tempCall(args)
  // delete target['tempCall']
}
