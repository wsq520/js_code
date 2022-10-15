const map = new Map()

map.set('name', 'wsq')
map.set('age', 18)
map.set('num', '2022')
console.log(map)

map.forEach((value, key) => {
  console.log(value, key)
})
console.log('------')

for(const item of map) {
  // item是一个数组 
  console.log(item)
  console.log('item[0]:' + item[0])
  console.log('item[1]:' + item[1])
}

console.log('--------')

for(const [key, value] of map) {
  console.log(key, value)
}