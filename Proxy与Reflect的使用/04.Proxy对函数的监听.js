function foo() {

}

const fooProxy = new Proxy(foo, {
  // 参数thisArg就是调用函数的this
  apply: function (target, thisArg, argArray) {
    console.log('函数进行了apply调用')
    console.log(thisArg, argArray)
    return target.apply(thisArg, argArray)
  },
  // 监听new操作的捕获器
  construct: function(target, argArray, newTarget) {
    console.log('监听到new操作')
    // console.log(target === newTarget)
    console.log(argArray)
    console.log(target)
    console.log(newTarget)
    return new target(...argArray)
  }
})

fooProxy.apply('aaa', ["abs", "jjj"])
new fooProxy()