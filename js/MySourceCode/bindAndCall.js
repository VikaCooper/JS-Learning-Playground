/**
 * Created by cooper on 2023/8/1.
 */

Function.prototype.bind = function () {
  const self = this
  const context = [].shift.call(arguments)
  const args = [].slice.call(arguments)

  return function () {
    return self.apply(context, [].concat.call(args, [].slice.call(arguments)))
  }
}

Function.prototype.call = function() {
  const self = this
  const target = arguments[0]
  const args = Array(arguments).slice(1)
  self.apply(target, args)

  // target['tempCall'] = self
  // target.tempCall(args)
  // delete target['tempCall']
}
