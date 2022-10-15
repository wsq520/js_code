function Person(name, age) {
  this.name = name
  this.age = age
  this.func = function log() {
    console.log(this)
  }
}

var p1 = new Person('我是p1', 18)
var p2 = new Person('我是P2', 19)
// console.log(p1.name, p1.age)
// console.log(p2.name, p2.age)
// p1.func()
// p2.func()

// function foo() {
//   console.log(this);
// }

// var f = new foo()

var obj = {
  foo:function() {
    // console.log(this);
    setTimeout(function() {
      console.log(this)
    }, 100)
  }
}

var fn = obj.foo
fn()
obj.foo()
