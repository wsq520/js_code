const obj = {
  name: 'wsq',
  friends: {
    name: 'hhh'
  },
  food: ['apple', 'banana']
}

// 直接将obj传入 对象obj会被转化成字符串来存储的
// localStorage.setItem('obj', obj)

// 先将对象转换成json对象 
const objString = JSON.stringify(obj)
localStorage.setItem('obj', objString)

// 将json格式转换成对象
const ibfo = JSON.parse(objString)
console.log(ibfo);