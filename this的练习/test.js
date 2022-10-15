function func(){
  console.log(this)
}

var obj = {
  name:'javascript',
  func:func
}

func()
obj.func()
func.call('abc')
func.bind('hhh')()
func.apply(func)