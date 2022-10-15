class Depend {
  constructor() {
    // this.reactiveFns = []
    // 不使用数组来收集函数 原因：如果在同一个响应式函数里面多次访问同一个属性 那么会收集到相同的函数到数组里
    // 采用Set数据类型 那么就解决重复添加同样的函数问题了
    this.reactiveFns = new Set()
  }

  // addDepend(reactiveFn) {
  //   this.reactiveFns.add(reactiveFn)
  // }

  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn)
    }
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
    // depend.addDepend(activeReactiveFn)
    // 不需要传参数来收集依赖
    depend.depend()

    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    const depend = getDepend(target, key)
    depend.notify()
  }
})


watchFn(function () {
  console.log(objProxy.name, '11111')
  console.log(objProxy.name, '22222')
})

objProxy.name = 'www'


