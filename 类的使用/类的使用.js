class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  say() {
    console.log("hhhh")
  }
  static Personfunc() {
    console.log("我是静态方法")
  }
}
let p = new Person('123', 19)
p.say()
Person.Personfunc()