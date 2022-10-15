const p1 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove('111')
  }, 1000)
})

const p2 = new Promise((reslove, reject) => {
  setTimeout(() => {
    // reslove('222')
    reject('222')
  }, 2000)
})

const p3 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove('333')
  }, 3000)
})

Promise.allSettled([p1, p2, p3]).then(res => {
  console.log(res)
})