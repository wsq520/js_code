function request(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(url === 'hhh') {
        resolve()
      } else {
        reject()
      }
    }, 1500)
  })
}

const pro1 = request('hhh')
// 回调方式一：
// pro1.then(() => console.log("成功！"))
// pro1.catch(() => console.log("失败！"))

// 方式二: then可以接收两个回调函数 第一个回调函数是reslove对应的 第二个是reject对应的
pro1.then(() => {
  console.log("成功了");
}, () => {
  console.log("失败了");
})