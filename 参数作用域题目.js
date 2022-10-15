var x = 0

// 当函数的参数有默认值时 会形成一个新的作用域 这个作用域用来保存参数的值
function foo(x, y = function() { x = 3; console.log(x)}) {
  console.log(x)
  var x = 2 
  // 调用函数 y 时修改的 x 是函数foo参数中的 x
  y()
  console.log(x)
}

foo()
console.log(x)