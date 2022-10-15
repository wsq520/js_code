new Promise((resolve, reject) => {
  // Promise具备三种状态：待定、已兑现、已拒绝
  // 而且状态一旦确定不会再改变
  resolve()
  reject()
  console.log("6666");
}).then(() => {
  console.log("执行resolve就不会执行reject对应的回调~~~");
}, () => {
  console.log("执行reject就不会执行resolve对应的回调~~~");
})