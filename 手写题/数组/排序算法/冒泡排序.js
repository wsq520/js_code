const arr = [1, 3, 2, 6, 19, 4, 43, 9]

function bubbleSort(arr) {
  const len = arr.length
  let temp = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr));
