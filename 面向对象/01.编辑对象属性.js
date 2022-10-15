let obj = {
  name: 'hhh'
}

function getPro() {
  console.log('获取某个值')
}

function setPro() {
  console.log('设置某个值')
}

Object.defineProperty(obj, 'age', {
  value: 18,
  // 设置可以枚举，不然打印看不到该属性(该属性默认是false)
  enumerable: true,
  // writable: true,
  configurable: true
})

console.log(obj)

Object.defineProperty(obj, 'address', {
  enumerable: true,
  configurable: true,
  get: function () {
    return this._address
  },
  set: function (value) {
    this._address = value
  }
})

console.log(obj)
console.log(obj.address)

Object.defineProperties(obj, {
  firstName: {
    enumerable: true,
    value: 'wu'
  },
  lastName: {
    // 如果已经设置了get 或者 set 不能设置 value或者 writable
    // value: '别设置我',
    enumerable: true,
    set: function () {
      console.log('设置lastName')
    },
    // 简写方式 实际上就是get: function() {....}
    get lastName() {
      console.log('获取lastName')
    }
  }
})

console.log(obj)