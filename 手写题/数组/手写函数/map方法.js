const arr = [1, 10, 5, 7]

// map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成
const arr1 = arr.map(item => item * 2)
console.log(arr1)

Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback}is not a function`)
  }

  const res = []
  const arr = this
  for (let i = 0; i < arr.length; i++) {
    let newValue = callback.call(thisArg, arr[i], i, arr)
    res.push(newValue)
  }

  return res
}

const arr2 = arr.myMap(item => item * 2)
console.log(arr2)