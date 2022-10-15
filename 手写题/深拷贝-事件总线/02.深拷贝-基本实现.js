function isObject(value) {
  if (value === null) return false
  const valueType = typeof value
  return (valueType === 'object') || (valueType === 'function')
}

function deepClone(originValue) {
  if (!isObject(originValue)) {
    return originValue
  }

  const newObj = {}

  for (const key in originValue) {
    newObj[key] = deepClone(originValue[key])
  }

  return newObj
}

const obj = {
  name: '123',
  frinends: {
    name: 'kobe',
    city: {
      cname: '中国'
    }
  }
}

// 本版本还没办法正确拷贝数组属性
const newObj = deepClone(obj)
console.log(newObj)