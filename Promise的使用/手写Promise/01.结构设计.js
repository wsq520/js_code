// 定义三个状态变量
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class MYPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined

    const resolve = (value) => {
      if(this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED
        this.value = value
        console.log('resolve')
      }
    }

    const reject = (reason) => {
      if(this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED
        this.reason = reason
        console.log('reject')
      }
    }

    // z这里是在调用外界传进来的函数的同时 把 resolve和 reject作为其参数
    executor(resolve, reject)
  }
}

const p = new MYPromise((resolve, reject) => {
  console.log('我是传进去的函数并且立即调用')
  resolve()
  reject()
})