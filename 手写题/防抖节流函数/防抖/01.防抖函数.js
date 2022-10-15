function debounce(fn, delay) {
  console.log('我被触发了')
  let timer = null
  const _debounce = function(...args) {
    console.log('123')
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      // fn()

      // 1.给函数绑定真正的this(谁调用该函数谁就是this 在这里就是inputel)
      fn.apply(this, args)
    }, delay)
  }
  return _debounce
}