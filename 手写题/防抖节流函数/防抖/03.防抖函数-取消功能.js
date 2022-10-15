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

  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }
  return _debounce
}

