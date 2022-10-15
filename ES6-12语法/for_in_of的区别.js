const obj = {
  name: 'qqq',
  age: 18
}

const names = ['abc', 'bca']

// 使用for in 遍历数组 item拿到的是索引值 
for(const item in names) {
  console.log(item)
}

// 使用for of 遍历数组 拿的的就是挨个元素
for(const item of names) {
  console.log(item)
}

// 直接使用for of 遍历对象会报错 除非该对象符合可迭代协议
// for(const item of obj) {
//   console.log(item)
// }
