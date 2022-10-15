const obj = {
  name: 'hhh',
  age: 10
}

// 给对象 obj 创建一个代理对象
// 第一个参数是某对象 第二个参数是捕获器
const objProxy = new Proxy(obj, {
  // 获取值时的捕获器
  get: function (target, key) {
    console.log(`监听到对象属性${key}被获取`, target)
    return target[key]
  },
  // 设置值时的捕获器
  set: function (target, key, newValue) {
    console.log(`监听到对象属性${key}被设置`, target)
    target[key] = newValue
  }
})

// 可以通过代理对象获取原对象的属性
// console.log(objProxy.age)

// 通过代理对象修改原对象的属性
// objProxy.name = 'iiiii'
// console.log(obj)

objProxy.name = 'ppp'
console.log('age:' + objProxy.age)

console.log(obj.name)

objProxy.id = '2022'
console.log(obj)

