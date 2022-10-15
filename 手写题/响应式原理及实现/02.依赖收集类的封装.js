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

watchFn(function() {
  console.log('响应式函数1执行')
})

watchFn(function() {
  console.log('响应式函数2执行')
})

depend.notify()