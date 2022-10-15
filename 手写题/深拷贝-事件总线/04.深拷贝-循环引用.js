// 判断当前拷贝的值(即键值对中的value)是不是一个对象
function isObject(value) {
  if (value === null) return false
  const valueType = typeof value
  return (valueType === 'object') || (valueType === 'function')
}

function deepClone(originValue, map = new WeakMap()) {
  // 判断Set类不要用typeof 因为返回的是object类型
  if (originValue instanceof Set) {
    return new Set([...originValue])
  }

  if (originValue instanceof Map) {
    return new Map([...originValue])
  }

  // 函数大家公用一个就行 函数的目的就是共用一套逻辑 不必要生成新的一个
  if (typeof originValue === 'function') {
    return originValue
  }

  if (typeof originValue === 'symbol') {
    return Symbol(originValue.description)
  }

  if (!isObject(originValue)) {
    return originValue
  }
  if (map.has(originValue)) {
    return map.get(originValue)
  }

  // 判断当前拷贝属性是数组还是对象
  const newObj = Array.isArray(originValue) ? [] : {}
  map.set(originValue, newObj)
  for (const key in originValue) {
    // 使用for...in 遍历对象时 这里的key拿到的就是键值对的key
    // 但是遍历数组时 key是索引值
    newObj[key] = deepClone(originValue[key], map)
  }

  // 对以Symbol作为 key的属性特殊处理
  const symbolKeys = Object.getOwnPropertySymbols(originValue)
  for (const sKey of symbolKeys) {
    newObj[sKey] = deepClone(originValue[sKey], map)
  }

  return newObj
}

let s1 = Symbol('aaa')
let s2 = Symbol('bbb')

const obj = {
  name: '123',
  frinends: {
    name: 'kobe',
    city: {
      cname: '中国'
    }
  },
  food: ['apple', 'xigua'],
  foo: function () {
    console.log('foo')
  },
  [s1]: "abc",
  s2: s2,
  set: new Set(['aaa', 'bbb']),
  map: new Map([['id', 'hhh'], ['tno', '2020']])
}

obj.info = obj

const newObj = deepClone(obj)
console.log(newObj)
console.log(newObj.info)
console.log(newObj.info.info)

// 使用 for(const key of obj)时 以Symbol作为key的Symbol是获取不到的