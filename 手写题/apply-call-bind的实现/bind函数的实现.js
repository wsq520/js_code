function sum(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4
}
//bind函数会将绑定this时传入的参数和调用通过bind绑定this后返回的函数时传入的参数合并在一起
console.log(sum.bind('aa', 10, 20)(30, 40));

Function.prototype.mybind = function (thisArg, ...argArray) {
  let fn = this

  thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window

  return function (...args) {
    thisArg.fn = fn
    // 参数合并
    let finallyArr = [...argArray, ...args]

    const res = thisArg.fn(...finallyArr)
    delete thisArg.fn

    return res
  }
}
console.log(sum.bind('aaa',10, 20));
console.log(sum.mybind('aaa',10, 20));
console.log(sum.mybind('aaa',10, 20)(30, 40))