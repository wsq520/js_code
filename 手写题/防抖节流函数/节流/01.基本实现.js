function throttle(fn, interval) {
  let lastTime = 0
  const _throttle = function() {
    // nowTime是指当前时间 lastTime是指输入停止的时间
    // remainTime指距离发送请求的剩余时间
    // interVal是自定义的时间间隔
    const nowTime = new Date().getTime()
    const remainTime = interval - (nowTime - lastTime)

    if(remainTime <=0 ) {
      fn()
      lastTime = nowTime
    }
  }

  return _throttle
}