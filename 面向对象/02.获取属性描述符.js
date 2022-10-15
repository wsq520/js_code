const obj = {
  name: 'wsq',
  age: 20
}

// 获取某个属性的描述符
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))

console.log('----------')

// 获取一个对象所有属性的描述符
console.log(Object.getOwnPropertyDescriptors(obj))