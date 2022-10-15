function func(){
  console.log(this)
}

var obj= {
  name:'javascript',
  func:func
}

obj.func()

var info = obj.func
info()