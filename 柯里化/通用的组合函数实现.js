function myCompose(...fns) {
  let len = fns.length
  for(let i = 0; i < len; i++) {
    if(typeof fns[i] !== 'function') {
      throw new Error('参数应该全是函数')
    }
  }
  return function compose(...args) {
    let index = 0
    let res = len ? fns[index].apply(this, args) : args
    while(++index < len) {
      // 将前一个函数的结果作为下一个函数的参数
      res = fns[index].call(this, res)
    }
    return res
  }
}

function double(num) {
  return num * 2
}

function square(num) {
  return num ** 2
}

let fn = myCompose(double, square)
console.log(fn(10))