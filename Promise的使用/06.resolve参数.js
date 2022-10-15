// reslove参数是一个Promise对象
new Promise((resolve, reject) => {
  resolve(new Promise((resolve, reject) => {
    // 最外层的 Promise状态有 "我" 来决定！---- 又称状态移交
    // resolve("123")
    // reject("456")
  }))
}).then((res) => {
  console.log("成功" + res);
}, (err) => {
  console.log("失败" + err);
})

// resolve参数是一个实现then方法的对象
new Promise((resolve, reject) => {
  const obj = {
    then: function(resolve, reject) {
      console.log(resolve, reject);
      // resolve("obj的resolve")
      reject("obj的reject")
    }
  }
  resolve(obj)
}).then((res) => {
  console.log(res);
}, (err) => {
  console.log(err);
})