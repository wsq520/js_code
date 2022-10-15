const obj = {
  name: 'wsq',
  age: 18
}

Object.preventExtensions(obj)
// preventExtensions方法会禁止给对象继续添加属性 
// 执行添加属性操作没报错 但是属性是添加无效的
obj.id = '2022'
console.log(obj)
console.log(Object.getOwnPropertyDescriptors(obj))

Object.seal(obj)

// 使得属性不可以修改
Object.freeze(obj)
obj.name = 'hhh'
console.log(obj)