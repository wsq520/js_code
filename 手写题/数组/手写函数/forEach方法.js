const arr = [1, 10, 5, 7]

Array.prototype.myForEach = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback}is not a function`)
  }

  //这个this就是调用myFoeEach方法的数组对象
  const arr = this
  for (let i = 0; i < arr.length; i++) {
    callback.call(thisArg, arr[i], i, arr)
  }
}

arr.forEach(item => {
  console.log(item)
})

arr.myForEach(item => {
  console.log(item)
})