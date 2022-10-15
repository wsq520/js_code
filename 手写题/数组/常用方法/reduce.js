const num = [1, 2, 3, 4] 
const sum = num.reduce((preVal, currentVal) => {
  return preVal + currentVal
}, 0)
console.log(sum);