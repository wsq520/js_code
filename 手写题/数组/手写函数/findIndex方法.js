const arr = [1, 10, 5, 7]

// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
const resIndex1 = arr.findIndex(item => item === 10)
console.log(resIndex1)

Array.prototype.myFindIndex = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback}is not a function`)
  }

  const arr = this
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return i
    }
  }
  // 找不到符合的元素返回-1 不是返回undefined
  return -1
}

const resIndex2 = arr.myFindIndex(item => item === 100)
console.log(resIndex2)