const obj = {
  _name: 'www',
  // 可以给对象添加get/set方法
  // receiver的作用：将对象obj中的get、set方法里面的this会被改成onjProxy
  get name() {
    return this._name
  },
  set name(newValue) {
    this._name = newValue
  }
}

const objProxy = new Proxy(obj, {
  // 参数receiver 实际上就是创建出来的代理对象
  get: function (target, key, receiver) {
    console.log(objProxy === receiver)
    console.log('get方法被触发---', key)
    // Reflect.get/set方法中传入的receiver不是必须是代理对象get/set方法接收的receiver 也可以传入其他对象
    // 该参数只是改变原来对象的this而已
    return Reflect.get(target, key, receiver)
    // return Reflect.get(target, key, {_name: 'hhhhhhh'})
  },
  set: function (target, key, newValue, receiver) {
    console.log('set方法被触发---', key)
    Reflect.set(target, key, newValue, receiver)
  }
})

console.log(objProxy.name)
objProxy.name = 'kkk'