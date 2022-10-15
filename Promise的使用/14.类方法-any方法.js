const p1 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove('111')
  }, 1000)
})

const p2 = new Promise((reslove, reject) => {
  setTimeout(() => {
    // reslove('222')
    reject('222')
  }, 500)
})

const p3 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove('333')
  }, 3000)
})

// any：等待第一个Promise变成fulfilled才会结束
// 特殊情况： 如果参数里面的Promise全是reject 那么就会等待所有Promise执行完 再到catch里打印err
Promise.any([p1, p2, p3]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})