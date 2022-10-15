function request(url) {
  setTimeout(() => {
    if(url === 'hhh') {
      console.log("两秒后执行");
      return "请求成功"
    } else {
      return "请求失败"
    }
  }, 2000)
  console.log("立刻执行");
  // return "666" //这个return才是返回给函数request的
}

const res = request('hhh')
console.log(res);