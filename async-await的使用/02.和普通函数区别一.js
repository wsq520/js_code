async function foo() {
  console.log('foo start');
  console.log('......');
  console.log('foo end');

  // 1.返回一个值
  // return '123'

  // 2， 返回一个thenable
  // return {
  //   then: function(resolve, reject) {
  //     resolve('12345')
  //   }
  // }

  // 3.返回一个Promise
  return new Promise((resolve, reject) => {
    resolve('11111')
  })
}

// 返回值是一个Promise
const promise = foo()

promise.then(res => {
  console.log(res)
})