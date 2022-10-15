class MyEvent {
  constructor() {
    this.eventBus = {}
  }

  on(eventName, eventCallback, thisArgs) {
    let handlers = this.eventBus[eventName]
    if (!handlers) {
      handlers = []
      this.eventBus[eventName] = handlers
    }
    handlers.push({
      eventCallback,
      thisArgs
    })
  }

  off(eventName, eventCallback) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    const newHandlers = [...handlers]
    for (let i = 0; i < newHandlers.length; i++) {
      const hander = newHandlers[i]
      if (hander.eventCallback === eventCallback) {
        const index = handlers.indexOf(hander)
        handlers.splice(index, 1)
      }
    }
  }

  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    handlers.forEach(handler => {
      handler.eventCallback.apply(handler.thisArgs, payload)
    })
  }
}

const eventBus = new MyEvent()

eventBus.on('abc', function () {
  console.log('监听到abc1', this)
}, { name: 'wsq' })

const handleCallback = function () {
  console.log('监听到abc2', this)
}

eventBus.on('abc', handleCallback, { name: 'wsq' })

eventBus.emit('abc', 123)

// 移除监听
eventBus.off('abc', handleCallback)
eventBus.emit('abc', 123)