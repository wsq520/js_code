// leading控制是否首次输入会触发函数
// trailing控制停止输入后是否触发函数
function throttle(fn, interval, options = { leading: true, trailing: false }) {
  const { leading, trailing } = options
  let lastTime = 0

  const _throttle = function () {
    const nowTime = new Date().getTime()

    // lastTime在刚开始输入时为0
    // 让 lastTime和 nowTime相等的话 那么剩余时间就刚好是自定义的时间间隔 所以首次输入不会触发函数
    if (lastTime === 0 && leading === false) lastTime = nowTime

    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      fn()
      lastTime = nowTime
    }
  }

  return _throttle
}