function double(num) {
  return num * 2
}

function square(num) {
  return num ** 2
}

function composeFn(m, n) {
  return function(count) {
    return n(m(count))
  }
}

let fn = composeFn(double, square)
console.log(fn(10));