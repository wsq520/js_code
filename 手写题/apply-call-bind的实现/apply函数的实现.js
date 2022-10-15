Function.prototype.myapply = function (thisArg, argArray) {
  argArray = argArray ? argArray : []
  thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window

  let fn = this
  thisArg.fn = fn

  const res = thisArg.fn(...argArray)
  delete thisArg.fn

  return res
}

function foo(num1, num2) {
  let res = num1 + num2
  console.log(this, res)
}

foo.myapply("aa", [10, 90])

