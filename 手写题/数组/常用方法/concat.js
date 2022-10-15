var arr1 = [1,2,3]
var arr2 = ["a", "b", "c"]
var arr3 = ["hhhhh"]

var test1 = arr1.concat(arr2)
console.log(test1);
console.log(arr1);
console.log(arr2);

var test2 = arr1.concat(arr2, arr3)
console.log(test2);