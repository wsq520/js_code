const { log } = require("console")

const arr = [1, 1, 8, 12, 8, 99]

// 1.使用Set (Set也支持解构)
const arr1 = Array.from(new Set(arr))
const arr2 = [...new Set(arr)]
console.log(arr1, arr2)

function unique(arr) {
  const res = []
  for(const item of arr) {
    if(res.includes(item)) {
      continue
    }
    res.push(item)
  }
  return res
}

const arr3 =unique(arr)
console.log(arr3)