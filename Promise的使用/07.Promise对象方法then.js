const p = new Promise((resolve, reject) => {
  resolve("123")
  reject("456")
})

// 可以多次调用then方法
// p.then((res) => {
//   console.log("res1:" + res);
// })
// p.then((res) => {
//   console.log("res2:" + res);
// })

p.then((res) => {
  // then方法是有返回值的 返回的内容被包裹在新的Promise对象里，具体如下:
  // 实际上内部会将return的值包裹在新的Promise对象里面并且该值会作为新Promise对象resolve方法的参数
  // 如果不return 那么就会返回一个undefined
  // return "abc"
  return new Promise((resolve, reject) => {
    resolve("abc")
  })
}).then(res => {
  console.log(res);
})