function myCurrying(fn) {
  return function curried(...args) {
    // 判断当前接收到的参数个数是否等于函数本身需要接收参数的个数
    if (fn.length === args.length) {
      // 参数个数相同 直接调用原来的函数
      return fn.apply(this, args)
    } else {
      // 参数不够 返回新函数继续接收剩余参数
      return function curried2(...args2) {
        // 递归调用curried去检测参数接收够了没
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

function sum(x, y, z) {
  return x + y + z
}

const currySum = myCurrying(sum)
console.log(currySum(1)(2)(3))
console.log(currySum(1, 2)(3))
console.log(currySum(1, 2, 3))
// 绑定指定的this 要求是将aaa绑定给sum函数而不是柯里化之后的函数
console.log(currySum.call('aaa', 1)(2)(3))

function foo(x, y, z) {

}
// 获取一个函数接收几个参数
// console.log(foo.length)

function curryFunc(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function curried2(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}