const obj = {
  name: 'why',
  age: 18,
  friends: {
    name: 'kobe'
  },
  foods: ['apple', 'banana'],
  // 当对象里面有函数时 序列化转换不了函数 只会将其移除
  foo: function() {}
}

// 浅拷贝: 此时顶层属性之间不会相互影响 但是引用类型属性还是指向同一个对象
const info = { ...obj }
obj.age = 100
console.log(info.age)
obj.friends.name = 'hhh'
console.log(info.friends.name)

// 使用以下方式可以实现深拷贝
const str = JSON.stringify(obj)
const info2 = JSON.parse(str)
obj.friends.name = '123456'
console.log(info2.friends.name)

