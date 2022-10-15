// leading控制是否首次输入会触发函数
// trailing控制停止输入后是否触发函数
function throttle(fn, interval, options = { leading: true, trailing: false }) {
  const { leading, trailing } = options
  let lastTime = 0
  let timer = null

  const _throttle = function (...args) {
    const nowTime = new Date().getTime()

    // lastTime在刚开始输入时为0
    // 让 lastTime和 nowTime相等的话 那么剩余时间就刚好是自定义的时间间隔 所以首次输入不会触发函数
    if (!lastTime && !leading) lastTime = nowTime

    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }

      fn.apply(this, args)
      lastTime = nowTime
      return
    }

    if (trailing && !timer) {
      timer = setTimeout(() => {
        timer = null
        lastTime = !leading ? 0 : new Date().getTime()
        fn.apply(this, args)
      }, remainTime)
    }
  }

  // 取消功能
  _throttle.cancel = function () {
    if (timer) {
      clearTimeout(timer)
      timer = null
      lastTime = 0
    }
  }

  return _throttle
}