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

const depend = new Depend()

function watchFn(fn) {
  depend.addDepend(fn)
}

// 封装一个获取depend的函数
const targetMap = new WeakMap()
function getDepend(target, key) {
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
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
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    const depend = getDepend(target, key)
    depend.notify()
  }
})

function watchFn(fn) {
  depend.addDepend(fn)
}

watchFn(function () {
  console.log('响应式函数1执行')
})

watchFn(function () {
  console.log('响应式函数2执行')
})

objProxy.name = '11'
objProxy.name = '2'
objProxy.name = 'hhh'
