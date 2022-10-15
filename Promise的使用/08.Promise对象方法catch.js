new Promise((resolve, reject) => {
  // reject("error")
  throw new Error("出错了");
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
  // cacth里面return的内容会作为新创建Promise对象的resolve方法的参数
  return "我来自cacth"
}).then(res => {
  console.log(res);
})