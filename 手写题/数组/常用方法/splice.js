const arr = [0, 1, 2, 3, 4, 5]

// const returnRes = arr.splice(0, 1, "111")
// const returnRes = arr.splice(1, 0, "0000")
// const returnRes = arr.splice(1, 0, "0000", "1213131")
// const returnRes = arr.splice(-2, 1)
const returnRes = arr.splice(2)
console.log(arr);//返回被删除元素组合成的数组
console.log(returnRes);
console.log(typeof returnRes);