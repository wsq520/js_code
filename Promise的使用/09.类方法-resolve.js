//  将一个对象转换成Promise对象
function foo() {
  const obj = { name: 'hhh'}
  return new Promise((resolve) => {
    resolve(obj)
  })
}

foo().then(res => {
  console.log(res)
})

// 使用类方法
const promise = Promise.resolve({ name: 'hhhh'})
promise.then(res => {
  console.log(res)
})

const p2 = Promise.resolve(new Promise((resolve) => {
  resolve('p22222')
}))

p2.then(res => {
  console.log(res)
})
