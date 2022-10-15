const obj = {
  name: '11',
  age: 99
}

const objProxy = new Proxy(obj, {
  get: function(target, key) {
    return Reflect.get(target, key)
  },
  set: function(target, key, newValue) {
    // Reflect.set 方法返回一个布尔值 可以知道设置属性值是否成功
    const res = Reflect.set(target, key, newValue)
    if(res) {
      console.log('设置成功')
    } else {
      console.log('设置失败')
    }
  }
})

objProxy.name = 'eee'
console.log(obj)
console.log(objProxy.name)