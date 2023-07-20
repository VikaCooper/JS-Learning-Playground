/**
 * Created by cooper on 2023/7/10.
 */
function throttle(fn, delay) {
  let timer = null
  let starttime = Date.now()

  return function() {
    let context = this
    let args = arguments

    let curTime = Date.now()
    let remaining = delay - (curTime - starttime)
    clearTimeout(timer)
    if (remaining <= 0) {
      fn.apply(context, arguments)
      starttime = Date.now()
    } else {
      timer = setTimeout(fn, remaining)
    }

    console.log('context: ', context)
    console.log('args: ', args)
  }

}

function debounce(fn, wait) {
  let timer = null

  return function() {
    let context = this
    let args = arguments

    clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(context, args)
    }, wait)
  }

}

function helloWorld() {
  console.log('hello world')
}

const helloWorldThrottled = throttle(helloWorld, 500)

helloWorldThrottled(123)

const helloWorldDebounce = debounce(helloWorld, 500)
helloWorldDebounce(123)

