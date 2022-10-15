Function.prototype.mycall = function (thisArg, ...arg) {
  // this就是调用mycall的那个函数
  let fn = this
  // 将传入的指定要绑定的this转成对象类型 因为普通数据类型不能添加属性的
  // 如果传入要绑定的this是null或者是undefined 那么就绑定个window
  thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window

  // 给指定要绑定的this添加属性fn
  thisArg.fn = fn
  // 通过隐式绑定方式调用fn 此时的this就是我们指定要绑定的this
  let result = thisArg.fn(...arg)

  delete thisArg.fn
  return result
}

function sum(num1, num2, num3) {
  console.log(this)
  return num1 + num2 + num3
}

console.log(sum.mycall('aaa', 10, 20, 30))
