// 定义三个状态变量
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

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
          // 1.在执行resolve或reject方法之前状态一直是pending 
          /* 2.如果在执行queueMicrotask 时发现状态不是pending了 
               那么说明执行当前queueMicrotask之前已经执行过resolve或者reject 
               所以此时不该执行当前queueMicrotask里的代码 直接return
          */
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

    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    // 如果调用then时 状态已经被确定了 那么直接执行该函数
    if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
      onFulfilled(this.value)
    }
    if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
      onRejected(this.reason)
    }
    if (this.status === PROMISE_STATUS_PENDING) {
      // 将成功的回调函数和失败的回调函数分别存储到数组中
      console.log('123')
      this.onFulfilledFns.push(onFulfilled)
      this.onRejectedFns.push(onRejected)
    }
  }
}

const p = new MYPromise((resolve, reject) => {
  console.log('我是传进去的函数并且立即调用')
  resolve(111)
  reject(222)
})

p.then(res => {
  console.log('res1:' + res)
}, err => {
  console.log('err1' + err)
})

p.then(res => {
  console.log('res2:' + res)
}, err => {
  console.log('err2:' + err);
})

// 当promise状态确定之后 再去调用then方法 延迟一秒 promise状态早已确定
setTimeout(() => {
  p.then(res => {
    console.log('res3:' + res)
  }, err => {
    console.log('err3:' + err)
  })
}, 1000)