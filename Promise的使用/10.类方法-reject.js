const promise = Promise.reject('reject hhh')
// 等价于
const pro2 = new Promise((reslove, reject) => {
  reject('reject hhh')
})

promise.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

pro2.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

// 注意：调用reject方法时 不会像then一样分三种情况 
// reject里面的参数直接在err中打印出来 不会像then一样状态可能由参数的then状态决定最终状态
const p3 = Promise.reject({ name: '111' })
p3.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

const p4 = Promise.reject(new Promise(() => { }))
p4.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

const p5 = Promise.reject(new Promise((reslove, reject) => {
  reject('5555')
}))
p5.then(res => {
  console.log(res)
}).catch(err => {
  console.log('err' + err + '111')
  // console.log('1234567');
})
