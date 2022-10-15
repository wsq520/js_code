const obj = {
  name: 'wsq',
  friends: {
    name: 'hhh'
  },
  food: ['apple', 'banana']
}
// 1.直接转换
const str1 = JSON.stringify(obj)
console.log(str1);

// 2.指定哪些属性需要转换
const str2 = JSON.stringify(obj, ['name', 'food'])
console.log(str2);

// 3.传入回调函数
const str3 = JSON.stringify(obj, (key, value) => {
  console.log(key);
  console.log(value);
  // if(key === 'name') {
  //   return value + 1
  // }
  // return value
})