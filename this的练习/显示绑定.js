function func() {
  console.log(this)
}

// func.call('我是call')
// func.apply('我是apply')

function sum(num1, num2) {
  console.log(num1 + num2, this);
}

sum.call('call', 20, 20)
sum.apply('apply', [20, 20])
sum(10, 20)

func.bind('我是bind')()
var temp = func.bind('我是temp中的bind!')
temp()