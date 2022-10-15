function foo() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove()
    }, 1000)
  })
}

await foo()
console.log('后续代码~')