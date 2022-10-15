// 创建多个Promise
const p1 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove('111')
  }, 1000)
})

const p2 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove('222')
  }, 2000)
})

const p3 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove('333')
  }, 3000)
})

const p4 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reject('444')
  }, 4000)
})


// 等待所有的Promise1变成fulfilled状态再去拿结果
// all方法返回的也是一个Promise对象
// all方法参数是个存放Promise对象的数组，"123"会被自动转成Promise对象
Promise.all([p1, p2, p3, "123"]).then(res => {
  // 结果res是一个数组 且元素顺序和all里面数组参数的顺序一样的 不会因为不同时间返回结果而变化
  console.log(res)
})

Promise.all([p3, p2, p1, "123"]).then(res => {
  console.log(res)
})

// 特殊情况： 有一个Promise对象状态变成rejected 那么整个Promise是rejected状态
Promise.all([p1, p4, p2]).then(res => {
  console.log(res)
}).catch(err => {
  // err 是 p4 所reject的内容
  console.log(err)
})