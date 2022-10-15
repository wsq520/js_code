const set1 = new Set()
console.log(set1);
set1.add(1)
set1.add([1,2,3])
console.log(set1);

const arr = [1,2,3,4,5,5]
const set2 = new Set(arr)
console.log(set2);
const arr1 = [...set2]
const arr2 = Array.from(set2)
console.log(arr1);
console.log(arr2);


set2.forEach(item => {
  console.log(item);
})