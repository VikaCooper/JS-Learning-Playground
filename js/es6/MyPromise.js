/**
 * Created by cooper on 2023/7/5.
 */
class MyPromise {
  constructor(executor) {
    this.initValue()
    // 绑定this到mypromise实例，防止被环境影响
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
    // promise错误应该内部处理，不能影响到外层代码
    try {
      // 执行传入的函数
      executor(this.resolve, this.reject)
    } catch (e) {
      // 出现异常相当于reject
      this.reject(e)
    }
  }
  initValue() {
    // 初始化状态
    this.state = 'pending'
    this.result = null
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
  }

  resolve(value) {
    if (this.state !== 'pending') return
    this.state = 'fulfilled'
    this.result = value
    while (this.onFulfilledCallbacks.length) {
      this.onFulfilledCallbacks.shift()(this.result)
    }
  }

  reject(err) {
    if (this.state !== 'pending') return
    this.state = 'rejected'
    this.result = err
    while (this.onRejectedCallbacks.length) {
      this.onRejectedCallbacks.shift()(this.result)
    }
  }

  then(onFulfilled, onRejected) {
    /*
    回调函数的返回值有几种情况：
    1. 直接就是一个基础数据类型或者复杂数据类型
    3. 又一个promise实例
    因为then的链式回调，入参为上一个then的返回值，所以要进行处理
     */
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (val) => val
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (err) => {
            throw err
          }

    const thenPromise = new MyPromise((resolve, reject) => {
      const cbHandler = (cb) => {
        // 利用setTimeOut使此函数变为异步执行
        setTimeout(()=>{
          try {
            const thenResult = cb(this.result)
            if (thenPromise === thenResult) {
              throw new Error('can return itself')
            } else if (thenResult instanceof MyPromise) {
              // 如果是promise对象，直接调用then方法以改变返回promise的状态
              thenResult.then(resolve, reject)
            } else {
              // 如果是普通数据则直接resolve
              resolve(thenResult)
            }
          } catch (e) {
            reject(e)
          }
        })
      }


      // 根据状态不同调用不同的回调函数
      if (this.state === 'fulfilled') {
        cbHandler(onFulfilled)
      } else if (this.state === 'rejected') {
        cbHandler(onRejected)
      } else if (this.state === 'pending') {
        // 兼容executor中含有定时器的情况，保证then里面传入的回调能够在状态发生改变之后才会调用
        // 通过bind保存当时调用的this指向
        this.onFulfilledCallbacks.push(cbHandler.bind(this, onFulfilled))
        this.onRejectedCallbacks.push(cbHandler.bind(this, onRejected))
      }
    })
    return thenPromise
  }
}
const test2 = new MyPromise((resolve, reject) => {
  resolve('成功') // 1秒后输出 成功
})

test2.then((res) => console.log(res))
