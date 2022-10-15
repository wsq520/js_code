const promise = new Promise(() => {
  console.log("立即执行！");
})

const promise1 = new Promise((resolve, reject) => {
  console.log("我被立即执行~~~");
  // resolve("我在then里执行~~~");
  reject("我在catch执行~~")
})

// promise1.then((res) => console.log(res))
promise1.catch(err => console.log(err))