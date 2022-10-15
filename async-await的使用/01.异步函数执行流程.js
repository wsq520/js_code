// 添加async关键字 使得函数是一个异步函数
async function foo() {
  console.log('foo func');
  console.log('1');
  console.log('2');
  console.log('3');
}
console.log('start');
foo()
console.log('end');

// 默认情况下 异步函数和普通函数执行顺序没区别