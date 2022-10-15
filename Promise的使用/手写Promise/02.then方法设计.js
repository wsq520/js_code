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
      if (this.status === PROMISE_STATUS_PENDING) {
        // setTimeout(() => {
        //   this.status = PROMISE_STATUS_FULFILLED
        //   this.value = value
        //   console.log('resolve被调用')
        //   this.onFulfilled(this.value)
        // }, 0)

        // 使用 queueMicrotask更加规范 它也是实现延迟执行
        // 使用queueMicrotask作延迟时 应该将改变状态的代码放在其回调函数外(正确是放在里面的 后续有改进)
        this.status = PROMISE_STATUS_FULFILLED
        queueMicrotask(() => {
          this.value = value
          // console.log('resolve被调用')
          this.onFulfilled(this.value)
        })
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED
        queueMicrotask(() => {
          this.reason = reason
          // console.log('reject被调用')
          this.onRejected(this.reason)
        })

        // setTimeout(() => {
        //   this.status = PROMISE_STATUS_REJECTED
        //   this.reason = reason
        //   this.onRejected(this.reason)
        // }, 0)
      }
    }

    // 这里是在调用外界传进来的函数的同时 把 resolve和 reject作为其参数
    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
  }
}

const p = new MYPromise((resolve, reject) => {
  console.log('我是传进去的函数并且立即调用')
  resolve(111)
  reject(222)
})

p.then(res => {
  console.log(res)
}, err => {
  console.log(err)
})