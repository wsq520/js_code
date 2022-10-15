const map = new Map()
const obj1 = {
  name: "obj1",
  age: 19
}
const obj2 = {
  name: "obj2",
  age:18
}

const obj3 = "obj3"

map.set(obj1, "我是obj1")
map.set(obj2, "我是obj2")
map.set(obj3, "333")
console.log(map);

const map2 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2']
])
console.log(map2);

// js本身不能以对象作为key
const obj4 = { name: "obj4"}
const info = {
  [obj4]: "4444"
}
console.log(info);//{ '[object Object]': '4444' }

map2.forEach(item => {
  console.log(item);
})

map2.forEach((item, key) => {
  console.log(item, key);
})


