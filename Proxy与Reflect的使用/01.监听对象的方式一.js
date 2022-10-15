const obj = {
  name: 'www',
  age: 10
}

// Object.defineProperty(obj, 'name', {
//   get: function () {
//     console.log('获取age')
//   },
//   set: function () {
//     console.log('设置age')
//   }
// })

// obj.name = 'aaa'

Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, { 
    get: function () {
      console.log(`监听到属性${key}被获取`)
      return value
    },
    set: function(newValue) {
      value = newValue
      console.log(`监听到属性${key}被设置`)
    }
  })
})

console.log(Object.getOwnPropertyDescriptors(obj))
obj.name = '111'
obj.age = 99