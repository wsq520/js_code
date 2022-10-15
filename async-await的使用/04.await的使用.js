function request() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('ggggg')
      reject('2222')
    }, 2000)
  })
}

// async function foo() {
//   const res = await request()
//   // 下面代码必须等待request有结果才会执行
//   console.log('~~~~~~');
// }

// foo()

async function foo2() {
  // 假设request调用了reject方法
  const res = await request()
  console.log(res)
}

foo2().catch(err => {
  console.log(err)
})