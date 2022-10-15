var obj = {
  name: 'obj',
  age: 19
}

function createObject1(o) {
  let newObj = {}
  Object.setPrototypeOf(newObj, o)
  return newObj
}

let info = new createObject1(obj)
console.log(info.__proto__)
console.log(info.prototype)//undefined

function createObject2(o) {
  function fn() {}
  fn.prototype = o
  const newObj = new fn()
  return newObj
}

let info2 = new createObject2(obj)
console.log(info2.__proto__)
console.log(info2.prototype)

let info3 = Object.create(obj)
console.log(info3.__proto__)
console.log(info3.prototype)

console.log(Function.prototype === Function.__proto__);

function foo() {

}

var foo = new foo()
console.log(foo)
