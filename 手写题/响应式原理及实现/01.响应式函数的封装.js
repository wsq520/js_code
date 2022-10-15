let reactiveFns = []

function watchFn(fn) {
  reactiveFns.push(fn)
}

const obj = {
  name: 'www',
  age: 99
}

watchFn(function() {
  console.log('响应式函数1')
})

watchFn(function() {
  console.log('响应式函数2')
})

// 将响应式函数存储到一个数组里面 遍历执行它们即可
reactiveFns.forEach(fn => {
  fn()
})