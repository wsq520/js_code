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

// 只要有一个Promise变成fulfilled状态 那么就结束(不管后面有么有rejected状态的Promise对象)
// 特殊情况： 有一个Promise变成了reject状态 那么也会结束 在catch打印reject的内容
Promise.race([p1, p2, p3]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})