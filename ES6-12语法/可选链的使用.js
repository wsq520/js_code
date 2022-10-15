const obj = {
  name: "obj",
  gril: {
    name: "玩偶"
  }
}

console.log(obj?.name);
console.log(obj?.age?.name);//undefined
// console.log(obj?.age.name);//报错