function foo() {
  throw new Error('foo Error')
}

// 1.bar 函数不对foo抛出异常处理 那么就将异常再抛给test函数
function bar() {
  // foo()
  try {
    foo()
  } catch(err) {
    console.log('err:' + err.message)
  }
}

function test() {
  bar()
}

function demo() {
  test()
}

// 1. 不处理异常 那么异常会进一步抛出 那么直到最顶层的调用
//    如果最顶层也不做处理 那么程序直接终止 后续代码不会执行

// 2. 使用try catch对可能报错的代码进行捕获异常
demo()
console.log('后续代码继续运行~~~')