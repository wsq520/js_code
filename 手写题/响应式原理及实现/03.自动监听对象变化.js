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
