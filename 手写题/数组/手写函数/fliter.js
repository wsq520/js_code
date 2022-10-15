const arr = [1, 7, 55, 23, 19]

const res = arr.filter(item => item > 10)
console.log(res)

Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback}is not a function`)
  }

  const arr = this
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      res.push(arr[i])
    }
  }

  return res
}

console.log(arr.myFilter(item => item > 10))