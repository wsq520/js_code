// 定义三个状态变量
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

// 工具函数： 对 try catch部分进行抽取
function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value)
    resolve(result)
  } catch (err) {
    reject(err)
  }
}

class MYPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFns = []
    this.onRejectedFns = []

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // queueMicrotask里的代码要等到主线程的代码执行完才会执行
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulfilledFns.forEach(fn => {
            fn(this.value)
          })
        })
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFns.forEach(fn => {
            fn(this.reason)
          })
        })
      }
    }

    try {
      // 可能在执行传进来的那个被立即调用函数时就抛出异常
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    return new MYPromise((resolve, reject) => {
      // 如果调用then时 状态已经被确定了 那么直接执行该函数
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        // try {
        //   const value = onFulfilled(this.value)
        //   resolve(value)
        // } catch (err) {
        //   reject(err)
        // }
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        // try {
        //   const reason = onRejected(this.reason)
        //   // 在失败(then方法第二个参数)里面返回的值 也会作为reslove方法的参数 除非在err里面抛出异常
        //   resolve(reason)
        // } catch (err) {
        //   reject(err)
        // }
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      }
      if (this.status === PROMISE_STATUS_PENDING) {
        // 将成功的回调函数和失败的回调函数分别存储到数组中
        this.onFulfilledFns.push(() => {
          // try {
          //   const value = onFulfilled(this.value)
          //   resolve(value)
          // } catch (err) {
          //   reject(err)
          // }
          execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
        })
        this.onRejectedFns.push(() => {
          // try {
          //   const reason = onRejected(this.reason)
          //   resolve(reason)
          // } catch (err) {
          //   reject(err)
          // }
          execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
        })
      }
    })
  }
}

const p = new MYPromise((resolve, reject) => {
  // resolve(111)
  reject(222)
  // throw new Error('error msg...')
})

p.then(res => {
  console.log('res1:' + res)
  return "aaa"
}, err => {
  console.log('err1:' + err)
  return "bbb"
}).then(res => {
  console.log('res2:' + res)
}, err => {
  console.log('err2:' + err)
})
