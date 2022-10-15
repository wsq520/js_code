const arr = [1, 10, 5, 7]

// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
const res = arr.find(item =>
  item > 2
)
console.log(res)

// 箭头函数使用{}时 需要加上return关键字返回目标值
const res2 = arr.find(item => {
  return item === 10
})
console.log(res2)

// arr.find((value, index, array) =>
//   console.log(value, index, array))

Array.prototype.myFind = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback}is not a function`)
  }
  // console.log('thisArg:' + thisArg)
  // console.log(this)
  const arr = this
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return arr[i]
    }
  }
}

const res3 = arr.myFind(item => item === 3)
console.log('res3:' + res3)
