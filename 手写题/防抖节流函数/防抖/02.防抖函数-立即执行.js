function debounce(fn, delay, immediate = false) {
  let timer = null
  // 判断是不是第一次输入
  let isInvoke = false
  const _debounce = function (...args) {
    if (timer) clearTimeout(timer)

    if (immediate && !isInvoke) {
      fn.apply(this, args)
      isInvoke = true
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
        isInvoke = false
      }, delay)
    }
  }
  return _debounce
}

// 这里实现功能就是首次输入字符时 立即执行函数发送请求