const arr = [1, 10, 5, 7]

const sum = arr.reduce((preValue, currentValue) => {
  return preValue + currentValue
}, 10)
console.log(sum)

Array.prototype.Myreduce = function (callback, initVal) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback}is not a function`)
  }

  const arr = this
  let sum = initVal
  for (let i = 0; i < arr.length; i++) {
    sum = callback(sum, arr[i])
    // console.log(sum)
  }
  return sum
}

console.log(arr.Myreduce((preValue, currentValue) => {
  return preValue + currentValue
}, 10))