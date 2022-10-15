const obj = {
  name: 'eee',
  age: 19
}

console.log(Object.keys(obj))
console.log(Object.values(obj))

console.log(Object.entries(obj))

const ObjEntries = Object.entries(obj)
ObjEntries.forEach(item => {
  console.log('key:' + item[0], 'value:' + item[1])
  // console.log()
})

const arr = ['nnn', 'hhhh']
// 键值对中 数组元素的索引值作为 key
console.log(Object.entries(arr))