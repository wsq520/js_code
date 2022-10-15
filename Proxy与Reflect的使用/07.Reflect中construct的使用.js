function Student(name, age) {
  this.name = name
  this.age = age
}

function Teacher() {

}

// 要求：执行Student函数 但是创建出来的对象是Teacher类型对象
const teacher = Reflect.construct(Student, ["sss", 19], Teacher)
console.log(teacher)