// Symbol可以作为key也可以作为value
const s1 = Symbol()
const s2 = Symbol()

const obj = {
  name: '123',
  foods: ['abc', 'asd'],
  foo: function() {
    console.log('foo')
  },
  [s1]: '12345',
  s2: s2
}

// JSON序列化只能复制一部分属性 对于函数、Symbol、Set、Map这些类型数据只能移除
const info = JSON.parse(JSON.stringify(obj))
console.log(info)
// obj 和 info不是同一个对象 
console.log(obj === info)