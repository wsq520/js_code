const arr = [1, 7, 55, 23, 19]

// 数组中有至少一个元素通过回调函数的测试就会返回true；所有元素都没有通过回调函数的测试返回值才会为 false。
console.log(arr.some(item => item === 55))

Array.prototype.mySome = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback}is not a function`)
  }

  const arr = this
  for(let i = 0; i < arr.length; i++) {
    if(callback.call(thisArg, arr[i], i, arr)) {
      return true
    }
  }
  return false
}

console.log(arr.mySome(item => item === 5))