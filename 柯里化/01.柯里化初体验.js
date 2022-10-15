function sum(x, y, z) {
  return x + y + z
}

console.log(sum(1, 2, 3))

// sum函数柯里化
function CurrySum(x) {
  return function (y) {
    return function (z) {
      return x + y + z
    }
  }
}
console.log(CurrySum(1)(2)(3))

// 简化柯里化代码
var sum2 = x => y => z => {
  return x + y + z
}
console.log(sum2(1)(2)(3))

// 调用第一次拿到的返回值是 y => z => x + y + z
// 第二次是 z => x + y + z
// 第三次是 x + y + z
var sum3 = x => y => z => x + y + z
console.log(sum3(1)(2)(3))