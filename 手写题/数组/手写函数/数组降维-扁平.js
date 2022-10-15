const { log } = require("console")

const arr = [123, [1, [2, 3, [4]]], 6,]

// 使用内部函数flat
// ps: 使用 Infinity，可展开任意深度的嵌套数组

const arr1 = arr.flat(Infinity)
console.log(arr1)

// 使用递归
function myflat(arr) {
  const res = []
  for(const item of arr) {
    if(Array.isArray(item)) {
      res.push(...myflat(item))
    }else {
      res.push(item)
    }
  }
  return res
}

const arr2 = myflat(arr)
console.log(arr2)

// 通过reduce实现
function myFlay2(arr) {
  return arr.reduce((prev, now) => {
    return Array.isArray(now) ? [...prev, ...myFlay2(now)] : [...prev, now]
  }, [])
}
const arr3 = myFlay2(arr)
console.log(arr3);