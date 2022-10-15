class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }

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

// 封装一个函数：使得传入的普通对象具备响应式
function reactive(obj) {
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      get: function () {
        const depend = getDepend(obj, key)
        depend.depend()
        return value
      },
      set: function (newValue) {
        value = newValue
        const depend = getDepend(obj, key)
        depend.notify()
      }
    })
  })
  return obj
}

const obj = {
  name: 'ggg',
  age: 888
}

const objProxy = reactive(obj)


watchFn(function () {
  console.log(objProxy.name, '11111')
  console.log(objProxy.name, '22222')
})

objProxy.name = 'www'

const info = {
  name: 'info',
  age: 19
}

const infoProxy = reactive(info)
watchFn(() => {
  console.log(infoProxy.name, 'info响应式函数1')
})

infoProxy.name = 'info111'

// reactive函数返回的就是一个代理对象
const foo = reactive({
  name: 'foo',
  age: 100
})

watchFn(() => {
  console.log(foo.name, 'foo响应式函数1')
})

foo.name = 'foo111'


