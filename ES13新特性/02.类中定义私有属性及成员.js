class Person {
  #age = 19

  get age() {
    console.log('获取age')
    return this.#age
  }

  set age(newValue) {
    console.log('设置age')
    this.#age = newValue
  }
}

const p = new Person()

//console.log(p.#age) //报错： Private field '#age' must be declared in an enclosing class
console.log(p.age)

p.age = 100
console.log(p.age)