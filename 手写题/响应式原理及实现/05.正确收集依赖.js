class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 定义一个全局保存函数
let activeReactiveFn = null
function watchFn(fn) {
  activeReactiveFn = fn
  /* 执行响应式函数 fn 因为该函数内部访问到对象的某个属性 所以会触发代理对象的get/set方法
     因此在代理对象的get/set方法中将该函数添加到depend里 */
  fn()
  activeReactiveFn = null
}

// 封装一个获取depend的函数
const targetMap = new WeakMap()
function getDepend(target, key) {
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    // 使用一个 targetMap 来将每个对象与其自己的 map 形成映射
    targetMap.set(target, map)
  }

  let depend = map.get(key)
  if (!depend) {
    // 对象中的每个属性有属于自己的depend
    depend = new Depend()
    // 使用对象自己的map将自己的每个属性与其对象的depend形成映射
    map.set(key, depend)
  }

  return depend
}

const obj = {
  name: 'ggg',
  age: 888
}

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    const depend = getDepend(target, key)
    depend.addDepend(activeReactiveFn)

    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    const depend = getDepend(target, key)
    depend.notify()
  }
})


watchFn(function () {
  console.log(objProxy.name, 'name响应式函数1执行')
})
watchFn(function () {
  console.log(objProxy.name, 'name响应式函数2执行')
})

watchFn(function () {
  console.log(objProxy.age, '响应式函数1执行')
})
watchFn(function () {
  console.log(objProxy.age, '响应式函数2执行')
})

console.log('---------------')

objProxy.name = 'www'


