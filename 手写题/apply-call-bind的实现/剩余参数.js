function sum(num1, num2, num3) {
  return num1 + num2 + num3
}

var num = [10, 20, 30]
// 解构数组num的元素挨个传递给函数sum的参数
var res = sum(...num)
console.log(res)

function foo(...arg) {
  // 这里的 ...arg是将传递的参数全部放入到数组arg中
  console.log(arg)
}
foo(1, 2, 3)