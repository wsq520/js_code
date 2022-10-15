function mixinRun(baseClass) {
  return class extends baseClass {
    running() {
      console.log("删库跑路")
    }
  }
}

function mixinEat(baseClass) {
  return class extends baseClass {
    eat() {
      console.log("吃东西");
    }
  }
}

class Person {

}

class newPerson extends mixinRun(mixinEat(Person)) {

}

var np = new newPerson()
np.running()
np.eat()