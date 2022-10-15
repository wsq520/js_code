const obj = {
  name: 'jjj',
  age: 17
}

const ObjEntries = Object.entries(obj)

// 将一个对象中的键值对复制到一个新的对象上
const newObj = {}
for (const item of ObjEntries) {
  newObj[item[0]] = item[1]
}
console.log(newObj)

// ES10新增方法
const info = Object.fromEntries(ObjEntries)
console.log(info)