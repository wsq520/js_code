const name = 'wsq'

const obj = {
  // 实际上就是 name: name
  name,
  foo() {
    console.log('aaa')
  },
  // 可计算属性
  [name + '111']: 'qqqq'
}
console.log(obj)