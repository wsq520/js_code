var name = ["123", "321", "129728972"]

var [item1, item2, item3, item4] = name
// console.log(item1, item2, item3, item4);

var obj = {
  name: "coder",
  age: 19
}

// 将obj的name属性赋值给newName 
var { name: newName} = obj
// console.log(newName);

var { add: address = "我是默认值"} = obj
// console.log(address);

const arr1 = [1,2,3]
const arr2 = [6,7,8]
const arr3 = [...arr1,...arr2]
console.log(arr3);
const arr4 = arr1.concat(arr2)
console.log(arr4);

const obj1 = {
  name:"coderwhy"
}

const obj2 = { name: "1123",...obj1}
console.log(obj2); 