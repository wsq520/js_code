class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }

  // 收集依赖的方法
  depend() {
    if (reactiveFn) {
      this.reactiveFns.add(reactiveFn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

let reactiveFn = null
// 添加响应式函数到depend里面
function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}

const weakmap = new WeakMap()
function getDepend(target, key) {
  let map = weakmap.get(target)
  if (!map) {
    map = new Map()
    weakmap.set(target, map)
  }

  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }

  return depend
}

function Toreactive(obj) {
  return new Proxy(obj, {
    get: function (target, key, receiver) {
      const depend = getDepend(target, key)
      depend.depend()
      return Reflect.get(target, key, receiver)
    },
    set: function (target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver)
      const depend = getDepend(target, key)
      depend.notify()
    }
  })
}

const obj = {
  name: 'obj',
  age: 19
}

const objProxy = Toreactive(obj)

watchFn(() => {
  console.log(objProxy.name, 'Name响应式函数1')
})
watchFn(() => {
  console.log(objProxy.name, 'Name响应式函数2')
})

watchFn(() => {
  console.log(objProxy.age, 'age响应式函数1')
})
watchFn(() => {
  console.log(objProxy.age, 'age响应式函数2')
})

objProxy.name = 'ppp'
console.log('--------')
objProxy.age = 999