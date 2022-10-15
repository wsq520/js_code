class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  say() {
    console.log("hhhh")
  }
  static Personfunc() {
    console.log("我是Person静态方法")
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age)
  }
  static Personfunc() {
    super.Personfunc()
    console.log("学生静态方法")
  }
}

let stu = new Student("qwe", 80)
Student.Personfunc()