const obj = {
  name: 'hhh',
  age: 10
}

// 给对象 obj 创建一个代理对象
const objProxy = new Proxy(obj, {
  get: function (target, key) {
    console.log(`监听到对象属性${key}被获取`, target)
    return target[key]
  },
  set: function (target, key, newValue) {
    console.log(`监听到对象属性${key}被设置`, target)
    target[key] = newValue
  },
  // 监听in的捕获器
  has: function(target, key) {
    console.log(`监听到对象属性${key}的in操作`, target)
    return key in target
  },
  // 监听delete的捕获器
  deleteProperty: function(target, key) {
    console.log(`监听到对象属性${key}的delete操作`, target)
    delete target[key]
  }
})

// in 操作符
// console.log("age" in objProxy)

// delete操作符
delete objProxy.name
